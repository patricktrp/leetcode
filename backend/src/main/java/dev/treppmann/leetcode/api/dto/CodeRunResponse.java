package dev.treppmann.leetcode.api.dto;

public record CodeRunResponse(
        String rawOutput,
        int testCases,
        int passed,
        boolean passedAll

) {
}
