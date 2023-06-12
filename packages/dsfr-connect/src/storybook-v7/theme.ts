// From the `.storybook/main.ts` we are unable to easily import inline CSS/SCSS
// so we deal with a static CSS file
import { assetsBaseUrl } from '../common';

export function manageHeadFactory(path?: string) {
  return (head: string): string => {
    // We cannot rely on `assetsBaseUrl` since environment is not yet set up, we are a the
    // initialization of Storybook so we need to manage hardcoded values here too
    return `${head}
      <link rel="stylesheet" href="${path || `${assetsBaseUrl}storybook/index.css`}">
    `;
  };
}
