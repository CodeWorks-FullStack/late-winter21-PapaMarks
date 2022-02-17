import { ProxyState } from "../AppState.js"
import { pizzasService } from "../Services/PizzasService.js"

function _drawPizza() {
  let template = ''
  const pizzas = ProxyState.pizzas
  pizzas.forEach(p => template += p.Template)
  document.getElementById('pizzas').innerHTML = template
}

export class PizzasController {
  constructor() {
    ProxyState.on('pizzas', _drawPizza)
    // draws the fake data
    _drawPizza()
  }

  createPizza() {
    // Prevent page reload
    window.event.preventDefault()
    const form = window.event.target

    const rawPizza = {
      name: form.name.value,
      sauce: form.sauce.value,
      size: form.size.value
    }
    pizzasService.createPizza(rawPizza)
  }

  deletePizza(id) {
    pizzasService.deletePizza(id)
  }
}