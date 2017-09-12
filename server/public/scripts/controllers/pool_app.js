myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  console.log('pool controller running');
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
  };
  var pools = [];
  var teams = [];
  
 $scope.submitRules = function(rules){
   console.log('here',$scope.tournamentRules);
   buildPools();
   buildTeams();
   snakeSeed();
  }

  function buildTeams(){
    for (var i = 1; i <= $scope.tournamentRules.teamNum; i++) {
      teams.push('Team ' + i);
    }
    console.log(teams);
    return teams;
  }
  
  function buildPools(){
    for (var i = 0; i < $scope.tournamentRules.poolNum; i++) {
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
  
  function snakeSeed(){
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
  
  function sequenceSeed(){
    
  }
  function buildGames(){
    
  }
// Tournament values should be set by the form in the HTML.
// Onclick function should take tournament object/values and create Pool objec
// one poold ts
// with incremented alphabet naming pattern applied as their name property.
// one approach would be a pools array that holds pool objects
//  (this would be easier to display on front end with angular)
//  these pool objects also need a list of games held in an array
//  snake seeding for the groups has to occur before the game algorithm runs
//  game algorithm has to be everyone plays everyone in the same group for 1 game per round
//  games must have unique Identifiers and 2 teams



}]);
