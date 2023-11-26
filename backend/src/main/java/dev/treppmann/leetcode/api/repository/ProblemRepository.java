package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.Problem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProblemRepository extends MongoRepository<Problem, String> {
}
