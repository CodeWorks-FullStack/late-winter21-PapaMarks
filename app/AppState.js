import { Pizza } from "./Models/Pizza.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const fakeData = new Pizza({ name: "mark", sauce: "red", size: "MEGA" })
const fakeData2 = new Pizza({ name: "mick", sauce: "bbq", size: "kids" })

class AppState extends EventEmitter {
  /** @type {import('./Models/Pizza').Pizza[]} */
  pizzas = [fakeData, fakeData2]

  /** @type {import('./Models/Topping').Topping[]} */
  toppings = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
