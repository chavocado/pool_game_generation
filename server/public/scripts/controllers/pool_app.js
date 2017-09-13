myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  console.log('pool controller running');
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
  };
  $scope.tournamentRules.seedType = 'snake'
  let pools = [];
  let teams = [];

 $scope.submitRules = function(data) {
   console.log('here', $scope.tournamentRules);
   let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum + '&rounds=' + data.roundNum + '&seed=' + data.seedType;
   $http.get('/tournamentBuild/' + request) 
      .then(function (response) {
        $scope.tournament = response.data;
        console.log('GET /tournamentBuild', response.data);
      });
  //  $http({
  //    method: 'GET',
  //    url: '/tournamentBuild',
  //    data: data
  //  }).then(function(){
  //    console.log('success');
  //  },function() {
  //    console.log('failure');
  //  })
   
  }
// 
//   function buildTeams() {
//     for (var i = 1; i <= $scope.tournamentRules.teamNum; i++) {
//       teams.push('Team ' + i);
//     }
//     console.log(teams);
//     return teams;
//   }
// 
//   function buildPools() {
//     for (var i = 0; i < $scope.tournamentRules.poolNum; i++) {
//     let pool = new Object();
//     pool.name = 'Pool ' +  (String.fromCharCode(65 + i));
//     pool.teams = [];
//     pool.games = [];
//     pools.push(pool);
//     console.log(pools);
//     }
//     console.log('build pools')
//     return pools;
//   }
// 
//   function snakeSeed() {
//     let poolIndex = 0;
//     let increase = true;
//     let hold = true;
//     let maxPoolIndex = pools.length - 1;
//     for (var i = 0; i < teams.length; i++) {
//       pools[poolIndex].teams.push(teams[i]);
//       if ((poolIndex >= 0) && (poolIndex < maxPoolIndex) && increase) {
//         poolIndex++;
//         hold = true;
//       } else if (poolIndex === maxPoolIndex && hold) {
//         hold = false;
//         increase = false;
//       } else if (poolIndex === maxPoolIndex && !hold) {
//         poolIndex--;
//         hold = true
//       } else if (poolIndex > 0 && !increase) {
//         poolIndex--;
//       } else if (poolIndex === 0 && hold) {
//         hold = false;
//         increase = true;
//       } else if (poolIndex === 0 && !hold && increase) {
//         poolIndex++;
//         hold = true;
//       }
//     }
//     console.log(pools);
//   }
// 
//   function sequenceSeed() {
//     let poolIndex = 0;
//     let maxPoolIndex = pools.length - 1;
//     for (var i = 0; i < teams.length; i++) {
//       pools[poolIndex].teams.push(teams[i]);
//       if (poolIndex === maxPoolIndex) {
//         poolIndex = 0;
//       } else {
//         poolIndex++;
//       }
//     }
//     console.log(pools);
//   }
// 
//   function buildGames() {
//    let gameID = 1;
//    for (var h = 0; h < $scope.tournamentRules.roundNum; h++) {
//      for (let i = 0; i < pools.length; i++) {
//        let currentPool = pools[i];
//        let teamsLeft = currentPool.teams.length;
//        let shiftedTeams = [];
// 
//        while (teamsLeft > 1) {
//          teamsLeft--;
//          currentTeam = currentPool.teams.shift();
//          shiftedTeams.unshift(currentTeam);
//          for (let k = 0; k < teamsLeft; k++) {
//            let game = new Object();
//            game.ID = gameID;
//            if (h % 2 === 0) {
//              game.home = currentTeam;
//              game.visitor = currentPool.teams[k];
//              currentPool.games.push(game);
//            } else {
//              game.home = currentPool.teams[k];
//              game.visitor = currentTeam;
//              currentPool.games.push(game);
//            }
//            gameID++;
//        }
//      }
//      for (let l = 0; l < shiftedTeams.length; l++) {
//        currentPool.teams.unshift(shiftedTeams[l]);
//      }
//     }
//    }
//  }
// // **Tournament values should be set by the form in the HTML.
// **Onclick function should take tournament object/values and create Pool objec
// **one poold ts
// **with incremented alphabet naming pattern applied as their name property.
// **one approach would be a pools array that holds pool objects
//  **(this would be easier to display on front end with angular)
//  **these pool objects also need a list of games held in an array
//  **snake seeding for the groups has to occur before the game algorithm runs
//  **game algorithm has to be everyone plays everyone in the same group for 1 game per round
//  **games must have unique Identifiers and 2 teams



}]);
