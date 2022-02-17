import { ProxyState } from "../AppState.js"
import { Topping } from "../Models/Topping.js"

class ToppingsService {
  deleteTopping(id) {
    ProxyState.toppings = ProxyState.toppings.filter(t => t.id != id)
  }
  createTopping(rawTopping) {
    const topping = new Topping(rawTopping)
    ProxyState.toppings = [...ProxyState.toppings, topping]
  }

}

export const toppingsService = new ToppingsService()