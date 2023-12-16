package dev.treppmann.leetcode.api.entity;

import lombok.Data;

import java.util.List;

@Data
public class TestCase {
    private List<Object> input;
    private List<Object> expectedOutput;
}
