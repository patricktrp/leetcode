package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userPreferences")
@Data
public class UserPreferences {
    private String userId;
    private String editorFontSize;
}
