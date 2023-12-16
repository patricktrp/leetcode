package dev.treppmann.leetcode.api;

import dev.treppmann.leetcode.api.entity.*;
import dev.treppmann.leetcode.api.repository.DraftRepository;
import dev.treppmann.leetcode.api.repository.ProblemRepository;
import dev.treppmann.leetcode.api.repository.SkeletonTestCodeRepository;
import dev.treppmann.leetcode.api.repository.TestCaseListRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.ArrayList;
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
	CommandLineRunner runner(ProblemRepository repository, DraftRepository draftRepository, SkeletonTestCodeRepository skeletonTestCodeRepository, TestCaseListRepository testCasesRepository) {
		return args -> {
			Problem twoSum = new Problem();
			twoSum.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
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

			Problem bubbleSort = new Problem();
			bubbleSort.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			bubbleSort.setDifficulty(Difficulty.EASY);
			bubbleSort.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			bubbleSort.setCategories(List.of(Category.ARRAY));
			bubbleSort.setProblemName("Bubble Sort");
			bubbleSort.setProblemId("bubble-sort");
			bubbleSort.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			bubbleSort.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			bubbleSort.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def bubble_sort(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const bubbleSort = (array, targetSum) => {\n\t// Write your code here\n}");
			bubbleSort.setPlaceHolderCode(placeHolderCode);
			repository.save(bubbleSort);

			Problem nthFibonacci = new Problem();
			nthFibonacci.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			nthFibonacci.setDifficulty(Difficulty.EASY);
			nthFibonacci.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			nthFibonacci.setCategories(List.of(Category.ARRAY));
			nthFibonacci.setProblemName("Nth Fibonacci");
			nthFibonacci.setProblemId("nth-fibonacci");
			nthFibonacci.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			nthFibonacci.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			nthFibonacci.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def nth_fibonacci(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const nthFibonacci = (array, targetSum) => {\n\t// Write your code here\n}");
			nthFibonacci.setPlaceHolderCode(placeHolderCode);
			repository.save(nthFibonacci);

			Problem selectionSort = new Problem();
			selectionSort.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			selectionSort.setDifficulty(Difficulty.EASY);
			selectionSort.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			selectionSort.setCategories(List.of(Category.ARRAY));
			selectionSort.setProblemName("Selection Sort");
			selectionSort.setProblemId("selection-sort");
			selectionSort.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			selectionSort.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			selectionSort.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def selection_sort(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const selectionSort = (array, targetSum) => {\n\t// Write your code here\n}");
			selectionSort.setPlaceHolderCode(placeHolderCode);
			repository.save(selectionSort);

			Problem depthFirstSearch = new Problem();
			depthFirstSearch.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			depthFirstSearch.setDifficulty(Difficulty.EASY);
			depthFirstSearch.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			depthFirstSearch.setCategories(List.of(Category.ARRAY));
			depthFirstSearch.setProblemName("Depth-first Search");
			depthFirstSearch.setProblemId("depth-first-search");
			depthFirstSearch.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			depthFirstSearch.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			depthFirstSearch.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def depth_first_search(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const depthFirstSearch = (array, targetSum) => {\n\t// Write your code here\n}");
			depthFirstSearch.setPlaceHolderCode(placeHolderCode);
			repository.save(depthFirstSearch);

			Problem threeNumberSum = new Problem();
			threeNumberSum.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			threeNumberSum.setDifficulty(Difficulty.MEDIUM);
			threeNumberSum.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			threeNumberSum.setCategories(List.of(Category.ARRAY));
			threeNumberSum.setProblemName("Three Number Sum");
			threeNumberSum.setProblemId("three-number-sum");
			threeNumberSum.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			threeNumberSum.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			threeNumberSum.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def three_number_sum(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const threeNumberSum = (array, targetSum) => {\n\t// Write your code here\n}");
			threeNumberSum.setPlaceHolderCode(placeHolderCode);
			repository.save(threeNumberSum);

			Problem invertBinaryTree = new Problem();
			invertBinaryTree.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			invertBinaryTree.setDifficulty(Difficulty.MEDIUM);
			invertBinaryTree.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			invertBinaryTree.setCategories(List.of(Category.ARRAY));
			invertBinaryTree.setProblemName("Invert Binary Tree");
			invertBinaryTree.setProblemId("invert-binary-tree");
			invertBinaryTree.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			invertBinaryTree.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			invertBinaryTree.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def invert_binary_tree(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const invertBinaryTree = (array, targetSum) => {\n\t// Write your code here\n}");
			invertBinaryTree.setPlaceHolderCode(placeHolderCode);
			repository.save(invertBinaryTree);

			Problem fourNumberSum = new Problem();
			fourNumberSum.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			fourNumberSum.setDifficulty(Difficulty.HARD);
			fourNumberSum.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			fourNumberSum.setCategories(List.of(Category.ARRAY));
			fourNumberSum.setProblemName("Four Number Sum");
			fourNumberSum.setProblemId("four-number-sum");
			fourNumberSum.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			fourNumberSum.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			fourNumberSum.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def four_number_sum(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const fourNumberSum = (array, targetSum) => {\n\t// Write your code here\n}");
			fourNumberSum.setPlaceHolderCode(placeHolderCode);
			repository.save(fourNumberSum);

			Problem quickSelect = new Problem();
			quickSelect.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			quickSelect.setDifficulty(Difficulty.HARD);
			quickSelect.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			quickSelect.setCategories(List.of(Category.ARRAY));
			quickSelect.setProblemName("Quickselect");
			quickSelect.setProblemId("quickselect");
			quickSelect.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			quickSelect.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			quickSelect.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def quickselect(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const quickSelect = (array, targetSum) => {\n\t// Write your code here\n}");
			quickSelect.setPlaceHolderCode(placeHolderCode);
			repository.save(quickSelect);

			Problem kadanesAlgorithm = new Problem();
			kadanesAlgorithm.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			kadanesAlgorithm.setDifficulty(Difficulty.HARD);
			kadanesAlgorithm.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			kadanesAlgorithm.setCategories(List.of(Category.ARRAY));
			kadanesAlgorithm.setProblemName("Kadane's Algorithm");
			kadanesAlgorithm.setProblemId("kadanes-algorithm");
			kadanesAlgorithm.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?", "This is a test", "If this works"));
			kadanesAlgorithm.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			kadanesAlgorithm.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def kadanes(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const kadanes = (array, targetSum) => {\n\t// Write your code here\n}");
			kadanesAlgorithm.setPlaceHolderCode(placeHolderCode);
			repository.save(kadanesAlgorithm);

			Problem topologicalSort = new Problem();
			topologicalSort.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			topologicalSort.setDifficulty(Difficulty.HARD);
			topologicalSort.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			topologicalSort.setCategories(List.of(Category.ARRAY));
			topologicalSort.setProblemName("Topological Sort");
			topologicalSort.setProblemId("topological-sort");
			topologicalSort.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			topologicalSort.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			topologicalSort.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def topological_sort(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const topologicalSort = (array, targetSum) => {\n\t// Write your code here\n}");
			topologicalSort.setPlaceHolderCode(placeHolderCode);
			repository.save(topologicalSort);

			Problem breadthFirstSearch = new Problem();
			breadthFirstSearch.setDescription(List.of("Write a function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.", "Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the the target sum.", "You can assume that there will be at most one pair of numbers summing up to the target sum"));
			breadthFirstSearch.setDifficulty(Difficulty.MEDIUM);
			breadthFirstSearch.setOptimalComplexity("O(n) time | O(n) space - where n is the length of the input array");
			breadthFirstSearch.setCategories(List.of(Category.ARRAY));
			breadthFirstSearch.setProblemName("Breadth-first Search");
			breadthFirstSearch.setProblemId("breadth-first-search");
			breadthFirstSearch.setHints(List.of("Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?", "Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.", "Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash tables. What are the time and space implications of this approach?"));
			breadthFirstSearch.setSampleInput("array = [3, 5, -4, 8, 11, 1, -1, 6]\ntargetSum = 10");
			breadthFirstSearch.setSampleOutput("[-1, 11] // numbers could be in reverse order");
			placeHolderCode = new HashMap<>();
			placeHolderCode.put(ProgrammingLanguage.PYTHON, "def breadth_first_search(array, target_sum):\n\t# Write your code here\n\tpass");
			placeHolderCode.put(ProgrammingLanguage.JAVASCRIPT, "const breadthFirstSearch = (array, targetSum) => {\n\t// Write your code here\n}");
			breadthFirstSearch.setPlaceHolderCode(placeHolderCode);
			repository.save(breadthFirstSearch);

			SkeletonTestCode skeletonTestCode = new SkeletonTestCode();
			skeletonTestCode.setSkeletonCode("""
import json 
with open('test_cases.json', 'r') as file:
    data = json.load(file)
    test_cases = data['testCases']
function_name = data['functionNames']['PYTHON']
results = []
for idx, test_case in enumerate(test_cases):
    print(f"-------- Test Case {idx+1} --------")
    result = FUNCTION_NAME(*test_case['input'])
    results.append({
        **test_case,
        "actual_output": result,
        "passed": result == test_case["expectedOutput"]
    })
    print()
test_cases = len(results)
passed = sum(test_case['passed'] for test_case in results)
result_object = {
    'test_cases': test_cases,
    'passed': passed,
    'results': results
}
print("+++")
print(json.dumps(result_object))
""");
			skeletonTestCode.setProgrammingLanguage(ProgrammingLanguage.PYTHON);
			skeletonTestCode.setId("skeleton-python");
			skeletonTestCodeRepository.save(skeletonTestCode);

			TestCaseList testCases = new TestCaseList();
			Map<ProgrammingLanguage, String> functionNames = new HashMap<>();
			functionNames.put(ProgrammingLanguage.PYTHON, "binary_search");
			functionNames.put(ProgrammingLanguage.JAVASCRIPT, "binarySearch");
			testCases.setFunctionNames(functionNames);
			testCases.setProblemId("binary-search");
			List<TestCase> testCaseList = new ArrayList<>();
			TestCase tc = new TestCase();
			tc.setInput(List.of(List.of(5,4,3,2,1)));
			tc.setExpectedOutput(List.of(1,2,3,4,5));
			TestCase tc2 = new TestCase();
			tc2.setInput(List.of(List.of(5,5,5,5,1)));
			tc2.setExpectedOutput(List.of(5,1,5,5,5));
			testCaseList.add(tc);
			testCaseList.add(tc2);
			testCases.setTestCases(testCaseList);
			testCases.setId("test-cases-binary-search");
			testCasesRepository.save(testCases);

			TestCaseList testCases2 = new TestCaseList();
			functionNames = new HashMap<>();
			functionNames.put(ProgrammingLanguage.PYTHON, "two_sum");
			functionNames.put(ProgrammingLanguage.JAVASCRIPT, "twoSum");
			testCases2.setFunctionNames(functionNames);
			testCases2.setProblemId("two-sum");
			testCaseList = new ArrayList<>();
			tc = new TestCase();
			tc.setInput(List.of(List.of(1,3), 4));
			tc.setExpectedOutput(List.of(0,1));
			testCaseList.add(tc);
			testCases2.setTestCases(testCaseList);
			testCases2.setId("test-cases-two-sum");
			testCasesRepository.save(testCases2);
		};
	}

}
