<script>
    let array = [1, 2,3,4,5]

    function addNumber() {
        let newNum = Math.floor(Math.random() * 100)
        array = [...array, newNum]
    }

    function delNumber() {
        array = array.slice(0, array.length - 1)
    }
</script>

<div class="flex p-8 dark:bg-zinc-800 dark:text-zinc-400 h-screen">
    <div class="flex flex-row h-fit">
        <button class="mx-8" on:click={delNumber}>-</button>
        {#each array as num}
            <div class="bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-300 p-4 my-2">
                {num}
            </div>
        {/each}
        <button class="mx-8" on:click={addNumber}>+</button>
    </div>
</div>