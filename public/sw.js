'use strict';

self.addEventListener('install', function(event) {
  self.skipWaiting();
  
});

self.addEventListener('push', function(event, data) {
	console.log(data);
  console.log('Push message received', event);
 
  var title = 'New message';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'You have a new message!'
      
    }));
});
