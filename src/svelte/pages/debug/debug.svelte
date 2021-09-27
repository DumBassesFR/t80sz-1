<script type="typescript">
  import "../../../pages/debug/debug.pcss"
  import Base from "./templates/base"
  // add your file imports here V
  import Bobby from "../../bobby"
  import Menu from "../../menu"
  import Docs from "../info/templates/docs"
  import BackHome from "../general/templates/back-home"
  import AlbumCover from '../alb/templates/cover';
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
      name: AlbumCover,
      public: "Album Cover for t4yc",
      id: "alb-cover"
    }
  ]
</script>

<Base fetchModules={modules} type="module" />
