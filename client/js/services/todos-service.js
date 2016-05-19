angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
		    complete: function(todoData){
			return $http.post('/api/todos',todoData);

},

snooze: function(todoData){
    return $http.post('/api/todos', todoData);
},


delete: function(todoData){
    return $http.delete('/api/todos', todoData);
}


		        

		}
	}]);
