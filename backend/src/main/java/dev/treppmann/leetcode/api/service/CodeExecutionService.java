package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;

public interface CodeExecutionService {
    CodeRunResponse executeCode(ProgrammingLanguage programmingLanguage, String code, String jsonTestCases);
}
