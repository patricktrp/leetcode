package dev.treppmann.leetcode.api.controller;

import dev.treppmann.leetcode.api.dto.CodeRunRequest;
import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.service.IProblemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.security.Principal;
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
    public CodeRunResponse runSolution(Principal principal, @PathVariable String problemId, @RequestParam String programmingLanguage, @RequestBody @Valid CodeRunRequest codeRunRequest) {
        ProgrammingLanguage programmingLanguageEnum;
        System.out.println(principal.getName());
        
        try {
            programmingLanguageEnum = ProgrammingLanguage.fromString(programmingLanguage);
        } catch (IllegalArgumentException e) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST);
        }
        problemService.runSolution(null, problemId, programmingLanguageEnum, codeRunRequest);
        return null;
    }
}
