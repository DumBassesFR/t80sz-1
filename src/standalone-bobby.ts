// Because, why not?
import "svelte"
import Bobby from "./svelte/bobby.svelte"
async function loadElements() {
  new Bobby({
    target: document.body,
  })
}
loadElements()
