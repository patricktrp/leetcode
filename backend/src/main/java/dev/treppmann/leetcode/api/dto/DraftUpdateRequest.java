package dev.treppmann.leetcode.api.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

@Schema(name = "DraftUpdate")
public record DraftUpdateRequest (
        @NotBlank  String code
){}