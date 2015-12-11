angular.module('starter.services', [])

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
  }
  
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
