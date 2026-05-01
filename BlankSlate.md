---
title: "Blank Slate"
permalink: /Blank-Slate
layout: single
excerpt: "Children's Adventure RPG about Freedom"
---

[![Play the demo here: Clickable link to Itch.io](assets\images\BlankSlate.png)](https://csgutulsa.itch.io/blank-slate)
Click above to play the game on Itch.io.

Blank Slate is an adventure RPG developed by the 2023-2024 graduating class at the University of Tulsa. In this journey, players awaken in a mysterious valley, uncovering their ability to absorb traits from the world's inhabitants to halt the ominous decay endangering the world. 

I served as a Composer, Sound Designer, and Audio Programmer, composing 3 of the game's 6 open world soundtracks and personally designing SFX and implementing many audio systems.

Learn more about <a href="https://sites.utulsa.edu/csg/2025/11/14/blank-slate-a-development-story/">Blank Slate</a>:
<iframe title="Blank Slate: A Development Story | Senior Production 23–24" width="500" height="281" src="https://www.youtube.com/embed/1u-xRSiq3P8?feature=oembed&amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>

## Project Roles
I was a Composer, Sound Designer, and Audio Programmer.

### Composing Musical Narrative & Motif Design
* My composition work focused on creating a cohesive emotional thread through the use of a central "Main Theme" motif. This theme evolves alongside the player’s power and understanding of the world. 
* All tracks can be previewed in the <a href="#open-world-compositions">Open World Compositions</a> section below.
* The Awakening: 
  * Introduced in the Opening Tutorial, the motif begins as a sparse, atmospheric arrangement. It then transitions into the Opening Cutscene music, building in intensity to mark the start of the player's quest.
* The Final Return: 
  * For the game’s climax, I developed a nonlinear dynamic version of the motif. This complex arrangement serves as a thematic "return to form," rewarding the player's progression with a grander, more intricate iteration of the melody they first heard at the start.

### Audio Programming & Technical Implementation
* Battle Music Logic: 
  * Programmed a system that tracks enemy aggro states in real-time. This system updates Wwise states to dynamically trigger or fade music layers based on the immediate threat level to the player.
* Region Triggers: 
  * Implemented Wwise region triggers to ensure smooth transitions between environmental soundscapes as the player explores the valley and the floating island.
Cutscene Integration: 
  * Programmed the logic for music synchronization during narrative beats and cutscenes to ensure emotional impact aligned with visual cues.

### Sound Design & UI
* Ability & Reward Feedback: 
  * Composed and implemented custom stingers for unlocking new abilities and completing quests. I also implemented unique ability sound cues to provide tactile feedback for the core "ability absorption" mechanic.

* Interactive UI: 
  * Integrated all UI sounds, including inventory interactions and button feedback, to ensure a polished user experience.

* Technical Polish: 
  * Developed and implemented functional volume setting sliders, giving players full control over their audio mix.

## Open World Compositions
My composition for this game was deconstructed as individual instrument tracks to support maximum interactivity in-game. I've made a custom audio player for you to hear the music as intended. Take a listen!
* Custom Mixes: Audio elements can be played individually. You can mute or adjust the volume of specific tracks to hear the composition mixed differently.
* Playback Controls: Use the Play/Pause buttons to toggle the full composition, or Reset Progress to resync tracks if you've soloed specific layers.

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
flex: 0 0 25%;

font-size: clamp(0.7rem, 2vw, 0.85rem);
text-align: left;
overflow: hidden;
text-overflow: ellipsis;
padding-right: 5px;
}

.audio-row audio {
flex: 1;
}

.section-label {
width: 100%;
font-weight: bold;
margin: 15px 0 5px 0;
border-bottom: 1px solid #ccc;
font-size: 0.9rem;
}
</style>
{:/nomarkdown}

### Tutorial & Cutscene Themes

{::nomarkdown}
<div class="audio-grid">
    <div class="audio-row">
    <label for="Tutorial_Path">Tutorial</label>
    <audio id="Tutorial_Path" controls loop src="audio\BlankSlate\Tutorial_PathMusic.wav"></audio>
  </div>
  <div class="audio-row">
    <label for="Intro_Cutscene">Cutscene</label>
    <audio id="Intro_Cutscene" controls loop src="audio\BlankSlate\Intro_Cutscene.wav"></audio>
  </div>
</div>
{:/nomarkdown}

### Dynamic Composition: Wizard's Tower Ending Theme
{::nomarkdown}
<div class="controls-header">
<button onclick="startComposition()">Play "Blank Slate Ending" Composition</button>
<button onclick="skipToLoop()">Skip Prelude</button>
<button onclick="pauseAll()">Pause</button>
<button onclick="resetAll()">Reset</button>
</div>

<div class="audio-grid">
<div class="audio-row"><label>Piano</label><audio id="Piano1" controls src="audio\BlankSlate\Ending_PianoArpChords_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Piano Chords</label><audio id="Piano2" controls src="audio\BlankSlate\Ending_PianoConstant_90bpm4-4_L21M.wav"></audio></div>

<div class="section-label">Prelude</div>
<div class="audio-row"><label>Cellos</label><audio id="Pre_1" controls src="audio\BlankSlate\Ending_Cellos_Prelude_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Synth</label><audio id="Pre_2" controls src="audio\BlankSlate\Ending_SynthChords_Prelude_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Twinkles</label><audio id="Pre_3" controls src="audio\BlankSlate\Ending_Twinkles_Prelude_90bpm4-4_L21M.wav"></audio></div>

<div class="section-label">Main Theme</div>
<div class="audio-row"><label>Cellos</label><audio id="Loop_1" controls src="audio\BlankSlate\Ending_Cellos_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Synth</label><audio id="Loop_2" controls src="audio\BlankSlate\Ending_SynthChords_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Twinkles</label><audio id="Loop_3" controls src="audio\BlankSlate\Ending_Twinkles_90bpm4-4_L21M.wav"></audio></div>
<div class="audio-row"><label>Voice (Me)</label><audio id="Loop_Voice" controls src="audio\BlankSlate\Ending_Voice_90bpm4-4_L21M.wav"></audio></div>
</div>

<script>
const preludeTracks = [
document.getElementById('Piano1'), document.getElementById('Piano2'), 
document.getElementById('Pre_1'),  document.getElementById('Pre_2'),
document.getElementById('Pre_3')
];

const loopTracks = [
document.getElementById('Piano1'), document.getElementById('Piano2'),
document.getElementById('Loop_1'), document.getElementById('Loop_2'),
document.getElementById('Loop_3'), 
];

document.getElementById('Piano2').volume = 0.56;
const voiceTrack = document.getElementById('Loop_Voice');
const allTracks = [...preludeTracks, ...loopTracks, voiceTrack];

// Logic to trigger the loop once the prelude finishes
preludeTracks[0].onended = () => playLoop();
loopTracks[0].onended = () => playLoop();

async function safePlay(t) {
if (!t) return;
try { await t.play(); } catch (e) { console.warn("Playback blocked", e); }
}

function stopAll() {
allTracks.forEach(t => { t.pause(); t.currentTime = 0; });
}

function startComposition() {
stopAll();
preludeTracks.forEach(t => safePlay(t));
}

function skipToLoop() {
stopAll();
playLoop();
}

function playLoop() {

// Play the 5 core loop tracks
loopTracks.forEach(t => safePlay(t));

// Wwise Logic: Voice track randomly alternates
if (Math.random() > 0.5) {
  safePlay(voiceTrack);
}
}

function pauseAll() {
allTracks.forEach(t => t.pause());
}

function resetAll() {
stopAll();
}
</script>

{:/nomarkdown}