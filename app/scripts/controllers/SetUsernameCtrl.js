(function() {
  function UserCtrl($cookies) {
    this.userName = '';
    this.error = ''

    this.setUsername = function() {
      if(!this.userName){
        this.error = "Username cannot be blank!";
      }else {
        this.error = '';
        $cookies.put('blocChatCurrentUser',this.userName);
        userModalInstance.close();
      }
    }
  }

  angular
    .module('blocChat')
    .controller('UserCtrl',['$cookies', UserCtrl]);
})();
