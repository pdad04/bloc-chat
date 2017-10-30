(function() {
  function ModalCtrl(Room,$uibModal) {
    var RoomName = {};
    this.add = Room.add;
    this.modalInstance = null;
    this.name = "";

    /**
    * @function open
    * @desc Open uibootstrap modal
    */
    this.open = function(){
        modalInstance = $uibModal.open({
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        templateUrl: '/templates/modal.html',
        backdrop: 'static',
        size: 'sm'
      });
    }

    /**
    * @function close
    * @desc close modal window
    */
    this.close = function() {
      modalInstance.close();
    }

    /**
    * @function create
    * @desc create room
    */
    this.create = function() {
      if(!this.name){
        alert("You need to enter a room name");
      }else{
      RoomName.name = this.name;
      this.add(RoomName);
      modalInstance.close();
    }
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl',['Room','$uibModal', ModalCtrl]);
})();
