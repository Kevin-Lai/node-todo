angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;
	        $scope.completeStatus = false;
	        $scope.snoozeStatus = false;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

$scope.completeTodo = function(){
    // To check the completed box
    if($scope.completeStatus == false){
	Todos.complete($scope.completeStatus)
	.success(function(data){
	    $scope.completeStatus = true;
	    });
	 }
	// To uncheck
	else{
	    Todos.complete($scope.completeStatus)
	    .success(function(data){
		$scope.completeStatus = false;
		});
	}
})

$scope.snoozeTodo = function(){
    // To check the snooze
    if($scope.snoozeStatus == false){
	Todos.snooze($scope.completeStatus)
	.success(function(data){
	    $scope.snoozeStatus = true;
	    });
	}
	// To uncheck
	else{
	    Todos.snooze($scope.snoozeStatus)
	    .success(function(data){
		$scope.snoozeStatus = false;
		});
		     
	}
}

$scope.deleteTodo = function(){
    Todos.delete($scope.formData)
    .success(function(data){
    });
}


	}]);
