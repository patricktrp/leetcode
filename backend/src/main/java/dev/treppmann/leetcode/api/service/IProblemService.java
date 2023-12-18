package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.CodeRunRequest;
import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;

import java.util.List;

public interface IProblemService {
    List<ProblemOverviewDTO> getProblems();

    ProblemDTO getProblemById(String problemId);

    CodeRunResponse runSolution(String userId, String problemId, ProgrammingLanguage programmingLanguage, CodeRunRequest codeRunRequest);
}
