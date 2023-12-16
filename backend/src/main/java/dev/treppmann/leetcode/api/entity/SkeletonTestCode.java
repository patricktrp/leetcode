package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "skeletonTestCode")
@Data
public class SkeletonTestCode {
    @Id
    private String id;
    private ProgrammingLanguage programmingLanguage;
    private String skeletonCode;
}
