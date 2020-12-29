import { ButtonExtension } from '@atlassian/clientside-extensions';
import * as formatter from 'wrm/i18n';

/**
 * @clientside-extension
 * @extension-point bitbucket.ui.pullrequest.diff.toolbar
 */
export default ButtonExtension.factory((pluginApi, context) => {
    return {
        hidden: !context.change.path.endsWith('.bpmn'),
        label: formatter.I18n.getText('ru.domclick.bitbucket.bpmn-diff-button.label'),
        onAction: () => {
            window.open(`${AJS.contextPath()}/plugins/servlet/bpmn-diff?project=${context.project.key}&repository=${context.repository.slug}&path=${context.change.path}&fromRef=${context.pullRequest.fromRef.latestCommit}&toRef=${context.pullRequest.toRef.latestCommit}`, '_blank');
        },
    };
});
