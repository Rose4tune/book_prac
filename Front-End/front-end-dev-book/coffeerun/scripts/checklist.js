(function(window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector privided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could noe find element with selector: ' + selector);
    }
  }

  function Row(coffeeOrder) {
    var $div = $('<div></div>', {
      'data-coffee-order' : 'checkbox',
      'class' : 'checkbox'
    });

    if (coffeeOrder.flavor === 'Caramel') {
      $div.css('color', 'orange');
    } else if (coffeeOrder.flavor === 'Almond') {
      $div.css('color', 'red');
    } else if (coffeeOrder.flavor === 'Mocha') {
      $div.css('color', 'blue');
    } else {
      $div.css('color', 'black');
    };

    var $label = $('<label></label>');

    var $checkbox = $('<input>', {
      type : 'checkbox',
      value : coffeeOrder.emailAddress
    });

    var description = ' [' + coffeeOrder.strength + 'x]' + ' ';
    description += coffeeOrder.flavor + ' ';
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')' + ' ';
    description += coffeeOrder.size;

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on('click', 'input', function(event) {
      var email = event.target.value;
      fn(email)
        .then(function(){
          this.removeRow(email);
        }.bind(this))
      // this.removeRow(email);
      // fn(email);
    }.bind(this));
  }

  CheckList.prototype.addRow = function(coffeeOrder) {
    //Remove any existing rows that match the email emailAddress
    this.removeRow(coffeeOrder.emailAddress);

    // Creat a new instance of a row, using the coffee order info
    var rowElement = new Row(coffeeOrder);


    //Add the new row instance's $element property to the CheckList
    this.$element.append(rowElement.$element);
  }

  CheckList.prototype.removeRow = function(email) {
    this.$element
    .find('[value="' + email +'"]')
    .closest('[data-coffee-order="checkbox"]')
    .remove();
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
