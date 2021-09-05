<script type="typescript">
  import "../../../css/info.pcss"
  import "../../../css/pages.pcss"
  import AboutUs from "./docs/AboutUs.svx"
  import AboutTheTeam from "./docs/AboutTeam.svx"
  import BackHome from "../general/templates/back-home.svelte"
  import Aura from "../general/templates/aura.svelte"
  import { fly, fade } from "svelte/transition"
  const array = [AboutUs, AboutTheTeam]
  let selItem: object = AboutUs
  const clrs = ["#ffe500", "#f29b27", "#c429a9", "#4445ff", "#0bf131"]
  let slrClr = ""
  let slrVal = 5
  let chapMode: boolean = false
  let slidr
  class Slider {
    async splitArr() {
      return new Promise((resolve) => {
        let numlist = 0
        for (let el in array) {
          if (array[el]) {
            numlist++
          } else {
            array.splice(el, 1)
          }
        }
        resolve(array)
      })
    }
    async colorSplit() {
      const arry: string[] = await this.splitArr()
      return new Promise((resolve, reject) => {
        const patterns = [
          { sequence: 1, scheme: [2] },
          { sequence: 2, scheme: [0, 4] },
          { sequence: 3, scheme: [0, 2, 4] },
          { sequence: 4, scheme: [0, 1, 2, 4] },
          { sequence: 3, scheme: [0, 1, 2, 3, 4] },
        ]
        try {
          if (!arry.length || arry.length <= 1) {
            reject("no elements")
          } else {
            let i: number = 0
            let p: number = 0
            let iar: string[] = []
            arry.forEach((el) => {
              patterns.forEach((pat) => {
                if (i != arry.length) {
                  if (pat.sequence == arry.length) {
                    pat.scheme.forEach((sch) => {
                      iar[p] = clrs[sch]
                      p++
                    })
                  }
                  i++
                } else {
                  resolve(iar)
                }
              })
            })
          }
        } catch {
          reject("welp, something is not working here")
        }
      })
    }
    async combineAll() {
      const promSplit = await Promise.all([this.splitArr(), this.colorSplit()])
      return new Promise((resolve) => {
        let it = 0
        let ic = 0
        let iad = []
        const vTS = (obj: object) => Object.keys(obj)[0]
        promSplit[0].forEach((element: object) => {
          iad[it] = {}
          iad[it].text = element.name
          iad[it].el = element
          iad[it].no = promSplit[0].length
          iad[it].crno = it
          it++
        })
        promSplit[1].forEach((element) => {
          iad[ic].color = element
          ic++
        })
        resolve(iad)
      })
    }
    colorSwap(val: number) {
      if (val >= 0 && val <= 15) {
        slrClr = clrs[0]
      } else if (val >= 15 && val <= 35) {
        slrClr = clrs[1]
      } else if (val >= 35 && val <= 75) {
        slrClr = clrs[2]
      } else if (val >= 75 && val <= 90) {
        slrClr = clrs[3]
      } else if (val >= 90) {
        slrClr = clrs[4]
      }
      return slrClr
    }
    changeVal(val: object) {
      selItem = val
      const chck = this.checkChap()
      chck.then((resp) => {
        if (resp) {
          this.shSlider()
        }
      })
    }
    changePos(val: object[], no: number) {
      switch (no) {
        case 4:
          slidr.value = 91
          break
        case 3:
          if (val.length === 5) {
            slidr.value = 76
          } else {
            slidr.value = 91
          }
          break
        case 2:
          if (val.length >= 4) {
            slidr.value = 36
          } else {
            slidr.value = 91
          }
          break
        case 1:
          if (val.length > 2) {
            slidr.value = 16
          } else {
            slidr.value = 91
          }
          break
        case 0:
          slidr.value = 5
      }
      this.colorSwap(slidr.value)
    }
    async hitBox(val: number) {
      return new Promise((resolve) => {
        if (val >= 0 && val <= 15) {
          resolve(0)
        } else if (val >= 15 && val <= 35) {
          const ftc = this.splitArr()
          ftc.then((value: object[]) => {
            if (value.length == 5 || value.length == 4) {
              resolve(1)
            } else {
              resolve(0)
            }
          })
        } else if (val >= 35 && val <= 75) {
          const ftc = this.splitArr()
          ftc.then((value: object[]) => {
            if (value.length >= 3) {
              resolve(2)
            } else {
              resolve(0)
            }
          })
        } else if (val >= 75 && val <= 95) {
          const ftc = this.splitArr()
          ftc.then((value: object[]) => {
            if (value.length >= 4) {
              resolve(3)
            } else {
              resolve(1)
            }
          })
        } else if (val >= 95) {
          const ftc = this.splitArr()
          ftc.then((value: object[]) => {
            resolve(value.length - 1)
          })
        }
      })
    }
    async checkChap() {
      return new Promise((resolve) => {
        const wdt: number = window.screen.width
        if (wdt < 1024) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    }
    shSlider() {
      const chck = this.checkChap()
      chck.then((resp) => {
        if (resp) {
          if (chapMode) {
            chapMode = false
          } else {
            chapMode = true
          }
        } else {
          chapMode = false
        }
      })
    }
  }
  const slr = new Slider()
  const fetchAll = slr.combineAll()
</script>

<div
  class="page-gap"
  in:fly={{ y: 1200, duration: 1000 }}
  out:fade={{ duration: 500 }}>
  <div class="variant-button" style="display: flex;">
    <BackHome gradient="yellow" />
    <div
      class="chap-button"
      style="background-image: linear-gradient(90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%);"
      on:click={() => slr.shSlider()}>
      <p class="chap-icon">book</p>
      <p class="chap-text">chapters</p>
    </div>
  </div>
  <div class="docs-gap" name="info">
    <svelte:component this={selItem} />
  </div>
  <Aura color="yellow" />
  {#await fetchAll}
    <p>loading elements</p>
  {:then arr}
    <div class="chapters active-{chapMode}">
      <div class="slider">
        <input
          type="range"
          bind:value={slrVal}
          bind:this={slidr}
          on:mouseup={() => {
            const hb = slr.hitBox(slrVal)
            hb.then((hbx) => {
              slr.changeVal(arr[hbx].el)
            })
          }}
          on:touchend={() => {
            const hb = slr.hitBox(slrVal)
            hb.then((hbx) => {
              slr.changeVal(arr[hbx].el)
            })
          }}
          on:input={() => slr.colorSwap(slrVal)}
          class="rainbow-slider"
          style="--slr-clr: {slrClr || clrs[0]};" />
      </div>
      <div class="offset-{arr[0].no} chapter-contents">
        {#each arr as el}
          <p
            style="--selected-color: {el.color}"
            on:click={() => {
              slr.changeVal(el.el)
              slr.changePos(arr, el.crno)
            }}>
            {el.crno + 1}. {el.text
              .match(/[A-Z][a-z]+|[0-9]+/g)
              .join(" ")
              .toLowerCase()}
          </p>
        {/each}
      </div>
    </div>
  {:catch}
    <p>pp, something went wrong</p>
  {/await}
</div>
