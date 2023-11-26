package dev.treppmann.leetcode.api.dto;

import dev.treppmann.leetcode.api.entity.Difficulty;

public record ProblemOverviewDTO (
        String problemId,
        String problemName,
        Difficulty difficulty
) {
}
