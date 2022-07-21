(function(window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  var result = document.getElementById('result');

  result.innerHTML = '30';
  result.style.color = 'green';

  function ChangeHandler(level){
    this.$level = $(level);

    this.$level.on('change', function(event) {
      event.preventDefault();
      this.$level = event.target.value;

      result.innerHTML = this.$level;

      if (this.$level <= 35) {
        result.style.color = 'green';
      } else if (this.$level > 35 && this.$level <= 70) {
        result.style.color = 'orange';
      } else if (this.$level > 70 && this.$level <= 100) {
        result.style.color = 'red';
      }
    });
  }

  App.ChangeHandler = ChangeHandler;
  window.App = App;
})(window);
