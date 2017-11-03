(function() {
  function BlocChatCookies($cookies,$uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if(!currentUser || currentUser === '') {
      userModalInstance = $uibModal.open({
        controller: 'UserCtrl',
        controllerAs: 'userModal',
        templateUrl: '/templates/userName.html',
        backdrop: 'static',
        size: 'sm'
      });
    }
  }

  angular
    .module('blocChat')
    //.controller('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies])
    .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
