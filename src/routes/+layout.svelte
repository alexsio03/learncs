<script>
    import "../app.pcss";
    import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
</script>

<nav class="flex justify-evenly p-4 drop-shadow-md dark:bg-zinc-900 dark:text-zinc-200">
    <a href="/">Home</a>
    <a href="/data-structures">Data Structures</a>
    <button>Algorithms</button>
    <Dropdown class="dark:bg-zinc-900 dark:text-zinc-200 rounded-sm">
        <DropdownItem href="/algos/sorting">Sorting</DropdownItem>
        <DropdownItem href="/algos/searching">Searching</DropdownItem>
        <DropdownItem href="/algos/path-finding">Path Finding</DropdownItem>
        <DropdownDivider/>
        <DropdownItem href="/algos/big-o">Big O</DropdownItem>
    </Dropdown>
    <a href="/languages">Languages</a>
    <a href="/faq">FAQ</a>
    <button>About</button>
    <Dropdown class="dark:bg-zinc-900 dark:text-zinc-200 rounded-sm">
        <DropdownItem href="/journey">My Journey</DropdownItem>
        <DropdownItem href="/about">About Me</DropdownItem>
    </Dropdown>
    
</nav>

<slot></slot>

<style>
    nav a:hover, nav button:hover {
        text-decoration: underline;
    }
</style>