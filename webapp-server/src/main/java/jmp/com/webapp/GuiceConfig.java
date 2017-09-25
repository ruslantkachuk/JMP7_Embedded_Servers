package jmp.com.webapp;

import com.google.inject.servlet.ServletModule;
import jmp.com.auth.api.AuthResource;
import jmp.com.logging.LoggingFilter;

public class GuiceConfig extends ServletModule {
    @Override
    protected void configureServlets() {
        filter("/*").through(LoggingFilter.class);
        bind(AuthResource.class);
    }
}
