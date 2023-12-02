package dev.treppmann.leetcode.api;

import dev.treppmann.leetcode.api.entity.*;
import dev.treppmann.leetcode.api.repository.DraftRepository;
import dev.treppmann.leetcode.api.repository.ProblemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootApplication
@EnableMongoRepositories
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProblemRepository repository, DraftRepository draftRepository) {
		return args -> {
			Problem twoSum = new Problem();
			twoSum.setDescription("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.\n\nNote that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.\n\nYou can assume that there will be at most one pair of numbers summing up to the target sum");
			twoSum.setDifficulty(Difficulty.EASY);
			twoSum.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			twoSum.setCategories(List.of(Category.ARRAY));
			twoSum.setProblemName("Two Sum");
			twoSum.setProblemId("two-sum");
			twoSum.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			twoSum.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			twoSum.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			Map<ProgrammingLanguage, String> placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def two_sum(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const twoSum = (array, targetSum) => {\n\t// Write your code here\n}");
			twoSum.setPlaceHolderCode(placeHolderCode);
			repository.save(twoSum);

			Problem binarySearch = new Problem();
			binarySearch.setDescription("Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.");
			binarySearch.setDifficulty(Difficulty.EASY);
			binarySearch.setOptimalComplexity("O(log n) time | O(1) space - where n is the length of the input array");
			binarySearch.setCategories(List.of(Category.ARRAY));
			binarySearch.setProblemName("Binary Search");
			binarySearch.setProblemId("binary-search");
			binarySearch.setHints(List.of("The Binary Search algorithm works by finding the number in the middle of the input array and comparing it to the target number. Given that the array is sorted, if this middle number is smaller than the target number, then the entire left part of the array is no longer worth exploring since the target number can no longer be in it; similarly, if the middle number is greater than the target number, then the entire right part of the array is no longer worth exploring. Applying this logic recursively eliminates half of the array until the number is found or until the array runs out of numbers.", "Write a helper function that takes in two additional arguments: a left pointer and a right pointer representing the indices at the extremities of the array (or subarray) that you are applying Binary Search on. The first time this helper function is called, the left pointer should be zero and the right pointer should be the final index of the input array. To find the index of the middle number mentioned in Hint #1, simply round down the number obtained from: (left + right) / 2. Apply this logic recursively until you find the target number or until the left pointer becomes greater than the right pointer.", "Can you implement this algorithm iteratively? Are there any advantages to doing so?"));
			binarySearch.setSampleInput("array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]");
			binarySearch.setSampleOutput("3");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def binary_search(array, target):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const binarySearch = (array, target) => {\n\t// Write your code here\n}");
			binarySearch.setPlaceHolderCode(placeHolderCode);
			repository.save(binarySearch);

			Draft draft = new Draft();
			draft.setCode("def binary_search(array, target):\n\tprint(\"hello World\")");
			draft.setProgrammingLanguage(ProgrammingLanguage.PYTHON);
			draft.setUserId("d6zKWAbXQoeCVtW0O0DZNRZXa3plfgrP@clients");
			draft.setDraftNumber(DraftNumber.ONE);
			draft.setProblemId("two-sum");
			draftRepository.insert(draft);

			Draft draft2 = new Draft();
			draft2.setCode("def binary_search(array, target):\n\tprint(\"hello World\")");
			draft2.setProgrammingLanguage(ProgrammingLanguage.PYTHON);
			draft2.setUserId("d6zKWAbXQoeCVtW0O0DZNRZXa3plfgrP@clients");
			draft2.setDraftNumber(DraftNumber.TWO);
			draft2.setProblemId("two-sum");
			draftRepository.insert(draft2);
		};
	}

}
