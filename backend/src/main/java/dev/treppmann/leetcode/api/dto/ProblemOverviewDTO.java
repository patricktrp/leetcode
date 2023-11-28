package dev.treppmann.leetcode.api.dto;

import dev.treppmann.leetcode.api.entity.Category;
import dev.treppmann.leetcode.api.entity.Difficulty;

import java.util.List;

public record ProblemOverviewDTO (
        String problemId,
        String problemName,
        Difficulty difficulty,
        List<Category> categories
) {
}
