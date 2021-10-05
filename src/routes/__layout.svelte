<script context="module">
    // @ts-check
    /**
     * @type {import("@sveltejs/kit").Load}
     * @param loadInput
     */
    export const load = async (loadInput) => {
        // this works
        // const res = await loadInput.fetch('http://localhost:3000/no-svelte');

        // this doesn't
        const res = await loadInput.fetch('/no-svelte');

        const foo = await res.text();

        return {
            props: { 
                foo
            }
        };
    }
</script>

<script>
    export let foo;
</script>

{foo}

<slot />