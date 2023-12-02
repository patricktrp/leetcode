package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.Problem;
import dev.treppmann.leetcode.api.mapper.ProblemMapper;
import dev.treppmann.leetcode.api.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProblemService implements IProblemService {
    private final ProblemRepository problemRepository;
    private final ISubmissionService submissionService;
    private final CodeExecutionService codeExecutionService;

    @Autowired
    public ProblemService(ProblemRepository problemRepository, ISubmissionService submissionService, CodeExecutionService codeExecutionService) {
        this.problemRepository = problemRepository;
        this.submissionService = submissionService;
        this.codeExecutionService = codeExecutionService;
    }

    @Override
    public List<ProblemOverviewDTO> getProblems() {
        List<Problem> problems = problemRepository.findAll();
        return problems.stream().map(ProblemMapper::mapProblemToOverviewDTO).collect(Collectors.toList());
    }

    @Override
    public ProblemDTO getProblemById(String problemId) {
        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
        return ProblemMapper.mapProblemToDTO(problem);
    }
}
