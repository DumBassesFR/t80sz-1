const gradients = [
  "linear-gradient(90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(242,139,39,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%)",
  "linear-gradient(90deg,  rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%)",
  "linear-gradient(90deg, rgba(11,241,49,1) 0%, rgba(32,179,123,1) 100%)",
]
const lightColors = [ "#FFEA33", "#F39132", "#D054BA", "#696AFF", "#3CF45A" ]
const stdColors = [ "#FFE500", "#F28B27", "#C429A9", "#4445FF", "#0BF131" ]
export class colors {
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
          resolve(lightColors[0])
          break;
        case "orange":
          resolve(lightColors[1])
          break;
        case "purple":
          resolve(lightColors[2])
          break;
        case "blue":
          resolve(lightColors[3])
          break;
        case "green":
          resolve(lightColors[4])
          break;
      }
    });
  }
  async splitHex(clr: string) {
    return new Promise((resolve) => {
      switch(clr) {
        case "yellow":
          resolve([stdColors[0], stdColors[1]])
          break;
        case "orange":
          resolve([stdColors[1], stdColors[0]])
          break;
        case "purple":
          resolve([stdColors[2], stdColors[3]])
          break;
        case "blue":
          resolve(["#3379C1", stdColors[3]])
          break;
        case "green":
          resolve([stdColors[4], stdColors[0]])
          break;
      }
    })
  }
}
