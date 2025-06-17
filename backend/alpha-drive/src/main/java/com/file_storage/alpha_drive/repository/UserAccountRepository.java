package com.file_storage.alpha_drive.repository;

import com.file_storage.alpha_drive.model.User;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmailAndHashedPassword(String email, String hashedPassword);
    Optional<User> findByEmail(String email);
}
