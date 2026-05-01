---
title: "Smuggler's Run: Interstellar Escape"
permalink: /Smugglers-Run-Interstellar-Escape
layout: single
excerpt: "A non-linear action RPG that challenges players to steal treasures from the hearts of 4 kingdoms."
---

![Smuggler's Run: Interstellar Escape](assets\images\InterstellarEscape.png)

<iframe frameborder="0" src="https://itch.io/embed-upload/17281549?color=7b8084" allowfullscreen="" width="640" height="380"><a href="https://hzeng.itch.io/smugglers-run">Play Smuggler's Run: Interstellar Escape on itch.io</a></iframe>

Smuggler’s Run: Interstellar Escape is an Alternate Control endless-runner game that bridges the gap between physical hardware and digital gameplay. 

Developed as a final project for University of Tulsa's CSG3813: Alternate Controls Challenge, the game immerses players in an intergalactic escape where the primary challenge lies in mastering a custom-built interface. 

While the demo has been adapted for keyboard and mouse, the intended experience utilizes a custom Arduino-powered controller featuring floor pedals and a crank wheel.

<video width="100%" controls>
  <source src="assets\Videos\SmugglersRun-InterstellarEscape.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Project Roles
This project was a collaborative effort between game developers and toy designers:

Game Development team: Haiying Zeng, Ryan Pederson, William Gulick

Toy Design (Hardware team): Jacob Peerson, Vincent Ume-Ezeoke, Carter Reed

I served as Lead Sound Designer and Systems Programmer.

### Systems Programmer: Environment & Mechanics
* Endless Procedural Generation: 
  * Developed a dynamic environment system that instantiates terrain and obstacles infinitely while implementing a cleanup protocol to manage memory after projectiles and segments pass the player.

* Warp System: 
  * Built a multi-planet traversal system featuring three distinct environment versions, allowing players to warp between different planetary biomes.

* Core Game Logic: 
  * Engineered the "Lives" system and the projectile instantiation logic to ensure balanced difficulty scaling.

### Lead Sound Designer & Composer
* Dynamic Music Engine: 
  * Composed the original soundtrack with an immersive speed-up effect, where the tempo increases the longer the player survives to heighten tension.

* Audio-Visual Sync: 
  * Designed and implemented specific sound effects for the "Warp" mechanic to provide tactile feedback during planet transitions.

* Feedback Loops: 
  * Curated the sci-fi soundscape to provide immediate auditory cues for environmental hazards and movement.


## Smuggler's Run: Interstellar Escape Music

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
<div class="audio-grid">
  <div class="audio-row">
    <label for="SpaceGame_Level">Level</label>
    <audio id="SpaceGame_Level" controls loop src="audio\Smuggler's Run\SpaceGame_Level.wav"></audio>
  </div>
    <div class="audio-row">
    <label for="SpaceGame_Menu">Menu</label>
    <audio id="SpaceGame_Menu" controls loop src="audio\Smuggler's Run\SpaceGame_Menu.wav"></audio>
  </div>
  </div>
{:/nomarkdown}

## Code Sample: Procedural Environment Management
This script manages the procedural instantiation and cleanup of environment segments, and the "Warp" logic that transitions players between different planetary environments.
{% highlight csharp %}
/// <summary>
/// Manages the endless generation of tunnels, obstacles, and planetary transitions.
/// </summary>
public class TunnelManager : MonoBehaviour
{
    // Singleton pattern for global access to spawning logic
    public static TunnelManager TMinstance { get; private set; }
    private static GameManager gm;

    [Header("Generation Settings")]
    [SerializeField] private float chanceObstacle = 0.2f;
    [SerializeField] private GameObject LastTunnel; // Tracks the end of the world for the next spawn point

    [Header("Planet Data")]
    [SerializeField] private int _currentPlanetIndex;
    [SerializeField] private GameObject _planetChangeTrigger;
    
    // Arrays categorized by planet to allow distinct visual/hazard profiles per world
    [SerializeField] private GameObject[] _Planet0TunnelPrefabs; 
    [SerializeField] private GameObject[] _Planet0ObstaclePrefabs;
    // ... Additional arrays for Planets 1-3

    // Internal 2D arrays to dynamically switch biome data at runtime
    private GameObject[][] tunnelPrefabs = new GameObject[4][];
    private GameObject[][] ObstaclePrefabs = new GameObject[4][];

    private void Awake()
    {
        // Singleton enforcement
        if (TMinstance != null && TMinstance != this) { Destroy(this); }
        else { TMinstance = this; }

        Initialize2DArrays();
    }

    /// <summary>
    /// Connects Inspector-assigned arrays into a 2D matrix for efficient planet swapping.
    /// </summary>
    private void Initialize2DArrays()
    {
        tunnelPrefabs[0] = _Planet0TunnelPrefabs; // Space/Transition Biome
        ObstaclePrefabs[0] = _Planet0ObstaclePrefabs;
        // ... (Repeated for all 4 planet indices)
    }

    /// <summary>
    /// Handles the "Endless" loop. Instantiates a new segment while cleaning up the old one.
    /// </summary>
    /// <param name="_TunnelToDelete">The segment the player just exited.</param>
    public void SpawnTunnel(GameObject _TunnelToDelete)
    {
        // Calculate the exact position of the next tunnel based on current game velocity
        Vector3 spawnPos = LastTunnel.transform.position + (5 - Time.deltaTime * gm.getCurrSpeed()) * Vector3.forward;

        GameObject nextTunnel = Instantiate(
            tunnelPrefabs[_currentPlanetIndex][Random.Range(0, tunnelPrefabs[_currentPlanetIndex].Length)],
            spawnPos,
            LastTunnel.transform.rotation);

        // Procedural Obstacle Spawning logic
        if (Random.value < chanceObstacle)
        {
            Instantiate(
                ObstaclePrefabs[_currentPlanetIndex][Random.Range(0, ObstaclePrefabs[_currentPlanetIndex].Length)],
                spawnPos + Random.Range(-1, 2) * 5 * Vector3.right + Random.Range(-1, 2) * 5 * Vector3.up,
                LastTunnel.transform.rotation);
        }

        LastTunnel = nextTunnel;
        Destroy(_TunnelToDelete); // Memory Management: Keeps the hierarchy clean
    }

    /// <summary>
    /// Coroutine to handle the 'Warp' sequence. 
    /// Temporarily shifts to the "Space" biome before transitioning to a new planet.
    /// </summary>
    public IEnumerator ChangePlanets()
    {
        var tempPlanetIndex = _currentPlanetIndex;
        _currentPlanetIndex = 0; // Index 0 is the "Space" transition biome
        SpawnTrigger();
        
        gm.SetIsInSpace(true); // Triggers visual/audio effects in GameManager
        yield return new WaitForSeconds(3);

        // Progress to the next planet in the sequence
        _currentPlanetIndex = (tempPlanetIndex < 3) ? tempPlanetIndex + 1 : 1;
        
        SpawnTrigger();

        // Dynamic Difficulty Scaling: Increase obstacle frequency after every warp
        if (chanceObstacle < 1) { chanceObstacle += 0.05f; }
        
        yield return new WaitForSeconds(3);
    }
}
{% endhighlight %}