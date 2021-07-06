<script type="typescript">
  import "../../../debug/debug.pcss"
  import Base from "./templates/base"
  // add your file imports here V
  import Bobby from "../../bobby"
  import Menu from "../../menu"
  import Docs from "../info/templates/docs"
  import BackHome from "./templates/back-home"
  import Info from "../info/info"
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
      name: Info,
      public: "Docs/Information Page",
      id: "info",
    },
  ]
</script>

<Base fetchModules={modules} type="module" />
