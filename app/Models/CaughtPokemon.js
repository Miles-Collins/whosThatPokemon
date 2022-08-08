import { ActivePokemon } from "./ActivePokemon.js";


export class CaughtPokemon extends ActivePokemon {
  constructor(data) {
    super(data)
    this.id = data.id
  }


  get CaughtTemplate() {
    return `
    <div class="text-white d-flex align-items-center justify-content-between">
        <div class="mb-0">
          <b>${this.name}</b>
        </div>
        <div>
          <button class="btn text-white selectable" onclick="app.caughtPokemonController.deletePokemon('${this.id}')">
            <i class="mdi mdi-delete-forever"></i>
          </button>
        </div>
      </div>
    `
  }
 }

