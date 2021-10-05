import "svelte"
import Base from "../svelte/base.svelte"
import { colors } from "../libs/colors";
const col = new colors();
async function loadElements() {
  new Base({
    target: document.body,
  })
}
loadElements().then(() => {
  console.log(
    `%c
          |
     ▁▁▁▁▁▁▁▁▁▁
    /          \\
   | ▁  . ◡ . ▁ | The 80s Zone, ${new Date(Date.now()).getFullYear()}
   ██████████████ Contribute to this site! Read the Source page 
    \\__________/  for more information!
    `,
    `font-weight: bold; 
     font-size: 10px;
     color: white; 
     text-shadow: 1.5px 1.5px 0 black, 
     2px 2px 0 ${col.lightColors[0]},
     4px 4px 0 ${col.lightColors[1]}, 
     6px 6px 0 ${col.lightColors[2]}, 
     7px 7px 0 ${col.lightColors[3]}; 
     margin-bottom: 12px;`
  );
})
