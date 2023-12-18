package dev.treppmann.leetcode.api.dto;

public record CodeRunResponse(
        String rawOutput,
        boolean passedAll
) { }
