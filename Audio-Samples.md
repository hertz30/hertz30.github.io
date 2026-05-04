---
title: "Audio Samples"
permalink: /Audio-Samples
layout: single
---
Listen to various audio tracks I've composed over the years.

# Interactive Compositions
Many of my compositions have been deconstructed as individual instrument tracks to support maximum interactivity in-game. I've made a custom audio player for you to hear them as intended. Take a listen! 

Audio elements can be played individually. You can mute or adjust the volume of individual audio elements if you'd like to hear the composition mixed differently. 

Click the "Play \_\_\_ Composition" button to play all tracks for the given composition. 

Click the "Pause \_\_\_ Composition" button to pause all tracks for the given composition. 

Click the "Reset Progress" button to reset all tracks to the beginning. This syncs them back up (If you decide to solo a track). Note that the music player will automatically loop without pressing this button.


## Interactive Composition: "Forest"

{::nomarkdown}
<style>
  
 .controls-header {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column; 
    gap: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 600px) {
    .controls-header {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
  
  .audio-grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .audio-row {
    display: flex;
    flex: 1 1 calc(50% - 20px); 
    min-width: 300px;           
    align-items: center; 
  }

  .audio-row label {
    flex: 0 0 20%;     
    font-size: clamp(0.7rem, 2vw, 0.85rem);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .audio-row audio {
    flex: 1;
    justify-content: right;
  }
</style>

<div class="controls-header">
  <button onclick="playAllForest()">Play "Forest" Composition</button>
  <button onclick="pauseAllForest()">Pause "Forest" Composition</button>
  <button onclick="resetAllForest()">Reset Progress</button>
</div>

<div class="audio-grid">
  <div class="audio-row">
    <label for="Forest_Djembe">Djem</label>
    <audio id="Forest_Djembe" controls src="audio/Forest/ForestMusicDraft_Djembe - Neon_120bpm4-4_L20M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Forest_Tambourine">Tamb</label>
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

## Interactive Composition: "Village"


{::nomarkdown}
<div class="controls-header">
  <button onclick="playAllVillage()">Play "Village" Composition</button>
  <button onclick="pauseAllVillage()">Pause "Village" Composition</button>
  <button onclick="resetAllVillage()">Reset Progress</button>
</div>

<div class="audio-grid">
  <div class="audio-row">
    <label for="Village_BackgroundFlute">BG Flute</label>
    <audio id="Village_BackgroundFlute" controls src="audio/Village/Village_BackgroundFlute_120bpm4-4_L24M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Flute">Flute</label>
    <audio id="Village_Flute" controls src="audio/Village/Village_Flute_120bpm4-4_L24M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Flute2">Flute 2</label>
    <audio id="Village_Flute2" controls src="audio/Village/Village_Flute2_120bpm4-4_L24M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Harp">Harp</label>
    <audio id="Village_Harp" controls src="audio/Village/Village_Harp_120bpm4-4_L24M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Strings">Strings</label>
    <audio id="Village_Strings" controls src="audio/Village/Village_Strings_120bpm4-4_L24M.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Strings2">Strings 2</label>
    <audio id="Village_Strings2" controls src="audio/Village/Village_Strings2_120bpm4-4_L24M_P1B.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="Village_Synth">Synth</label>
    <audio id="Village_Synth" controls src="audio/Village/Village_Synth_120bpm4-4_L24M.wav"></audio>
  </div>
</div>

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

## Childhood (8-bit)
<div class="audio-grid">
  <div class="audio-row">
    <label for="8bit">Childhood</label>
    <audio id="8bit" controls loop src="audio\Misc\8BitInspired.m4a"></audio>
  </div>
  </div>

## Canon Event (Pachelbel Remix)
<div class="audio-grid">
  <div class="audio-row">
    <label for="Canon">CanonEvent</label>
    <audio id="Canon" controls loop src="audio\Misc\CanonEvent (Pachelbel_s Canon Remix).m4a"></audio>
  </div>
  </div>

## Comfort ("Music Puzzles" Theme)
<iframe frameborder="0" src="https://itch.io/embed/2322607" width="552" height="167"><a href="https://hzeng.itch.io/music-puzzles">Play Music Puzzles on itch.io</a></iframe>

<div class="audio-grid">
  <div class="audio-row">
    <label for="Cozy">Comfort</label>
    <audio id="Cozy" controls loop src="audio\Misc\CozyVibes.m4a"></audio>
  </div>
  </div>

## Daily Life ("Carbon Capture Simulation" Theme)
<iframe frameborder="0" src="https://itch.io/embed/2399402" width="552" height="167"><a href="https://hzeng.itch.io/music-puzzles">Play CCUS 2023 demo on itch.io</a></iframe>
<div class="audio-grid">
  <div class="audio-row">
    <label for="Cozy">Life</label>
    <audio id="Cozy" controls loop src="audio\Misc\GenericLevelMusicCCUS.m4a"></audio>
  </div>
  </div>

<br>
<br>

# Links to Other Pages
Want to hear more? I’ve also composed music for the projects listed below. Click any link to jump directly to their respective pages and hear the full compositions in context.

## Interactive Composition: Blank Slate
Jump to [Open World Compositions for Blank Slate](/Blank-Slate#open-world-compositions).

This section features three distinct variations of the game's main theme that evolve with the player’s journey:
* Tutorial: 
  * A sparse, atmospheric arrangement as the player awakens in a strange world.
* Opening Cutscene: 
  * A livelier, fully-orchestrated version to mark the start of the adventure.
* Wizard's Tower: 
  * A dynamic, ramping version for the game’s climax, serving as a "return to form" for the final region.

## Interactive Composition: Plunderer of the Realms
Jump to [Dynamic Main Theme for Plunderer of the Realms](/Plunderer-of-the-Realms#interactive-composition-main-theme).

One of the first game themes I ever composed, this theme features a dynamic looping structure with three or more variations for every instrument track.
* The audio logic has been specifically ported from its original implementation into my custom interactive audio player.
* This allows you to demo the state-driven variations and track randomization directly in your browser, illustrating how the score responds to real-time gameplay.

## Main Theme: Smuggler's Run: Interstellar Escape
Jump to [Open World Compositions for Blank Slate](/Smugglers-Run-Interstellar-Escape#smugglers-run-interstellar-escape-music).

Composed for a fast-paced interstellar endless-runner, this theme emphasizes high-stakes tension through dynamic music. Built using heavy synthesizers and expansive reverb, the score delivers a futuristic sci-fi atmosphere that responds directly to the player's performance.

* Immersive Speed-Up Effect: 
  * The game features a tempo-shifting engine where the BPM increases the longer a player survives, heightening psychological tension as the gameplay difficulty scales.

* Audio-Visual Synergy: 
  * I designed and implemented bespoke sound effects for the game's Warp mechanic, providing critical tactile feedback that grounds the player during high-speed transitions between planetary environments.

* Iterative Soundscapes: 
  * The audio design underwent multiple iterations based on teammate feedback to ensure that environmental hazard cues were distinct and provided immediate, actionable feedback loops for the player.