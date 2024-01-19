<script>
  import {bio, coursework, projects } from "./data.js";   
</script>

<div class="flex flex-col h-full dark:bg-zinc-800 dark:text-zinc-400 p-6">
    <div class="mx-auto text-zinc-400 w-3/4 p-8 bg-zinc-700 rounded-lg shadow-lg">
      <div class="flex mb-4 justify-evenly">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Picture" class="w-32 h-32 rounded-full">
        <div>
          <h1 class="mt-4 text-2xl text-zinc-300 font-bold">About Me</h1>
          <p class="mt-2">{bio}</p>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2 pr-14">
          <h2 class="mt-4 text-2xl text-zinc-300 font-bold">Projects</h2>
          <hr class="w-1/2 my-3">
          {#each projects as {id, name, used, description}}
            <div id={id}  class="flex flex-col mb-6">
              <p class="text-xl text-zinc-300">{name}</p>
              <p class="text-sm">{used}</p>
              <p class="my-2">{description}</p>
            </div>
          {/each}
        </div>
        <div class="w-1/2">
          <h2 class="mt-4 text-2xl text-zinc-300 font-bold">Recent Coursework</h2>
          <hr class="w-1/2 my-3">
          {#each coursework as {id, name, description}}
            <div id={id}  class="flex flex-col mb-6">
              <p class="text-xl text-zinc-300">{name}</p>
              <p class="my-2">{description}</p>
            </div>
          {/each} 
        </div>
      </div>
    </div>
  </div>
