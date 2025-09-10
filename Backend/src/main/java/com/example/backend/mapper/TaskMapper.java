package com.example.backend.mapper;


import com.example.backend.Dto.TaskRequest;
import com.example.backend.Dto.TaskResponse;
import com.example.backend.entities.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    @Mapping(source = "userId", target = "user.id")
    Task toEntity(TaskRequest request);

    @Mapping(source = "user.id", target = "userId")
    TaskResponse toResponse(Task task);
}
