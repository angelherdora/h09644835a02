"use strict";

(function () {
  var controllerContact = function controllerContact() {
    var btnContact = document.querySelectorAll('.contactActive');
    var modal = document.getElementById('modal'),
      modalClose = document.querySelectorAll('.o-link--close, .o-btn.close'),
      blkSuccess = document.getElementById('success-message'),
      linkReset = document.getElementById('reset');

    // btnContact.addEventListener("click",function(e){
    // 	e.preventDefault();
    // 	if (modal.classList.contains('hidden')) {
    // 		blkSuccess.classList.remove('sib-form-message-panel--active');
    // 		document.querySelector('body').style['overflow'] = 'hidden';
    // 		modal.classList.remove('hidden');
    // 	}
    // },false);

    linkReset.addEventListener("click", function (e) {
      e.preventDefault();
      blkSuccess.classList.remove('sib-form-message-panel--active');
    }, false);
    modalClose.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        if (!modal.classList.contains('hidden')) {
          document.querySelector('body').style['overflow'] = 'initial';
          modal.classList.add('hidden');
        }
      });
    });
    btnContact.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        if (modal.classList.contains('hidden')) {
          blkSuccess.classList.remove('sib-form-message-panel--active');
          document.querySelector('body').style['overflow'] = 'hidden';
          modal.classList.remove('hidden');
        }
      });
    });
  };
  controllerContact();
})();