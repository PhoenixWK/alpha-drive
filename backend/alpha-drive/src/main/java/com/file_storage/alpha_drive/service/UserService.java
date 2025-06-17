package com.file_storage.alpha_drive.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.file_storage.alpha_drive.dto.UserDTO;
import com.file_storage.alpha_drive.model.User;
import com.file_storage.alpha_drive.repository.UserAccountRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    private UserAccountRepository userAccountRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User findUserByEmailAndHashedPassword(String email, String rawPassword) {
        User user = userAccountRepository.findByEmail(email).orElse(null);
        if (user != null && user.getHashedPassword() != null && 
            passwordEncoder.matches(rawPassword, user.getHashedPassword())) {
            return user;
        }
        return null;
    }

    @Transactional
    public User saveUserByEmailAndHashedPassword(UserDTO userDTO) {
        return userAccountRepository.save(
            new User(
                userDTO.getUsername(),
                userDTO.getHashedPassword(),
                userDTO.getEmail()
            )
        );
    }
}