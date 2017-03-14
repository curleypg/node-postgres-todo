angular.module('nodeInventory', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.inventoryData = {};
  $scope.selectedIndex = undefined;
  // Show/hide details
  $scope.displayDetails = function(index){
    return $scope.selectedIndex != index? $scope.selectedIndex=index: $scope.selectedIndex = null;
  }
  // Get all items
  $http.get('/api/v1/inventory')
  .then(function(success){
    $scope.inventoryData = success.data;
    console.log(success.data);
  },function(error){
    console.log('Error: ' + error);
  });
  // Create a new item
  $scope.createItem = () => {
    $http.post('/api/v1/inventory', $scope.formData)
    .then(function(success){
      $scope.formData = {};
      $scope.inventoryData = success.data;
      console.log(success.data);
    },function(error){
      console.log('Error: ' + error);
    });
  };
  // Delete an item
  $scope.deleteItem = (inventoryID) => {
    $http.delete('/api/v1/inventory/' + inventoryID)
    .then(function(success){
      $scope.inventoryData = success.data;
      console.log(success.data);
    },function(error){
      console.log('Error: ' + error);
    });
  };
});
