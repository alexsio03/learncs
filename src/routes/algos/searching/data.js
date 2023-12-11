import { linearSearch, binarySearch, ternarySearch, jumpSearch, interpolationSearch } from './algos'

export const searches = [
    {id: 0, name: 'Linear Search', func: linearSearch,
description: 'Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.'},
    {id: 1, name: 'Binary Search', func: binarySearch,
description: 'Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.'},
    {id: 2, name: 'Ternary Search', func: ternarySearch,
description: 'Ternary search is a divide and conquer algorithm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key (searched element).'},
    {id: 3, name: 'Jump Search', func: jumpSearch,
description: 'Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.'},
    {id: 4, name: 'Interpolation Search', func: interpolationSearch,
description: 'Interpolation search is an improved variant of binary search. This search algorithm works on the probing position of the required value. For this algorithm to work properly, the data collection should be in a sorted form and equally distributed.'},
]