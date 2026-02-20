---
title: "Mask Scalper"
permalink: /Mask-Scalper
---

Mask Scalper is a fast-paced point-and-click game developed for Global Game Jam 2026 that blends hidden-object mechanics with an endless gameplay loop, placing players in the shoes of a desperate "Mask Scalper" attempting to buy up every mask in town.

The game is a satirical take on the COVID-19 pandemic inspired by both the widely hated phenomenon of "scalpers" who buy up all supply of a commodity in order to drive up price, as well as the human instinct to panic buy things in times of chaos (which we saw during 2026's winter storm Fern, reminding our team of the chaos of the COVID-19 era)

An expanded Steam release is planned. 
###[Play the demo here.](https://hzeng.itch.io/mask-scalper)]
[![Clickable link to itch.io demo](https://github.com/user-attachments/assets/5f720069-0f73-4ddf-82e1-821731b6e795)](https://hzeng.itch.io/mask-scalper)]


I was the lead developer, lead audio engineer, and project manager. 

####Lead developer: 
* I engineered the main gameplay of the game.
* This included:
    * Setting up the game scene with the grocery store shelves,
    * Developing the click and drag gameplay interactions with the store objects,
    * Developing the dynamic scoring and lives system,
    * Developing the disembodied NPC hands that come out of the sides of the screen to compete against the player for masks,
    * Developing the difficulty settings and ramp-up,
    * Developing the endless-style gameplay,
    * Architected a persistent save system to track high scores and transition player data between game scenes.

####Lead audio engineer:
* Spearheaded the migration to FMOD, optimizing audio stability for WebGL deployment.
* Both the other developer, Nicholas, and I had experience in WWise, which was very helpful as he was able to quickly pick up FMOD and I was able to delegate some of the SFX integration to him.
* Implemented dynamic music scaling, using FMOD to procedurally increase tempo and tension as the game difficulty ramps up, in order to induce a creeping feeling of anxiety. 

####Project manager:
* We had a strict 48-hour deadline for the Global Game Jam. I was the most experienced game developer on this team, so I was also in charge of task delegation and version control, ensuring a polished build was ready for the final GGJ presentation.
* Directed a cross-functional team of four: A developer (Nicholas), an artist (Trent), and a composer (Austin), as well as myself.
    * Trent worked on finding and making assets, models, and textures for the game. He also provided many of the sound effects we used.
    * Austin made our music, which really sets the tone for the game and is absolutely fantastic. He also planned out our UI, and will also be making our trailer for the Steam release.
    * Nicholas did a bit of everything, he worked on the intro/outro sequences of the game and did a great job. He also implemented a lot of sounds throughout the game, and compressed a lot of textures as well as did some art to achieve the low-fidelity artstyle that we were going for.
    * For our presentation, Trent and Austin were out of town, while Nicholas had stayed up all night working on the game, so I presented the project as the primary team representative. 
