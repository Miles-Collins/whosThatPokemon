export const sandBoxApi = new axios.create({
  backURL: 'https://bcw-sandbox.herokuapp.com/api/miles',
  timeout: 2000
})

export const pokemonApi = new axios.create({
  baseURL: 'https://pokeapi.co',
  timeout: 2000
})