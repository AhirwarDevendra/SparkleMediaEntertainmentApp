angular.module('sparkle.controllers',[])

.controller('SplashCtrl',['$state',function($state){
    
    setTimeout(function()
    {
        $state.go('app.home')
    },1800);
    
}])

.controller('SparkleCtrl',['$state','$scope','$cordovaSocialSharing',function($state,$scope,$cordovaSocialSharing){
    
    $scope.events = function(){
        $state.go('app.home');
        console.log('Events');
    };
    $scope.about = function(){
        $state.go('app.about');
        console.log('About Us');
        
    };
    $scope.feedback = function(){
        $state.go('app.feedback');
        console.log('Feedback Form');
    };
    $scope.requestEvent = function(){
        $state.go('app.requestEvent');
        console.log('Event Form');
    };
    $scope.share = function(){
        //$state.go('app.search');
        console.log('Share App');
        /*$ionicActionSheet.show({
      titleText: 'Share App With Friends',
      buttons: [
        { text: '<i class="icon ion-social-whatsapp"></i> Whatsapp' },
        { text: '<i class="icon ion-social-googleplus"></i> Gmail' },
        { text: '<i class="icon ion-email"></i> Message' },
        { text: '<i class="icon ion-social-facebook"></i> Facebook' },
      ],
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });*/
        
        $cordovaSocialSharing.share("Message","Message",null,"MessageSS");
    };
}])

.controller('HomeCtrl',['$state','$scope',function($state,$scope){
    
    console.log("Inside Home");
}])