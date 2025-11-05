---
title: Singing Carrots Pitch Test - Free Online Pitch Test for Singers
description: Try our interactive pitch accuracy test. Assess your singing skills
  in real time using a microphone and get personalized feedback.
---
# Singing Carrots Pitch Test: Full Technical Walkthrough  
**URL:** https://singingcarrots.com/pitch-test  

---

## Overview  
The Singing Carrots Pitch Accuracy Test is an interactive web-based tool that helps users assess their ability to match pitch. It works through a combination of guided steps, microphone input, real-time pitch analysis, and visual feedback.  
This documentation provides a detailed, step-by-step breakdown of the entire user flow, from the moment the page loads to the moment the final pitch test results are displayed.

---

## Step-by-Step User Flow  

### Step 1: Page Load – User Questionnaire  
Upon loading the page, a modal popup titled **"Adjusting the test..."** appears.  
The popup contains the question: **"Are you an experienced singer?"**  
Three multiple-choice answers are presented:  
1. I always struggle to hit the right notes when I sing  
2. I have some singing experience and mostly sing in tune  
3. I am a professional singer / vocal coach  

---

### Step 2: Voice Type Selection  
After answering the first question, a second modal appears:  
**"Which kind of voice do we test?"**  
Options:  
- Male voice  
- Female voice  

---

### Step 3: Headphones Check  
A new modal window is shown with the title **"Pitch accuracy test"** and subtitle **"Before we begin"**  
Message:  
> In order for our test to work properly, you will need to use headphones and enable your mic. Please, put your headphones on 🎧.  

- **Checkbox:** *Do not show this message again*
- **Button:** *I have my headphones on*

**Note for Bluetooth users:** If using Bluetooth headphones and experiencing audio/visual desync during the test, you can adjust the latency compensation in the Practice Settings (⚙️ icon) under "Audio Latency Compensation (Bluetooth)". This setting applies to all pitch training modes including tests.

---

### Step 4: Step 1/3 – Sing a Note  
A visual piano interface appears, highlighting the note C3.  
Assistant message:  
> Step 1/3. Listen to the note. Sing it with 'Laaaa', holding the pitch for a few seconds. (Green note on the piano.)  

**Buttons available:**  
- Listen (plays the C3 note)  
- Keyboard controls: Back arrow, Zoom out, Zoom in, Forward arrow  

**Real‑time feedback:**  
- Pitch visualized as a red line moving across the keyboard.  
- The note being sung is displayed at the top left next to a mic icon.  

Once the user hits the correct note:  
- *Message:* **"Step 1 complete"**  
- *Sub‑message:* **"Well done! You have successfully hit the note! Now, let's sing a simple melody."**  
- *Button:* **Continue**  

---

### Step 5: Step 2/3 – Melody Repetition  
Assistant message:  
> Step 2/3. Listen to the melody. Click 'Test' and sing along the melody: 'Laa‑laa‑laa‑laa‑laa'.  

**Buttons:**  
- Listen (previews the melody)  
- Test (starts the pitch test with metronome)  

**Additional controls:**  
- Note selection range from D2 to C#6 under the piano keyboard  

**During the test:**  
- Vertical pitch indicator lines appear.  
- Green/yellow feedback lines show pitch stability.  

If the user misses notes:  
- *Message:* **"Step 2 - Retry"** (e.g., "You can do better! 3/5. Try to get all 5 of them.")  
- *Tip:* Adjust the starting note using the pitch range buttons.  

If all notes are correct:  
- *Message:* **"Step 2 complete"** – *"Good warm up! 5/5. Time to start the actual test."*  
- *Button:* **Continue**  

---

### Step 6: Step 3/3 – Major Scale Test  
Assistant message:  
> Step 3/3. Finally, you have to sing through the major scale. Let's see if you can hit all the notes!  

- **Button:** Listen (plays the scale C3 → C4 → C3)  
- User sings the full scale with real‑time feedback (red pitch line, pitch indicators).  
- Starting pitch can still be adjusted with buttons below the keyboard.  

---

### Step 7: Results Display  
If the test is completed:  

- **🎉 Congrats! 🎉**  
- **Score:** *"14 / 15 You have successfully hit 14 out of 15 notes."*  

**Detailed Analysis:**  
| Metric      | Example |
|-------------|---------|
| **Sustain** | 60% – Measures how long pitch was stable |
| **Precision** | 66% – Measures pitch correctness (includes slightly high/low notes) |

**Pitch Quality Report:**  
1 ‑ too low • 4 ‑ slightly low • 6 ‑ precise • 4 ‑ slightly high  

Prompt:  
> This game has more levels. Are you ready for the next challenge?  

**Button:** Continue  

---

### Step 8: Transition to User Account  
After clicking **Continue**, the user is redirected to their Singing Carrots account and shown options for courses, a quiz, or further training.
