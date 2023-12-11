/**
 * @param {number[]} array
 * @param {any} value
 */
export async function linearSearch(array, value) {
    clearArray(array);
    checkElement("display").innerHTML = "Searching for " + value + "...";
    for (let i = 0; i < array.length; i++) {
        checkElement(String(array[i])).style.backgroundColor = "darkred";
        if (array[i] === value) {
            checkElement("display").innerHTML = "Found " + value + " at index " + i;
            return i;
        }
        await sleep(500);
        checkElement(String(array[i])).style.removeProperty("background-color");
    }
    checkElement("display").innerHTML = "Could not find " + value;
    return -1;
}

/**
 * @param {number[]} array
 * @param {number} value
 */
export async function binarySearch(array, value) {
    clearArray(array);
    let left = 0;
    checkElement(String(array[left])).style.backgroundColor = "darkgreen";
    let right = array.length - 1;
    checkElement(String(array[right])).style.backgroundColor = "darkblue";
    let middle = Math.floor((right + left) / 2);
    checkElement(String(array[middle])).style.backgroundColor = "darkred";
    checkElement("display").innerHTML = "Searching for " + value + "...";
    await sleep(1000)

    while (array[middle] !== value && left <= right) {
        if (value < array[middle]) {
            checkElement(String(array[middle])).style.removeProperty("background-color");
            checkElement(String(array[right])).style.removeProperty("background-color");
            right = middle - 1;
            if(right >= 0) {
                checkElement(String(array[right])).style.backgroundColor = "darkblue";
                await sleep(1000)
            }
        } else {
            checkElement(String(array[middle])).style.removeProperty("background-color");
            checkElement(String(array[left])).style.removeProperty("background-color");
            left = middle + 1;
            if(left < array.length) {
                checkElement(String(array[left])).style.backgroundColor = "darkgreen";
                await sleep(1000)
            }
        }
        middle = Math.floor((right + left) / 2);
        if (middle < array.length && middle >= 0) {
            checkElement(String(array[middle])).style.backgroundColor = "darkred";
            await sleep(1000)
        }
    }
    clearArray(array);
    if (array[middle] === value) {
        checkElement(String(array[middle])).style.backgroundColor = "darkred";
        checkElement("display").innerHTML = "Found " + value + " at index " + middle;
        return middle;
    } else {
        checkElement("display").innerHTML = "Could not find " + value;
        return -1;
    }
}

/**
 * @param {number[]} array
 * @param {number} value
 */
export async function ternarySearch(array, value) {
    clearArray(array);
    let left = 0;
    checkElement(String(array[left])).style.backgroundColor = "darkgreen";
    let right = array.length - 1;
    checkElement(String(array[right])).style.backgroundColor = "darkblue";
    checkElement("display").innerHTML = "Searching for " + value + "...";
    await sleep(1000)

    while (left <= right) {
        let partitionSize = Math.floor((right - left) / 3);
        let mid1 = left + partitionSize;
        checkElement(String(array[mid1])).style.backgroundColor = "darkred";
        let mid2 = right - partitionSize;
        checkElement(String(array[mid2])).style.backgroundColor = "darkred";
        await sleep(1000)

        if (value === array[mid1]) {
            checkElement(String(array[mid1])).style.backgroundColor = "darkred";
            checkElement(String(array[mid2])).style.removeProperty("background-color");
            checkElement(String(array[right])).style.removeProperty("background-color");
            checkElement(String(array[left])).style.removeProperty("background-color");
            checkElement("display").innerHTML = "Found " + value + " at index " + mid1;
            return mid1;
        }

        if (value === array[mid2]) {
            clearArray(array);
            checkElement(String(array[mid2])).style.backgroundColor = "darkred";
            checkElement("display").innerHTML = "Found " + value + " at index " + mid2;
            return mid2;
        }

        if (value < array[mid1]) {
            checkElement(String(array[mid1])).style.removeProperty("background-color");
            checkElement(String(array[mid2])).style.removeProperty("background-color");
            checkElement(String(array[right])).style.removeProperty("background-color");
            right = mid1 - 1;
            if(right >= 0) {
                checkElement(String(array[right])).style.backgroundColor = "darkblue";
                await sleep(1000)
            }
        } else if (value > array[mid2]) {
            checkElement(String(array[mid1])).style.removeProperty("background-color");
            checkElement(String(array[mid2])).style.removeProperty("background-color");
            checkElement(String(array[left])).style.removeProperty("background-color");
            left = mid2 + 1;
            if(left < array.length) {
                checkElement(String(array[left])).style.backgroundColor = "darkgreen";
                await sleep(1000)
            }
        } else {
            checkElement(String(array[mid1])).style.removeProperty("background-color");
            checkElement(String(array[mid2])).style.removeProperty("background-color");
            checkElement(String(array[right])).style.removeProperty("background-color");
            checkElement(String(array[left])).style.removeProperty("background-color");
            left = mid1 + 1;
            right = mid2 - 1;
            if(left < array.length && right >= 0) {
                checkElement(String(array[left])).style.backgroundColor = "darkgreen";
                checkElement(String(array[right])).style.backgroundColor = "darkblue";
                await sleep(1000)
            }
        }
    }
    clearArray(array);
    checkElement("display").innerHTML = "Could not find " + value;
    return -1;
}

/**
 * @param {number[]} array
 * @param {number} value
 */
export async function jumpSearch(array, value) {
    clearArray(array)
    let blockSize = Math.floor(Math.sqrt(array.length));
    let start = 0;
    checkElement(String(array[start])).style.backgroundColor = "darkred";
    let next = blockSize;
    checkElement(String(array[next])).style.backgroundColor = "darkblue";
    checkElement("display").innerHTML = "Searching for " + value + "...";
    await sleep(1000)

    while (start < array.length && array[next - 1] < value) {
        checkElement(String(array[start])).style.removeProperty("background-color");
        start = next;
        if (start < array.length) {
            checkElement(String(array[start])).style.backgroundColor = "darkred";
            await sleep(1000)
        }
        next += blockSize;
        if (next > array.length) {
            next = array.length;
        }
        if (next < array.length) {
            checkElement(String(array[next])).style.backgroundColor = "darkblue";
            await sleep(1000)
        }
    }

    for (let i = start; i < next; i++) {
        checkElement(String(array[i])).style.backgroundColor = "darkred";
        if (array[i] === value) {
            checkElement("display").innerHTML = "Found " + value + " at index " + i;
            return i;
        }
        await sleep(1000);
        checkElement(String(array[i])).style.removeProperty("background-color");
    }
    clearArray(array);
    checkElement("display").innerHTML = "Could not find " + value;
    return -1;
}

/**
 * @param {number[]} array
 * @param {number} value
 */
export async function interpolationSearch(array, value) {
    clearArray(array);
    let start = 0;
    checkElement(String(array[start])).style.backgroundColor = "darkgreen";
    let end = array.length - 1;
    checkElement(String(array[end])).style.backgroundColor = "darkblue";
    let pos =
            start +
            Math.floor(
                ((end - start) / (array[end] - array[start])) * (value - array[start])
            );

    while (start <= end && value >= array[start] && value <= array[end]) {
        pos = start + Math.floor(((end - start) / (array[end] - array[start])) * (value - array[start]));
        checkElement(String(array[pos])).style.backgroundColor = "darkred";
        checkElement("display").innerHTML = "Searching for " + value + "...";
        await sleep(1000)

        if (array[pos] === value) {
            clearArray(array);
            checkElement(String(array[pos])).style.backgroundColor = "darkred";
            checkElement("display").innerHTML = "Found " + value + " at index " + pos;
            return pos;
        }

        if (array[pos] < value) {
            checkElement(String(array[pos])).style.removeProperty("background-color");
            checkElement(String(array[start])).style.removeProperty("background-color");
            start = pos + 1;
            if(start < array.length) {
                checkElement(String(array[start])).style.backgroundColor = "darkgreen";
                await sleep(1000)
            }
        } else {
            checkElement(String(array[pos])).style.removeProperty("background-color");
            checkElement(String(array[end])).style.removeProperty("background-color");
            end = pos - 1;
            if(end >= 0) {
                checkElement(String(array[end])).style.backgroundColor = "darkblue";
                await sleep(1000)
            }
        }
    }
    clearArray(array);
    checkElement("display").innerHTML = "Could not find " + value;
    return -1;
}

/**
 * @param {string} id
 * @throws {Error}
 * @returns {HTMLElement}
 */
function checkElement(id) {
    let element = document.getElementById(id);
    if (element === null) {
        throw new Error("Element with id " + id + " does not exist");
    }
    return element
}

/**
 * @param {number[]} array
 */
function clearArray(array) {
    for (let i = 0; i < array.length; i++) {
        checkElement(String(array[i]))?.style.removeProperty("background-color");
    }
}

/**
 * @param {number | undefined} ms
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}