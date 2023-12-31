package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.DraftDTO;
import dev.treppmann.leetcode.api.dto.DraftUpdateRequest;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;

import java.util.List;

public interface IDraftService {
    List<DraftDTO> getDraftsByProblemIdAndProgrammingLanguage(String userId, String problemId, ProgrammingLanguage programmingLanguage);

    void updateOrCreateDraft(String userId, String problemId, DraftNumber draftNumber, ProgrammingLanguage programmingLanguageEnum, DraftUpdateRequest draftUpdateRequest);
}
