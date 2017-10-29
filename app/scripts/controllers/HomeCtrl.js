(function() {
  function HomeCtrl(Room) {
    this.room = Room;

    console.log(this.room);

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
