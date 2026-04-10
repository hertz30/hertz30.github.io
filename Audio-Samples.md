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

## Composition: "Village"


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

## Plunderer of the Realms (Action-Adventure) Theme


{::nomarkdown}
<div class="controls-header">
  <button onclick="playRandomBattle()">Play "Plunderer of the Realms" Composition</button>
  <button onclick="pauseAllBattle()">Pause "Plunderer of the Realms" Composition</button>
  <button onclick="resetAllBattle()">Reset Progress</button>
</div>

<div class="audio-grid">

  <div class="audio-row">
    <label for="BattleMusic_Drums_130bpm4">Drums</label>
    <audio id="BattleMusic_Drums_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Drums_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Shaker_130bpm4">Shaker</label>
    <audio id="BattleMusic_Shaker_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Shaker_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_Bass_130bpm4">Bass1</label>
    <audio id="BattleMusic_Bass_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Bass_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_Bass2_130bpm4">Bass2</label>
    <audio id="BattleMusic_Bass2_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Bass2_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_BassTwinkle_130bpm4">Bass3</label>
    <audio id="BattleMusic_BassTwinkle_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_BassTwinkle_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_Dizi1_130bpm4">Dizi1</label>
    <audio id="BattleMusic_Dizi1_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Dizi1_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_Dizi2_130bpm4">Dizi2</label>
    <audio id="BattleMusic_Dizi2_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Dizi2_130bpm4-4_L8M_P0.wav"></audio>
  </div>

  <div class="audio-row">
    <label for="BattleMusic_Dizi3_130bpm4">Dizi3</label>
    <audio id="BattleMusic_Dizi3_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Dizi3_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Glass1_130bpm4">Glass1</label>
    <audio id="BattleMusic_Glass1_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Glass1_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Glass2_130bpm4">Glass2</label>
    <audio id="BattleMusic_Glass2_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Glass2_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Glass3_130bpm4">Glass3</label>
    <audio id="BattleMusic_Glass3_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Glass3_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_GlassTwinkle_130bpm4">Glass4</label>
    <audio id="BattleMusic_GlassTwinkle_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_GlassTwinkle_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Strings1_130bpm4">Strings1</label>
    <audio id="BattleMusic_Strings1_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Strings1_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_Strings2_130bpm4">Strings2</label>
    <audio id="BattleMusic_Strings2_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_Strings2_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
  <div class="audio-row">
    <label for="BattleMusic_StringTwinkle_130bpm4">Strings3</label>
    <audio id="BattleMusic_StringTwinkle_130bpm4" controls src="audio/Plunderer of the Realms/BattleMusic_StringTwinkle_130bpm4-4_L8M_P0.wav"></audio>
  </div>
  
</div>

<br>
<script>
  const battleMusicCore = {
    Shaker: document.getElementById('BattleMusic_Shaker_130bpm4'),
    Drums: document.getElementById('BattleMusic_Drums_130bpm4'),
  };
  const battleMusicBass = {
    Bass1: document.getElementById('BattleMusic_Bass_130bpm4'),
    Bass2: document.getElementById('BattleMusic_Bass2_130bpm4'),
    Bass3: document.getElementById('BattleMusic_BassTwinkle_130bpm4'),
  };
  const battleMusicDizi = {
    Dizi1: document.getElementById('BattleMusic_Dizi1_130bpm4'),
    Dizi2: document.getElementById('BattleMusic_Dizi2_130bpm4'),
    Dizi3: document.getElementById('BattleMusic_Dizi3_130bpm4'),
  };
  const battleMusicGlass = {
    Glass1: document.getElementById('BattleMusic_Glass1_130bpm4'),
    Glass2: document.getElementById('BattleMusic_Glass2_130bpm4'),
    Glass3: document.getElementById('BattleMusic_Glass3_130bpm4'),
    Glass4: document.getElementById('BattleMusic_GlassTwinkle_130bpm4'),
  };
  const battleMusicStrings = {
    Strings1: document.getElementById('BattleMusic_Strings1_130bpm4'),
    Strings2: document.getElementById('BattleMusic_Strings2_130bpm4'),
    Strings3: document.getElementById('BattleMusic_StringTwinkle_130bpm4'),
  };
  const battleMusic = {
    core: battleMusicCore,
    bass: battleMusicBass,
    dizi: battleMusicDizi,
    glass: battleMusicGlass,
    strings: battleMusicStrings
  }
  const allBattleTracks = Object.values(battleMusic).flatMap(category => Object.values(category));

  battleMusicCore.Shaker.onended = playRandomBattle();

  async function playRandomBattle() {
    allBattleTracks.forEach(t => {
        if (t) {
            t.pause();
            t.currentTime = 0;
        }
    });

    const safePlay = async (audioElement) => {
        if (!audioElement) return;
        try {
            await audioElement.play();
        } catch (err) {
            console.warn("Play interrupted or blocked:", err);
        }
    };

    for (const t of Object.values(battleMusic.core)) {
        await safePlay(t);
    }

    const categories = ['bass', 'dizi', 'glass', 'strings'];
    for (const cat of categories) {
        const tracks = Object.values(battleMusic[cat]);
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        await safePlay(randomTrack);
    }
}

function pauseAllBattle() {
    allBattleTracks.forEach(t => t.pause());
}

function resetAllBattle() {
    allBattleTracks.forEach(t => {
        t.pause();
        t.currentTime = 0;
    });
}
</script>
{:/nomarkdown}
