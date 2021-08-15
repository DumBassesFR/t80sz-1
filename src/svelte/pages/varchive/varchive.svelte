<style>
  .redirect-divider {
    @apply flex flex-col sm:flex-row;
    width: -webkit-fit-content;
    width: fit-content;
    width: -moz-fit-content;
  }
</style>

<script>
  import Header from "../general/templates/header.svelte"
  import BackHome from "../general/templates/back-home.svelte"
  import LargeRedirect from "../templates/lg-redirect.svelte"
  import Docs from "./docs/varchive.svx"
  import Aura from "../general/templates/aura.svelte"
  import { fade, fly } from "svelte/transition"
  import "../../../css/pages.pcss"
</script>

<div
  class="page-gap"
  in:fly={{ y: 500, duration: 1000 }}
  out:fade={{ duration: 200 }}>
  <BackHome gradient="blue" />
  <Header gradient="blue" text="video archive" />
  <div class="docs-gap">
    <Docs />
  </div>
  <div
    class="redirect-divider"
    in:fly={{ y: 500, duration: 1000 }}
    out:fade={{ duration: 200 }}>
    <LargeRedirect
      icon="account_balance"
      text="The Internet Archive Mirror"
      color="yellow"
      red="https://archive.org/details/@the_80s_zone" />
    <LargeRedirect
      icon="play_circle_filled"
      text="YouTube Mirror"
      color="purple"
      red="https://www.youtube.com/channel/UC_aA045hM9gjf4PamMJtAkA" />
  </div>
</div>
<Aura color="blue" />
