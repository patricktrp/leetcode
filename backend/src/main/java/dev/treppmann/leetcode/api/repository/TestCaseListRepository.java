package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.TestCaseList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestCaseListRepository extends MongoRepository<TestCaseList, String> {
    TestCaseList findByProblemId(String problemId);
}
