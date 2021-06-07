<style lang="postcss">
  #grad-header {
    @apply bg-clip-text inline mb-2 mt-0 px-1;
    font-size: 2.25em;
    line-height: 1.1em;
    color: transparent;
    -webkit-background-clip: text !important; /* i fucking hate this */
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
  }
</style>

<script>
  import { colors } from "../../libs/colors.ts"
  export let gradient
  export let text
  console.log(gradient)
  async function gradSelection(g) {
    const clr = await new colors()
    return new Promise(async (resolve) => {
      await clr.setGradient(g).then((value) => {
        resolve(value)
      })
    })
  }
  const gradProm = gradSelection(gradient)
</script>

{#await gradProm}
  <h1 id="grad-header" style="background: #eee;">loading</h1>
{:then grad}
  <h1 id="grad-header" style="background: {grad};">
    {text}
  </h1>
{/await}
