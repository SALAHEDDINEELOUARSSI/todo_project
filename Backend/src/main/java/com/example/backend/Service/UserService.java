package com.example.backend.Service;


import com.example.backend.Dto.UserRequest;
import com.example.backend.Dto.UserResponse;
import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest request);
    List<UserResponse> getAllUsers();
    UserResponse getUserById(Long id);
    UserResponse updateUser(Long id, UserRequest request);
    void deleteUser(Long id);
}
