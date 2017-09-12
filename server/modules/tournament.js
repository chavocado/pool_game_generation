//globals
let pools = [];
let teams = [];

//Torunament function that gets exported
function Tournament(data) {
  console.log('THIS WILL ERROR OUT UNTILL //tournamentRules needs to change to data');
  console.log('Data is holding :', data);
  // buildPools();
  // buildTeams();
  // if(data.seedType === 'snake'){
  //   snakeSeed();
  // } else if (data.seedType === 'sequential') {
  //   sequenceSeed();
  // }
  // buildGames();
};

function buildPools() {
  //tournamentRules needs to change to data TODO
  for (var i = 0; i < tournamentRules.poolNum; i++) {
  let pool = new Object();
  pool.name = 'Pool ' +  (String.fromCharCode(65 + i));
  pool.teams = [];
  pool.games = [];
  pools.push(pool);
  console.log(pools);
  }
  console.log('build pools')
  return pools;
}

function buildTeams() {
  //tournamentRules needs to change to data TODO
  for (var i = 1; i <= tournamentRules.teamNum; i++) {
    teams.push('Team ' + i);
  }
  console.log(teams);
  return teams;
}

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
      hold = true
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
  console.log(pools);
}

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
  console.log(pools);
}

function buildGames() {
 let gameID = 1;
 //tournamentRules needs to change to data TODO
 for (var h = 0; h < tournamentRules.roundNum; h++) {
   for (let i = 0; i < pools.length; i++) {
     let currentPool = pools[i];
     let teamsLeft = currentPool.teams.length;
     let shiftedTeams = [];

     while (teamsLeft > 1) {
       teamsLeft--;
       currentTeam = currentPool.teams.shift();
       shiftedTeams.unshift(currentTeam);
       for (let k = 0; k < teamsLeft; k++) {
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
