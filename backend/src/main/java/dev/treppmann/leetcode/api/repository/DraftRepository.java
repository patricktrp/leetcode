package dev.treppmann.leetcode.api.repository;

import dev.treppmann.leetcode.api.entity.Draft;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DraftRepository extends MongoRepository<Draft, String> {
}
