myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
  };
  //angular radio buttons don't always listen to 'selected'
  $scope.tournamentRules.seedType = 'snake'
  $scope.pools = [];
  $scope.games = [];

  $scope.submitRules = function(data) {
    //build query
    let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum +
                  '&rounds=' + data.roundNum + '&seed=' + data.seedType;
    $http.get('/tournamentBuild/' + request)
       .then(function successCallback(response) {
         $scope.pools = response.data;
         for(var i = 0; i < $scope.pools.length; i++ ) {
             $scope.games.push($scope.pools[i].games);
         }
       }, function errorCallback(response) {
          if(response.status == 400 || response.status == 500){
            swal('Oops...',
                 '' + response.data.errors[0],
                 'warning');
          }
       });
   };
}]);
