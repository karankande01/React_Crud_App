package com.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.crud.model")
@EnableJpaRepositories("com.crud.repository")
@ComponentScan( basePackages = {"com.crud.service","com.crud.controller"})
public class ReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactApplication.class, args);
	}

}
