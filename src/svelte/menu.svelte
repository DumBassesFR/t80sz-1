<script>
  import "../css/fonts.pcss"
  import "../css/menu.pcss"
  const items = [
    {
      name: "Information",
      id: "#info",
    },
    {
      name: "Our Server",
      id: "server",
    },
    {
      name: "The Archive",
      id: "archive",
    },
    {
      name: "Video Archive",
      id: "#varchive",
    },
    {
      name: "Source Code",
      id: "source",
    },
  ]
</script>

<div id="menu-base">
  <nav id="options">
    {#each items as i}
      <a href="{i.id}" alt={i.name}>
        <p class="icon icon-{i.id.replace('#', '')}" />
      </a>
    {/each}
  </nav>
</div>
