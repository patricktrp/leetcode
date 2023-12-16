package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.entity.SkeletonTestCode;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SkeletonTestCodeRepository extends MongoRepository<SkeletonTestCode, String> {
    SkeletonTestCode findByProgrammingLanguage(ProgrammingLanguage programmingLanguage);
}
