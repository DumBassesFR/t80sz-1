<style lang="postcss">
  #grad-header {
    @apply bg-clip-text font-sans inline py-1 sm:px-1 text-5xl 2xl:text-8xl sm:text-6xl leading-10 mx-0 my-0 2xl:mt-4 filter bdf-drop-shadow-md;
    color: transparent;
    width: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    -webkit-background-clip: text !important; /* i fucking hate this */
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
  }
</style>

<script type="typescript">
  import { colors } from "../../../../libs/colors"
  export let gradient
  export let text
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
