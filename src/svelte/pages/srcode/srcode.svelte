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
  import LargeRedirect from "../general/templates/lg-redirect.svelte"
  import Docs from "./docs/srdocs.svx"
  import Aura from "../general/templates/aura.svelte"
  import { fade, fly } from "svelte/transition"
  import "../../../css/pages.pcss"
</script>

<div
  class="page-gap"
  in:fly={{ y: 500, duration: 1000 }}
  out:fade={{ duration: 200 }}>
  <BackHome gradient="green" />
  <Header gradient="green" text="source code" />
  <div class="docs-gap">
    <Docs />
  </div>
  <div
    class="redirect-divider"
    in:fly={{ y: 500, duration: 1000 }}
    out:fade={{ duration: 200 }}>
    <LargeRedirect
      icon="code"
      text="Github Source"
      color="green"
      red="https://github.com/ryeenii/t80sz" />
  </div>
</div>
<Aura color="green" />
