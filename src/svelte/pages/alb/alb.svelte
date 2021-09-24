<script>
  import Header from "../general/templates/header.svelte"
  import Aura from "../general/templates/aura.svelte"
  import BackHome from "../general/templates/back-home.svelte"
  import "../../../css/pages.pcss"
  import Track from "./templates/track.svelte"
  import { fly, fade } from "svelte/transition"
</script>

<style lang="postcss">
  .tracklist {
    @apply overflow-x-hidden overflow-y-scroll flex flex-col items-start pr-8;
    width: 45vw;
    height: 30vw;
  }
</style>
<div
  class="page-gap"
  in:fly={{ y: 500, duration: 1000 }}
  out:fade={{ duration: 200 }}>
  <BackHome gradient="rainbow" />
  <Aura color="rainbow" />
  <Header gradient="rainbow" text="album info" />
  <div class="tracklist">
    <Track
      track="Hidden Leaf Village Anthem"
      artist="Wobble"
      no="1"
      length="1:03"
      type="rnj" />
    <Track
      track="Cena's Come Back"
      artist="Wobble x Rini"
      no="2"
      length="1:38"
      type="rnj" />
    <Track
      track="SUNSETSU!"
      artist="Wobble"
      no="3"
      length="0:58"
      type="rnj" />
    <Track
      track="I am Juggernaut (The Duel!)"
      artist="Wobble"
      no="4"
      length="1:55"
      type="rnj" />
    <Track
      track="Hidden Leaf Village Anthem (Reprise)"
      artist="Wobble"
      no="5"
      length="1:26"
      type="rnj" />
  </div>
</div>
