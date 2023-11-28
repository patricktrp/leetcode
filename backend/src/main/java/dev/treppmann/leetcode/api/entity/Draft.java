package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "drafts")
@Data
public class Draft {
    @Id
    private String draftId;
    private String userId;
    private String problemId;
    private DraftNumber draftNumber;
    private ProgrammingLanguage programmingLanguage;
    private String code;

    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;
}
