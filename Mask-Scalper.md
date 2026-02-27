---
title: "Mask Scalper"
permalink: /Mask-Scalper
---
# Mask Scalper

Mask Scalper is a fast-paced point-and-click game developed for Global Game Jam 2026 that blends hidden-object mechanics with an endless gameplay loop, placing players in the shoes of a desperate "Mask Scalper" attempting to buy up every mask in town.

The game is a satirical take on the COVID-19 pandemic inspired by both the widely hated phenomenon of "Scalpers" who buy up all supply of a commodity in order to drive up prices, as well as the human instinct to panic buy things in times of chaos (Which we saw during 2026's winter storm Fern, reminding our team of the chaos of the COVID-19 era).

https://github.com/user-attachments/assets/e048df6e-f553-479d-a468-2a5d0f310d2f

An expanded Steam release is planned. 

### [Play the demo here.](https://hzeng.itch.io/mask-scalper)
[![Clickable link to itch.io demo](https://github.com/user-attachments/assets/5f720069-0f73-4ddf-82e1-821731b6e795)](https://hzeng.itch.io/mask-scalper)

## Project Roles

I was the lead developer, lead audio engineer, and project manager. 

### Lead developer: 
* I engineered the main gameplay of the game.
* This included:
    * Setting up the game scene with the grocery store shelves,
    * Developing the click and drag gameplay interactions with the store objects,
    * Developing the dynamic scoring and lives system,
    * Developing the disembodied NPC hands that come out of the sides of the screen to compete against the player for masks,
    * Developing the difficulty settings and ramp-up,
    * Developing the endless-style gameplay,
    * Architected a persistent save system to track high scores and transition player data between game scenes.

### Lead audio engineer:
* Spearheaded the migration to FMOD, optimizing audio stability for WebGL deployment.
* Both the other developer, Nicholas, and I had experience in WWise, which was very helpful as he was able to quickly pick up FMOD and I was able to delegate some of the SFX integration to him.
* Implemented dynamic music scaling, using FMOD to procedurally increase tempo and tension as the game difficulty ramps up, in order to induce a creeping feeling of anxiety. 

### Project manager:
* We had a strict 48-hour deadline for the Global Game Jam. I was the most experienced game developer on this team, so I was also in charge of task delegation and version control, ensuring a polished build was ready for the final GGJ presentation.
* Directed a cross-functional team of four: A developer (Nicholas), an artist (Trent), and a composer (Austin), as well as myself.
    * Trent worked on finding and making assets, models, and textures for the game. He also provided many of the sound effects we used.
    * Austin made our music, which really sets the tone for the game and is absolutely fantastic. He also planned out our UI, and will also be making our trailer for the Steam release.
    * Nicholas did a bit of everything, he worked on the intro/outro sequences of the game and did a great job. He also implemented a lot of sounds throughout the game, and compressed a lot of textures as well as did some art to achieve the low-fidelity artstyle that we were going for.
* For our presentation, Trent and Austin were out of town, while Nicholas had stayed up all night working on the game and was out of commission, so I was responsible for polishing the demo, publishing a build, and presenting the project as the primary team representative. 

# Code Sample

<video src="https://github.com/user-attachments/assets/4aa9a3c0-c880-4cb8-a129-0031e11ae1a7"> 

```C#
public class NPCHand : MonoBehaviour
{
    public GameObject targetGO; 
    private ScoreTracking gameManager;
    private Vector3 targetGOTransform;
    private Camera mainCamera;
    private Coroutine handCoroutine;
    private float lastReset=0;
    [SerializeField] private Sprite[] handList;
    private int handIndex;
    private SpriteRenderer sr;
    
    void Awake()
    {
        if (mainCamera == null)
        {
            mainCamera = Camera.main;
        }
        Vector3 spawnPos = mainCamera.ViewportToWorldPoint(new Vector3(Random.value > 0.5f ? Random.Range(-0.2f, -0.1f) : Random.Range(1.1f, 1.2f), Random.value > 0.5f ? Random.Range(-0.2f, -0.1f) : Random.Range(1.1f, 1.2f), Camera.main.nearClipPlane + 10f)); //We choose a spot for the NPC arm to spawn off-screen
        gameObject.transform.position = new Vector3(spawnPos.x,spawnPos.y, gameObject.transform.position.z); //Move the NPC arm to our selected location
    }

    void Start()
    {
        sr = gameObject.GetComponent<SpriteRenderer>();
        handIndex = UnityEngine.Random.Range(0,4); //We have 4 possible NPC arms, this randomizes the selection and allows us to animate it
        sr.sprite = handList[handIndex];

        lastReset = Time.time;
        gameManager = GameObject.FindWithTag("GameController").GetComponent<ScoreTracking>(); //A reference to the game manager is needed to access the targets

        Vector3 viewportPos = mainCamera.WorldToViewportPoint(transform.position); //This mirrors the NPC arm depending on it is on the left or right side of the screen
        if (viewportPos.x > 0.5f && transform.localScale.x > 0)
        {
            transform.localScale = new Vector3(-Mathf.Abs(transform.localScale.x), transform.localScale.y, transform.localScale.z);
        }
        else if (viewportPos.x < 0.5f && transform.localScale.x < 0)
        {
            transform.localScale = new Vector3(Mathf.Abs(transform.localScale.x), transform.localScale.y, transform.localScale.z);
        }
    }

    void Update()
    {
        if(targetGO == null){
            getTarget(); 
        }
        else if (handCoroutine == null) 
        {
            targetGOTransform = targetGO.transform.position;
            float duration; //We define the duration the arm takes to get to the mask depending on difficulty (ramping over time based on levelNum, which increments when you get to the next level)
            if((Difficulty)PlayerPrefs.GetInt("Difficulty", 2)==Difficulty.easy){
                duration= 7+18/(gameManager.levelNum+5f);
            }else if((Difficulty)PlayerPrefs.GetInt("Difficulty", 2)==Difficulty.medium){
                duration = 5+30/ ((gameManager.levelNum * 1.5f) + 4.5f);
            }else{
                duration = 3+42/((gameManager.levelNum * 2)+4);
            }
            handCoroutine = StartCoroutine(LerpToNewPos(targetGO, duration)); //Start the hand behavior
            }else if ((targetGO.transform.position - targetGOTransform).sqrMagnitude > 0.01 && Time.time-lastReset>1) //Reset the hand once it gets to the target
            {
                resetHand();
            }
    }

    void getTarget() //Method to choose a target (mask)
    {
        Transform items = gameManager.level.transform.GetChild(2).GetChild(1); //Get the list of items on the shelf
        List<GameObject> validMasks = new List<GameObject>();

        foreach (Transform item in items)
        {
            if (item.CompareTag("Mask"))
            {
                validMasks.Add(item.gameObject); //Get the list of masks on the shelf
            }
        }

        if (validMasks.Count > 0)
        {
            int randomIndex = UnityEngine.Random.Range(0, validMasks.Count); 
            targetGO = validMasks[randomIndex]; //Choose a random mask from the list as the target
        }
        else
        {
            waitSeconds(1);
        }
    }

    private IEnumerator waitSeconds(float waitTime)
    {
        yield return new WaitForSeconds(waitTime);
    }

    void resetHand() //Resets the hand off-screen, same as Awake() && Start()
    {
        lastReset = Time.time;
        sr.sprite = handList[handIndex];
        Vector3 spawnPos = mainCamera.ViewportToWorldPoint(new Vector3(UnityEngine.Random.value > 0.5f ? UnityEngine.Random.Range(-0.2f, -0.1f) : UnityEngine.Random.Range(1.1f, 1.2f), UnityEngine.Random.value > 0.5f ? UnityEngine.Random.Range(-0.2f, -0.1f) : UnityEngine.Random.Range(1.1f, 1.2f), Camera.main.nearClipPlane + 10f)); 
        gameObject.transform.position = new Vector3(spawnPos.x,spawnPos.y, gameObject.transform.position.z);
        if (handCoroutine!=null){
            StopCoroutine(handCoroutine);
        }
        handCoroutine = null;        
        Vector3 viewportPos = mainCamera.WorldToViewportPoint(transform.position);
        if (viewportPos.x > 0.5f && transform.localScale.x > 0)
        {
            transform.localScale = new Vector3(-Mathf.Abs(transform.localScale.x), transform.localScale.y, transform.localScale.z);
        }
        else if (viewportPos.x < 0.5f && transform.localScale.x < 0)
        {
            transform.localScale = new Vector3(Mathf.Abs(transform.localScale.x), transform.localScale.y, transform.localScale.z);
        }
    }

    void OnCollisionEnter2D(Collision2D col) //Core Gameplay Interaction: Swatting NPCs away
    {
        if (col != null && col.transform.tag.Equals("Swat Collider"))
        {
            StopCoroutine(handCoroutine);
            if (gameManager.handScript.holding) //Animate the player's hand when they hit the NPC
            {
                gameManager.handScript.SetImage(HandScript.handOptions.Fist);
            }
            else
            {
                gameManager.handScript.SetImage(HandScript.handOptions.FistUp);
            }
            FMODUnity.RuntimeManager.PlayOneShot("event:/NPC Yell " + Random.Range(1, 9)); //Play sound

            Vector3 screenCenter = new Vector3(Screen.width * 0.5f, Screen.height * 0.5f, 0); 
            Vector3 collisionPos = Camera.main.WorldToScreenPoint(col.transform.position); //Get the collision position so we can do calculations to send the hand away from the player input
            Vector3 direction = (collisionPos - screenCenter).normalized;

            if (direction == Vector3.zero) direction = Vector3.up;

            float screenDiagonal = Mathf.Sqrt(Screen.width * Screen.width + Screen.height * Screen.height);
            Vector3 screenTarget = collisionPos + (direction * screenDiagonal * 1.1f); //set our target position

            float distanceToCamera = Vector3.Distance(Camera.main.transform.position, transform.position);
            screenTarget.z = distanceToCamera;

            GameObject tempTarget = new GameObject("TempTarget"); //Create a target object so we can lerp to it using our existing method
            tempTarget.transform.position = Camera.main.ScreenToWorldPoint(screenTarget);
            StartCoroutine(LerpToNewPos(tempTarget, 1));
        }
    }
    
    IEnumerator LerpToNewPos(GameObject target, float duration) //Lerp from startPos to endPos over duration time
    {
        Vector3 startPos = gameObject.transform.position;
        Vector3 endPos = new Vector3(target.transform.position.x, target.transform.position.y, gameObject.transform.position.z);
        float elapsed = 0;

        while (elapsed < duration)
        {
            float t = elapsed / duration;
            
            t = t * t * (3f - 2f * t);

            gameObject.transform.position = Vector3.Lerp(startPos, endPos, t);
            
            elapsed += Time.deltaTime;
            if (duration - elapsed < 0.4)
            {
                sr.sprite = handList[handIndex+5]; //Animates the NPC hand
            }
            yield return null; 
        }
        
        gameObject.transform.position = endPos;

        if (target.TryGetComponent(out DragAndDrop dnd)) //Once the NPC hand reaches its target, the target should be destroyed
        {
            dnd.destroyThis();
        }
        else
        {
            Destroy(target, 0.2f);
        }
            resetHand();
    }
}```
