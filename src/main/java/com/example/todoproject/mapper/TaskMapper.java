package com.example.todoproject.mapper;


import com.example.todoproject.Dto.TaskRequest;
import com.example.todoproject.Dto.TaskResponse;
import com.example.todoproject.entities.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    @Mapping(source = "userId", target = "user.id")
    Task toEntity(TaskRequest request);

    @Mapping(source = "user.id", target = "userId")
    TaskResponse toResponse(Task task);
}
