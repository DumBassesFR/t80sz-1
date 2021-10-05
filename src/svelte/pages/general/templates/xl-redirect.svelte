<script lang="ts">
  export let icon: string, text: string, color: string;
  import { colors }  from '../../../../libs/colors'
  const clr = new colors();
  const clrOutput = clr.setLight(`${color}`);
</script>
<style lang="postcss">
  .xl-wrapper {
    @apply transition-all ease-in-out transform duration-150 mt-3 flex justify-center mx-2 items-center flex-col p-2 2xl:p-3 rounded shadow;
    user-select: none;
    cursor: pointer;
    &:hover {
      @apply transform scale-105 font-bold px-4 2xl:px-5;
    }
    h3 {
      @apply text-3xl 2xl:text-5xl font-icon my-0 mt-5;
    }
    p {
      @apply text-lg 2xl:text-xl text-white font-sans px-5;
    }
  }
  .green {
    @apply bg-green-light;
  }
  .blue {
    @apply bg-blue-light;
  }
  .yellow {
    @apply bg-yellow-light;
  }
  .orange {
    @apply bg-orange-light;
  }
  .purple {
    @apply bg-purple-light;
  }
</style>
<div class="xl-wrapper {color}">
  {#await clrOutput}
    <p>loading</p>
  {:then col}
    <h3 style="color: {col}">{icon}</h3>
    <p>{text}</p>
  {/await}
</div>
