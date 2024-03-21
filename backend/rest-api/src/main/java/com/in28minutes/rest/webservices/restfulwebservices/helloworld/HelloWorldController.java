package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class HelloWorldController {
	
	@GetMapping(path="/basicauth")
	public String basicAuthentication(){
		return "Grand Suckses";
	}
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hej varshgod"; 
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello-World, %s", name)); 
	}	
}
