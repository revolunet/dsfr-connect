import fs from 'fs-extra';
import handlebars from 'handlebars';
import path from 'path';

const framework = 'bootstrap-v5';

// function download/build/run

async function main() {
  const srcFolderPath = path.resolve(__dirname, '../../tmp/bootstrap-main/site/content/docs/5.3/examples');
  const templateFilePath = path.resolve(__dirname, './template.stories.ts');
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
  }
}

main();
