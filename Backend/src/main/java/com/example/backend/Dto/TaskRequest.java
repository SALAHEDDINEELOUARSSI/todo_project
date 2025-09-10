package com.example.backend.Dto;


import lombok.*;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequest {
    private String title;
    private String description;
    private String status;
    private String priority;
    private LocalDate dueDate;
    private Long userId;
}
