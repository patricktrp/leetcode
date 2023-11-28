package dev.treppmann.leetcode.api.service;

import dev.treppmann.leetcode.api.dto.DraftDTO;
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
}
