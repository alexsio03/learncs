export const dataStructs = [
    {
        id: "array",
        name: "Array",
        wiki: "https://en.wikipedia.org/wiki/Array_data_structure",
        description: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).",
        example: "[1, 2, 3, 4, 5]"
    },
    {
        id: "linked-list",
        name: "Linked List",
        wiki: "https://en.wikipedia.org/wiki/Linked_list",
        description: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image: In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.",
        example: "1 -> 2 -> 3 -> 4 -> 5"
    },
    {
        id: "stack",
        name: "Stack",
        wiki: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
        description: "A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The elements are added and removed from the same end, known as the top of the stack.",
        example: "[1, 2, 3, 4, 5]"
    },
    {
        id: "queue",
        name: "Queue",
        wiki: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
        description: "A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. The elements are added at the rear and removed from the front.",
        example: "[1, 2, 3, 4, 5]"
    },
    {
        id: "priority-queue",
        name: "Priority Queue",
        wiki: "https://en.wikipedia.org/wiki/Priority_queue",
        description: "A priority queue is an abstract data type that is similar to a queue, but each element has a priority assigned to it. Elements with higher priority are dequeued first.",
        example: "[{value: 1, priority: 2}, {value: 2, priority: 1}, {value: 3, priority: 3}]"
    },
    {
        id: "tree",
        name: "Tree",
        wiki: "https://en.wikipedia.org/wiki/Tree_(data_structure)",
        description: "A tree is a hierarchical data structure that consists of nodes connected by edges. Each node can have zero or more child nodes, except for the root node which has no parent.",
        example: "      1\n    /   \\\n   2     3\n  / \\   / \\\n 4   5 6   7"
    },
    {
        id: "hash-table",
        name: "Hash Table",
        wiki: "https://en.wikipedia.org/wiki/Hash_table",
        description: "A hash table is a data structure that implements an associative array abstract data type. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
        example: "{\n  'key1': 'value1',\n  'key2': 'value2',\n  'key3': 'value3'\n}"
    },
    {
        id: "binary-search-tree",
        name: "Binary Search Tree",
        wiki: "https://en.wikipedia.org/wiki/Binary_search_tree",
        description: "A binary search tree is a binary tree data structure in which each node has a key greater than all the keys in its left subtree and smaller than all the keys in its right subtree.",
        example: "      4\n    /   \\\n   2     6\n  / \\   / \\\n 1   3 5   7"
    },
    {
        id: "graph",
        name: "Graph",
        wiki: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",
        description: "A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges (connections between vertices). It is used to represent relationships between objects.",
        example: "      A\n    /   \\\n   B     C\n  / \\   / \\\n D   E F   G"
    },
    {
        id: "trie",
        name: "Trie",
        wiki: "https://en.wikipedia.org/wiki/Trie",
        description: "A trie, also known as a prefix tree, is a tree-like data structure that stores a collection of strings. It allows for efficient retrieval of all strings with a common prefix.",
        example: "Trie containing words: ['apple', 'banana', 'app', 'bat']"
    },
    {
        id: "heap",
        name: "Heap",
        wiki: "https://en.wikipedia.org/wiki/Heap_(data_structure)",
        description: "A heap is a complete binary tree that satisfies the heap property. In a min-heap, for any given node, the value of the node is less than or equal to the values of its children.",
        example: "[1, 2, 3, 4, 5]"
    },
];