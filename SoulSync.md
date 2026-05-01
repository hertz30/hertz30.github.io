---
title: "SoulSync"
permalink: /SoulSync
layout: single
excerpt: "PvE Multiplayer Sci-Fi Roguelike"
---

[![Play the demo here: Clickable link to Itch.io](assets\images\SoulSync.png)](https://rjp5546.itch.io/soulsync)
Click above to play the game on Itch.io.

Soulsync is a PvE multiplayer roguelike where you and three friends take the helm to traverse treacherous lands and face uncertain odds. Set in an advanced sci-fi fantasy world, the land is controlled and corrupted by corporate influence.

I served as a Game Developer, Audio Programmer, and UI/Systems Designer, handling everything from core enemy and ability systems to the technical implementation of the game's audio via Wwise.

Learn more about <a href="https://rjp5546.itch.io/soulsync">SoulSync</a> here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/QZRf8DGd3js?si=TQjJHaIfl77pzkvL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Project Roles

### Audio Programming & Technical Implementation
* Wwise Integration: Managed the initial import and setup of the Wwise sound engine into the Unity project, ensuring a robust pipeline for the sound team.
* Dynamic Music Systems: Programmed the trigger conditions for boss music and combat music in multiplayer. 
* Global Audio Systems: Incorporated Music and SFX from the sound class and implemented comprehensive Audio Settings within the menus, allowing for real-time player mix adjustments.

### Gameplay Systems & Character Engineering
* Character Abilities: Developed and implemented the ability kit for Felix, including Felix's basic abilities and custom physics solutions like the Tiger ragdoll.
* Camera & Perspective: Designed the Player Camera System, conducting extensive viewpoint testing and control updates to ensure visibility in the originally intended isometric multiplayer environment.
* Dialogue & Narrative: Built and refactored the Dialogue System, implementing logic for branching text, our adaptive Banter system (Enabling proximity and friendly fire dialogue), and resolving critical dialogue bugs to ensure smooth narrative delivery.

### Technical Optimization & QA
* Memory Leak Investigation: Led the troubleshooting for high-priority performance issues, helping to identify and resolve the Memory Leak Source.
* Optimization Solutions: Implemented a custom Object Culling Solution and managed Frame Rate Settings to maintain stable performance during intense combat.
* Input Rebinding: Built the Input Rebinding system and UI from the ground up, allowing players to fully customize their controls for both Mouse/Keyboard and Controller.
* General QA: Conducted "Merge Day" QA bug-finding sessions, resolving critical issues with projectile collision, puzzle logic, and pause menu functionality.

## Code Sample: Dynamic Dialogue System
To support the narrative depth of SoulSync, I developed a robust, data-driven dialogue system. This system was designed to give the narrative and audio teams maximum flexibility, allowing for complex interactions like proximity-based banter, friendly-fire reactions, and dynamic tutorial triggers.

The implementation of this system allowed our narrative team to write character-specific banter that triggers naturally during gameplay. By linking the UI text directly to the Wwise callback system, we achieved perfect synchronization between visual subtitles and audio delivery, even in a chaotic multiplayer environment.

Key Technical Achievements
* Wwise Dynamic Sequences: 
    * Instead of simple Wwise events, I utilized Wwise’s ResolveDialogueEvent to navigate complex decision trees in real-time, ensuring the correct voice line triggers based on game state.
* Asynchronous Execution: 
    * Implemented a Coroutine-based queuing system that manages dialogue priority, ensuring that high-priority story beats aren't overwritten by ambient world chatter.
* JSON-Driven Logic:
    * Built a flexible parsing system that allows designers to update dialogue text and paths via JSON without requiring a re-compile of the game assembly.

{% highlight csharp %}
/* * DialogueManager.cs
 * Core system for managing networked, dynamic dialogue between characters.
 */

public class DialogueManager : Singleton<DialogueManager>
{
    // ... setup and JSON parsing ...

    /// <summary>
    /// Handles the queuing and logic for playing a dialogue event.
    /// Supports dynamic speaker swapping and priority checks for "Banter" vs "Main Story".
    /// </summary>
    public void PlayDialogue(GameObject firstSpeaker, GameObject secondSpeaker, params string[] dialogueKeys)
    {
        // Prevent "Banter" dialogue (friendly fire/proximity) from overlapping active sequences
        if ((dialogueKeys[3] == "friendly_fire" || dialogueKeys[3] == "proximity") && currentDialogueIndex != currentDialoguePermissionToPlayIndex)
        {
            return; 
        }
        StartCoroutine(DialogueCoroutine(firstSpeaker, secondSpeaker, dialogueKeys));
    }

    private IEnumerator DialogueCoroutine(GameObject firstSpeaker, GameObject secondSpeaker, params string[] dialogueKeys)
    {
        int thisDialogueIndex = currentDialogueIndex++;

        // FIFO Queue: Wait for previous dialogue to finish before starting the next
        while (thisDialogueIndex != currentDialoguePermissionToPlayIndex)
        {
            yield return new WaitForSeconds(1);
        }

        // Resolve IDs for Wwise Decision Trees
        for (int i = 0; i < 4; i++)
        {
            argumentPath[i] = AkUnitySoundEngine.GetIDFromString(dialogueKeys[i]);
        }

        // Logic for iterating through JSON-defined dialogue lines
        // Includes automatic speaker identification and text-to-speech timing simulation
        for (int index = 0; index < keysArray.Length; index++)
        {
            // ... Logic to determine currentTarget (Speaker A or B) ...

            isLinePlaying = true;
            WwiseDialogueEvent(currentTarget); // Execute the Wwise Dynamic Sequence
            dialogueTextHandler(currentName, dialogueText); // Update UI Textbox

            // Wait until the audio engine signals the line is complete via Callback
            while (isLinePlaying)
            {
                yield return null; 
            }
            
            // Add a dynamic pause based on word count for natural pacing
            yield return new WaitForSeconds(valuesArray[index].Split().Length * 0.22f + 1);
        }

        currentDialoguePermissionToPlayIndex++; // Open the gate for the next dialogue in queue
    }

    /// <summary>
    /// Resolves and posts a Wwise Dynamic Sequence based on the argument path.
    /// This allows one event to play thousands of different lines based on context.
    /// </summary>
    public void WwiseDialogueEvent(GameObject GameobjectWhereEventIsPlayed)
    {
        // Resolve the specific audio node from the Wwise Decision Tree
        uint resolvedNodeID = AkUnitySoundEngine.ResolveDialogueEvent(WwiseDialogueEventID, argumentPath, 5);

        // Enqueue the resolved audio into a Dynamic Sequence with a callback on completion
        uint sequenceID = AkUnitySoundEngine.DynamicSequenceOpen(GameobjectWhereEventIsPlayed, (uint)AkCallbackType.AK_EndOfEvent, EndOfDialogueLineCallback, null);
        
        AkPlaylist playlist = AkUnitySoundEngine.DynamicSequenceLockPlaylist(sequenceID);
        if (playlist != null) playlist.Enqueue(resolvedNodeID);
        
        AkUnitySoundEngine.DynamicSequenceUnlockPlaylist(sequenceID);
        AkUnitySoundEngine.DynamicSequencePlay(sequenceID);
    }
}
{% endhighlight %}

## Technical Showcase: Cutscene Audio Interceptor

In SoulSync, high-fidelity cinematics are crucial for storytelling. To ensure cutscene audio benefited from the same spatialization, reverb, and mixing bus effects as the rest of the game, I developed a custom Audio Interceptor. This system captures raw audio data from Unity’s VideoPlayer and pipes it directly into the Wwise audio engine as an external input.

Key Technical Achievements
* Thread-Safe Ring Buffer: 
  * Implemented a custom circular buffer using System.Threading.Interlocked to safely move audio samples from the Unity Main Thread (Producer) to the Wwise Audio Thread (Consumer) without race conditions.
* Wwise Audio Input API: 
  * Leveraged the AkAudioInputManager to feed real-time buffers into Wwise, allowing the sound team to apply real-time DSP, attenuation, and routing to video audio.

* Native Memory Management: 
   * Utilized Unity’s NativeArray with Allocator.Persistent to ensure high-performance, low-latency audio transfer while avoiding Garbage Collection spikes during cinematic playback.


{% highlight csharp %}
    /* * WwiseCutsceneAudio.cs
 * Intercepts Unity VideoPlayer audio and feeds it into Wwise for dynamic mixing.
 */

public class WwiseCutsceneAudio : MonoBehaviour
{
    // Thread-safe pointer management for the circular buffer
    private volatile int writePtr = 0;
    private volatile int readPtr = 0;
    private int samplesAvailable = 0; 
    
    void OnVideoPrepared(VideoPlayer source)
    {
        provider = VideoPlayerExtensions.GetAudioSampleProvider(source, 0);
        
        // Initialize high-performance NativeArray for sample transfer
        transferBuffer = new NativeArray<float>((int)provider.maxSampleFrameCount * channelCount, Allocator.Persistent);

        // Register the audio input event with Wwise
        playingID = AkAudioInputManager.PostAudioInputEvent(
            AudioInputEvent.Id, gameObject, AudioSamplesDelegate, AudioFormatDelegate
        );
    }

    /// <summary>
    /// Consumer: Wwise Audio Thread
    /// This delegate is called by Wwise when it needs more audio data.
    /// </summary>
    bool AudioSamplesDelegate(uint playingID, uint channelIndex, float[] samples)
    {
        // 1. Capture the read pointer state at the start of the stereo frame
        if (channelIndex == 0) lockedReadPtr = readPtr;

        int currentAvailable = Interlocked.CompareExchange(ref samplesAvailable, 0, 0);

        for (int i = 0; i < samples.Length; i++)
        {
            int sampleOffset = (i * channelCount) + (int)channelIndex;
            int ringIdx = (lockedReadPtr + sampleOffset) % ringBuffer.Length;

            // Stream from buffer if data is available, otherwise fill with silence
            samples[i] = (sampleOffset < currentAvailable) ? ringBuffer[ringIdx] : 0f;
        }

        // 2. Sync global pointers only after all channels (Stereo) are processed
        if ((int)channelIndex == channelCount - 1)
        {
            int finalConsumed = Math.Min(samples.Length * channelCount, currentAvailable);
            readPtr = (readPtr + finalConsumed) % ringBuffer.Length;
            Interlocked.Add(ref samplesAvailable, -finalConsumed);
        }
        return true;
    }
}
{% endhighlight %}