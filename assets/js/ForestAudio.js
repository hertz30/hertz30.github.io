$(document).ready(function() {
  const tracks = {
    djembe: document.getElementById('Forest_Djembe'),
    tambourine: document.getElementById('Forest_Tambourine'),
    harp: document.getElementById('Forest_Harp'),
    oc1: document.getElementById('Forest_Ocarina'),
    oc2: document.getElementById('Forest_Ocarina2'),
    str1: document.getElementById('Forest_Strings'),
    str2: document.getElementById('Forest_Strings2'),
    str3: document.getElementById('Forest_Strings3')
  };

  const trackArray = Object.values(tracks).filter(t => t !== null);

  /* Set initial volumes */
  if (tracks.djembe) {
    tracks.djembe.volume = 0.9;
    tracks.tambourine.volume = 1.0;
    tracks.harp.volume = 1.0;
    tracks.oc1.volume = 0.5;
    tracks.oc2.volume = 0.3;
    tracks.str1.volume = 0.2;
    tracks.str2.volume = 0.1;
    tracks.str3.volume = 0.05;

    /* THE LOOP: When the Djembe ends, restart everything */
    tracks.djembe.onended = function() {
      trackArray.forEach(t => {
        t.currentTime = 0;
        t.play();
      });
    };
  }

  /* Global functions for buttons */
  window.playAllForest = function() {
    trackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };

  window.pauseAllForest = function() {
    trackArray.forEach(t => t.pause());
  };
});