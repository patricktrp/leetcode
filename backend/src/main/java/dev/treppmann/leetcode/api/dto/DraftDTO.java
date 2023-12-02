package dev.treppmann.leetcode.api.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "Draft")
public record DraftDTO(
        int draftId,
        String code
) {
}
