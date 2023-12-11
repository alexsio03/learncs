<script>
// @ts-nocheck
    import { searches } from './data.js'

    let array = []
    for (let i = 0; i < 8; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    let value = 0
    let ind = null
    let selected = null
    let working = false
    $: array = array.sort((a, b) => a - b)
    $: ind = value === null ? null : ind

    async function handleFunc(func, id) {
        selected = id
        working = true
        await func(array, value)
        working = false
    }

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
            <p class="my-auto p-2">Search for: </p>
            <input class="bg-inherit w-1/6 rounded-md h-1/2 my-auto" type="number" on:change={value = value} bind:value>
            <p class="my-auto p-2">using:</p>
            <div class="flex flex-wrap">
                {#each searches as {id, name, func}}
                    <button disabled={working} on:click={() => {handleFunc(func, id)}} class="bg-zinc-200 disabled:bg-zinc-700 disabled:text-zinc-500 rounded-md dark:bg-zinc-600 dark:text-zinc-300 p-1 my-2 mx-2">
                        {name}
                    </button>
                {/each}
            </div>
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
        <p id="display" class="mx-auto my-10">Search for a number!</p>
        {#if selected !== null}
            <div class="mx-auto w-1/2">
                <h1 class="text-2xl mb-4 text-zinc-200">{searches[selected].name}</h1>
                <p class="text-sm italic leading-loose">{searches[selected].description}</p>
            </div>
        {/if}
    </div>
</div>