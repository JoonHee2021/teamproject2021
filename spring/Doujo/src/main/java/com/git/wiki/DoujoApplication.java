package com.git.wiki;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class DoujoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoujoApplication.class, args);
	}

}
