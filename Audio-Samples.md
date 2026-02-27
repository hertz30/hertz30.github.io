---
title: "Audio-Samples"
permalink: /Audio-Samples
---

<audio id="track1" controls>
  <source src="audio/Forest/ForestMusicDraft_Djembe - Neon_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track2" controls>
  <source src="audio/Forest/ForestMusicDraft_East Bay_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track3" controls>
  <source src="audio/Forest/ForestMusicDraft_Flute_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track4" controls>
  <source src="audio/Forest/ForestMusicDraft_Harp_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track5" controls>
  <source src="audio/Forest/ForestMusicDraft_Ocarina_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track6" controls>
  <source src="audio/Forest/ForestMusicDraft_Ocarina2_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track7" controls>
  <source src="audio/Forest/ForestMusicDraft_Strings_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>
<audio id="track8" controls>
  <source src="audio/Forest/ForestMusicDraft_Strings2_120bpm4-4_L20M.wav" type="audio/mpeg">
</audio>

<br>

<button onclick="playAll()">Play All Tracks</button>
<button onclick="pauseAll()">Pause All Tracks</button>

<script>
  const tracks = [
    document.getElementById('track1'),
    document.getElementById('track2'),
    document.getElementById('track3'),
    document.getElementById('track4'),
    document.getElementById('track5'),
    document.getElementById('track6'),
    document.getElementById('track7'),
    document.getElementById('track8'),
  ];
  
  track1.onended = function() {
    tracks.forEach(t => {
      t.currentTime = 0;
      t.play();
    });
  };
  function playAll() {
    tracks.forEach(t => t.play());
  }

  function pauseAll() {
    tracks.forEach(t => t.pause());
  }
</script>
