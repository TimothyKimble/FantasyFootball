import store from "../store.js";
import PlayerService from "../Services/PlayerService.js";

/**renders all players to the screen */
function _drawActive() {
  let template = "";
  let players = store.State.activePlayers;
  players.forEach(p => (template += p.template));
  document.querySelector("#players").innerHTML = template;
}

// Renders dropdown for teams
function _drawTeamChoices() {
  let template = `<option disabled selected> Choose a Team</option>`;
  let teams = store.TeamChoices;
  teams.forEach(t => (template += `<option value="${t}">${t}</option>`));
  document.querySelector("#dropDownPositions").innerHTML = template;
}

//Public
export default class PlayerController {
  constructor() {
    store.subscribe("activePlayers", _drawActive);
    store.subscribe("allPlayers", _drawTeamChoices);
    store.subscribe("allPlayers", _drawPositionChoices);
  }

  filterByTeam(team) {
    PlayerService.filterByTeam(team);
  }

  filterPosition(position) {
    PlayerService.filterByPosition(position);
  }
}
