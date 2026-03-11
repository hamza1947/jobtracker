package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
@Data
@NoArgsConstructor
public class jobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String position;
    private String location;
    private String status;

    // Matches your payload: "2024-12-21T00:00:00.000Z"
    private OffsetDateTime applicationDate;

    private String jobLink;

    @Column(columnDefinition = "TEXT")
    private String notes;

}



