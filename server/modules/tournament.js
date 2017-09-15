//globals
let pools = [];
let teams = [];

//Tournament function that gets exported
function Tournament(data) {
  pools = [];
  teams = [];
  buildPools(data);

  if(data.seed === 'snake'){
    snakeSeed();
  } else if (data.seed === 'sequential') {
    sequenceSeed();
  }
  //if neither throw error and dont build games
  buildGames(data);
  return pools;
};

//method the Builds Pools, must run before teams are built
function buildPools(data) {
  for (var i = 0; i < Number(data.pools); i++) {
  let pool = new Object();
  pool.name = 'Pool ' +  (String.fromCharCode(65 + i));
  pool.teams = [];
  pool.games = [];
  pools.push(pool);
  }
  buildTeams(data);
}
//method that Builds Teams must run before games are built
function buildTeams(data) {
  for (var i = 1; i <= Number(data.teams); i++) {
    teams.push(' Team ' + i);
  }
  return teams;
}
//snake seeding method. local variables that act as keys to help get desired
//snake seed functionality using a loop through the amount of teams in a pool
//hold is a key that flips when reaching maxPoolIndex and min
function snakeSeed() {
  let poolIndex = 0;
  let increase = true;
  let hold = true;
  let maxPoolIndex = pools.length - 1;
  for (var i = 0; i < teams.length; i++) {
    pools[poolIndex].teams.push(teams[i]);
    if ((poolIndex >= 0) && (poolIndex < maxPoolIndex) && increase) {
      poolIndex++;
      hold = true;
    } else if (poolIndex === maxPoolIndex && hold) {
      hold = false;
      increase = false;
    } else if (poolIndex === maxPoolIndex && !hold) {
      poolIndex--;
      hold = true;
    } else if (poolIndex > 0 && !increase) {
      poolIndex--;
    } else if (poolIndex === 0 && hold) {
      hold = false;
      increase = true;
    } else if (poolIndex === 0 && !hold && increase) {
      poolIndex++;
      hold = true;
    }
  }
}
//sequential seeding method
function sequenceSeed() {
  let poolIndex = 0;
  let maxPoolIndex = pools.length - 1;
  for (var i = 0; i < teams.length; i++) {
    pools[poolIndex].teams.push(teams[i]);
    if (poolIndex === maxPoolIndex) {
      poolIndex = 0;
    } else {
      poolIndex++;
    }
  }
}
//a method for building games. gameID is the unique identifier that is set
//in every game object. h loop wraps everything and runs based on # of rounds
// i loop is used to match teams with eachother. k loop sets Object values and
//swaps home and visitor teams based on # of rounds
function buildGames(data) {
 let gameID = 1;
 for (var h = 0; h < Number(data.rounds); h++) {
   for (var i = 0; i < pools.length; i++) {
     let currentPool = pools[i];
     let teamsLeft = currentPool.teams.length;
     let shiftedTeams = [];

     while (teamsLeft > 1) {
       teamsLeft--;
       currentTeam = currentPool.teams.shift();
       shiftedTeams.unshift(currentTeam);
       for (var k = 0; k < teamsLeft; k++) {
         let game = new Object();
         game.ID = gameID;
         if (h % 2 === 0) {
           game.home = currentTeam;
           game.visitor = currentPool.teams[k];
           currentPool.games.push(game);
         } else {
           game.home = currentPool.teams[k];
           game.visitor = currentTeam;
           currentPool.games.push(game);
         }
         gameID++;
     }
   }
   for (let l = 0; l < shiftedTeams.length; l++) {
     currentPool.teams.unshift(shiftedTeams[l]);
   }
  }
 }
}


module.exports = Tournament;
