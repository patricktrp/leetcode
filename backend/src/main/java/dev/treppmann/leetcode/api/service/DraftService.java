package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.DraftDTO;
import dev.treppmann.leetcode.api.dto.DraftUpdateRequest;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.mapper.DraftMapper;
import dev.treppmann.leetcode.api.repository.DraftRepository;
import org.springframework.stereotype.Service;
import dev.treppmann.leetcode.api.entity.Draft;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DraftService implements IDraftService {
    private final DraftRepository draftRepository;

    public DraftService(DraftRepository draftRepository) {
        this.draftRepository = draftRepository;
    }

    @Override
    public List<DraftDTO> getDraftsByProblemIdAndProgrammingLanguage(String userId, String problemId, ProgrammingLanguage programmingLanguage) {
        List<Draft> drafts = draftRepository.findAllByUserIdAndProgrammingLanguageAndProblemId(userId, programmingLanguage, problemId);
        return drafts.stream().map(DraftMapper::mapDraftToDTO).collect(Collectors.toList());
    }

    @Override
    public void updateOrCreateDraft(String userId, String problemId, DraftNumber draftNumber, ProgrammingLanguage programmingLanguage, DraftUpdateRequest draftUpdateRequest) {
        Draft draft = draftRepository.findByUserIdAndProblemIdAndProgrammingLanguageAndDraftNumber(userId, problemId, programmingLanguage, draftNumber);
        if (draft == null) {
            Draft newDraft = new Draft();
            newDraft.setUserId(userId);
            newDraft.setDraftNumber(draftNumber);
            newDraft.setCode(draftUpdateRequest.code());
            newDraft.setProgrammingLanguage(programmingLanguage);
            newDraft.setProblemId(problemId);
            draftRepository.insert(newDraft);
        } else {
            draft.setCode(draftUpdateRequest.code());
            draftRepository.save(draft);
        }
    }
}
