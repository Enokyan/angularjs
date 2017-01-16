myApp.controller('myCtrlll', function($scope) {

    $scope.insert=function () {
        var result=[{
            "firstName" : $scope.firstName,
            "lastName" : $scope.lastName,
            "age" : $scope.age
        }]


        var values = [{

        }];

        values+=['firstName' + ': ' +  $scope.firstName,
            'lastName' + ': ' +  $scope.lastName,
            'age' + ': ' +  $scope.age];
        console.log(values);
        // var log = [];
        // angular.forEach(values, function(value, key) {
        // }, log);
        // expect(log).toEqual(['name: misko', 'gender: male']);
        //  console.log(result)
        if($scope.firstName && $scope.lastName &&  $scope.age) {
            $scope.results = result;
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.age = '';
        }
    }


    $scope.Sample = function(event){
        angular.element(event.target).parent().parent().remove();
    };
});



