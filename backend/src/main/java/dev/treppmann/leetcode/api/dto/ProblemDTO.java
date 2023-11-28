package dev.treppmann.leetcode.api.dto;

import dev.treppmann.leetcode.api.entity.Category;
import dev.treppmann.leetcode.api.entity.Difficulty;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;
import java.util.Map;

@Schema(name = "Problem")
public record ProblemDTO (
        String problemId,
        String problemName,
        Difficulty difficulty,
        String description,
        List<String> hints,
        String sampleInput,
        String sampleOutput,
        String optimalComplexity,
        Map<ProgrammingLanguage, String> placeHolderCode,
        List<Category> categories
) {
}
