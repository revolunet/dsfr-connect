import fs from 'fs-extra';
import handlebars from 'handlebars';

const framework = 'bootstrap-v5';

// function download/build/run

async function main() {
  const srcFolderPath = 'src';
  const templateFilePath = 'template.hbs';
  const outputFilePath = 'output.txt';

  try {
    const files = await fs.readdir(srcFolderPath);

    const fileContents = await Promise.all(
      files.map(async (fileName) => {
        const filePath = `${srcFolderPath}/${fileName}`;
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return { fileName, fileContent };
      })
    );

    const templateContent = await fs.readFile(templateFilePath, 'utf-8');
    const template = handlebars.compile(templateContent);

    const outputContent = template({ files: fileContents });

    await fs.writeFile(outputFilePath, outputContent);

    console.log('successful operation');
  } catch (error) {
    console.error('an error has occured:', error);
  }
}

main();
