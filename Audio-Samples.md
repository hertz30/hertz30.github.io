---
title: "Audio-Samples"
permalink: /Audio-Samples
layout: single
---

## Composition: "Forest"

<button onclick="playAllForest()">Play "Forest" Track</button>
<button onclick="pauseAllForest()">Pause "Forest" Track</button>

<audio id="Forest_Djembe" controls><source src="audio/Forest/ForestMusicDraft_Djembe - Neon_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Tambourine" controls><source src="audio/Forest/ForestMusicDraft_Tambourine_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Harp" controls><source src="audio/Forest/ForestMusicDraft_Harp_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Ocarina" controls><source src="audio/Forest/ForestMusicDraft_Ocarina_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Ocarina2" controls><source src="audio/Forest/ForestMusicDraft_Ocarina2_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Strings" controls><source src="audio/Forest/ForestMusicDraft_Strings_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Strings2" controls><source src="audio/Forest/ForestMusicDraft_Strings2_120bpm4-4_L20M.wav" type="audio/wav"></audio>
<audio id="Forest_Strings3" controls><source src="audio/Forest/ForestMusicDraft_Strings3_120bpm4-4_L20M.wav" type="audio/wav"></audio>

{::nomarkdown}
<br>
<script>
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

  const trackArray = Object.values(tracks);

  tracks.djembe.volume = 0.9;
  tracks.tambourine.volume = 1.0;
  tracks.harp.volume = 1.0;
  tracks.oc1.volume = 0.5;
  tracks.oc2.volume = 0.3;
  tracks.str1.volume = 0.2;
  tracks.str2.volume = 0.1;
  tracks.str3.volume = 0.05;

  tracks.djembe.onended = function() {
    trackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };

  function playAllForest() {
    trackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  }

  function pauseAllForest() {
    trackArray.forEach(t => t.pause());
  }
</script>

{:/nomarkdown}

## Composition: "Village"

<button onclick="playAllVillage()">Play "Village" Track</button>
<button onclick="pauseAllVillage()">Pause "Village" Track</button>

<audio id="Village_BackgroundFlute" controls><source src="audio/Village/Village_BackgroundFlute_120bpm4-4_L24M.wav" type="audio/wav"></audio>
<audio id="Village_Flute" controls><source src="audio/Village/Village_Flute_120bpm4-4_L24M.wav" type="audio/wav"></audio>
<audio id="Village_Flute2" controls><source src="audio/Village/Village_Flute2_120bpm4-4_L24M.wav" type="audio/wav"></audio>
<audio id="Village_Harp" controls><source src="audio/Village/Village_Harp_120bpm4-4_L24M.wav" type="audio/wav"></audio>
<audio id="Village_Strings" controls><source src="audio/Village/Village_Strings_120bpm4-4_L24M.wav" type="audio/wav"></audio>
<audio id="Village_Strings2" controls><source src="audio/Village/Village_Strings2_120bpm4-4_L24M_P1B.wav" type="audio/wav"></audio>
<audio id="Village_Synth" controls><source src="audio/Village/Village_Synth_120bpm4-4_L24M.wav" type="audio/wav"></audio>

{::nomarkdown}
<br>
<script>
  const tracks = {
    bgFlute: document.getElementById('Village_BackgroundFlute'),
    flute1: document.getElementById('Village_Flute'),
    flute2: document.getElementById('Village_Flute2'),
    harp: document.getElementById('Village_Harp'),
    str1: document.getElementById('Village_Strings'),
    str2: document.getElementById('Village_Strings2'),
    synth: document.getElementById('Village_Synth')
  };

  const trackArray = Object.values(tracks);

  tracks.bgFlute.volume = 1;
  tracks.flute1.volume = 1.0;
  tracks.flute2.volume = 1;
  tracks.harp.volume = 1;
  tracks.str1.volume = 1;
  tracks.str2.volume = 1;
  tracks.synth.volume = 1;

  tracks.bgFlute.onended = function() {
    trackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };

  function playAllVillage() {
    trackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  }

  function pauseAllVillage() {
    trackArray.forEach(t => t.pause());
  }
</script>
{:/nomarkdown}
