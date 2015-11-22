var teams = [{
    "name": "ModularPrime",
    "bonus": 0
}, {
    "name": "goalboy",
    "bonus": 0
}, {
    "name": "lcchen",
    "bonus": 0
}, {
    "name": "qlimaxx",
    "bonus": 0
}];

var clock = new FlipClock($('.clock'), {});
clock.setTime(3600);
clock.setCountdown(true);

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("data.json")
        .success(function(response) {
            $scope.sb = [];
            names = teams.map(function(x) {
                return x.name
            })
            for (var i = 0; i < response.models.length; i++) {
                index = names.indexOf(response.models[i].hacker);
                if (index > -1) {
                    response.models[i].score += teams[index].bonus
                    $scope.sb.push(response.models[i])
                }
            }
            $scope.sb.sort(function(a, b) {
                if (a.score > b.score) return -1;
                else if (a.score < b.score) return 1;
                else {
                    if (a.timestamp > b.timestamp) return 1;
                    else return -1;
                }
            });
            $scope.num_users = $scope.sb.length;
        });
});
