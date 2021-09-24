<script lang=ts>
  export let type : string, no : number, track : string, artist :  string, length : string; 
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
      case "r-tba":
        return "remix - the ʕ ͡ ͡° ᴥ ͡ ͡° ʔ album";
        break;
    }
  }
</script>
<style lang="postcss">
  .track-wrapper {
    @apply flex items-center mt-3 bg-purple-light rounded-lg px-5 flex-row w-full;
    .track-no {
      @apply mr-3 my-6 text-yellow text-4xl font-bold;
    }
    .artist-track {
      @apply flex-grow;
      text-shadow: 0px 2px 5px rgba(0,0,0,.3);
      .artist-wrapper {
        @apply flex flex-row;
        h3 {
          @apply text-xl mt-0 mb-2 font-normal;
        }
        .flair {
          @apply text-sm leading-7 rounded-xl mt-0 mb-2 px-2 ml-3 font-bold;
        }
        .rnj-flair, .r-rnj-flair {
          @apply bg-green-lightclr text-purple-dark;
        }
        .bi-flair, .r-bi-flair {
          @apply bg-blue-lightclr;
        }
      }
      .track-name {
        @apply my-0 text-xl;
      }
      .length {
        @apply text-yellow;
      }
    }
  }
</style>
<div class="track-wrapper">
  <p class="track-no">{no}.</p>
  <div class="artist-track">
    <div class="artist-wrapper">
      <h3>{artist}</h3>
      <p class="flair {type}-flair">{resolveFlair()}</p>
    </div>
    <p class="track-name"><b>{track}</b></p>
  </div>
  <p class="length">{length}</p>
</div>
