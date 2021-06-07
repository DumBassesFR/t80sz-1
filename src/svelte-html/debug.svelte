<script lang="typescript">
  import "../debug/debug.pcss"
  import Base from "./templates/debug/base.svelte"
  // add your file imports here V
  import Bobby from "./bobby.svelte"
  import Menu from "./menu.svelte"
  import Docs from "./pages/info/templates/docs.svelte"
  import BackHome from "./templates/back-home.svelte"
  import Slider from "./templates/info/rainbow-slider.svelte"
  // add your file debug info here V
  let modules = [
    {
      name: Bobby,
      public: "Bobby Animation Sequence",
      id: "bobby-anim",
    },
    {
      name: Menu,
      public: "Main Menu Options",
      id: "menu-opts",
    },
    {
      name: BackHome,
      public: "Back to Homepage",
      id: "back-home",
    },
    {
      name: Docs,
      public: "Documentation",
      id: "docs-base",
    },
    {
      name: Slider,
      public: "Docs/Rainbow Slider",
      id: "rainbow-slider",
    },
  ]
</script>

<Base fetchModules={modules} type="module" />
