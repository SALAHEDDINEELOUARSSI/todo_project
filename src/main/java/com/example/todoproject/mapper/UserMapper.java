package com.example.todoproject.mapper;


import com.example.todoproject.Dto.UserRequest;
import com.example.todoproject.Dto.UserResponse;
import com.example.todoproject.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserRequest request);
    UserResponse toResponse(User user);
}
