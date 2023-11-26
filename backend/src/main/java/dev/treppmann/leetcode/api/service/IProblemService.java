package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;

import java.util.List;

public interface IProblemService {
    List<ProblemOverviewDTO> getProblems();

    ProblemDTO getProblemById(String problemId);
}
