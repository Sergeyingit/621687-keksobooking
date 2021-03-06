'use strict';
(function () {
  var ESC = 27;
  var main = document.querySelector('main');
  var successTamplate = document.querySelector('#success').content.querySelector('.success');

  var renderSuccess = function () {
    var success = successTamplate.cloneNode(true);
    main.appendChild(success);
    removeSuccess();
  };

  // функция слушает события и удаляет из разметки сообщение об успешной отправке
  var removeSuccess = function () {
    var successElement = main.querySelector('.success');
    var closeSuccess = function () {
      main.removeChild(successElement);
      window.main.totalReset();
      document.removeEventListener('keydown', popupSuccessEcsPressHandler);
      document.removeEventListener('click', closeSuccess);
    };

    var popupSuccessEcsPressHandler = function (evt) {
      if (evt.keyCode === ESC) {
        closeSuccess();
      }
    };

    document.addEventListener('click', closeSuccess);
    document.addEventListener('keydown', popupSuccessEcsPressHandler);
  };

  window.success = {
    renderSuccess: renderSuccess
  };
})();
