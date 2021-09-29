<style lang="postcss">
  .album-wrapper {
    @apply flex items-center mt-3 bg-purple-light rounded-lg px-5 flex-row w-full;
    .cover-art {
      @apply mr-3 rounded shadow;
    }
    .album-info {
      @apply flex flex-col;
      h3 {
        .t80sz-head {
          @apply text-3xl mt-5 xl:text-5xl;
        }
        @apply my-0 flex flex-row;
        background: linear-gradient(
          90deg,
          #ffe500,
          #f28b27,
          #c429a9,
          #4445ff,
          #0bf131
        );
        color: transparent;
        width: fit-content;
        width: -moz-fit-content;
        width: -webkit-fit-content;
        -webkit-background-clip: text !important; /* agony */
        filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
      }
    }
    p {
      @apply text-white border-solid border-purple-lightclr border-0 border-b-2;
      .cheap-bc-logo {
        @apply my-0 mr-1 text-xl text-purple-lightclr;
      }
    }
  }
</style>

<script>
  import '../../../../assets/albumcover.png';
</script>

<div class="album-wrapper">
  <img width=150 class="cover-art" alt="Cover Art" src="./src/assets/albumcover.png">
  <div class="album-info">
    <h3><span class="t80sz-head">The 80s Zone</span></h3>
    <h3>the four year compilation</h3>
    <a
      href="https://coraspect.bandcamp.com/album/the-80s-zone-the-four-year-compilation-explicit"
      ><p>available now on <span class="cheap-bc-logo">▰</span>bandcamp</p></a>
  </div>
</div>
