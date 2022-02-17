import { generateId } from "../Utils/generateId.js"

export class Topping {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.pizzaId = data.pizzaId
  }

  get Template() {
    return `<li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.toppingsController.deleteTopping('${this.id}')"></i></li>`
  }

}