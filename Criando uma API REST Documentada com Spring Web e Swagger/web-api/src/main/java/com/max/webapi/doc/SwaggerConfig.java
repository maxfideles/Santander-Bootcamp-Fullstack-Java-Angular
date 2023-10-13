package com.max.webapi.doc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Arrays;
import java.util.HashSet;

@Configuration
public class SwaggerConfig {

    private Contact contact(){
        return  new Contact(
                "Max",
                "https://maxfideles.github.io/maxi/",
                "maxfideles24@gmail.com"
        );
    }

    private ApiInfoBuilder apiInfo(){

        ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();

        apiInfoBuilder.title("User Details API");
        apiInfoBuilder.description("API used to manage the user in the system.");
        apiInfoBuilder.version("1");
        apiInfoBuilder.termsOfServiceUrl("License - Open Source");
        apiInfoBuilder.contact(this.contact());

        return apiInfoBuilder;
    }

    @Bean
    public Docket apiDetails(){
        Docket docket = new Docket(DocumentationType.SWAGGER_2);

        docket
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.max.webapi.controller"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(this.apiInfo().build())
                .consumes(new HashSet<String>(Arrays.asList("application/json")))
                .produces(new HashSet<String>(Arrays.asList("application/json")));

        return docket;
    }

}
