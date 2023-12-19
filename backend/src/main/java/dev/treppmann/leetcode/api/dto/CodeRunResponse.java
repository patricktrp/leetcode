package dev.treppmann.leetcode.api.dto;

import java.util.List;

public record CodeRunResponse(
        int totalTestCases,
        int passedTestCases,
        List<TestResult> testResults
) { }
