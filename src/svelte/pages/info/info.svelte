<script type="typescript">
  import "../../../css/info.pcss"
  import "../../../css/pages.pcss"
  import AboutUs from "./docs/AboutUs.svx"
  import AboutTheTeam from "./docs/AboutTeam.svx"
  import BackHome from "../general/templates/back-home.svelte"
  import Aura from "../general/templates/aura.svelte"
  import { colors } from "../../../libs/colors"
  import { fly, fade } from "svelte/transition"
  const array = [AboutUs, AboutTheTeam]
  let selItem: object = AboutUs
  let slrClr: string
  let slrVal: number = 5
  let chapMode: boolean = false
  let slidr: object
  class Slider {
    async splitArr() {
      return new Promise((resolve) => {
        let numlist: number = 0
        for (let el: object in array) {
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
        try {
          if (!arry.length || arry.length <= 1) {
            reject("no elements")
          } else {
            let i = 0,
              p = 0
            let iar: string[] = []
            const clr = new colors()
            arry.forEach((el) => {
              clr.patterns.forEach((pat) => {
                if (i != arry.length) {
                  if (pat.sequence == arry.length) {
                    pat.scheme.forEach((sch) => {
                      iar[p] = clr.stdColors[sch]
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
      const clr = new colors()
      const selClr = () => {
        const clrRange = [
          { min: 0, max: 15, col: clr.stdColors[0] },
          { min: 15, max: 45, col: clr.stdColors[1] },
          { min: 45, max: 75, col: clr.stdColors[2] },
          { min: 75, max: 90, col: clr.stdColors[3] },
          { min: 90, max: 100, col: clr.stdColors[4] },
        ]
        const found = clrRange.find((x) => val >= x.min && val <= x.max)
        if (!found) {
          return clr.stdColors[0]
        }
        return found.col
      }
      slrClr = selClr()
      return slrClr
    }
    changeVal(val: object) {
      selItem = val
      const chck = this.checkChap()
      chck.then((resp) => {
        resp ? this.shSlider() : undefined
      })
    }
    changePos(val: object[], no: number) {
      switch (no) {
        case 4:
          slidr.value = 91
          break
        case 3:
          val.length === 5 ? (slidr.value = 76) : (slidr.value = 91)
          break
        case 2:
          val.length >= 4 ? (slidr.value = 36) : (slidr.value = 91)
          break
        case 1:
          val.length > 2 ? (slidr.value = 51) : (slidr.value = 91)
          break
        case 0:
          slidr.value = 5
      }
      this.colorSwap(slidr.value)
    }
    async hitBox(val: number) {
      return new Promise((resolve) => {
        const ftc = this.splitArr()
        if (val >= 0 && val <= 15) {
          resolve(0)
        } else if (val >= 15 && val <= 45) {
          ftc.then((value: object[]) => {
            value.length == 5 || value.length == 4 ? resolve(1) : resolve(0)
          })
        } else if (val >= 45 && val <= 75) {
          ftc.then((value: object[]) => {
            value.length >= 3 ? resolve(2) : resolve(0)
          })
        } else if (val >= 75 && val <= 95) {
          ftc.then((value: object[]) => {
            value.length >= 4 ? resolve(3) : resolve(1)
          })
        } else if (val >= 95) {
          ftc.then((value: object[]) => {
            resolve(value.length - 1)
          })
        }
      })
    }
    async checkChap() {
      return new Promise((resolve) => {
        const wdt: number = window.screen.width
        wdt < 1024 ? resolve(true) : resolve(false)
      })
    }
    shSlider() {
      const chck: boolean = this.checkChap()
      chck.then((resp) => {
        resp
          ? chapmode
            ? (chapMode = false)
            : (chapMode = true)
          : (chapMode = false)
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
          style="--slr-clr: {slrClr || '#FFE500'};" />
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
