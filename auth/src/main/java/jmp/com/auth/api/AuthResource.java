package jmp.com.auth.api;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jmp.com.auth.models.LoginParams;

/**
 * Resource for logging into the web app.
 */
@Singleton
@Path("/auth")
public class AuthResource {
    private static final Logger log = LoggerFactory.getLogger(AuthResource.class);

    /**
     * Simple method that just logs and returns the input. The thing to show here is that we are converting the input
     * to our own custom object, LoginParams using Jackson
     * @param params Login parameters
     * @return
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/login")
    public String login(LoginParams params) {
        log.debug("Username: {}, Password: {}", params.getEmail(), params.getPassword());
        return String.format("Got creds - EMAIL: %s, PASSWORD: %s", params.getEmail(), params.getPassword());
    }
}
