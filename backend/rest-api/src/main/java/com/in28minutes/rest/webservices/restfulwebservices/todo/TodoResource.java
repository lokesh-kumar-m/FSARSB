package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResource {

    private TodoService todoService;

    public TodoResource(TodoService todoService) {
        this.todoService=todoService;
    }

    @GetMapping(path="/list")
    public List<Todo> getAll(){
        return todoService.findAllUser();
    }

    @GetMapping(path="/users/{username}/list")
    public List<Todo> getUserTodods(@PathVariable String username){
        return todoService.findByUsername(username);
    }
    
    @GetMapping(path="/users/{username}/list/{id}")
    public Todo getListById(@PathVariable String username, @PathVariable int id){
        return todoService.findById(id);
    }

    @DeleteMapping("/users/{username}/list/{id}")
    public ResponseEntity<Void> deletebyId(@PathVariable String username, @PathVariable int id){
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/users/{username}/list/{id}")
    public Todo updateList(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
        todoService.updateTodo(todo);
        return todo;
    }
    @PostMapping("/users/{username}")
    public Todo addList(@PathVariable String username, @RequestBody Todo todo){
        Todo created=todoService.addTodo(username,todo.getDescription(),todo.getTargetDate(),todo.isDone());
        return created;
    }
}
