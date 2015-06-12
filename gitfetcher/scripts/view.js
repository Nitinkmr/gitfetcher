//use strict;

var app=angular.module('scrapper',[]);
app.controller('GitCtrl',function ($scope,$http)
  {
    $scope.GetInfo=function(){
      $scope.userNotFound=false;
      $scope.loaded=false;
    $http.get("https://api.github.com/users/" + $scope.username)
           .success(function (data) {
              if (data.name == "") data.name = data.login;
              $scope.user = data;
              $scope.loaded=true;
            })
            .error(function(){
              $scope.userNotFound=true;
            });
             //document.write("adasd"+ {{user.location}});
              /*if(user.location =="")
              {
                user.location="Not Available";
              }*/
  }
});
  
