import { ProxyState } from "../AppState.js"
import { caughtPokemonService } from "../Services/caughtPokemonService.js"
import { Pop } from "../Utils/Pop.js"

function _draw() {
  let template = ''
  ProxyState.caughtPokemon.forEach(c => template += c.CaughtTemplate)
  document.getElementById("caught").innerHTML = template
}

export class CaughtPokemonController { 

constructor() {
  
}

async getPokemon() {
  try {
    await caughtPokemonService.getPokemon()
  } catch (error) {
    console.error('[Getting Pokemon]', error)
    Pop.error(error)
  }
}

async addPokemon() {
  try {
    await caughtPokemonService.addPokemon()
  } catch (error) {
    console.error('[Adding Pokemon', error)
    Pop.error(error)
  }
}

}
