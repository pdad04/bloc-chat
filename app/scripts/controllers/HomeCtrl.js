(function() {
  function HomeCtrl(Room, Message,$cookies) {
    this.rooms = Room.all;
    this.roomName = '';
    this.SendMessage = {};
    this.message = {};
    this.roomSelected = false;

    this.activeRoom = function(room){
      this.roomName = room.name;
      this.SendMessage.roomId = room.$id;
      this.SendMessage.userName = $cookies.get('blocChatCurrentUser');
      this.message = Message.getByRoomId(room.$id);
      this.roomSelected = true;
    };

    this.sendMessage = function() {
      this.SendMessage.sentAt = new Date().toLocaleString();
      Message.send(this.SendMessage);
      this.SendMessage.content = '';
    }

    this.onReturn = function(event) {
      if(event.charCode === 13) {
        this.sendMessage();
      }
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message','$cookies', HomeCtrl]);
})();
