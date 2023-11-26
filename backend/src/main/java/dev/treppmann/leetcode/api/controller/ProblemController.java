package dev.treppmann.leetcode.api.controller;

import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.service.IProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/problems")
public class ProblemController {
    private final IProblemService problemService;

    @Autowired
    public ProblemController(IProblemService problemService) {
        this.problemService = problemService;
    }

    @GetMapping
    public List<ProblemOverviewDTO> getProblems() {
        return problemService.getProblems();
    }

    @GetMapping("/{problemId}")
    public ProblemDTO getProblemById(@PathVariable String problemId) {
        return problemService.getProblemById(problemId);
    }

    @PostMapping("/{problemId}/submit")
    public void submitSolution(@PathVariable String problemId) {

    }

    @PostMapping("/{problemId}/run")
    public void runSolution(@PathVariable String problemId) {

    }

    @GetMapping("/{problemId}/drafts")
    public List<Draft> getDrafts() {
        return null;
    }
}
