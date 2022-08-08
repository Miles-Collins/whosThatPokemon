import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/activePokemon.js"
import { WildPokemon } from "../Models/wildPokemon.js"
import { pokemonApi } from "./AxiosService.js"

class WildPokemonService {
  

async getPokemon() {
  let res = await pokemonApi.get('/api/v2/pokemon')
  console.log('Pokemon', res.data)
  ProxyState.wildPokemon = res.data.results.map(r => new WildPokemon(r))
}

async setActivePokemon(url) {
  let res = await pokemonApi.get(url)
  ProxyState.activePokemon = new ActivePokemon(res.data)
}


}




















export const wildPokemonService  = new WildPokemonService()