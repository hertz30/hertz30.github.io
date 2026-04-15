---
title: "Plunderer of the Realms"
permalink: /Plunderer-of-the-Realms
layout: single
---

[![Play the demo here: Clickable link to Itch.io](assets\images\Plunderer-of-the-Realms.png)](https://tulsano-wibisono.itch.io/plunderer-of-the-realms)
Click above to access the demo.

Plunderer of the Realms is a non-linear action RPG that challenges players to navigate the treacherous kingdom of Tulvaria. Stepping into the role of a shadowy elf thief, players must raid four distinct kingdoms to reclaim stolen gemstones. The project focuses on strategic combat and atmospheric world-building, culminating in a final ascent of the central Wizard Tower.

## Project Roles
I was a gameplay programmer, audio engineer, and composer.

### Gameplay Programmer: Combat & Systems
* Developed Modular Enemy Controller: 
  * Architected enemy behavior with a versatile enemy base class that allowed for distinct unit variations (Elves, Undead, Goblins, Humans) by tuning specific serialized parameters such as detection range, attack frequency, and health pools.
* Engineered Melee Combat: 
  *  Programmed the primary player combat interaction system, focusing on responsive mace attack logic and hit detection.
* Global Game Systems: 
  * Implemented the core game state management, including the player health system, gemstone collection logic, enemy spawning, and high score tracking system.

### Lead Audio Engineer & Composer
* Dynamic Music System: 
  * Architected a complex playlist structure that responds to real-time gameplay states. I implemented a multi-layered soundtrack where percussion instruments dynamically crossfade in and out based on enemy engagement states, heightening tension during combat.
* Original Score: 
  * Composed an atmospheric, reactive soundtrack tailored to the medieval action-adventure vibe of the game.
* Audio Middleware Pivot: 
  * Originally planned for Wwise, I spearheaded the transition to FMOD to ensure full compatibility with WebGL deployment while maintaining high-fidelity audio logic.
* Technical Implementation: 
  * Migrated intricate Wwise-style logic within FMOD, managing 3D spatialization and event triggers for all environmental and combat SFX sourced from Pixabay.

## Interactive Composition: Main Theme
My composition for this game was deconstructed as individual instrument tracks to support maximum interactivity in-game. I've made a custom audio player for you to hear the music as intended. Take a listen!
* Custom Mixes: Audio elements can be played individually. You can mute or adjust the volume of specific tracks to hear the composition mixed differently.
* Playback Controls: Use the Play/Pause buttons to toggle the full composition, or Reset Progress to resync tracks if you've soloed specific layers.
* Procedural Variation: Each time you press play, you will hear a different version of the track, accurately illustrating the randomized, state-driven experience of the song in-game.

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

  battleMusicCore.Shaker.onended = playRandomBattle;

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

        if (cat === 'dizi' && Math.random() < 0.25) 
        {
        console.log("Dizi skipped this round");
        continue; 
        }

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