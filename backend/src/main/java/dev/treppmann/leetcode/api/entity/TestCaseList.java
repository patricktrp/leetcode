package dev.treppmann.leetcode.api.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "testCases")
@Data
public class TestCaseList {
    @Id
    private String id;
    private String problemId;
    private List<TestCase> testCases;
    private Map<ProgrammingLanguage, String> functionNames;
}
