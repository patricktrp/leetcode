package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;

public interface CodeExecutionService {
    void executeCode(ProgrammingLanguage programmingLanguage, String code);
}
