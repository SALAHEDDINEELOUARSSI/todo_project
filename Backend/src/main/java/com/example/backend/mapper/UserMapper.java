package com.example.backend.mapper;


import com.example.backend.Dto.UserRequest;
import com.example.backend.Dto.UserResponse;
import com.example.backend.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserRequest request);
    UserResponse toResponse(User user);
}
