myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  console.log('pool controller running');
  //$scope.message = "Pool Controller!";
  //tournament variables
  // $scope.poolNum;
  // $scope.teamNum;
  // $scope.roundNum;
  // $scope.seedType;
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
    // pools: []
  };
  
 $scope.submitRules = function(rules){
   console.log('here',$scope.tournamentRules);
  }

  function buildTeams(){
    for (var i = 1; i <= teamNum; i++) {
      $scope.teams.push('Team ' + i);
    }
    return $scope.teams;
  }

// Tournament values should be set by the form in the HTML.
// Onclick function should take tournament object/values and create Pool objects
// with incremented alphabet naming pattern applied as their name property.
// one approach would be a pools array that holds pool objects
//  (this would be easier to display on front end with angular)
//  these pool objects also need a list of games held in an array
//  snake seeding for the groups has to occur before the game algorithm runs
//  game algorithm has to be everyone plays everyone in the same group for 1 game per round
//  games must have unique Identifiers and 2 teams

//   //empty holding array
//   var games = [];
//   //generate pool objects
//   var pools = new Pool();
//   //loop through param length
//   for(var i=0; i<poolNum; i++) {
//     //increment letter portion
//     //var letter = 'A';
//     //String.fromCharCode(letter.charCodeAt() + i)
//     //
//     if(arr.indexOf(lowerText)<0) arr.push(lowerText);
//     else if(duplicate.indexOf(lowerText)<0) duplicate.push(lowerText);
//   }
//   return;
// }


}]);
