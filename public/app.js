(function() {
'use strict';
angular.module('myApp',[]).directive('googlePush', function($http) {
	return function(scope, element, attr) {

		if ('serviceWorker' in navigator) {
  
 		 navigator.serviceWorker.register('sw.js').then(function(reg) {
  			reg.pushManager.subscribe({
  				userVisibleOnly: true
  			}).then(function(sub) {
  				$http.post('/store-subscription',{client: sub.endpoint});
  				
  			})
   
    	})
		}




	}

})
})(window);