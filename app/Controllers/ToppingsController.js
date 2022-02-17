import { toppingsService } from "../Services/ToppingsService.js"
import { Pop } from "../Utils/Pop.js"

export class ToppingsController {
  createTopping(pizzaId) {
    window.event.preventDefault()
    const form = window.event.target

    const rawTopping = {
      pizzaId,
      name: form.name.value
    }
    console.log("[ToppingsController]: createTopping", rawTopping)
    toppingsService.createTopping(rawTopping)
  }

  async deleteTopping(id) {
    // NOTE CONFIRM DELETE
    if (await Pop.confirm()) {
      toppingsService.deleteTopping(id)
    }
  }
}