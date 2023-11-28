package dev.treppmann.leetcode.api.controller;

import dev.treppmann.leetcode.api.dto.DraftDTO;
import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.entity.DraftNumber;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.service.IDraftService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/problems/{problemId}/drafts")
public class DraftController {
    private final IDraftService draftService;

    public DraftController(IDraftService draftService) {
        this.draftService = draftService;
    }

    @GetMapping
    public List<DraftDTO> getDraftsByProgrammingLanguage(Principal principal, @PathVariable String problemId, @RequestParam String programmingLanguage) {
        ProgrammingLanguage programmingLanguageEnum;
        try {
            programmingLanguageEnum = ProgrammingLanguage.fromString(programmingLanguage);
        } catch (IllegalArgumentException e) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST);
        };
        return draftService.getDraftsByProblemIdAndProgrammingLanguage(principal.getName(), problemId, programmingLanguageEnum);
    }

    @GetMapping("/{draftId}")
    public void updateOrCreateDraft(@PathVariable String problemId, @PathVariable String draftId) {
        try {
            DraftNumber draftNumber = DraftNumber.fromValue(Integer.parseInt(draftId));
        } catch (IllegalArgumentException e) {

        }
    }
}
