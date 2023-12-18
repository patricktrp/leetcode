package dev.treppmann.leetcode.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import dev.treppmann.leetcode.api.dto.CodeRunRequest;
import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.dto.ProblemDTO;
import dev.treppmann.leetcode.api.dto.ProblemOverviewDTO;
import dev.treppmann.leetcode.api.entity.Problem;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.entity.SkeletonTestCode;
import dev.treppmann.leetcode.api.entity.TestCaseList;
import dev.treppmann.leetcode.api.mapper.ProblemMapper;
import dev.treppmann.leetcode.api.repository.ProblemRepository;
import dev.treppmann.leetcode.api.repository.SkeletonTestCodeRepository;
import dev.treppmann.leetcode.api.repository.TestCaseListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class ProblemService implements IProblemService {
    private final ProblemRepository problemRepository;
    private final ISubmissionService submissionService;
    private final CodeExecutionService codeExecutionService;
    private final SkeletonTestCodeRepository skeletonTestCodeRepository;
    private final TestCaseListRepository testCaseListRepository;

    @Autowired
    public ProblemService(ProblemRepository problemRepository, ISubmissionService submissionService, CodeExecutionService codeExecutionService, SkeletonTestCodeRepository skeletonTestCodeRepository, TestCaseListRepository testCaseListRepository) {
        this.problemRepository = problemRepository;
        this.submissionService = submissionService;
        this.codeExecutionService = codeExecutionService;
        this.skeletonTestCodeRepository = skeletonTestCodeRepository;
        this.testCaseListRepository = testCaseListRepository;
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

    @Override
    public CodeRunResponse runSolution(String userId, String problemId, ProgrammingLanguage programmingLanguage, CodeRunRequest codeRunRequest) {
        StringBuilder code = new StringBuilder();

        code.append(codeRunRequest.code());
        code.append("\n");

        TestCaseList testCaseList = testCaseListRepository.findByProblemId(problemId);
        String jsonTestCases = convertObjectToJson(testCaseList);

        SkeletonTestCode skeletonTestCode = skeletonTestCodeRepository.findByProgrammingLanguage(programmingLanguage);
        String skeletonCode = skeletonTestCode.getSkeletonCode();
        skeletonCode = skeletonCode.replace("FUNCTION_NAME", testCaseList.getFunctionNames().get(programmingLanguage));
        code.append(skeletonCode);

        return codeExecutionService.executeCode(programmingLanguage, code.toString(), jsonTestCases);
    }

    private String convertObjectToJson(TestCaseList testCaseList) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(testCaseList);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
