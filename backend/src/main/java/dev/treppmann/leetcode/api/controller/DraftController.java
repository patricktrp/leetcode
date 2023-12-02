package dev.treppmann.leetcode.api.controller;

import dev.treppmann.leetcode.api.dto.DraftDTO;
import dev.treppmann.leetcode.api.dto.DraftUpdateRequest;
import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.service.IDraftService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.security.Principal;
import java.util.List;

@RestController
@Validated
@RequestMapping("/problems/{problemId}/drafts")
public class DraftController {
    private final IDraftService draftService;

    public DraftController(IDraftService draftService) {
        this.draftService = draftService;
    }

    @GetMapping
    public List<DraftDTO> getDraftsByProblemIdAndProgrammingLanguage(Principal principal, @PathVariable String problemId, @RequestParam String programmingLanguage) {
        ProgrammingLanguage programmingLanguageEnum;
        try {
            programmingLanguageEnum = ProgrammingLanguage.fromString(programmingLanguage);
        } catch (IllegalArgumentException e) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST);
        };
        return draftService.getDraftsByProblemIdAndProgrammingLanguage(principal.getName(), problemId, programmingLanguageEnum);
    }

    @PutMapping("/{draftId}")
    public void updateOrCreateDraft(Principal principal, @PathVariable String problemId, @PathVariable String draftId, @RequestParam String programmingLanguage, @RequestBody @Valid DraftUpdateRequest draftUpdateRequest) {
        ProgrammingLanguage programmingLanguageEnum;
        DraftNumber draftNumber;
        try {
            programmingLanguageEnum = ProgrammingLanguage.fromString(programmingLanguage);
            draftNumber = DraftNumber.fromValue(Integer.parseInt(draftId));
        } catch (IllegalArgumentException e) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST);
        }

        draftService.updateOrCreateDraft(principal.getName(), problemId, draftNumber, programmingLanguageEnum, draftUpdateRequest);
    }
}
