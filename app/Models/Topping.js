import { generateId } from "../Utils/generateId.js"

export class Topping {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.pizzaId = data.pizzaId
  }

  get Template() {
    return `<li>${this.name}</li>`
  }

}