<style lang="postcss">
  #grad-header {
    @apply bg-clip-text inline mb-2 mt-0 px-1 text-5xl leading-5 filter bdf-drop-shadow-md;
    color: transparent;
    -webkit-background-clip: text !important; /* i fucking hate this */
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
  }
</style>

<script type="typescript">
  import { colors } from "../../../../libs/colors"
  export let gradient
  export let text
  console.log(gradient)
  async function gradSelection(g: string) {
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
