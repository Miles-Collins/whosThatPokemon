import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  activePokemonController = new ActivePokemonController();
  caughtPokemonController = new CaughtPokemonController();
  wildPokemonController = new WildPokemonController();
}

window["app"] = new App();
