package com.max.springwebsecurity.init;

import com.max.springwebsecurity.model.User;
import com.max.springwebsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

public class StartApplication implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Transactional
    @Override
    public void run(String... args) throws Exception {
        User user = userRepository.findByUserName("admin");
        if (user == null){
            user = new User();
            user.setName("ADMIN");
            user.setUsername("admin");
            user.setPassword("master123");
            user.getRoles().add("MANAGERS");
            userRepository.save(user);
        }
        user = userRepository.findByUserName("user");
        if(user ==null){
            user = new User();
            user.setName("USER");
            user.setUsername("user");
            user.setPassword("user123");
            user.getRoles().add("USERS");
            userRepository.save(user);
        }
    }
}
