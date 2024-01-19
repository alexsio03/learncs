export const sorts = [
	{
		id: 0, name: "Quick Sort", func: quickSort, description: "Quick Sort is a divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot."
	},
	{
		id: 1, name: "Merge Sort", func: mergeSort, description: "Merge Sort is a divide and conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves."
	},
	{
		id: 2, name: "Bubble Sort", func: bubbleSort, description: "Bubble Sort is the simplest sorting algorithm that repeatedly swaps the adjacent elements if they are in wrong order."
	},
	{
		id: 3, name: "Selection Sort", func: selectionSort, description: "Selection Sort is a simple sorting algorithm that repeatedly finds the minimum element from unsorted part and puts it at the beginning."
	},
	{
		id: 4, name: "Insertion Sort", func: insertionSort, description: "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."
	},
	{
		id: 5, name: "Heap Sort", func: heapSort, description: "Heap Sort is a comparison-based sorting algorithm. It is similar to selection sort where we first find the maximum element and place the maximum element at the end."
	},
	{
		id: 6, name: "Shell Sort", func: shellSort, description: "Shell Sort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved."
	},
	{
		id: 7, name: "Radix Sort", func: radixSort, description: "Radix Sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix."
	},
	{
		id: 8, name: "Counting Sort", func: countingSort, description: "Counting Sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values."
	},
	{
		id: 9, name: "Bucket Sort", func: bucketSort, description: "Bucket Sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm."
	},
	{
		id: 10, name: "Tim Sort", func: timSort, description: "Tim Sort is a hybrid sorting algorithm derived from merge sort and insertion sort. It is designed to perform well on many kinds of real-world data."
	},
	{
		id: 11, name: "Cube Sort", func: cubeSort, description: "Cube Sort is a sorting algorithm that works by dividing the input array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays."
	}
]
