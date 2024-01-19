<script>
// @ts-nocheck
    let array = []
    for (let i = 0; i < 8; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    let value = 0
    $: array = array.sort((a, b) => a - b)


    function addNumber() {
        let newNum = Math.floor(Math.random() * 100)
        array = [...array, newNum]
    }

    function delNumber() {
        array = array.slice(0, array.length - 1)
    }
</script>

<div class="flex p-8 dark:bg-zinc-800 dark:text-zinc-400 w-screen h-screen">
    <div class="flex overflow-scroll flex-col mx-auto h-fit">
        <div class="flex flex-row mx-auto my-4">
            <p class="my-auto p-2">Sort using: </p>
        </div>
        <div id="array" class="mx-auto flex flex-row">
            {#each array as num}
            <button on:click={() => {value = num}} id="{num}" class="bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 p-4 my-2">
                {num}
            </button>
        {/each}
        </div>
        <div class="mx-auto">
            <button class="mx-8" on:click={delNumber}>-</button>
            <button class="mx-8" on:click={addNumber}>+</button>
        </div>
   </div>
</div>
