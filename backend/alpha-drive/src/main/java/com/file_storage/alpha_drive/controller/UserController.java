package com.file_storage.alpha_drive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.file_storage.alpha_drive.dto.UserDTO;
import com.file_storage.alpha_drive.model.User;
import com.file_storage.alpha_drive.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody UserDTO userDTO) {
        try {
            User user = userService.findUserByEmailAndHashedPassword(userDTO.getEmail(), userDTO.getHashedPassword());
            if (user == null) {
                return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
            return ResponseEntity.ok().body(user);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred during login", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
