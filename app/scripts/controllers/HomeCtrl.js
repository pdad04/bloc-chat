(function() {
  function HomeCtrl(Room, Message,$cookies) {
    this.rooms = Room.all;
    this.roomName = '';
    this.SendMessage = {};
    this.message = {};
    this.SendMessage.userName = $cookies.get('blocChatCurrentUser');

    this.activeRoom = function(room){
      this.roomName = room.name;
      this.SendMessage.roomId = room.$id;
      this.message = Message.getByRoomId(room.$id);
    };

    this.sendMessage = function() {
      this.SendMessage.sentAt = new Date().toLocaleString();
      Message.send(this.SendMessage);
      this.SendMessage.content = '';
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message','$cookies', HomeCtrl]);
})();
