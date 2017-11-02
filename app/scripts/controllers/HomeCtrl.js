(function() {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all;
    this.roomName = '';
    this.message = {};

    this.activeRoom = function(room){
      this.roomName = room.name;
      this.message = Message.getByRoomId(room.$id);
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
