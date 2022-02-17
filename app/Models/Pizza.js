import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Pizza {
  constructor(data) {
    // if data has an id us it otherwise generate
    this.id = data.id || generateId()
    this.name = data.name
    this.sauce = data.sauce
    this.size = data.size
  }


  get Template() {
    return /* html */`
    <div class="col-md-4 p-3">
    <div class="rounded shadow bg-white">
      <div class="rounded-top text-center p-2 ${this.size == 'MEGA' ? 'bg-primary' : 'bg-secondary '}">
        <h4 class="d-flex justify-content-between">
        ${this.name.toUpperCase()} ${this.size == 'MEGA' ? '🍕' : ''}
        <i class="mdi mdi-delete selectable" title="delete pizza" onclick="app.pizzasController.deletePizza('${this.id}')" ></i>
        </h4>
      </div>
      <div class="p-3">
        <div class="bg-secondary lighten-30 p-2 rounded">
          <p><b>Pizza Options</b></p>
          <ul>
            <li>Sauce: ${this.sauce}</li>
            <li>Size: ${this.size}</li>
          </ul>
        </div>
        <div class="bg-secondary lighten-30 mt-4 p-2 rounded">
          <p><b>Toppings</b></p>
          <ul>
             ${this.ToppingsTemplate}
          </ul>
          <div class="text-end">
            <p>${this.Total}</p>
          </div>
        </div>
      </div>
      <!-- TOPPING FORM  -->
      <form class="px-3 pb-2" onsubmit="app.toppingsController.createTopping('${this.id}')">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Topping..." aria-label="topping"
            aria-describedby="topping" id="name">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
              class="mdi mdi-plus"></i></button>
        </div>
      </form>
    </div>
  </div>
    
    `
  }

  get ToppingsTemplate() {
    let template = ''
    const myToppings = ProxyState.toppings.filter(t => t.pizzaId == this.id)
    myToppings.forEach(t => template += t.Template)
    return template
  }

  get Total() {
    let out = 0
    switch (this.size) {
      case 'MEGA':
        out += 34
        break
      case 'Medum':
        out += 20
        break
      case 'Kid':
        out += 19
        break
    }

    // if (this.size == 'MEGA') {
    //   out += 34
    // }
    // if (this.size == 'Medium') {
    //   out += 20
    // }
    // if (this.size == 'Kid') {
    //   out += 19
    // }

    const myToppings = ProxyState.toppings.filter(t => t.pizzaId == this.id)

    out += myToppings.length

    return out
  }
}