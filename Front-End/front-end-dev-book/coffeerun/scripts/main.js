(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var COFFEE_STRENGTH = '[data-coffee-order="level"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var ChangeHandler = App.ChangeHandler;
  var CheckList = App.CheckList;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var formHandler = new FormHandler(FORM_SELECTOR);
  var changeHandler = new ChangeHandler(COFFEE_STRENGTH);
  // var myTruck = new Truck('ncc-1701', new DataStore());
  // var myTruck = new Truck('ncc-1701', remoteDS);
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandler.addSubmitHandler(function (data) {
    return myTruck.createOrder.call(myTruck, data)
      .then(function() {
        checkList.addRow.call(checkList, data);
      }
      // ,
      // function() {
      //   alert('Server unreachable. Try again later.')
      // }
    );
  });

  // formHandler.addInputHandler(Validation.isCompanyEmail);

  myTruck.printOrders(checkList.addRow.bind(checkList));

  console.log(formHandler);
})(window);
