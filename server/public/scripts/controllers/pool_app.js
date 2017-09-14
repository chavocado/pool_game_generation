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
   let request = '?pools=' + data.poolNum + '&teams=' + data.teamNum + 
                 '&rounds=' + data.roundNum + '&seed=' + data.seedType;
   $http.get('/tournamentBuild/' + request) 
      .then(function (response) {
        console.log(response);
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

}]);
