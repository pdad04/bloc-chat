(function() {
  function Message($firebaseArray){
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var message = $firebaseArray(ref);

    Message.getByRoomId = function(roomId){
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      message.$add(newMessage);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message',['$firebaseArray', Message]);
})();
