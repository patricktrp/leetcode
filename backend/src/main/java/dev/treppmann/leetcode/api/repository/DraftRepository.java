package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DraftRepository extends MongoRepository<Draft, String> {
    List<Draft> findAllByUserIdAndProgrammingLanguageAndProblemId(String userId, ProgrammingLanguage programmingLanguage, String problemId);
    Draft findByUserIdAndProblemIdAndProgrammingLanguageAndDraftNumber(String userId, String problemId, ProgrammingLanguage programmingLanguage, DraftNumber draftNumber);
}
