<style lang="postcss">
  @import "../../../../css/vars.pcss";
  @media (min-width: 1280px) {
    .track-no {
      font-size: 2.25rem;
    }
  }
  @media (min-width: 1024px) {
    .artist-wrapper h3, .track-name {
      font-size: 1.5rem; 
    }
    .artist-wrapper .flair {
      font-size: 0.75rem;
    }
  }
  .track-wrapper {
    display: flex;
    align-items: center;
    margin-top: 0.75rem;
    background-color: var(--purple-light);
    border-radius: 1rem;
    padding: 1.25rem 0.5rem;
    flex-direction: row;
    width: 100%;
    user-select: none;
    .track-no {
      margin-right: 0.75rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      color: #ffe500;
      font-size: 2.25rem;
      font-weight: 700;
    }
    .preview {
      font-family: var(--icon-font);
      border-radius: 100%;
      color: var(--purple-dark);
      background-color: var(--yellow);
      cursor: pointer;
      padding: 0px 2px;
    }
    .artist-track {
      flex-grow: 1;
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      .artist-wrapper {
        display: flex;
        flex-direction: row;
        h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-weight: 400;
          font-size: 1rem;
        }
        .flair {
          line-height: 1.75rem;
          border-radius: 100%;
          margin-top: 0;
          margin-bottom: 0.5rem;
          padding: 0.5rem 0;
          margin-left: 0.25rem;
          font-weight: 700;
          font-size: 0.5rem;
        }
        .rnj-flair,
        .r-rnj-flair {
          background-color: var(--green-light);
          color: var(--purple-dark);
        }
        .tba-flair,
        .tla-flair,
        .r-tla-flair {
          background-color: var(--pink-light);
        }
        .ext-flair,
        .r-ext-flair {
          background-color: var(--yellow-light);
          color: var(--purple-dark);
        }
        .bi-flair,
        .r-bi-flair {
          background-color: var(--blue-light);
        }
      }
      .track-name {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1rem;
      }
      .length {
        color: #ffe500;
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
