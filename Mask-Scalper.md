---
title: "Mask Scalper"
permalink: /Mask-Scalper
---

Mask scalper is a covid-themed point-and-click game with endless gameplay with some hidden-object style gameplay created for GGJ 2026 (Theme: Mask). 
The game is a satirical take on the covid-19 pandemic inspired by both the widely hated phenomenon of "scalpers" who buy up all supply of a commodity in order to drive up price, as well as the human instinct to panic buy things in times of hardship (inspired by covid-19, and also the winter storm that blazed through much of the US in 2026, during which people bought out stores and scooped up all sorts of commodities, much like we saw in the pandemic.)

An expanded Steam release is planned. [Play the demo here. ](https://hzeng.itch.io/mask-scalper)
<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/5f720069-0f73-4ddf-82e1-821731b6e795" />

I was the lead developer, lead audio engineer, and project manager. 

Lead developer: 
* I implemented the main gameplay of the game.
* This included setting up the game scene with the grocery store shelves,
    * The click and drag gameplay interactions with the store objects,
    * The scoring system,
    * The disembodied NPC hands that come out of the sides of the screen to compete against the player for masks,
    * The difficulty settings and ramp-up,
    * The endless-style gameplay
    * The save system (high score, carrying the score across scenes to be used in the outro sequence)

Lead audio engineer:
* I set up the migration to FMOD because we needed something that would be playable in WebGL, and from my experience FMOD is more stable for WebGL.
* Both the other developer, Nicholas, and I had experience in WWise, which was very helpful as he was able to quickly pick up FMOD and I was able to delegate some of the SFX integration to him.
* I integrated the music into the game level and used FMOD to make it ramp up in speed as the level went on, in order to induce a creeping feeling of anxiety. 

Project manager:
* I was the most experienced game developer on this team, so I was also in charge of delegating tasks.
* We had a team of 4: A developer (Nicholas), an artist (Trent), and a composer (Austin), as well as myself.
    * Trent worked on finding and making assets, models, and textures for the game. He also provided many of the sound effects we used.
    * Austin made our music, which really sets the tone for the game and is absolutely fantastic. He also planned out our UI, and will also be making our trailer for the Steam release.
    * Nicholas did a bit of everything, he worked on the intro/outro sequences of the game and did a great job. He also implemented a lot of sounds throughout the game, and compressed a lot of textures as well as did some art to achieve the low-fidelity artstyle that we were going for.
    * For our presentation, Trent and Austin were out of town, while Nicholas had stayed up all night working on the game, so I was the only one available to present the project at GGJ wrapup. I finished implementing game features the morning of and polished up the outro sequence before publishing the build and doing the presentation.
