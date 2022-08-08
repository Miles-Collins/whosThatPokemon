

export class WildPokemon {
  constructor({name, url}) {
  this.name = name
  this.url = url
  }

  get Template() {
    return `
    <div class="text-dark selectable no-select p-2 border border-dark m-2 rounded" onclick="app.wildPokemonController.setActivePokemon('${this.url}')">
      <p class="mb-0">${this.name}</p>
    </div>
    `
  }
}
