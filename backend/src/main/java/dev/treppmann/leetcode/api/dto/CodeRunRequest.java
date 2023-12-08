package dev.treppmann.leetcode.api.dto;

import jakarta.validation.constraints.NotBlank;

public record CodeRunRequest(
        @NotBlank String code
) {
}
