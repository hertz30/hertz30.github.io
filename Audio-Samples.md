---
title: "Audio-Samples"
permalink: /Audio-Samples
layout: single
---

## Composition: "Forest"

<button onclick="playAllForest()">Play "Forest" Track</button>
<button onclick="pauseAllForest()">Pause "Forest" Track</button>
<button onclick="resetAllForest()">Reset Progress</button>

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
  const forestTracks = {
    djembe: document.getElementById('Forest_Djembe'),
    tambourine: document.getElementById('Forest_Tambourine'),
    harp: document.getElementById('Forest_Harp'),
    oc1: document.getElementById('Forest_Ocarina'),
    oc2: document.getElementById('Forest_Ocarina2'),
    str1: document.getElementById('Forest_Strings'),
    str2: document.getElementById('Forest_Strings2'),
    str3: document.getElementById('Forest_Strings3')
  };

  const forestTrackArray = Object.values(forestTracks);

  forestTracks.djembe.volume = 0.7;
  forestTracks.tambourine.volume = 1.0;
  forestTracks.harp.volume = 1.0;
  forestTracks.oc1.volume = 0.5;
  forestTracks.oc2.volume = 0.3;
  forestTracks.str1.volume = 0.1;
  forestTracks.str2.volume = 0.15;
  forestTracks.str3.volume = 0.1;

  forestTracks.djembe.onended = function() {
    forestTrackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };

  function playAllForest() {
    forestTrackArray.forEach(t => {
      t.play();
    });
  }

  function pauseAllForest() {
    forestTrackArray.forEach(t => t.pause());
  }

  function resetAllForest() {
    forestTrackArray.forEach(track => {
      track.pause();
      track.currentTime = 0;
    });
  }
</script>

{:/nomarkdown}

## Composition: "Village"

<button onclick="playAllVillage()">Play "Village" Track</button>
<button onclick="pauseAllVillage()">Pause "Village" Track</button>
<button onclick="resetAllVillage()">Reset Progress</button>

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
  const villageTracks = {
    bgFlute: document.getElementById('Village_BackgroundFlute'),
    flute1: document.getElementById('Village_Flute'),
    flute2: document.getElementById('Village_Flute2'),
    harp: document.getElementById('Village_Harp'),
    str1: document.getElementById('Village_Strings'),
    str2: document.getElementById('Village_Strings2'),
    synth: document.getElementById('Village_Synth')
  };

  const villageTrackArray = Object.values(villageTracks);

  villageTracks.bgFlute.volume = 1.0;
  villageTracks.flute1.volume = 1.0;
  villageTracks.flute2.volume = 1.0;
  villageTracks.harp.volume = 1.0;
  villageTracks.str1.volume = 1.0;
  villageTracks.str2.volume = 1.0;
  villageTracks.synth.volume = 1.0;

  villageTracks.bgFlute.onended = function() {
    villageTrackArray.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };

  function playAllVillage() {
    villageTrackArray.forEach(t => {
      t.play();
    });
  }

  function pauseAllVillage() {
    villageTrackArray.forEach(t => t.pause());
  }

  function resetAllVillage() {
    villageTrackArray.forEach(t => {
      t.pause();
      t.currentTime = 0;
    });
  }
</script>
{:/nomarkdown}
