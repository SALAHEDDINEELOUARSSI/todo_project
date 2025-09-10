package com.example.backend.Service;


import com.example.backend.Dto.TaskRequest;
import com.example.backend.Dto.TaskResponse;
import java.util.List;

public interface TaskService {
    TaskResponse createTask(TaskRequest request);
    List<TaskResponse> getAllTasks();
    List<TaskResponse> getTasksByUser(Long userId);
    TaskResponse getTaskById(Long id);
    TaskResponse updateTask(Long id, TaskRequest request);
    void deleteTask(Long id);
}
