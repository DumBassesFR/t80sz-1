<script>
  import Menu from "./menu.svelte"
  import Info from "./pages/info/info.svelte";
  import Bobby from "./bobby.svelte"
  import AlbumBump from "./alb-bump.svelte";
  import VArchive from './pages/varchive/varchive.svelte'
  import NA from "./status-code/unavailable.svelte"
  import SourceCode from "./pages/srcode/srcode.svelte"
  let activePage = Bobby
  let defBg = "#150411"
  let lightBg = "purple"
  document.body.style.backgroundColor = defBg
  function activeChange() {
    switch (location.hash) {
      case "#info":
        activePage = Info
        defBg = "#151004"
        lightBg = "yellow"
        break
      case "#server":
        activePage = "Server"
        defBg = "#180902"
        break
      case "#archive":
        activePage = "Archive"
        defBg = "#16030D"
        break
      case "#varchive":
        activePage = VArchive
        defBg = "#0E0316"
        lightBg = "blue"
        break
      case "#source":
        activePage = SourceCode
        defBg = "#061603"
        lightBg = "green"
        break
      case "#home":
        activePage = Bobby
        defBg = "#150411"
        lightBg = "purple"
        break
    }
    document.body.style.backgroundColor = defBg
  }
  window.addEventListener("hashchange", function () {
    activeChange()
  })
  if (location.hash) {
    activeChange()
  }
</script>

<div id="main-menu">
  <Menu bg={lightBg} />
  {#if activePage == Bobby}
    <Bobby />
    <AlbumBump />
  {:else if typeof activePage === "string"}
    <NA name={activePage} />
  {:else}
    <svelte:component this={activePage} />
  {/if}
</div>
