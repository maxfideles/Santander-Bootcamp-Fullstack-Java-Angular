package com.max.webapi.controller;

import com.max.webapi.model.User;
import com.max.webapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;
    @GetMapping()
    public List<User> getUsers(){
        return repository.findAll();
    }

    @GetMapping("/{username}")
    public Stream<User> getOne(@PathVariable("username") String username){
        return repository.findByUserName(username);
    }

    @PostMapping()
    public void postUser(@RequestBody User user){
        repository.save(user);
    }
}
