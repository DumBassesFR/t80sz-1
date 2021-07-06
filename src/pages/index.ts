import "svelte"
import Base from "../svelte/base.svelte"
async function loadElements() {
  new Base({
    target: document.body,
  })
}
loadElements().then(() => {
  console.log(
    "%cTHE 80's ZONE",
    "color: fuchsia; font-size: 3em; font-family: Comic Sans MS;"
  )
  console.log(
    "%cbest site in the game scene",
    "color: fuchsia; font-family: Comic Sans MS;"
  )
})
