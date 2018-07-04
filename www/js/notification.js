var myApp = new Framework7(); 
var mainView = myApp.addView('.view-main');
 
var $$ = Dom7;
 
$$('.notification-default').on('click', function () {
    myApp.addNotification({
        title: 'Framework7',
        message: 'This is a simple notification message with title and message',
        hold: 5000
    });
});
$$('.notification-full').on('click', function () {
    myApp.addNotification({
        title: 'Framework7',
        subtitle: 'Notification subtitle',
        message: 'This is a simple notification message with custom icon and subtitle',
        media: '<i class="icon icon-f7"></i>',
        hold: 5000
    });
});
$$('.notification-custom').on('click', function () {
    myApp.addNotification({
        title: 'My Awesome App',
        subtitle: 'New message from John Doe',
        message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
        media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">'
    });
});
$$('.notification-callback').on('click', function () {
    myApp.addNotification({
        title: 'My Awesome App',
        subtitle: 'New message from John Doe',
        message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
        media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">',
        onClose: function () {
            myApp.alert('Notification closed');
        }
    });
});
