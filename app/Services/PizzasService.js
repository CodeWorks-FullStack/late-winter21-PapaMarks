import { ProxyState } from "../AppState.js"
import { Pizza } from "../Models/Pizza.js"

class PizzasService {
  deletePizza(id) {
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != id)
  }
  createPizza(rawPizza) {
    const pizza = new Pizza(rawPizza)
    ProxyState.pizzas = [...ProxyState.pizzas, pizza]
  }

}

export const pizzasService = new PizzasService()