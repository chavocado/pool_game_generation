myApp.controller('PoolController', ['$scope','$http',function($scope,$http) {
  console.log('pool controller running');
  $scope.tournamentRules = {
    poolNum: $scope.poolNum,
    teamNum: $scope.teamNum,
    roundNum: $scope.roundNum,
    seedType: $scope.seedType,
  };
  $scope.tournamentRules.seedType = 'snake'
  $scope.tournaments = [];
  $scope.teams = [];
  $scope.games = [];
  //let pools = [];
  //let teams = [];

 $scope.submitRules = function(data) {
   console.log('here', $scope.tournamentRules);
   let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum +
                 '&rounds=' + data.roundNum + '&seed=' + data.seedType;
   $http.get('/tournamentBuild/' + request)
      .then(function (response) {
        console.log(response);
        $scope.tournaments = response.data;
        console.log(response.data.teams, response.data.games);
        $scope.teams = response.data.teams;
        $scope.games = response.data.games;
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

}]);
