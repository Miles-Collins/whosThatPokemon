import { ProxyState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"
import { sandBoxApi } from "./AxiosService.js"

class CaughtPokemonService { 

async addPokemon() {

  if(ProxyState.caughtPokemon.find(c => c.name == ProxyState.activePokemon.name)) {
    throw new Error('You have already caught this Pokemon')
  }
  let res = await sandBoxApi.post('/pokemon', ProxyState.activePokemon)
  let newPokemon = new CaughtPokemon(res.data)
  ProxyState.caughtPokemon = [...ProxyState.caughtPokemon, newPokemon]
}

async getPokemon() {
  let res = await sandBoxApi.get('/pokemon')
  ProxyState.caughtPokemon = res.data.map(c => new CaughtPokemon(c))
}

}








export const caughtPokemonService = new CaughtPokemonService()