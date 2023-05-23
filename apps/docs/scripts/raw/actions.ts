import axios from 'axios';
import fs from 'fs-extra';
import handlebars from 'handlebars';
import { JSDOM } from 'jsdom';
import path from 'path';
import urlParse from 'url-parse';

const framework = 'raw';

export async function downloadAndExtract() {
  async function getPageHTML(url: string): Promise<string> {
    const response = await axios.get(url);
    return response.data;
  }

  async function extractLinksFromHTML(html: string, baseUrl: string): Promise<string[]> {
    const dom = new JSDOM(html);
    const links: string[] = [];

    dom.window.document.querySelectorAll('a').forEach((element, index) => {
      // Make sure to add the baseUrl if relative link
      // const href = $(element).attr('href');
      const href = element.getAttribute('href');
      if (href) {
        const parsedUrl = urlParse(href, baseUrl);

        let absoluteUrl: string;
        if (parsedUrl.protocol && parsedUrl.hostname) {
          absoluteUrl = parsedUrl.toString();
        } else {
          absoluteUrl = urlParse(href, baseUrl).href;
        }

        links.push(absoluteUrl);
      }
    });

    return links;
  }

  async function scrapeURLs(urls: string[]): Promise<string[]> {
    for (const url of urls) {
      const html = await getPageHTML(url);

      const dom = new JSDOM(html);
      dom.window.document.querySelectorAll('code.language-html').forEach((element, index) => {
        console.log(element);
      });
    }

    return [];
  }

  async function scrapeWebsite() {
    const mainPageURL = new URL('https://www.systeme-de-design.gouv.fr/elements-d-interface');

    // const mainPageHTML = await getPageHTML(mainPageURL.toString());
    // const links = await extractLinksFromHTML(mainPageHTML, mainPageURL.origin);

    // const filteredURLs = links.filter(
    //   (link) =>
    //     link.includes('/elements-d-interface/modeles/') ||
    //     link.includes('/elements-d-interface/blocs-fonctionnels/') ||
    //     link.includes('/elements-d-interface/composants/')
    // );

    // const htmlContents = await scrapeURLs(filteredURLs);
    const htmlContents = await scrapeURLs([
      'https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux',
    ]);
  }

  await scrapeWebsite();

  // const zipDestination = path.resolve(__dirname, `../../tmp/${framework}.zip`);
  // const extractionFolderPath = path.resolve(__dirname, `../../tmp/${framework}`);

  // if (!(await fs.pathExists(zipDestination))) {
  //   await downloadFile(zipUrl, zipDestination);
  // }

  // const zip = new AdmZip(zipDestination);
  // zip.extractAllTo(extractionFolderPath, true);
}

export async function build() {
  const srcFolderPath = path.resolve(__dirname, `../../tmp/${framework}/bootstrap-5.3.0-alpha3/site/content/docs/5.3/examples`);
  const templateFilePath = path.resolve(__dirname, `./template.stories.ts`);
  const outputFolderPath = path.resolve(__dirname, `../../stories/frameworks/${framework}/`);

  try {
    const entries = (await fs.readdir(srcFolderPath, { withFileTypes: true })).filter((entry) => !!entry);

    const storyTemplateContent = await fs.readFile(templateFilePath, 'utf-8');
    const storyTemplate = handlebars.compile(storyTemplateContent);

    await Promise.all(
      entries.map(async (entry) => {
        // Components are in directory, use it as the name
        if (entry.isDirectory()) {
          const componentName = entry.name;

          const filePath = path.join(srcFolderPath, `${entry.name}/index.html`);
          let componentHtml = await fs.readFile(filePath, 'utf-8');

          // Remove meta content at the top that is visible when rendering the story and escape needed quotes for the template
          componentHtml = componentHtml
            .replace(/---[\s\S]*?---/, '')
            .replace(/`/g, '\\`')
            .replace(/\{\{[\s\S]*?\}\}/g, '') // Remove all templating pleceholders of the Bootstrap documentation
            .trim();

          // Format the story
          const storyContent = storyTemplate({
            framework: framework,
            component: componentName,
            html: componentHtml,
          });

          await fs.outputFile(path.join(outputFolderPath, componentName, 'index.stories.ts'), storyContent);
        }
      })
    );

    console.log('successful operation');
  } catch (error) {
    console.error('an error has occured:', error);

    throw error;
  }
}

export async function run() {
  await downloadAndExtract();
  // await build();
}
