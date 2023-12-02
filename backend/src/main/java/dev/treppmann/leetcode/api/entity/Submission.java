package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "submissions")
@Data
public class Submission {
    @Id
    private String submissionId;
    private String userId;
    private String problemId;
    private ProgrammingLanguage programmingLanguage;
    private LocalDateTime submissionDate;
    private String code;
}
