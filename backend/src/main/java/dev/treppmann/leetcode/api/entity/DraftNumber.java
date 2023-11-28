package dev.treppmann.leetcode.api.entity;

public enum DraftNumber {
    ONE(1),
    TWO(2),
    THREE(3);

    private final int value;

    DraftNumber(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public static DraftNumber fromValue(int value) {
        for (DraftNumber draftNumber : values()) {
            if (draftNumber.getValue() == value) {
                return draftNumber;
            }
        }
        throw new IllegalArgumentException("Invalid value for RestrictedInteger: " + value);
    }
}
