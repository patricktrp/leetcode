package dev.treppmann.leetcode.api.mapper;

import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.Problem;

public class ProblemMapper {
    public static ProblemDTO mapProblemToDTO(Problem problem) {
        return new ProblemDTO(
                problem.getProblemId(),
                problem.getProblemName(),
                problem.getDifficulty(),
                problem.getDescription(),
                problem.getHints(),
                problem.getSampleInput(),
                problem.getSampleOutput(),
                problem.getOptimalComplexity(),
                problem.getPlaceHolderCode(),
                problem.getCategories()
        );
    }

    public static ProblemOverviewDTO mapProblemToOverviewDTO(Problem problem) {
        return new ProblemOverviewDTO(
                problem.getProblemId(),
                problem.getProblemName(),
                problem.getDifficulty(),
                problem.getCategories()
        );
    }
}
