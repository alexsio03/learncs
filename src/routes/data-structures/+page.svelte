<script>
// @ts-nocheck
    import { Accordion, AccordionItem } from 'flowbite-svelte';
    export let data;

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth',
        });
    }
</script>

<div class="flex dark:bg-zinc-800 dark:text-zinc-400">
    <div class="bg-zinc-200 border-r-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 p-4 min-w-fit h-screen items-start flex flex-col">
        {#each data.structs as {id, name}}
            {#if id === "tree"}
                <Accordion flush>
                    <AccordionItem borderBottomClass=''>
                        <span class="w-32 font-normal text-zinc-300" slot="header">Trees</span>
                        <div class="flex -mt-6 -mb-4 flex-col border-6">
                        {#each name as {id, name}}
                            <a href={"#" + id} on:click|preventDefault={scrollIntoView} class="my-4 text-zinc-300 hover:underline">
                                {name}
                            </a>
                        {/each}
                        </div>
                    </AccordionItem>
                </Accordion>
            {:else}
                <a href={"#" + id} on:click|preventDefault={scrollIntoView} class="my-4 hover:underline">
                    {name}
                </a>
            {/if}
        {/each}
    </div>
    <div class="h-screen overflow-scroll">
        {#each data.structs as { id, name, wiki, description, example }}
            {#if id === "tree"}
                {#each name as {id, name, wiki, description, example}}
                    <div id={id} class="flex flex-col p-4">
                        <h1 class="text-2xl text-zinc-300 font-bold">{name}</h1>
                            <p class="text-zinc-400 py-3">{description}<a class="mt-[0.8rem] ml-1 text-xs text-sky-600 hover:underline" href={wiki}>Learn more</a></p>
                        <div class="mx-auto">
                            <h1>{example}</h1>
                        </div>
                    </div>
                    <hr class="h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700">
                {/each}
            {:else}
                <div id={id} class="flex flex-col p-4">
                    <h1 class="text-2xl text-zinc-300 font-bold">{name}</h1>
                        <p class="text-zinc-400 py-3">{description}<a class="mt-[0.8rem] ml-1 text-xs text-sky-600 hover:underline" href={wiki}>Learn more</a></p>
                    <div class="mx-auto">
                        <h1>{example}</h1>
                    </div>
                </div>
                <hr class="h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700">
            {/if}
        {/each}
    </div>
</div>