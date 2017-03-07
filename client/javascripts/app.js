angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.todoData = {};
  // Get all todos
  $http.get('/api/v1/todos')
  .then(function(success){
    $scope.todoData = success.data;
    console.log(success.data);
  },function(error){
    console.log('Error: ' + error);
  });
  // Create a new todo
  $scope.createTodo = () => {
    $http.post('/api/v1/todos', $scope.formData)
    .then(function(success){
      $scope.formData = {};
      $scope.todoData = success.data;
      console.log(success.data);
    },function(error){
      console.log('Error: ' + error);
    });
  };
  // Delete a todo
  $scope.deleteTodo = (todoID) => {
    $http.delete('/api/v1/todos/' + todoID)
    .then(function(success){
      $scope.todoData = success.data;
      console.log(success.data);
    },function(error){
      console.log('Error: ' + error);
    });
  };
});
