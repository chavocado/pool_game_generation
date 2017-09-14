myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  console.log('pool controller running');
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
  };
  $scope.tournamentRules.seedType = 'snake'
  $scope.pools = [];
  // $scope.pools.teams
  $scope.games = [];
  //let pools = [];
  //let teams = [];

 $scope.submitRules = function(data) {
   console.log('here', $scope.tournamentRules);
   let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum +
                 '&rounds=' + data.roundNum + '&seed=' + data.seedType;
  //  $http.get('/tournamentBuild/' + request)
  //     .then(function (response) {
  //       console.log(response);
  //       if(response.status == 400 || response.status == 500){
  //         alert("response.data.errors[0]");
  //       }
  //       $scope.pools = response.data;
   //
  //       for(var i = 0; i < $scope.pools.length; i++ ) {
  //           $scope.games.push($scope.pools[i].games);
  //       }
   //
  //       console.log(response.data[0], response.data[1]);
  //       console.log('GET /tournamentBuild', response.data);
  //       console.log($scope.games);
  //     });

      $scope.submitRules = function(data) {
        console.log('here', $scope.tournamentRules);
        let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum +
                      '&rounds=' + data.roundNum + '&seed=' + data.seedType;
        $http.get('/tournamentBuild/' + request)
           .then(function successCallback(response) {
             $scope.pools = response.data;
             for(var i = 0; i < $scope.pools.length; i++ ) {
                 $scope.games.push($scope.pools[i].games);
             }
             console.log('GET /tournamentBuild', response.data);
           }, function errorCallback(response) {
              if(response.status == 400 || response.status == 500){
                alert("response.data.errors[0]");
              }
           });

  }

}]);
