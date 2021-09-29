<script>
  export let icon, text, color, red;
  import { colors }  from '../../../../libs/colors.ts'
  const clr = new colors();
  const clrOutput = clr.setLight(`${color}`);
</script>
<style lang="postcss">
  .green {
    @apply bg-green-light;
  }
  .blue {
    @apply bg-blue-light;
  }
  .yellow {
    @apply bg-yellow-light;
  }
  .purple {
    @apply bg-purple-light;
  }
  .large-redirect {
    @apply text-sm my-2 sm:mr-2 sm:my-5 2xl:my-8 px-2 2xl:text-xl 2xl:p-2 2xl:px-4 h-10 flex flex-row rounded shadow;
    .redirect {
      @apply font-sans leading-3;
    }
    .redirect-icon {
      @apply font-icon text-lg 2xl:text-3xl mr-1; 
      line-height: 0;
    }
  }
</style>
<a href="{red}" style="color: inherit;">
<div class="large-redirect {color}">
  {#await clrOutput}
    <p>loading</p>
  {:then col}
    <p class="redirect-icon" style="color: {col}">{icon}</p>
    <p class="redirect">{text}</p>
  {/await}
</div>
</a>
