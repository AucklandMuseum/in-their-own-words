/*! Auckland Museum - App JavaScript file */

  $(document).ready(function() {

      /* 
         //  Set up the audio players and, if required, autoplay
         //
         //
      */

      $('#audio-player-bev').mediaelementplayer({
          alwaysShowControls: true,
          features: ['playpause','progress','volume'],
          audioVolume: 'horizontal',
          audioWidth: 400,
          audioHeight: 130,
          success: function(media, domElement, player) {
              $('#startbev').on('click', function() {
                    media.load();
                    media.play();
              });
          }
      });


      $('#audio-player-johnny').mediaelementplayer({
          alwaysShowControls: true,
          features: ['playpause','progress','volume'],
          audioVolume: 'horizontal',
          audioWidth: 400,
          audioHeight: 130,
          success: function(media, domElement, player) {
              $('#startjohnny').on('click', function() {
                    media.load();
                    media.play();
              });
          }
      });


      $('#audio-player-laura').mediaelementplayer({
          alwaysShowControls: true,
          features: ['playpause','progress','volume'],
          audioVolume: 'horizontal',
          audioWidth: 400,
          audioHeight: 130,
          success: function(media, domElement, player) {
              $('#startlaura').on('click', function() {
                    media.load();
                    media.play();
              });
          }
      });

      $('#audio-player-cara').mediaelementplayer({
          alwaysShowControls: true,
          features: ['playpause','progress','volume'],
          audioVolume: 'horizontal',
          audioWidth: 400,
          audioHeight: 130,
          success: function(media, domElement, player) {
              $('#startcara').on('click', function() {
                    media.load();
                    media.play();
              });
          }
      });

  });


  /* 
     //  Create and manage the language switcher
     //  Adapted from code by Jérémy Fumeron | @JFeremy
     //  https://codepen.io/JFeremy/post/switch-language-button-js
  */

  /* Set variables */
  var chinese = document.getElementById('ch_click'),
    english = document.getElementById('en_click'),
    ch_txt = document.querySelectorAll('.fr'),
    en_txt = document.querySelectorAll('.en'),
    nb_ch = ch_txt.length,
    nb_en = en_txt.length;
    //currentlanguage = sessionStorage.getItem('lang_pref');

  /* Listen for language toggle from user */
  chinese.addEventListener('click', function() {
    langue(chinese, english);

    /* Clear old preference from session storage */
    //sessionStorage.clear();

    /* Write new preference to session storage */
    if(sessionStorage){
        // Store data
        sessionStorage.setItem("lang_pref", "chinese");
    }
  }, false);

  english.addEventListener('click', function() {
    langue(english, chinese);

    /* Clear old preference from session storage */
    //sessionStorage.clear();

    /* Write new preference to session storage */
    if(sessionStorage){
        // Store data
        sessionStorage.setItem("lang_pref", "english");
    }


  }, false);

  /* Toggle language text */
  function langue(langueOn, langueOff) {
    if (!langueOn.classList.contains('current_lang')) {
      langueOn.classList.toggle('current_lang');
      langueOff.classList.toggle('current_lang');
    }
    if (langueOn.innerHTML == '中文') {
      afficher(ch_txt, nb_ch);
      cacher(en_txt, nb_en);
    } else if (langueOn.innerHTML == 'En') {
      afficher(en_txt, nb_en);
      cacher(ch_txt, nb_ch);
    }
  }

  function afficher(txt, nb) {
    for (var i = 0; i < nb; i++) {
      txt[i].style.display = '';
    }
  }

  function cacher(txt, nb) {
    for (var i = 0; i < nb; i++) {
      txt[i].style.display = 'none';
    }
  }

  function init() {
    /* If session storage preference is french, start with french */
    if (sessionStorage.getItem('lang_pref') == 'chinese'){
        // myValue was not set
        langue(chinese, english);
    } else{
        // myValue was set
        langue(english, chinese);
    }
    
  }

  init();














   

        