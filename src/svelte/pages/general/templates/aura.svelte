<script lang="typescript">
  export let color: string;
  import { colors } from '../../../../libs/colors';
  const clr = new colors();
  const clrOutput = clr.splitHex(color);
  console.log(clrOutput);
  import { fade } from 'svelte/transition';
</script>
<style lang="postcss">
  #aura {
    @apply fixed overflow-hidden;
    left: 93vw;
    top: -100vh;
    stroke-dashoffset: 2900;
    animation: aura 2s ease-in-out forwards;
    animation-fill-mode: forwards;
    transform: scale(1);
  }
  @media only screen and (min-width: 1440px) and (max-height: 2040px) {
    #aura {
      top: -50vh;
      transform: scale(1);
    }
  }
  @media only screen and (min-width: 2040px) {
    #aura {
      top: 10vh;
      transform: scale(1.5);
    }
  }
  @keyframes aura {
    0% {
      stroke-dasharray: 3000;
      stroke-dashoffset: 2900;
    }
    100% {
      stroke-dasharray: 0;
      stroke-dashoffset: 0;
    }
  }
</style>
{#await clrOutput}
  <div id="pending"/>
{:then col}
  <div id=aura out:fade={{duration: 200}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="366" height="1713" fill="none">
    <path 
      stroke="url(#paint0_linear)" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="200" 
      d="M265 101C159 287 33 1059 141 1612"/>
    <defs>
      <linearGradient 
       id="paint0_linear" 
       x1="162.1" 
       x2="162.1" 
       y1="1715.5" 
       y2="467" 
       gradientUnits="userSpaceOnUse">
        <stop stop-color="{col[0]}"/>
        <stop offset="1" stop-color="{col[1]}"/>
      </linearGradient>
    </defs>
  </svg>
  </div>
{/await}
