package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "problems")
@Data
public class Problem {
    @Id
    private String problemId;
    private String problemName;
    private Difficulty difficulty;
    private List<String> description;
    private List<String> hints;
    private String sampleInput;
    private String sampleOutput;
    private String optimalComplexity;
    private Map<ProgrammingLanguage, String> placeHolderCode;
    private List<Category> categories;
}
