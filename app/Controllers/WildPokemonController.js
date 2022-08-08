import { ProxyState } from "../AppState.js"
import { wildPokemonService } from "../Services/wildPokemonService.js"
import { Pop } from "../Utils/Pop.js"

function _drawPokemon() {
  let template = ''
  ProxyState.wildPokemon.forEach(w => template += w.Template)
  document.getElementById('wild').innerHTML = template
}

export class WildPokemonController {
  constructor(){
    ProxyState.on('wildPokemon', _drawPokemon)
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await wildPokemonService.getPokemon()
    } catch (error) {
      console.error('[Getting Pokemon]', error)
      Pop.error(error)
    }
  }

   async setActivePokemon(url) {
    try {
      await wildPokemonService.setActivePokemon(url)
    } catch (error) {
      console.error('[Setting Pokemon]', error)
      Pop.error(error)
    }
   }
 }
