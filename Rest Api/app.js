const app = angular.module('DemoApp', [])


app.controller("userController",($scope, $http)=>{
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        response && response.data? $scope.users = response.data: $scope.users = []
    },error=>[
        console.log(error)
    ])

    $scope.delete = index =>{
        $scope.users.splice(index, 1)
        console.log(index)
    }
    $scope.edit = user =>{
        $scope.isAdd = false
        $scope.RefUser = user
        $scope.singleUser = {name: user.name, email:user.email, phone:user.phone}
    }
    $scope.update = user =>{
        
        if(!$scope.isAdd){
            $scope.RefUser.name= user.name
            $scope.RefUser.email= user.email
            $scope.RefUser.phone= user.phone
        }else{
            $scope.users.push({id: $scope.users.length+1, name: user.name, email:user.email,username: user.email.split("@")[0], phone:user.phone})
        }
        $scope.cancal()
    }
    $scope.add = () =>{
        $scope.isAdd = true
        $scope.singleUser={}
        
    }
    $scope.cancal = () =>{
        $scope.RefUser = {}
        $scope.singleUser=null
    }
})





















app.directive("appNav",()=>{
    return{
        restrict:"E",
        templateUrl:"nav.html",
        scope:{
            data:"="
        },
        link: (scope, element, attribute)=>{
            // console.log(scope.data)
        }
    }
})