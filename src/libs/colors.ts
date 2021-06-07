const gradients = [
  "linear-gradient(90deg, rgba(255,229,0,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(242,139,39,1) 0%, rgba(249,190,17,1) 100%)",
  "linear-gradient(90deg, rgba(196,41,169,1) 0%, rgba(141,53,206,1) 100%)",
  "linear-gradient(90deg,  rgba(68,69,255,1) 0%, rgba(51,121,193,1) 100%);",
  "linear-gradient(90deg, rgba(11,241,49,1) 0%, rgba(32,179,123,1) 100%);",
]
export class colors {
  async setGradient(grad) {
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
}
