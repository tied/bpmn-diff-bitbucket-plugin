import { ButtonExtension } from '@atlassian/clientside-extensions';
import * as formatter from 'wrm/i18n';

/**
 * @clientside-extension
 * @extension-point bitbucket.ui.pullrequest.diff.toolbar
 */
export default ButtonExtension.factory((pluginApi, context) => {
    return {
        label: 'My Button',
        onAction: () => {
            alert('!!!!');
        },
    };
});
