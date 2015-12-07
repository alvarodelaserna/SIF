angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Videos', function() {
  var videos = {
    'cardio': [
      {
        id: 0,
        title: '30 minutos para adelgazar rápido',
        url: 'https://www.youtube.com/embed/QhuMeVnn_qU?rel=0&amp;showinfo=0'
      },
      {
        id: 1,
        title: '30 minutos para eliminar grasa abdominal',
        url: 'https://www.youtube.com/embed/0YRX4pEP6pY?rel=0&amp;showinfo=0'
      },
      {
        id: 2,
        title: '10 minutos ideal para principiantes',
        url: 'https://www.youtube.com/embed/HcUOM5XkeyM?rel=0&amp;showinfo=0'
      }
    ],
    'strength': [
      {
        id: 0,
        title: 'Top 10 Hardest Core Exercises',
        url: 'https://www.youtube.com/embed/MfIQOrEYWA0?rel=0&amp;showinfo=0'
      },
      {
        id: 1,
        title: 'Calum Von Moger Destroys Back at the Muscle & Strength Gym',
        url: 'https://www.youtube.com/embed/5_2crvxS7JE?rel=0&amp;showinfo=0'
      },
      {
        id: 2,
        title: 'Brutal Shoulder Workout with IFBB Pros Ryan Terry & Brett Kahn',
        url: 'https://www.youtube.com/embed/68wWkxL477A?rel=0&amp;showinfo=0'
      }
    ],
    'flexibility': [
      {
        id: 0,
        title: 'Total Body Stretch - Flexibility Exercises for the Entire Body',
        url: 'https://www.youtube.com/embed/KJaWIBg15n0?rel=0&amp;showinfo=0'
      },
      {
        id: 1,
        title: '12 Minute Splits Stretch Flexibility Workout For Beginners',
        url: 'https://www.youtube.com/embed/qC7960yMaxA?rel=0&amp;showinfo=0'
      },
      {
        id: 2,
        title: 'Full Body Stretching Exercises',
        url: 'https://www.youtube.com/embed/qZTGgEWPbLk?rel=0&amp;showinfo=0'
      }
    ]
  };
  return {
    all: function() {
      return videos;
    },
    remove: function(video) {
      videos.splice(videos.indexOf(video), 1);
    },
    get: function(videoId) {
      for (var i = 0; i < videos.length; i++) {
        if (videos[i].id === parseInt(videoId)) {
          return videos[i];
        }
      }
      return null;
    }
  };
});
