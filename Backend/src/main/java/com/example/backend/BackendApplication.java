package com.example.backend;

import com.example.backend.Repository.TaskRepository;
import com.example.backend.Repository.UserRepository;
import com.example.backend.entities.Role;
import com.example.backend.entities.Task;
import com.example.backend.entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, TaskRepository taskRepository) {
        return args -> {
            User admin = User.builder()
                    .name("Admin User")
                    .email("admin@example.com")
                    .password("admin123") //
                    .phone("0600000000")
                    .role(Role.ADMIN)
                    .build();

            userRepository.save(admin);

            User user = User.builder()
                    .name("Normal User")
                    .email("user@example.com")
                    .password("user123")
                    .phone("0611111111")
                    .role(Role.USER)
                    .build();

            userRepository.save(user);

            Task task1 = Task.builder()
                    .title("Apprendre Spring Boot")
                    .description("Suivre un tutoriel complet sur Spring Boot.")
                    .status("IN_PROGRESS")
                    .priority("HIGH")
                    .dueDate(LocalDate.now().plusDays(7))
                    .user(user)
                    .build();

            Task task2 = Task.builder()
                    .title("Faire les courses")
                    .description("Acheter du lait, du pain et des fruits.")
                    .status("TODO")
                    .priority("MEDIUM")
                    .dueDate(LocalDate.now().plusDays(2))
                    .user(user)
                    .build();

            taskRepository.saveAll(List.of(task1, task2));

        };
    }
}
