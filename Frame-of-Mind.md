---
title: "Frame of Mind"
permalink: /Frame-of-Mind
layout: single
---

[![Play the demo here: Clickable link to Itch.io](assets\images\FrameOfMindBkg.png)](https://rjp5546.itch.io/frameofmind)
Click above to access the demo.

Frame of Mind is a wordless adventure game developed for the Unlikely Collaborators™ Game Jam. The experience explores the player's connection to nature through visual and auditory discovery, reframing environmental perception as the journey progresses. Without dialogue, the project relies heavily on its sensory experience—specifically its evolving musical score and reactive environmental audio—to communicate its narrative arc.

## Project Roles
* Ryan Pederson: Project lead and cinematics
* Carson Padilla: Gameplay Programmer
* Tony Scardino: Narrative
* Chandler Baumgartner: Composer
* Haiying Zeng: Technical Animator and Audio Integration Lead
* Brooks Mueller: Level Designer and Artist

### Technical Animator: 
* I set up basic character gameplay animations.
* Role Responsibilities Included
    * Character Animation Controller: Developed and managed the animation controller logic for the player character.
    * System Integration: Integrated animation logic with the player controller while ensuring fluid transitions between movement states.

### Audio Integration Lead:
* FMOD Migration & Implementation: Spearheaded the entire audio pipeline and migrated the project to FMOD to ensure technical robustness and professional-grade signal routing.
* Cutscene Sound Design: Designed and layered original SFX for narrative cutscenes, ensuring auditory storytelling remained consistent with the game's "wordless" emotional arc.
* Dynamic Music Architecture: Architected complex music events, refactoring the structure from separate files into a unified, transition-heavy system to achieve seamless loops and thematic shifts.
* Studio Collaboration: Acted as the technical bridge for the project composer, troubleshooting audio import issues and providing direct feedback on ambient track revisions to fit the engine's constraints.
* Audio Engineering & Mixing: Balanced SFX and music volumes in-engine and implemented functional audio settings, linking the UI directly to FMOD buses for player customization.

## Technical Breakdown: Cutscene Audio Composition

Technical Breakdown: Cutscene Audio Composition
This showcase demonstrates the intended SFX and music synchronization for narrative sequences.
<video width="100%" controls>
  <source src="assets/Videos/FrameOfMind1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<video width="100%" controls>
  <source src="assets/Videos/FrameOfMind2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<video width="100%" controls>
  <source src="assets/Videos/FrameOfMind3.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<video width="100%" controls>
  <source src="assets/Videos/FrameOfMind4.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The Evolution of the Soundscape:
* Iterative Refactoring: I overhauled the loop structures and transition markers multiple times to accommodate shifting gameplay mechanics, ultimately resulting in a "single-event" music structure that reacts fluidly to player progression.
* From Linear to Dynamic: My primary challenge was moving from a static "event-per-track" model to a consolidated, logic-based architecture. This allowed for frame-accurate transitions between the game’s five movements (from Familiar Unease to Full Circle). However, this also meant I had to set up global parameters to switch between timeline tracks, which meant I had to set up signal receivers to trigger the parameter changes.
* Narrative SFX Layering: Because the game lacks dialogue, I utilized the FMOD timeline to score cutscenes with specific audio cues, aiming to communicate a cohesive and evocative auditory narrative.