package com.max.webapi.repository;

import com.max.webapi.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Repository
public class UserRepository {

    private List<User> users;

    public UserRepository(){
        users = new ArrayList<>();
        users.add(new User("max","123"));
        users.add(new User("maria","321"));
    }

    public List<User> findAll(){

        System.out.println("Getting all users");
        return users;
    };

    public Stream<User> findByUserName(String username){
        System.out.println("Getting the user: " +username);
        Stream<User> user = users.stream()
                .filter(user1 -> user1.getLogin().equals(username));
        return user;
    }

    public void save(User user){
        System.out.println("Saving the user: " +user.getLogin());
        users.add(user);
    }

}
