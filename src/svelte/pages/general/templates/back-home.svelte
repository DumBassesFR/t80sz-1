<style lang="postcss">
  .back-button {
    @apply my-6 flex flex-row items-center px-2 2xl:px-4 text-base font-bold 2xl:text-xl mt-2 text-purple-dark shadow rounded w-auto;
    line-height: 0;
    width: --moz-fit-content;
    width: fit-content;
    width: --webkit-fit-content;
    text-shadow: 0px 2px 5px rgba(0,0,0,.3);
    .back-icon {
      @apply font-icon mr-1;
    }
  }
  .back-icon,
  .back-text {
    @apply filter-drop-shadow-sm filter;
  }
</style>

<script type="typescript">
  import { colors } from "../../../../libs/colors"
  export let gradient: string
  export let href = "default"
  async function gradSelection(g: string) {
    const clr = await new colors()
    return new Promise(async (resolve) => {
      await clr.setGradient(g).then((value) => {
        resolve(value)
      })
    })
  }
  function redirectTo() {
    if (href == "default") {
      return "#home"
    } else {
      return "/"
    }
  }
  const gradProm = gradSelection(gradient)
</script>

<a style="text-decoration: none;" href="{redirectTo()}">
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
