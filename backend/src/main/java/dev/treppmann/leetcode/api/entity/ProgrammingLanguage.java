package dev.treppmann.leetcode.api.entity;

import lombok.Getter;

@Getter
public enum ProgrammingLanguage {
    PYTHON("python"), JAVASCRIPT("javascript");

    private final String languageName;

    ProgrammingLanguage(String languageName) {
        this.languageName = languageName;
    }

    public static ProgrammingLanguage fromString(String languageName) {
        for (ProgrammingLanguage language : ProgrammingLanguage.values()) {
            if (language.getLanguageName().equalsIgnoreCase(languageName)) {
                return language;
            }
        }
        throw new IllegalArgumentException("programming language: " + languageName + " is not supported");
    }
}
