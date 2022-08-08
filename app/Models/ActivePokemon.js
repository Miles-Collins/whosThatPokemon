

export class ActivePokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.weight = data.weight
    this.height = data.height
    this.img = data.img
    this.types = data.types
  }






  get ActivePokemonTemplate() {
    return `
    <div class="col-12 pokemon-header text-center">
            <h1>${this.name}</h1>
          </div>
          <div class="col-12">
          <img class="img-fluid"
              src="${this.img}"
              alt="">
          </div>
          <div class="col-12">
            <div class="row description text-center">
              <div class="col-6 my-4">${this.height}</div>
              <div class="col-6 my-4">${this.weight}</div>
              <div class="col-6">${this.types}</div>
              <button onclick="app.caughtPokemonController.addPokemon()" class="btn text-end">Catch</button>
            </div>
          </div>
    `
  }
 }


