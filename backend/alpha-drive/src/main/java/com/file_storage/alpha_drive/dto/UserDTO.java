package com.file_storage.alpha_drive.dto;

public class UserDTO {

    private String username;
    private String hashedPassword;
    private String email;
    private String avatarUri;
    private String firstName;
    private String lastName;
    private Boolean isActive;

    public UserDTO() {}

    public UserDTO(String username, String hashedPassword, String email) {
        this(username, hashedPassword, email, null, null, null, true);
    }

    public UserDTO(String username, String hashedPassword, String email, String avatarUri, String firstName, String lastName, Boolean isActive) {
        this.username = username;
        this.hashedPassword = hashedPassword;
        this.email = email;
        this.avatarUri = avatarUri;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatarUri() { return avatarUri; }

    public void setAvatarUri(String avatarUri) { this.avatarUri = avatarUri; }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public Boolean getActive() { return isActive; }

    public void setActive(Boolean active) { isActive = active; }
}
