'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl',function($http,$scope){
    $http.get('http://localhost:3000/birthday/pl').then(function(res){
          // console.log(res.data.data);
        $scope.talks = res.data.data;
    });
    //显示所有
    $scope.alls = true;
    $scope.all = function(){
        $scope.sphone = '';
        $scope.phone = '';
        $scope.alls = true;
    };
    //搜索
    $scope.seach = function(val){
        $scope.phone = val;
        $scope.sphone = '';
    }
    //回复框弹出
    $scope.reply = function(){
        $scope.rep = true;
    };
    //查看详情
    $scope.look = function(detail){
        $scope.detail = detail;
        $scope.rep = false;
    };
    //发送评论
    $scope.send = function(phone,txt){
        console.log(phone,txt);
        if(txt == undefined){
            alert('回复内容不能为空');
            return;
        }
        $http.put('http://localhost:3000/birthday/pl',{phone:phone,reply:txt}).then(function(res){
            if(res.data.success){
                alert('回复成功');
            }else{
                 alert('回复失败，请重新回复');
            }
            $scope.txt = '';
            $scope.rep = false;
        });
    };
});
