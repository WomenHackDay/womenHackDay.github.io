var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http, $timeout) {
    (function tick() {
        $http.get("http://196.203.111.173:443/?offset=0&limit=1000")
        //$http.get("data.json")
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
            $timeout(tick, 10000);
        });
    })();
});

var end = 1448730000;
var clock = new FlipClock($('.clock'), {});
clock.setTime(end - Math.floor(Date.now()/1000));
clock.setCountdown(true);

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
