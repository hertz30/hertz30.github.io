---
title: "Audio-Samples"
permalink: /Audio-Samples
layout: single
---
Listen to various audio tracks I've composed over the years.

# Dynamic Compositions Instructions
Many of my compositions have been broken down by individual instrument tracks to support maximum interactivity in-game. I've made a custom audio player for you to hear them as intended. Take a listen! 

Audio elements can be played individually. You can mute or adjust the volume of individual audio elements if you'd like to hear the composition mixed differently. 

Click the "Play \_\_\_ Composition" button to play all tracks for the given composition. 

Click the "Pause \_\_\_ Composition" button to pause all tracks for the given composition. 

Click the "Reset Progress" button to reset all tracks to the beginning. This syncs them back up (If you decide to solo a track). Note that the music player will automatically loop without pressing this button.


## Composition: "Forest"

{::nomarkdown}
<style>
  .controls-header {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }

  .audio-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px; 
    width: 100%;
  }

  .audio-row {
    display: flex;
    flex: 1 1 calc(50% - 20px); 
    min-width: 300px;           
    gap: 10px;
  }

  .audio-row label {
    flex: 1;           
    text-align: left;
  }

  .audio-row audio {
    flex: 1;
    justify-content: right
  }
</style>

<div class="controls-header">
  <button onclick="playAllForest()">Play "Forest" Composition</button>
  <button onclick="pauseAllForest()">Pause "Forest" Composition</button>
  <button onclick="resetAllForest()">Reset Progress</button>
</div>

<div class="audio-grid">
  <div class="audio-row">
    <label for="Forest_Djembe">Djembe</label>
    <audio id="Forest_Djembe" controls src="audio/Forest/ForestMusicDraft_Djembe - Neon_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Tambourine">Tambourine</label>
    <audio id="Forest_Tambourine" controls src="audio/Forest/ForestMusicDraft_Tambourine_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Harp">Harp</label>
    <audio id="Forest_Harp" controls src="audio/Forest/ForestMusicDraft_Harp_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Ocarina">Ocarina</label>
    <audio id="Forest_Ocarina" controls src="audio/Forest/ForestMusicDraft_Ocarina_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Ocarina2">Ocarina 2</label>
    <audio id="Forest_Ocarina2" controls src="audio/Forest/ForestMusicDraft_Ocarina2_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Strings">Strings</label>
    <audio id="Forest_Strings" controls src="audio/Forest/ForestMusicDraft_Strings_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Strings2">Strings 2</label>
    <audio id="Forest_Strings2" controls src="audio/Forest/ForestMusicDraft_Strings2_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Strings3">Strings 3</label>
    <audio id="Forest_Strings3" controls src="audio/Forest/ForestMusicDraft_Strings3_120bpm4-4_L20M.wav"></audio>
  </div>
</div>

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
    forestTrackArray.forEach(t => t.play());
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


{::nomarkdown}
<button onclick="playAllVillage()">Play "Village" Composition</button>
<button onclick="pauseAllVillage()">Pause "Village" Composition</button>
<button onclick="resetAllVillage()">Reset Progress</button>

<label for="Village_BackgroundFlute">BackgroundFlute</label><audio id="Village_BackgroundFlute" controls><source src="audio/Village/Village_BackgroundFlute_120bpm4-4_L24M.wav" type="audio/wav"></audio>

<label for="Village_Flute">Flute</label><audio id="Village_Flute" controls><source src="audio/Village/Village_Flute_120bpm4-4_L24M.wav" type="audio/wav"></audio>

<label for="Village_Flute2">Flute2</label><audio id="Village_Flute2" controls><source src="audio/Village/Village_Flute2_120bpm4-4_L24M.wav" type="audio/wav"></audio>

<label for="Village_Harp">Harp</label><audio id="Village_Harp" controls><source src="audio/Village/Village_Harp_120bpm4-4_L24M.wav" type="audio/wav"></audio>

<label for="Village_Strings">Strings</label><audio id="Village_Strings" controls><source src="audio/Village/Village_Strings_120bpm4-4_L24M.wav" type="audio/wav"></audio>

<label for="Village_Strings2">Strings2</label><audio id="Village_Strings2" controls><source src="audio/Village/Village_Strings2_120bpm4-4_L24M_P1B.wav" type="audio/wav"></audio>

<label for="Village_Synth">Synth</label><audio id="Village_Synth" controls><source src="audio/Village/Village_Synth_120bpm4-4_L24M.wav" type="audio/wav"></audio>

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
  villageTracks.flute1.volume = 0.5;
  villageTracks.flute2.volume = 0.4;
  villageTracks.harp.volume = 1.0;
  villageTracks.str1.volume = 0.4;
  villageTracks.str2.volume = 0.3;
  villageTracks.synth.volume = 0.45;

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
