---
title: Singing Carrots AI Coach - Personal AI Singing Teacher
description: Train your voice with Singing Carrots' AI Coach. Get personalized vocal
  lessons, real-time pitch feedback, and adaptive exercises. Available 24/7 on
  desktop and mobile.
---
# Singing Carrots AI Coach: Full Technical Walkthrough

**URL:** <https://singingcarrots.com/ai-session>
**Landing Page:** <https://singingcarrots.com/ai-singing-coach>

---

## Overview

The Singing Carrots AI Coach is an AI-powered vocal training system that provides personalized singing lessons with real-time pitch feedback. Unlike the standard Pitch Training levels, the AI Coach creates custom session plans based on your vocal history, adapts exercises to your performance, and provides conversational coaching throughout your practice.

This documentation provides a complete walkthrough of the AI Coach interface, session flow, exercise mechanics, and all interactive elements available to users.

**Key Features:**
- Personalized session planning using AI analysis of your vocal history
- Real-time pitch detection and visual feedback on the piano interface
- Conversational AI coach that responds to your performance and questions
- Progressive milestone rewards system within each session
- Works on both desktop and mobile devices
- Session summaries with personalized feedback

**Availability:** AI Coach requires a Pro subscription (Starter, Self-Study, or Guided Edition).

---

## Step-by-Step User Flow

### Step 1: Accessing AI Coach

The AI Coach can be accessed from multiple entry points:

1. **Main Menu:** Navigate to Pitch Practice > AI Coach
2. **Pitch Training Page:** Click the "AI Coach" button above the level list
3. **Course Practice:** Via the task pop-up during course exercises
4. **Direct URL:** Visit https://singingcarrots.com/ai-session

**Access Requirements:**
- Must be logged in
- Must have an active Pro subscription
- Non-Pro users are redirected to the upgrade page

---

### Step 2: Page Load - Audio Initialization

Upon loading the AI Coach page:
- A loading spinner displays progress: "Loading audio files 0%"
- Virtual piano samples are downloaded and cached
- Progress updates as files load
- Once complete, text changes to "Preparing virtual piano"

**Note:** Audio files are cached locally for faster subsequent loads.

---

### Step 3: Pre-Session Configuration Modal

After audio loads, a modal appears: **"Prepare Your Session"**

**Duration Selection:**
- Options: 5 min, 10 min, 15 min (default), 20 min, 30 min, 45 min, 60 min
- Select how long you want to practice
- The AI uses this to pace exercises and plan the session

**Focus Area (Optional):**
- Text input: "Anything you'd like to focus on?"
- Placeholder: "E.g., 'I want to work on high notes today' or 'My voice feels tired' or 'Focus on breath control'"
- This helps the AI customize exercises to your current needs

**Recent Sessions:**
- Accordion showing summaries of your previous AI Coach sessions
- Click to expand and review past feedback
- Helps the AI maintain continuity across sessions

**Button:** "Create My Session Plan"
- Triggers AI analysis and planning
- Shows message: "Our AI will analyze your progress and create a personalized plan. This may take 1-2 minutes."

---

### Step 4: Session Planning (AI Analysis)

A loading overlay appears while the AI creates your session plan:
- **Display:** "Creating your personalized practice plan..."
- **Timer:** Shows elapsed time (e.g., "23s")
- **Duration:** Typically 30-90 seconds

**What the AI Analyzes:**
- Your vocal range history (from Vocal Range Test)
- Recent pitch training performance (notes hit, accuracy by note)
- Previous AI Coach sessions and their summaries
- Course progress (if enrolled)
- Your stated focus area for this session

---

### Step 5: Main Session Interface

After planning completes, the main interface appears with two columns:

#### Left Column: Visual Area (Desktop) / Canvas Overlay (Mobile)
- **Piano Visualization:** Shows target notes (blue lines) and your pitch (red line)
- **Exercise Display:** Current exercise pattern with note indicators
- **Pitch Chart:** Real-time tracking of pitch accuracy
- **Controls:**
  - Zoom in/out buttons for piano view
  - Left/right navigation buttons
  - Microphone input selector dropdown

#### Right Column: Chat Area
- **Header:** Shows AI Coach avatar and "AI Coach" title
- **Chat Messages:** Scrollable area with conversation history
- **Input Field:** "Ask your coach..." placeholder text
- **Ask Coach Button:** Sends message to AI

---

### Step 6: Session Header

The header displays key session metrics:

**Left Side:**
- **Back Button (X):** Returns to Pitch Training page
- **Title:** "AI Session"

**Center: Milestone Progress**
- **Trophy Icon:** Next milestone indicator
- **Progress Display:** "X / Y notes" (e.g., "15 / 30 notes")
- **Progress Bar:** Visual fill showing progress toward next milestone
- **Percentage:** Current progress percentage
- **Reward Preview:** "+60" with carrot icon (points earned at milestone)

**Right Side:**
- **Daily Goal (Desktop only):** "Today: X/300" notes
- **Finish Button:** "Finish & Get Feedback"
- **Settings (Gear Icon):** Opens settings modal

---

### Step 7: AI Coach Introduction

The AI Coach begins with a personalized welcome message including:
- Greeting and session plan overview
- First exercise with instructions
- Encouragement based on your history

**Example Welcome Message:**
> "Welcome back! Based on your progress, today we'll focus on strengthening your mid-range and working on breath control. Let's start with a simple warm-up to get your voice ready."

---

### Step 8: Exercise Flow

Each exercise follows this pattern:

#### A. AI Presents Exercise
The coach sends a message with:
- **Instruction Text:** What to do and why
- **Exercise Details:** Starting note, tempo, pattern description
- **Listen Button:** Plays the melody so you can hear it first
- **Sing Button:** Starts the test with pitch detection

#### B. Listen Phase
Clicking "Listen":
- The melody plays through your speakers/headphones
- Piano keys light up showing the target notes
- Metronome provides tempo reference
- "Playing melody..." indicator appears on mobile

#### C. Sing Phase
Clicking "Sing":
- **Canvas Overlay (Mobile):** Automatically shows on mobile
- **Countdown:** Brief countdown before exercise starts
- **Pitch Detection:** Your voice is analyzed in real-time
- **Visual Feedback:**
  - Blue lines: Target notes
  - Red line: Your actual pitch
  - Green highlights: Notes hit on pitch
  - Yellow highlights: Slightly off pitch

#### D. Results Display
After singing:
- **Results Box:** Shows performance metrics inline in chat
  - Notes hit: X / Y
  - Precision: X%
  - Sustain: X%
- **Action Buttons:**
  - **Listen Again:** Replay the melody
  - **Sing Again:** Retry the exercise
  - **Watch Replay:** See your performance playback with recorded audio
- **Ask Coach Button:** Enabled to send feedback to AI

---

### Step 9: Conversational Coaching

After each exercise, you can:

**Send Performance:**
- Click "Ask Coach" without typing to submit your results
- The AI responds with feedback and the next exercise

**Ask Questions:**
- Type in the chat input field
- Examples: "Why is my high G always flat?", "Can we try something slower?"
- The AI provides personalized guidance

**Request Adjustments:**
- Ask for easier/harder exercises
- Request specific note ranges
- Ask to focus on particular skills

---

### Step 10: Milestone Celebrations

As you practice, you earn milestones:

**Milestone Thresholds:** 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 notes

**When a Milestone is Reached:**
- **Toast Notification:** Appears at top of screen with trophy icon
- **Display:** "Milestone Reached! X notes"
- **Points:** "+60 carrot points" per milestone
- **Progress Bar:** Updates to show next milestone

---

### Step 11: Finishing the Session

Click "Finish & Get Feedback" when ready to end:

**Confirmation Dialog:**
> "Finish this session? You will receive a personalized summary with feedback on your practice."

**Summary Generation:**
- Loading overlay: "Analyzing your session..."
- Timer shows elapsed time
- Duration: 30-60 seconds

---

### Step 12: Session Summary Modal

After analysis completes:

**Header:** "Session Complete!" with green checkmark

**Summary Content:**
- Personalized feedback on your performance
- What you did well
- Areas for improvement
- Recommendations for next session
- Total notes sung and accuracy overview

**Feedback Section:**
- **Star Rating:** 1-5 stars - rate your session experience
- **Text Feedback:** Optional textarea for detailed feedback
- **Submit Button:** Send your rating

**Exit Button:** "Continue to Pitch Training"

---

## Mobile Interface

On mobile devices (screen width <= 992px), the interface adapts:

### Chat-First Design
- Chat area takes full screen
- Exercises appear as chat messages
- Toggle button: "Show Exercise" / "Hide Exercise"

### Canvas Overlay
When practicing:
- Tap "Show Exercise" to reveal piano visualization
- Canvas overlays top portion of screen
- Close button (X) in top-right corner
- Automatically shows during Sing and Replay phases
- Automatically hides after exercise completes

### Compact Header
- Back button and progress bar in single row
- Daily goal hidden on mobile
- Finish button shows "Finish" (short text)

---

## Settings Modal

Click the gear icon to access settings:

**Microphone Input Device:**
- Dropdown to select microphone
- "Check" button to test input levels
- Volume indicator shows current input strength

**Audio Latency Compensation:**
- Slider: 0-300ms
- Purpose: Compensates for Bluetooth audio delay
- Typical values:
  - Wired audio: 0ms
  - Bluetooth: 100-200ms
  - Older Bluetooth: up to 300ms

---

## Keyboard Shortcuts (Desktop)

| Shortcut | Action |
|----------|--------|
| Space | Listen (play melody) |
| Enter | Sing (start test) |
| R | Watch Replay |
| Shift+Space | Listen Again (retry) |
| Shift+Enter | Sing Again (retry) |

**Note:** Shortcuts are disabled when typing in the chat input.

---

## Session States

### Active Session
- Can continue where you left off
- Session persists for up to 4 hours of inactivity
- Chat history and progress preserved

### Stale Session (Previous Session Found)
If you return after a session timeout:
- Modal: "Previous Session Found"
- Shows summary of the previous session
- Button: "Start New Session"

### Daily Goal Reached
When you hit 300 notes for the day:
- Congratulations modal appears
- Session summary shows daily achievement
- Can continue practicing or exit

### Session Blocked
If close to daily goal when starting:
- Modal: "Great Progress Today!"
- Explains remaining notes are too few for effective session
- Suggests returning tomorrow

---

## Technical Notes

### AI Models Used
- **Session Planning:** High-reasoning AI model for comprehensive analysis
- **Operational Responses:** Fast model for quick exercise generation
- **Summaries:** Reasoning model for insightful session analysis

### Async Processing
Long operations (planning, summaries) use async polling to avoid timeouts:
- Initial request returns immediately with job ID
- Frontend polls for completion
- Loading overlay shows progress

### Performance Data Sent to AI
Each exercise attempt includes:
- Notes hit count
- Precision percentage
- Sustain percentage
- Per-note accuracy (flat/sharp/precise)
- Pitch stability metrics

---

## Related Documentation

- [Pitch Training Documentation](https://singingcarrots.com/docs/singing-carrots-pitch-training) - Standard pitch training levels and modes
- [Virtual Piano Interface](https://singingcarrots.com/docs/pitch-training-practice-virtual-piano-interface) - Detailed piano visualization documentation
- [Pitch Test](https://singingcarrots.com/docs/singing-carrots-pitch-test) - Pitch accuracy assessment
- [Stats Page](https://singingcarrots.com/docs/singing-carrots-stats-page) - Track your vocal progress
- [Product Tiers](https://singingcarrots.com/docs/singing-carrots-product-tiers) - Subscription options

---

## FAQ

**Q: How is AI Coach different from regular Pitch Training?**
A: Regular Pitch Training offers fixed levels with preset exercises. AI Coach analyzes your entire vocal history to create personalized sessions, adapts in real-time to your performance, and provides conversational coaching.

**Q: Do I need special equipment?**
A: Just a microphone (built-in works fine), headphones (recommended), and a quiet space. Works in any modern browser.

**Q: How long should my sessions be?**
A: 15-20 minutes is ideal for most users. The AI will pace exercises to fit your selected duration while ensuring effective practice.

**Q: Can I ask the AI coach questions?**
A: Yes! Type any question in the chat input. Ask about technique, request different exercises, or get feedback on specific challenges.

**Q: Does progress carry over between sessions?**
A: Yes. The AI remembers your vocal history, previous sessions, and progress. Each new session builds on what you've practiced before.
