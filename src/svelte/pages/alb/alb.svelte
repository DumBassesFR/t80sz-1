<script>
  import Header from "../general/templates/header.svelte"
  import Aura from "../general/templates/aura.svelte"
  import BackHome from "../general/templates/back-home.svelte"
  import "../../../css/pages.pcss"
  import Track from "./templates/track.svelte"
  import AlbInfo from "./templates/alb-info.svelte";
  import Cover from "./templates/cover.svelte"
  import { fly, fade } from "svelte/transition"
</script>

<style lang="postcss">
  @media (max-width: 1024px) {
    .tracklist {
      width: 75vw !important;
      height: 73vh !important;
    }
  }
  @media (min-height: 800px) {
    .tracklist {
      height: 75vh !important;
    }
  }
  .tracklist {
    @apply overflow-x-hidden overflow-y-scroll flex flex-col items-start pr-12;
    width: 45vw;
    height: 25%;
  }
  .album-wrapper {
    @apply flex flex-row;
  }
</style>
<div
  class="page-gap"
  in:fly={{ y: 500, duration: 1000 }}
  out:fade={{ duration: 200 }}>
  <BackHome gradient="rainbow" />
  <Aura color="rainbow" />
  <Header gradient="rainbow" text="album info" />
  <div class="album-wrapper">
  <div class="tracklist">
    <AlbInfo/>
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
    <Track
      track="A$$ CROSSING"
      artist="I Am Jemboy"
      no="6"
      length="3:19"
      type="tba" />
    <Track
      track="Ten Camp Commandments"
      artist="I Am Jemboy"
      no="7"
      length="2:34"
      type="tba" />
    <Track
      track="Soundclown Showdown!"
      artist="Nickster"
      no="8"
      length="3:31"
      type="r-rnj" />
    <Track
      track="Ten Camp Commandments (Remix)"
      artist="Lumsynwave"
      no="9"
      length="3:56"
      type="r-tba" />
    <Track
      track="/STORAGE/EMULATED/0/BOOTANIMATION.png"
      artist="rini"
      no="10"
      length="0:28"
      type="bi" />
    <Track
      track="強くなって、ストライクアップ (part. GUNTROL)"
      artist="Hidden Leaf Village"
      no="11"
      length="3:00"
      type="bi" />
    <Track
      track="JOYNER LUCAS PRESENTS"
      artist="Wobble"
      no="12"
      length="3:49"
      type="bi" />
    <Track
      track="BAKA DRIVER"
      artist="rini"
      no="13"
      length="3:14"
      type="bi" />
    <Track
      track="HELILJON NEST"
      artist="KurtTheKing"
      no="14"
      length="2:46"
      type="bi" />
    <Track
      track="Thank You"
      artist="rini"
      no="15"
      length="3:49"
      type="bi" />
    <Track
      track="Fantasy"
      artist="Saynoz"
      no="16"
      length="2:46"
      type="ext" />
    <Track
      track="Fantasy (Remix)"
      artist="LOSER//99"
      no="17"
      length="3:32"
      type="r-ext" />
  </div>
  <Cover />
  </div>
</div>
