package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.Submission;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubmissionRepository extends MongoRepository<Submission, String> {
}
