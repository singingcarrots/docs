---
title: "Pitch Training Practice: Virtual Piano Interface"
description: Master your pitch with Singing Carrots’ interactive piano
  interface. Practice custom vocal exercises, track your pitch accuracy live,
  adjust tempo and range, and review your performance note by note. Perfect for
  singers of all levels.
---
# Pitch Training Practice: Virtual Piano Interface

**Tool URL (example):**\
`https://singingcarrots.com/pitch-training/practice?exercise=[exercise-pattern]`\
*(e.g., `?exercise=major-1-3-2-4-3-5-4-2-1`)*

- - -

## Purpose

**Practice Mode** is the heart of Singing Carrots. It turns your screen into an interactive piano lesson, combining a full‑range keyboard with real‑time pitch‑matching visuals so you can rehearse exactly the way a vocal teacher would guide you in class.  

* **Sing with the piano, instantly see accuracy.** Blue target lines show the melody; a red live line mirrors your voice so you know the moment you’re on (or off) pitch.  
* **Climb the scale like in a lesson.** Set any exercise—from simple arpeggios to octave jumps—and step through it up, down, or on loop to cover your whole range.  
* **Hear yourself, improve faster.** After each run you can replay and relisten to your own recording, pinpointing where you nailed it and where you drifted.  
* **Tailor every detail.** Choose the instrument sound, tempo, starting note, pauses, and even limit the exercise to just your comfortable notes.  

In short, Practice Mode replicates the core segment of a live vocal class—piano guidance plus instant feedback—so you can build pitch accuracy, range, and musical memory anytime, anywhere. Below you’ll find all the customization options in detail.

- - -

## User Flow and Controls

### 1. Loading Screen

Upon accessing Practice Mode:

* A loading screen appears.  
* **Text displayed:** “Loading Audio Files – Preparing virtual piano”  
* A progress bar shows percentage until the full load is complete.  
* Once loaded, the interface becomes visible but inactive until microphone access is granted.

- - -

### 2. Microphone Activation

* A faded piano interface is visible.  
* Above it: **Enable Microphone** (large green button)  

  * Clicking prompts browser mic access and activates real‑time pitch tracking.

- - -

### 3. Top‑Level Controls

| Position  | Element         | Function                                                           |
| --------- | --------------- | ------------------------------------------------------------------ |
| Top‑left  | ❌ **Close**     | Exits the piano and returns user to the Pitch Training levels page |
| Top‑right | ⚙️ **Settings** | Opens the Practice Settings popup for training customization       |

- - -

### 4. Practice Settings Panel (⚙️)

Opens as a popup modal, divided into three configuration blocks:

1. **Limit Practice to My Range** (Toggle)  

   * **Default:** OFF (grays out this section)  
   * When switched **ON:**  

     * **Lowest note:** dropdown (e.g., C3)  
     * **Highest note:** dropdown (e.g., A4)  
     * **Edge behavior** (for both low and high limits):  

       * *Start going down*  
       * *Continue on the note*  
       * *Stop the exercise*  
     * **Apply** button reloads exercise with selected range  
2. **Pause Between Melody Runs**  

   * **Options:**  

     * *None* – Start next run immediately  
     * *1 measure* – Short pause  
     * *2 measures* – Longer pause  
   * **Apply** button updates pacing  
3. **Choose Virtual Piano Sounds**  

   * **Options:** Grand Piano, Acoustic Guitar  
   * *Note:* Changing sound may take 1–2 minutes to reload  
   * **Apply** button reloads audio assets  

Popup controls: top‑right ❌ closes the modal.

- - -

### 5. Live Pitch Detection Controls

| Area     | UI Element                   | Function                                                                       |
| -------- | ---------------------------- | ------------------------------------------------------------------------------ |
| Top‑left | Mic icon (red)               | Displays sung pitch (e.g., A3) or “–” when silent                              |
| —        | Tooltip                      | “Current Pitch” (on hover)                                                     |
| —        | Dropdown (blue arrow)        | Mic selector – choose input device                                             |
| Center   | ⬅️ Zoom Out / ➡️ Zoom In     | Adjusts visible note range on virtual piano                                    |
| —        | ⬅️ / ➡️ arrows               | Scrolls left/right on the keyboard                                             |
| —        | 🎹 Piano icon / 🎵 Note icon | Switches between **Virtual Piano view** and **Sheet Music view** of the melody |

- - -

### 5.1 Notesheet View 

A new visualization option is available next to the **🎹 Piano icon** in the top toolbar.  
Clicking the **🎵 Note button** switches the interface from the virtual piano layout to a **musical notesheet view** of the melody.

#### Display & Behavior
- The melody is displayed on a horizontal **musical staff** instead of piano keys.  
- A **moving arrow** above the staff progresses left to right in real time, synchronized with melody playback.  
- Each note on the staff becomes dynamically highlighted as the user sings:

| Status | Highlight | Indicator |
|---------|------------|------------|
| Correct pitch | Green | — |
| Slightly off | Yellow | Blue down arrow (too low) / Red up arrow (too high) |


This view provides a notation-based visualization of the same real-time pitch accuracy feedback available in piano mode, helping singers connect ear training with reading standard music notation.

#### Transposition Controls
In Notesheet View, the standard navigation arrows (⬅️ 🔁 ➡️) are replaced by two labeled buttons that control key transposition:

| Button | Function |
|---------|-----------|
| **Next Down** | Transposes the entire melody **one semitone lower** (–1 note). |
| **Next Up** | Transposes the entire melody **one semitone higher** (+1 note). |

These buttons instantly reload the current exercise in the new key, allowing users to quickly adapt the melody to different vocal ranges while staying within the notation-based interface.

- - -

### 6. Virtual Piano Interface

* Full‑width keyboard (approx. C2 → C6) with octave labels (C3, C4, C5).  
* **Key color:** white = naturals, black = sharps/flats.  
* Vertical grid lines separate notes (half‑step markers).

#### Pitch Visualizations During Playback

* **Blue vertical lines:** Target notes (drop toward keys).  
* **Red vertical line:** Real‑time sung pitch (originates from key).  

  * Straight & centered = on pitch  
  * **Color feedback:**  

    * Green = on pitch  
    * Yellow = slightly off  
    * Split color = partially accurate over time  
    * Wavy/jagged = unstable pitch  
* Clicking any piano key plays its sound.

- - -

### 7. Playback and Replay Controls

| Element                   | Function                                                              |
| ------------------------- | --------------------------------------------------------------------- |
| ▶ **Play**                | Starts melody playback and exercise (tooltip: *Play*)                 |
| ⏺ **Watch Replay** (grey) | Available after one attempt (tooltip: *Watch replay of your singing*) |

- - -

### 8. Melody Navigation Controls

| Icon | Action                                 |
| ---- | -------------------------------------- |
| ⬅️   | “The melody will go lower and lower”   |
| 🔁   | “The melody will loop”                 |
| ➡️   | “The melody will go higher and higher” |

- - -

### 9. BPM Selector (Tempo Control)

* Located left of navigation arrows.  
* Input box + up/down arrows (10 BPM steps).  
* Users can enter tempo or increment/decrement; affects playback speed.

- - -

### 10. Playback Behavior Dropdown

Located right of navigation arrows; controls how melody plays:

| Option                   | Behavior                                    |
| ------------------------ | ------------------------------------------- |
| **Play melody**          | Plays full melody + beat                    |
| **Play only first note** | Plays only starting note + beat             |
| **Play only the beat**   | No melody, just metronome beat before start |

- - -

### 11. Starting Note Selector

* Bottom of interface.  
* **Label:** *Start from note:*  
* **Sub‑label:** *Highest note in current exercise: \[note]*  
* Clickable note buttons (C3, D#3, F4…). Selecting a note highlights it and starts melody from that pitch.

- - -

## Gamification and Statistics

Practice Mode is the fully customisable “free‑play” area. If you prefer to rehearse without chasing scores or leaderboards, you can do every exercise right here and ignore the competitive modes altogether. All other game modes are essentially built on top of this core tool—they take the same pitch‑matching engine, wrap preset melodies or time limits around it, and turn your singing into challenges that award scores.

* **Every note you sing**—correct or incorrect—is logged.  
* These note‑by‑note results are saved to your personal statistics and displayed on your dashboard.  
* **Carrot Points:** You earn 1 point per note. When you reach your daily target, you collect bonus points; the daily goal is calibrated to give enough practice time while preventing over‑exercising.

Use Practice Mode to warm up, fine‑tune melodies, or test your range, then head into the challenge modes whenever you want to convert that practice into scores and leaderboard positions.
