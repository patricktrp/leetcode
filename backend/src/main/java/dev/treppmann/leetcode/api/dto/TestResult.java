package dev.treppmann.leetcode.api.dto;

import java.util.List;

public record TestResult(
        List<Object> input,
        Object expectedOutput,
        Object actualOutput,
        String rawOutput,
        boolean passed
) {
}
