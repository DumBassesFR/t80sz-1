<style lang="postcss">
  .track-wrapper {
    @apply flex items-center mt-3 bg-purple-light rounded-lg px-5 flex-row w-full;
    user-select: none;
    .track-no {
      @apply mr-3 my-6 text-yellow text-2xl lg:text-3xl lg:text-4xl font-bold;
    }
    .preview {
      @apply font-icon rounded-full text-purple-dark bg-yellow;
      cursor: pointer;
      padding: 0px 2px;
    }
    .artist-track {
      @apply flex-grow;
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      .artist-wrapper {
        @apply flex flex-row;
        h3 {
          @apply text-base lg:text-xl mt-0 mb-2 font-normal;
        }
        .flair {
          @apply text-xs lg:text-sm leading-7 rounded-full mt-0 mb-2 px-2 ml-1 xl:ml-3 font-bold;
        }
        .rnj-flair,
        .r-rnj-flair {
          @apply bg-green-lightclr text-purple-dark;
        }
        .tba-flair,
        .tla-flair,
        .r-tla-flair {
          @apply bg-purple-lightclr;
        }
        .ext-flair,
        .r-ext-flair {
          @apply bg-yellow-lightclr text-purple-dark;
        }
        .bi-flair,
        .r-bi-flair {
          @apply bg-blue-lightclr;
        }
      }
      .track-name {
        @apply my-0 text-base lg:text-xl;
      }
      .length {
        @apply text-yellow;
      }
    }
  }
</style>

<script lang=ts>
  export let type : string, no : number, track : string, artist :  string, length : string; 
  // let hoverMode : boolean = false;
  // let playing : boolean = false;
  // let str : string = 'play_arrow';
  function resolveFlair() {
    switch(type) {
      case "r-rnj":
        return "remix - rhythm no jutsu";
        break;
      case "rnj":
        return "rhythm no jutsu";
        break;
      case "bi":
        return "believe it ep";
        break;
      case "r-bi":
        return "remix - believe it ep";
        break;
      case "tba":
        return "the ʕ ͡ ͡° ᴥ ͡ ͡° ʔ album";
        break;
      case "tla":
        return "the ( ͡°ᴥ ͡° ʋ) album"
        break;
      case "r-tla":
        return "remix - the ( ͡°ᴥ ͡° ʋ) album";
        break;
      case "ext":
        return "extras";
        break;
      case "r-ext":
        return "remix - extras";
        break;
    }
  }
  function resolveString() {
    playing ?  (str = 'pause') : (str = 'play_arrow')
  }
  // import(`../../../../assets/alb/t4yc-${no}.mp3`);
  //const aud = new Audio(`./src/assets/t4yc-${no}.mp3`);
</script>

<div
  class="track-wrapper"
  on:mouseout={() => {
   // hoverMode = false
  }}
  on:mouseover={() => {
   // hoverMode = true
  }}>
  <!--
  {#if hoverMode}
    <p
      class="track-no preview"
      on:click={() => {
      if (playing) { 
        aud.pause();
        playing = false;
        resolveString();
      }
      else {
        playing = true
        resolveString();
        aud.play();
        aud.addEventListener('ended', () => {
          playing = false
          resolveString();
        })
      }
      }}>
      {str}
    </p>
  {:else}
  -->
    <p class="track-no">{no}.</p>
  <!--{/if}-->
  <div class="artist-track">
    <div class="artist-wrapper">
      <h3>{artist}</h3>
      <p class="flair {type}-flair">{resolveFlair()}</p>
    </div>
    <p class="track-name"><b>{track}</b></p>
  </div>
  <p class="length">{length}</p>
</div>
