package dev.treppmann.leetcode.api.dto;

import dev.treppmann.leetcode.api.entity.Category;
import dev.treppmann.leetcode.api.entity.Difficulty;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(name = "ProblemOverview")
public record ProblemOverviewDTO (
        String problemId,
        String problemName,
        Difficulty difficulty,
        List<Category> categories
) {
}
