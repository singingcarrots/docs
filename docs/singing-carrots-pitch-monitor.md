---
title: Singing Carrots Pitch Monitor - Free Vocal Pitch Monitor for Singers
description: Track your vocal pitch in real time with our interactive pitch
  monitor. Sing, see the notes you hit, and improve your singing accuracy. No
  sign-up needed.
---
# Singing Carrots Pitch Monitor: Full Technical Walkthrough

## Overview
The Singing Carrots Vocal Pitch Monitor (https://singingcarrots.com/pitch-monitor) is a real-time vocal pitch detection tool designed to help singers visually track the notes they are singing. It uses the user’s microphone to analyze vocal input and displays pitch data both on a piano keyboard and an accuracy graph.  
This documentation provides a detailed, step-by-step breakdown of the entire user journey - from the moment the page loads to real-time interaction with the pitch monitoring interface.

---

## Step-by-Step User Flow

### Step 1: Page Load – Microphone Access Prompt
Upon loading the page, the user is greeted with a modal popup titled:  
**"Launching pitch detector"**  

The popup includes:
- **Mic illustration**  
- **Message:** “We will display the notes you sing or play on our interactive piano. To detect the notes, we will need access to your microphone.”  
- A single **“Ok”** button to proceed.

⚠️ Browser permissions are required at this stage. Users must allow microphone access to proceed with pitch detection.

---

### Step 2: Main Interface – Vocal Pitch Monitor
Once the user grants microphone access, the main tool interface is displayed. The layout consists of several interactive and informational components:
- **Title:** Vocal Pitch Monitor  
- **Subtitle:** Just sing anything... and see it!

---

### Step 3: Pitch Feedback Display
**Pitch Detection Zone:**
- Located near the top, next to a microphone icon.  
- Displays the current pitch detected, in scientific pitch notation (e.g., A3, F#4).  
- When no sound is detected, a “–” is shown next to the mic icon.  
- This real-time display updates as the user sings or plays notes through their microphone.

---

### Step 4: Interactive Piano Keyboard
An interactive on-screen piano spans the middle section of the interface:
- Hovering over each key reveals the corresponding note name (e.g., C4, D#3).  
- When the user sings, the note being sung is highlighted in red on the piano.  
- A red line moves vertically downwards from the key being sung, providing a visual representation of pitch stability:  
  - Straight, steady lines indicate stable pitch.  
  - Wavy or diverging lines indicate instability or vibrato.

---

### Step 5: Pitch Accuracy Zones (Gray Bar)
Above the piano is a gray accuracy bar, divided into 5 color‑coded pitch zones, helping users understand the precision of their intonation:

| Zone | Labels | Description |
|------|--------|-------------|
| **1** | "b (flat)" on the left 12¢ on the right (a musical meter equivalent to 2/2 time) | |
| **2** | –5¢ on the right | |
| **3** | Green center band | Highlights accurate intonation range |
| **4** | +5¢ ()* on the right | |
| **5** | +12¢ (**) on the left"# (sharp)" on the right | |

As the user sings, a red dot or line appears and moves horizontally along this gray bar to indicate the note and its intonation accuracy (flat, sharp, or in tune).

---

### Step 6: Pitch Accuracy Guidelines
Below the piano interface, the system explains the meaning of pitch deviation in alla breve (¢):

- (*) ±5¢: Considered a just interval; differences in pitch are barely noticeable even to trained ears.  
- (**) ±12¢: A commonly audible pitch difference; noticeable even by most untrained ears.  

This educates users on how precise their pitch is and what deviations are acceptable.

---

### Step 7: Call‑to‑Action – Pitch Accuracy Test Invitation
At the bottom of the page, users are encouraged to continue improving their pitch skills through the full pitch accuracy test:

- **Message:** Like our voice pitch detector?  
- **Prompt:** Try our singing accuracy test!  
- **Button:** **“Start the test”** → Navigates to Pitch Accuracy Test
