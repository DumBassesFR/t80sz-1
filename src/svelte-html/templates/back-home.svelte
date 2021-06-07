<style lang="postcss">
  .back-button {
    @apply flex flex-row items-center px-2 text-base 2xl:text-xl mt-2 text-purple-dark shadow rounded w-auto;
    line-height: 0;
    .back-icon {
      @apply font-icon mr-1;
    }
  }
  .back-icon,
  .back-text {
    @apply filter-drop-shadow-sm filter;
  }
</style>

<script>
  import { colors } from "../../libs/colors.ts"
  export let gradient
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

<a href="#home">
  {#await gradProm}
    <div class="back-button" style="background: #eee;">
      <p class="back-icon">home</p>
      <p class="back-text">back to homepage</p>
    </div>
  {:then grad}
    <div class="back-button" style="background-image: {grad};">
      <p class="back-icon">home</p>
      <p class="back-text">back to homepage</p>
    </div>
  {/await}
</a>
