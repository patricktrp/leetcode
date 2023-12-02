package dev.treppmann.leetcode.api.mapper;

import dev.treppmann.leetcode.api.dto.DraftDTO;
import dev.treppmann.leetcode.api.entity.Draft;
import dev.treppmann.leetcode.api.entity.DraftNumber;

public class DraftMapper {
    public static DraftDTO mapDraftToDTO(Draft draft) {
        return new DraftDTO(
                draft.getDraftNumber().getValue(),
                draft.getCode()
        );
    }
}
