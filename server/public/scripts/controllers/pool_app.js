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
   $http.get('/tournamentBuild/' + request)
      .then(function (response) {
        console.log(response);
        $scope.pools = response.data;
        if($scope.pools.status===400){
          alert(response.data.errors[0]);
        }
        for(var i = 0; i < $scope.pools.length; i++ ) {
            $scope.games.push($scope.pools[i].games);
        }

        console.log(response.data[0], response.data[1]);
        console.log('GET /tournamentBuild', response.data);
        console.log($scope.teams);
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
