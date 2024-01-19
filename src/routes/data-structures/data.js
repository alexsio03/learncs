export const dataStructs = [
    {
        id: "array",
        name: "Array",
        wiki: "https://en.wikipedia.org/wiki/Array_data_structure",
        description: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).",
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png"
    },
    {
        id: "linked-list",
        name: "Linked List",
        wiki: "https://en.wikipedia.org/wiki/Linked_list",
        description: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image: In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.",
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20220829110944/LLdrawio.png"
    },
    {
        id: "stack",
        name: "Stack",
        wiki: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
        description: "A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The elements are added and removed from the same end, known as the top of the stack.",
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20220714004311/Stack-660x566.png"
    },
    {
        id: "queue",
        name: "Queue",
        wiki: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
        description: "A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. The elements are added at the rear and removed from the front.",
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20220805131014/fifo.png"
    },
    {
        id: "priority-queue",
        name: "Priority Queue",
        wiki: "https://en.wikipedia.org/wiki/Priority_queue",
        description: "A priority queue is an abstract data type that is similar to a queue, but each element has a priority assigned to it. Elements with higher priority are dequeued first.",
        example: "https://media.geeksforgeeks.org/wp-content/uploads/20221208162308/max_priority_queue.png"
    },
    {
        id: "tree",
        name: [
            {
                id: "general-tree",
                name: "General Tree",
                wiki: "https://en.wikipedia.org/wiki/Tree_(data_structure)",
                description: "A tree is a hierarchical data structure that consists of nodes connected by edges. Each node can have zero or more child nodes, except for the root node which has no parent.",
                example: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/674px-Tree_%28computer_science%29.svg.png"
            },
            {
                id: "binary-tree",
                name: "Binary Tree",
                wiki: "https://en.wikipedia.org/wiki/Binary_tree",
                description: "A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.",
                example: "https://editor.analyticsvidhya.com/uploads/80801Screenshot%20(92).png"
            },
            {
                id: "binary-search-tree",
                name: "Binary Search Tree",
                wiki: "https://en.wikipedia.org/wiki/Binary_search_tree",
                description: "A binary search tree (BST) is a binary tree where each node has a Comparable key (and an associated value) and satisfies the restriction that the key in any node is larger than the keys in all nodes in that node's left subtree and smaller than the keys in all nodes in that node's right subtree.",
                example: "https://media.geeksforgeeks.org/wp-content/uploads/Untitled-Diagram-2-7.png"
            },
            {
                id: "avl-tree",
                name: "AVL Tree",
                wiki: "https://en.wikipedia.org/wiki/AVL_tree",
                description: "An AVL tree is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node differ by at most one. Lookup, insertion, and deletion all take O(log n) time in both the average and worst cases, where n is the number of nodes in the tree prior to the operation.",
                example: "https://media.geeksforgeeks.org/wp-content/uploads/20221229121830/avl.png"
            },
            {
                id: "red-black-tree",
                name: "Red-Black Tree",
                wiki: "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree",
                description: "A red-black tree is a self-balancing binary search tree. Each node stores an extra bit representing color, used to ensure that the tree remains approximately balanced during insertions and deletions.",
                example: "https://qph.cf2.quoracdn.net/main-qimg-f4b3c369b096cf0d1e6622e62e3a773c"
            },
        ]
    },
    {
        id: "hash-table",
        name: "Hash Table",
        wiki: "https://en.wikipedia.org/wiki/Hash_table",
        description: "A hash table is a data structure that implements an associative array abstract data type. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
        example: "https://khalilstemmler.com/img/blog/data-structures/hash-tables/hash-table.png"
    },
    {
        id: "graph",
        name: "Graph",
        wiki: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",
        description: "A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges (connections between vertices). It is used to represent relationships between objects.",
        example: "https://web.cecs.pdx.edu/~sheard/course/Cs163/Graphics/graph7.png"
    },
    {
        id: "trie",
        name: "Trie",
        wiki: "https://en.wikipedia.org/wiki/Trie",
        description: "A trie, also known as a prefix tree, is a tree-like data structure that stores a collection of strings. It allows for efficient retrieval of all strings with a common prefix.",
        example: "https://www.techiedelight.com/wp-content/uploads/2016/11/Trie.png"
    },
    {
        id: "heap",
        name: "Heap",
        wiki: "https://en.wikipedia.org/wiki/Heap_(data_structure)",
        description: "A heap is a complete binary tree that satisfies the heap property. In a min-heap, for any given node, the value of the node is less than or equal to the values of its children.",
        example: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220165711/MinHeapAndMaxHeap1.png"
    },
];


