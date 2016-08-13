/**
 * Created by aric on 16/8/12.
 */
angular.module('myApp',[])
.controller('MainController',function($scope){
    $scope.submitForm=function(){
        console.log("表单提交啦!")
    }
})