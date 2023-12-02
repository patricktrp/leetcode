package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.repository.SubmissionRepository;
import org.springframework.stereotype.Service;

@Service
public class SubmissionService implements ISubmissionService {
    private final SubmissionRepository submissionRepository;

    public SubmissionService(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }
}
