import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import { glob } from 'glob';
import handlebars from 'handlebars';
import path from 'path';
import { downloadFile } from 'utils';

const framework = 'vuetify-v3';
const zipUrl = 'https://github.com/vuetifyjs/vuetify/archive/refs/tags/v3.3.1.zip';

export async function downloadAndExtract() {
  const zipDestination = path.resolve(__dirname, `../../tmp/${framework}.zip`);
  const extractionFolderPath = path.resolve(__dirname, `../../tmp/${framework}`);

  if (!(await fs.pathExists(zipDestination))) {
    await downloadFile(zipUrl, zipDestination);
  }

  const zip = new AdmZip(zipDestination);
  zip.extractAllTo(extractionFolderPath, true);
}

export async function build() {
  const entries = await glob(path.resolve(__dirname, `../../tmp/${framework}/vuetify-3.3.1/packages/docs/src/examples`) + '/**/*.vue');
  const folderToStripPath = path.resolve(__dirname, `../../tmp/${framework}/vuetify-3.3.1/packages/docs/src/examples`);
  const templateFilePath = path.resolve(__dirname, `./template.stories.ts`);
  const outputFolderPath = path.resolve(__dirname, `../../stories/frameworks/${framework}/`);

  try {
    const storyTemplateContent = await fs.readFile(templateFilePath, 'utf-8');
    const storyTemplate = handlebars.compile(storyTemplateContent);

    await Promise.all(
      entries.map(async (entry) => {
        // Subtract the root and remove the extension
        const storyName = path.relative(folderToStripPath, entry).replace(/\.[^/.]+$/, '');

        let exampleVue = await fs.readFile(entry, 'utf-8');

        // Format the story
        const storyContent = storyTemplate({
          framework: framework,
          component: storyName,
        });

        await fs.outputFile(path.join(outputFolderPath, storyName, 'index.vue'), exampleVue);
        await fs.outputFile(path.join(outputFolderPath, storyName, 'index.stories.ts'), storyContent);
      })
    );

    console.log('successful operation');
  } catch (error) {
    console.error('an error has occured:', error);

    throw error;
  }
}

export async function run() {
  // await downloadAndExtract();
  await build();
}
