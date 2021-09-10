const gradients = [
  "linear-gradient(90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(242,139,39,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%)",
  "linear-gradient(90deg,  rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%)",
  "linear-gradient(90deg, rgba(11,241,49,1) 0%, rgba(32,179,123,1) 100%)",
]
export class colors {
  lightColors = [ "#FFEA33", "#F39132", "#D054BA", "#696AFF", "#3CF45A" ]
  stdColors = [ "#FFE500", "#F28B27", "#C429A9", "#4445FF", "#0BF131" ]
  patterns = [
    { sequence: 1, scheme: [2] },
    { sequence: 2, scheme: [0, 4] },
    { sequence: 3, scheme: [0, 2, 4] },
    { sequence: 4, scheme: [0, 1, 2, 4] },
    { sequence: 3, scheme: [0, 1, 2, 3, 4] },
  ]
  async setGradient(grad: string) {
    return new Promise((resolve) => {
      switch (grad) {
        case "yellow":
          resolve(gradients[0])
          break
        case "orange":
          resolve(gradients[1])
          break
        case "purple":
          resolve(gradients[2])
          break
        case "blue":
          resolve(gradients[3])
          break
        case "green":
          resolve(gradients[4])
          break
      }
    })
  }
  async setLight(clr: string) {
    return new Promise((resolve) => {
      switch(clr) {
        case "yellow":
          resolve(this.lightColors[0])
          break;
        case "orange":
          resolve(this.lightColors[1])
          break;
        case "purple":
          resolve(this.lightColors[2])
          break;
        case "blue":
          resolve(this.lightColors[3])
          break;
        case "green":
          resolve(this.lightColors[4])
          break;
      }
    });
  }
  async splitHex(clr: string) {
    return new Promise((resolve) => {
      switch(clr) {
        case "yellow":
          resolve([this.stdColors[0], this.stdColors[1]])
          break;
        case "orange":
          resolve([this.stdColors[1], this.stdColors[0]])
          break;
        case "purple":
          resolve([this.stdColors[2], this.stdColors[3]])
          break;
        case "blue":
          resolve(["#3379C1", this.stdColors[3]])
          break;
        case "green":
          resolve([this.stdColors[4], this.stdColors[0]])
          break;
      }
    })
  }
}
