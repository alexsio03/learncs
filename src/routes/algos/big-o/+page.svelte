<script>
  let examples = [
    { algorithm: "Linear Search", complexity: "O(n)" },
    { algorithm: "Binary Search", complexity: "O(log n)" },
    { algorithm: "Bubble Sort", complexity: "O(n^2)" },
    { algorithm: "Merge Sort", complexity: "O(n log n)" },
    { algorithm: "Quick Sort", complexity: "O(n log n)" },
  ];
</script>

<div class="flex flex-col h-full dark:bg-zinc-800 dark:text-zinc-400 p-20">
  <h1 class="text-4xl font-bold mb-4 text-zinc-300">Big O Notation</h1>
  
  <p class="mb-4">
    Big O notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It provides a way to analyze and compare the efficiency of different algorithms in terms of their input size.
  </p>
  
  <h2 class="text-2xl font-bold mb-2 text-zinc-300">Why is it used?</h2>
  
  <p class="mb-4">
    Big O notation is used to understand how an algorithm's performance scales as the input size increases. It helps in making informed decisions when choosing between different algorithms or optimizing existing ones. By analyzing the time and space complexity of an algorithm, we can identify potential bottlenecks and improve the overall efficiency of our code.
  </p>
  
  <h2 class="text-2xl font-bold mb-2 text-zinc-300">How is it used?</h2>
  
  <p class="mb-4">
    Big O notation expresses the upper bound of an algorithm's time or space complexity in terms of the input size. It provides a simplified representation of an algorithm's growth rate. The notation uses the letter "O" followed by a function that describes the relationship between the input size and the number of operations or memory used by the algorithm.
  </p>
  
  <h2 class="text-2xl font-bold mb-2 text-zinc-300">What is it good for?</h2>
  
  <p class="mb-4">
    Big O notation allows us to compare and classify algorithms based on their efficiency. It helps us identify algorithms that are suitable for different problem sizes and choose the most efficient one for a given task. It also helps in estimating the scalability of an algorithm and predicting its performance on larger inputs.
  </p>
  
  <h2 class="text-2xl font-bold mb-2 text-zinc-300">Examples</h2>
  
  <ul class="list-disc pl-6 mb-4">
    {#each examples as example}
      <li>{example.algorithm} - {example.complexity}</li>
    {/each}
  </ul>
  
  <h2 class="text-2xl font-bold mb-2 text-zinc-300">How are the complexities determined?</h2>
  
  <p class="mb-4">
    The complexities for each example are determined through analysis of the algorithms. Here is a brief explanation for each example:
  </p>
  
  <ul class="list-disc pl-6 mb-4">
    <li><span class="text-zinc-300">Linear Search</span> - The time complexity of linear search is <span class="text-zinc-300">O(n)</span> because in the worst case scenario, the algorithm may need to iterate through all n elements in the input list to find the target element.</li>
    <li><span class="text-zinc-300">Binary Search</span> - The time complexity of binary search is <span class="text-zinc-300">O(log n)</span> because the algorithm repeatedly divides the search space in half, reducing the number of remaining elements to search by half in each iteration.</li>
    <li><span class="text-zinc-300">Bubble Sort</span> - The time complexity of bubble sort is <span class="text-zinc-300">O(n^2)</span> because the algorithm compares adjacent elements and swaps them if they are in the wrong order, and this process is repeated n times for n elements in the input list.</li>
    <li><span class="text-zinc-300">Merge Sort</span> - The time complexity of merge sort is <span class="text-zinc-300">O(n log n)</span> because the algorithm divides the input list into smaller sublists, recursively sorts them, and then merges the sorted sublists to produce the final sorted list. The merge step takes O(n) time, and the number of merge steps is O(log n).</li>
    <li><span class="text-zinc-300">Quick Sort</span> - The time complexity of quick sort is <span class="text-zinc-300">O(n log n)</span> on average, but it can be O(n^2) in the worst case. The algorithm selects a pivot element, partitions the input list around the pivot, and recursively sorts the sublists. The average case time complexity is O(n log n) because the pivot selection and partitioning steps divide the input list into roughly equal-sized sublists. However, in the worst case, the pivot selection may result in highly unbalanced partitions, leading to O(n^2) time complexity.</li>
  </ul>
</div>
