---
title: Singing Carrots Sustain Training
description: Develop breath control and pitch stability with Singing Carrots'
  Sustain Training tool. Practice holding notes accurately, track progress with
  visual feedback, and earn carrot points for building vocal stamina.
---
# Singing Carrots Sustain Training: Full Technical Walkthrough

**URL:** <https://singingcarrots.com/sustain-training>

---

## Overview
Sustain Training is a premium vocal exercise tool designed to help singers develop breath control, pitch stability, and vocal stamina. Users practice holding individual notes accurately for extended periods while receiving real-time visual feedback. Progress is tracked per note with a level system, and carrot points are awarded based on achievement.

**Availability:** Paid subscribers only (all Pro plans). No free trial available.

---

## Core Concept

### The Level System
Each note in the user's vocal range has an independent level that increases with sustained accurate singing:

| Duration Sustained | Level Achieved |
|-------------------|----------------|
| 5 seconds | Level 1 |
| 10 seconds | Level 2 |
| 15 seconds | Level 3 |
| 20 seconds | Level 4 |
| 25 seconds | Level 5 |
| ...and so on | +1 level per 5 seconds |

**Key Points:**
- Levels are tracked separately for each MIDI note
- Progress resets daily (encourages consistent practice)
- All-time best is tracked separately for long-term progress visualization

---

## Step-by-Step User Flow

### Section 1: Page Load and Initialization

Upon page load:
1. **Loading Modal** appears with progress indicator while audio samples load
2. **Intro Modal** displays with instructions
3. Once loaded, the main interface appears with:
   - Interactive piano keyboard
   - Pitch visualization area
   - Daily stats panel
   - Control buttons

### Section 2: Main Interface Components

#### Interactive Piano Keyboard
- **Location:** Bottom of the visualization area
- **Function:** Click any key to select that note as the target
- **Visual Indicators:**
  - Selected note highlighted in green
  - Currently sung pitch highlighted in pink
  - Blue indicator shows target note position
  - Octave labels (C2, C3, C4, etc.) on white keys

#### Control Buttons
- **Listen Button:** Plays the target note audio so user can hear the pitch to match
- **Scaling Buttons:** Adjust how many octaves are visible on the piano (2-5 octaves)

#### Pitch Visualization Area
- **Real-time pitch chart:** Shows user's sung pitch over time
- **Target note indicator:** Horizontal line showing the note to match
- **Zoom view:** Detailed pitch accuracy display centered on target note
- **Circular progress indicator:** Shows progress toward next level during active sustaining

### Section 3: Sustain Training Gameplay

#### How to Practice
1. **Select a note** by clicking on the piano keyboard
2. **Tap "Listen"** to hear the target pitch
3. **Sing the note** into your microphone
4. **Watch the visualization** to see if you're on pitch
5. **Sustain accurately** to build levels (5 seconds per level)

#### Visual Feedback During Sustaining
- **Pitch line:** Real-time display of sung pitch relative to target
- **Progress circle:** Fills up as you approach the next level threshold
- **"Nice start!" bubble:** Appears after 2 seconds of accurate sustaining (first level only)
- **Level achievement celebration:** Visual and audio feedback when a level is reached

---

## Progress Tracking and Visualization

### Stacking Blocks Display
Progress is visualized as colored blocks stacking on each note of the piano:

- Each block represents one level achieved
- Block height corresponds to 5 seconds of sustain time
- Blocks stack vertically on their respective piano key

### Color Tiers
Block colors change based on **consecutive notes** mastered at each level:

| Consecutive Notes | Color | Hex Code |
|-------------------|-------|----------|
| 1-5 notes | Blue | #007bff |
| 6-11 notes | Bronze | #CD7F32 |
| 12-23 notes | Silver | #C0C0C0 |
| 24-35 notes | Gold | #FFD700 |
| 36+ notes | Diamond/Purple | #871094 |

**How consecutive notes are counted:**
- The system looks at each level independently
- For a given level, it counts how many adjacent notes (going both up and down) have achieved that level or higher
- Higher streaks = higher tier color = more carrot points

### Best Day Comparison
- Light gray background blocks show the user's best-ever performance for each note
- Current day's colored blocks overlay on top
- Allows users to see if they're matching or exceeding their personal best

---

## Carrot Points Reward System

### Reward Structure
Carrot points are earned based on levels achieved and consecutive note streaks:

| Consecutive Notes at Level | Carrots per Level |
|---------------------------|-------------------|
| 1-5 notes | 3 carrots |
| 6-11 notes | 4 carrots |
| 12-23 notes | 5 carrots |
| 24-35 notes | 6 carrots |
| 36+ notes | 7 carrots |

### Cumulative Level Rewards
**Important:** A note at level N earns rewards for ALL levels 1 through N.

**Example:**
- Note A at Level 3 → earns carrots for levels 1, 2, AND 3 (3 rewards)
- Note B at Level 2 → earns carrots for levels 1 AND 2 (2 rewards)
- Note C at Level 1 → earns carrots for level 1 only (1 reward)

### Calculation Example
If a user has achieved:
- C4 at Level 3 (within a 10-note streak)
- D4 at Level 2 (within a 10-note streak)
- E4 at Level 1 (within a 10-note streak)

**Reward calculation:**
- C4: 3 levels × 4 carrots (bronze tier) = 12 carrots
- D4: 2 levels × 4 carrots (bronze tier) = 8 carrots
- E4: 1 level × 4 carrots (bronze tier) = 4 carrots
- **Total: 24 carrots**

### Daily Record Management
- One carrot points record per user per day (score_type: SUSTAIN_LEVEL)
- Record is recalculated and updated on each progress save (not duplicated)
- Rewards appear in real-time as the user practices

---

## Daily Stats Panel

### Stats Displayed
- **Total Levels:** Sum of all levels achieved across all notes today
- **Carrots Earned:** Total carrot points earned from sustain training today

### Best Day Stats
- Loads and displays the user's best-ever single-day performance
- Provides a target for users to beat

---

## Technical Details

### MIDI Note System
Sustain Training uses an **adjusted MIDI system** (same as AI vocal coach):

| Note | Adjusted (Our System) | Canonical MIDI |
|------|----------------------|----------------|
| C4 | 37 | 60 |

The offset is -23 from canonical MIDI. All note values in the system use this adjusted notation.

### Data Persistence
- **Cookies:** Progress saved locally for non-authenticated users
- **API:** Progress synced to server for authenticated users
- **Cookie key format:** `sustain-training-progress-YYYY-MM-DD`

### API Endpoints
- **POST** `/api/v1/user-stats/sustain-progress` - Save progress for a note
  - Parameters: `note`, `level`, `date`
  - Returns: `totalReward`, `newCarrots`
- **GET** `/api/v1/user-stats/sustain-progress` - Load progress
  - Parameters: `date`
  - Returns: `noteLevels` (map), `totalRewards`

---

## FAQ

### Access and Availability

**Q: Who can access Sustain Training?**
A: Sustain Training is available exclusively to paid subscribers. It's included in all Pro plans. There is no free trial for this feature.

**Q: Does it work on mobile?**
A: Yes. Sustain Training works on any modern browser with microphone access—desktop or mobile.

**Q: Do I need to download an app?**
A: No. It runs directly in your web browser.

### Progress and Rewards

**Q: Why does my progress reset daily?**
A: Daily resets encourage consistent practice habits. Your all-time best is tracked separately so you can see long-term improvement.

**Q: How are carrot points calculated?**
A: You earn 3-7 carrots per level depending on how many consecutive notes you've mastered. Higher streaks = more carrots. Each level achieved earns rewards cumulatively (Level 3 pays for levels 1, 2, and 3).

**Q: Do my carrot points count toward the weekly leaderboard?**
A: Yes. Carrot points from Sustain Training contribute to your weekly total and leaderboard ranking.

### Practice Tips

**Q: How long should I practice?**
A: Start with 10-15 minutes. Sustaining notes is more tiring than it seems—don't strain your voice.

**Q: What if I can't sustain for 5 seconds?**
A: Start with notes in your comfortable middle range. As your breath control improves, you'll reach 5 seconds and beyond.

**Q: Should I warm up first?**
A: Yes. Start with comfortable notes before pushing into the edges of your range.

### Technical Issues

**Q: The pitch detection seems inaccurate. What can I do?**
A: Use headphones to reduce echo, find a quiet environment, and keep your device at a consistent distance from your mouth.

**Q: My progress isn't saving. Why?**
A: Make sure you're logged in for server-side sync. Progress also saves to cookies locally as a backup.

---

## Related Documentation

- [Pitch Training](singing-carrots-pitch-training.md) - Melodic exercises and pitch accuracy games
- [AI Coach](singing-carrots-ai-coach.md) - Personalized vocal coaching sessions
- [Carrot Points](singing-carrots-carrot-points-page.md) - How the reward system works
- [Product Tiers](singing-carrots-product-tiers.md) - Subscription plans and features
