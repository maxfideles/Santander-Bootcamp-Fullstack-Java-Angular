package com.max.springwebsecurity.repository;

import com.max.springwebsecurity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,Integer> {
    @Query("SELECT e FROM USER e JOIN FETCH e.roles WHERE e.username = (:username)")
    public  User findByUserName(@Param("username") String username);
}
