---
title: Singing Carrots Pitch Training
description: Improve your singing accuracy with Singing Carrots’ interactive
  Pitch Training game. Master pitch control, memory, and range through
  customizable exercises and daily challenges. Track your stats and climb the
  leaderboard.
---
# Singing Carrots Pitch Training: Full Technical Walkthrough

**URL:** https://singingcarrots.com/pitch-training#game

---

## Overview
The Singing Carrots Pitch Training page is an interactive training platform designed to help singers improve their pitch accuracy, ear training, vocal control, and melodic memory. It is structured around a daily note goal and a set of progressively harder levels, each consisting of **Practice**, **Basic**, **Challenging**, and **Hard** modes. Real-time pitch feedback, customizable exercises, and gamified rewards are core to the experience.  
This documentation outlines all components of the page, including the interface, real-time pitch game engine, leaderboard, daily goal tracking, and in-depth logic behind each difficulty mode.

---

## Step-by-Step User Flow

### Section 1: Page Load – Daily Goal and Stats Overview
Upon page load, users see a progress field at the top:
- **Header:** “My Daily Goal”
- **Goal Text:** “Hit 300 notes and get 600 carrot points”
- **Tooltip:** Hovering the `?` icon shows:
  > “Try to do it in one session to warm-up your voice and prepare your body to sing songs.”
- **Blue Progress Bar:** Visually indicates % of daily note target completed

**User Stats Panel (right of the goal area):**
- **"Today:"**
  - **Carrot Points:** [icon] + number  
    *Tooltip:* “You earn carrot points when you sing notes on pitch, complete challenges, goals and quests.”
  - **Notes Hit:** [note icon] + number  
    *Tooltip:* “Notes hit on pitch today”
  - **Accuracy:** [% icon] + %  
    *Tooltip:* “My daily pitch accuracy”

---

### Section 2: Leaderboard and Progress Chart
**Leaderboard Section**
- **Header:** "Leaderboard"
- **Countdown:** Days:Hours:Minutes (until week end)
  *Tooltip:* “Your week end might be different from the week end of other players. It depends on your timezone.”
- **Two Tabs:**
  - **This Week** (default)
  - **Hall of Fame** (with goblet icon)

**Each row in the leaderboard includes:**
- Rank number
- Player nickname
- Position change arrow (green or red) with +/– value  
  *Tooltip:* “Positions compared to last week”
- Carrot point total (number + carrot icon)
- Scrollable list
- **At the bottom:** “Your position” (clickable – jumps to your row)

**Progress Chart**
- **Label:** “Progress”
- **Bar Graph:**  
  - Y-axis: Note hits
  - X-axis: Days (e.g., Jul 3, Jul 4…)
  - Orange bars show per-day pitch activity
  - *Hovering displays:* “Note hits: [number]”
- **More stats:** (link to My Statistics)

---

### Section 3: Pitch Training: Levels Overview & Logic
The Pitch Training Game on Singing Carrots is structured around progressive levels, each designed to train different aspects of pitch accuracy, vocal memory, and control. Every level is centered around a specific melodic pattern and includes visual, interactive, and auditory tools to guide the user through multiple stages of increasing difficulty.

#### Level Structure
Each level includes:
- **Title** – Describes the musical focus or technique being practiced (e.g., arpeggios, intervals, scales).
- **Tabs** – Tags that summarize the focus and difficulty of the level.  
  *Hovering over each tab shows an explanatory tooltip.*

**Available Tabs and Their Meanings:**
- Pitch tuning – This exercise is good for practising the notes in tune
- Arpeggio – This exercise helps to learn arpeggio
- Minor – This helps to practice Minor scale
- Major – This helps to practice Major scale
- Pentatonic – This helps to practice Pentatonic scale
- Diatonic – This helps to practice Diatonic scale
- Range Extension – This exercise is good for developing range extension
- Speed training – This exercise is good for developing runs or fioritura
- Easy – The exercise is good for starting your warm-up
- Average – The exercise is suitable for singers of all levels
- Challenging – This exercise helps to learn arpeggio
- Duration training – This exercise is good for working on the maintenance of the air and breath support

- **Subtitle** – A short, motivating phrase to describe what this level helps develop.
- **Level Icon** – A carrot character with a black speech bubble indicating the level number (e.g., “1”, “2”, etc.).

---

#### Four Training Stages Per Level
Each level consists of four stages, arranged left to right:

**Practice**
- A fully customizable training environment with interactive piano and visual pitch feedback.
- Users can adjust BPM, select playback type, loop melodies, shift note direction, or limit training to their vocal range.
- Includes metronome, pitch reference sounds, and replay functionality.
- Access full documentation:  
  👉 **Practice Mode: Virtual Piano Documentation**

**Basic**
- A guided version of the same melodic exercise.
- The user hears both the metronome and melody during the exercise.
- **Goal:** Match pitch and rhythm based on full audio support.

**Challenging**
- Same melodic pattern, but with reduced guidance.
- Only the metronome is played, no pitch reference.
- User must recall the melody from memory after hearing it once.
- Allows 3 mistakes before ending.

**Hard**
- The most advanced form of training.
- No sound is played during the test — no melody, no metronome.
- The user must rely entirely on internal pitch memory and vocal control.
- Success is tracked and compared with global top scores.

All stages use a version of the interactive piano interface, showing:
- Target notes (as blue lines)
- User's pitch input (as red line)
- Color-coded feedback: green (in tune), yellow (slightly off)
- Real-time pitch stability visualization

**Note:** All four modes use the interactive pitch training piano, but only Practice mode includes full settings and playback control. The Basic, Challenging, and Hard modes use a simplified version of the interface with fewer options to ensure consistent testing conditions.

---

#### Mode Unlocking Logic
- When a user first opens a level: Only Practice and Basic modes are available.
- Challenging and Hard modes are greyed out and show this popup on hover or click:  
  **“Complete BASIC to unlock”**
- Once the user successfully completes the Basic mode, both Challenging and Hard become available for that day.

**Level Progress Resets Daily**
- Completing any mode marks it as complete only for the current day. The next day, all levels reset to encourage daily vocal training.

---

#### Note Target Progress Counter
Each level displays a note hit tracker for the current day:  
**Format:** `0 / X`  
(e.g., `0 / 9`, `4 / 57` — where X is the required number of correctly hit notes)  
The counter increases as the user successfully sings the required notes on pitch.  
This indicator helps track daily goal completion per level and provides motivation for practice consistency.

---

#### Performance Feedback & Top Scores
Each non-practice stage ends with a results popup, displaying:
- Notes hit
- Precision %
- Sustain %
- Carrot rewards
- Option to watch replay for extra carrots
- Encouraging messages from the carrot assistant

If the user performs particularly well (especially in Challenging or Hard mode), they’ll see:
- **Leaderboard prompt** (“Standings”)
- **Option to view top scores**
- **CTA to Try Hard Mode** (from Challenging)

This system ensures that users progressively build muscle memory, pitch accuracy, and ear training through structured daily repetition and increasing difficulty. It balances flexibility (Practice mode) with challenge and gamification (Basic → Hard modes + note goals + leaderboard integration).

---

## Level List and Details

### Level 1: Climb the Major Ladder
- **Tabs:** Pitch tuning, Arpeggio, Major, Average
- **Subtitle:** Let’s make the melody a bit more interesting
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 2: Mingle Around the Height
- **Tabs:** Range Extension, Speed training, Arpeggio, Major, Average
- **Subtitle:** Melody moves up and jumps around the high part
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 3: Going Wider
- **Tabs:** Range Extension, Arpeggio, Major, Challenging
- **Subtitle:** Let’s cover the whole octave
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 4: A Glide with a Twist
- **Tabs:** Range Extension, Duration training, Major, Diatonic, Challenging
- **Subtitle:** The melody glides all the way down, until the final jump happens
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 5: Major Scale (Full)
- **Tabs:** Range Extension, Duration training, Major, Diatonic, Average
- **Subtitle:** Build your foundation
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 6: One More Mingle, but with a Wider Range This Time
- **Tabs:** Range Extension, Speed training, Duration training, Major, Diatonic, Challenging
- **Subtitle:** Get set, on your mark, go!
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 7: Minor Scale (Full)
- **Tabs:** Pitch tuning, Minor, Diatonic, Average
- **Subtitle:** 15 "sad" notes on one breath, what can be funnier?
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 8: Sakura Mood
- **Tabs:** Range Extension, Pitch tuning, Duration training, Pentatonic, Average
- **Subtitle:** Pentatonic major scale with an eastern flavor
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 9: Eastern Minor
- **Tabs:** Pitch tuning, Range Extension, Duration training, Pentatonic, Minor, Average
- **Subtitle:** Pentatonic minor scale at your service
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 10: Gallop
- **Tabs:** Range Extension, Speed training, Arpeggio, Duration training, Major, Diatonic, Challenging
- **Subtitle:** Get ready! Things are about to get really challenging
- **Available Modes:** Practice, Basic
- 🚫 No top scores section

### Level 11: Test Your Patience
- **Tabs:** Range Extension, Speed training, Duration training, Major, Diatonic, Challenging
- **Subtitle:** That's a tricky one. But we believe in you!
- **Available Modes:** Practice, Basic
- 🚫 No top scores section

### Level 12: Sandman
- **Tabs:** Pitch tuning, Speed training, Major, Diatonic, Challenging
- **Subtitle:** A piece inspired by the song Mr. Sandman by Pat Ballard
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 13: My Bonnie
- **Tabs:** Pitch tuning, Duration training, Major, Average
- **Subtitle:** My Bonnie lies over the ocean... song intro
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 14: Happy Birthday
- **Tabs:** Pitch tuning, Duration training, Major, Average
- **Subtitle:** Happy Birthday to You!
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 15: Oh When the Saints
- **Tabs:** Pitch tuning, Major, Easy
- **Subtitle:** A traditional gospel hymn
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 16: Over the Rainbow
- **Tabs:** Pitch tuning, Major, Average
- **Subtitle:** A snippet from the classic song
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 0.1: The Simplest Start
- **Tabs:** Pitch tuning, Major, Easy
- **Subtitle:** Start your warm-up from this simple sequence
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 0.2: Simple Start #2
- **Tabs:** Pitch tuning, Major, Easy
- **Subtitle:** Another simple scale
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)

### Level 0.3: Major Breath
- **Tabs:** Pitch tuning, Duration training, Major, Diatonic, Easy
- **Subtitle:** The melody is simple, but can you sing it with one breath?
- **Available Modes:** Practice, Basic, Challenging, Hard
- ✅ Top scores available (Hard mode)
