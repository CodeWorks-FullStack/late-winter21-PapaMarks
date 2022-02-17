import { generateId } from "../Utils/generateId.js"

export class Pizza {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.sauce = data.sauce
    this.size = data.size
  }


  get Template() {
    return /* html */`
    <div class="col-md-4 p-3">
    <div class="rounded shadow bg-white">
      <div class="rounded-top bg-secondary text-center p-2">
        <h4 class="d-flex justify-content-between">
        ${this.name.toUpperCase()} 
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
            <li>Pepperoni </li>
            <li>Olive</li>
          </ul>
        </div>
      </div>
      <!-- TOPPING FORM  -->
      <!-- TODO make onsubmit -->
      <form class="px-3 pb-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Topping..." aria-label="topping"
            aria-describedby="topping">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
              class="mdi mdi-plus"></i></button>
        </div>
      </form>
    </div>
  </div>
    
    `
  }
}