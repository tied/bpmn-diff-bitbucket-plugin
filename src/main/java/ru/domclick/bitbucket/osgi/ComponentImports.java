package ru.domclick.bitbucket.osgi;

import com.atlassian.bitbucket.auth.AuthenticationContext;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.sal.api.message.I18nResolver;
import com.atlassian.soy.renderer.SoyTemplateRenderer;
import com.atlassian.templaterenderer.TemplateRenderer;

/**
 * This class is never instantiated, it serves only to cause the necessary OSGi services to be imported as Spring proxy beans.
 */
@SuppressWarnings("unused")
final class ComponentImports {

    // Needed by ExtensionPageServlet to translate the title of the `web-page` plugin module
    @ComponentImport
    private final I18nResolver i18nResolver;

    // Needed by ExtensionPageServlet to render the Soy template of the `web-page` plugin module
    @ComponentImport
    private final SoyTemplateRenderer soyTemplateRenderer;

    @ComponentImport
    private final TemplateRenderer templateRenderer;

    @ComponentImport
    private final AuthenticationContext authenticationContext;

    private ComponentImports() {
        throw new UnsupportedOperationException("Not for instantiation");
    }
}