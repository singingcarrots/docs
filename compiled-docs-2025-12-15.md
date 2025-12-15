# Compiled Documentation

_Compiled on: 2025-12-15_

## about-singing-carrots.md

# About Singing Carrots

**Description:** Learn about Singing Carrots — a platform created to help everyone learn to sing, backed by science, practice tools, and a supportive community.

---

## Welcome!

Hi! My name is Sergey ([Twitter/X](https://twitter.com/kyunez)).  
I created Singing Carrots for people who love to sing.

---

## What is this website about?

Singing Carrots brings together everything that might be useful for anyone practicing or simply interested in singing.

> **Key takeaway:** You can sing.

- Research shows that, unless you have a rare medical condition, you can develop your singing to a decent level.  
  - See [this article from Penn State](https://www.psu.edu/news/research/story/probing-question-can-anyone-be-taught-how-sing/)  
  - And [this study](https://pubmed.ncbi.nlm.nih.gov/28224991/) showing that *amusia* is uncommon.
- I wrote a detailed article on why you might struggle with pitch:  
  [Why People Sing Out of Pitch](https://singingcarrots.com/blog/why-people-sing-out-of-pitch/)
- The **10,000‑hour rule** applies to singing too — invest time and you will improve.  
  [Learn more](https://en.wikipedia.org/wiki/Practice_(learning_method)#%3A~:text=Malcolm%20Gladwell%20developed%20the%20highly,become%20an%20expert%20at%20it)

We’re here to help 🙂

---

## Our Mission

> **To unleash one million voices.**  
> [Read more…](https://blog.singingcarrots.com/unleash-1-million-voices-singing-carrots-mission/)

---

## What can I do here?

- Explore the **full list of features** → [Feature list](https://singingcarrots.com/about#ul-features)

> Work in progress updates are shared on [TW/X](https://twitter.com/kyunez).

---

## Why did you create this website?

[Read the story](https://singingcarrots.com/about#div-story)

---

## Can I request a feature?

Absolutely!  
[Leave a message via the contact form](https://singingcarrots.com/contact).

---

## How do I add songs and artists?

1. **Check first:** Use [Search](https://singingcarrots.com/search#search=) to see if the song already exists.  
2. **Add a new song:** [Submit here](https://singingcarrots.com/edit-song/) — specify the artist name and the artist page will be generated automatically.

---

## A Word of Appreciation

| Name | Role & Contribution |
|------|--------------------|
| [Gonzalo Gonzales](https://singingcarrots.com/user/gonzalo2) | UX researcher – design, customer development, song moderation |
| [Dominika Zawada](https://www.singwithdo.com/) | Singer, actress, coach – author of **From Zero to Singing Hero** course |
| [Celina von Wrochem](https://singingcarrots.com/blog/author/celina/) | Author of **All‑Round Vocalist** course |
| [Leo Maia](http://oleomaia.com/) | Illustrator – all the funny carrot images |
| [Sergey Alimsky](https://www.instagram.com/klinwild) | Designer/photographer – first feature idea, ongoing advice |
| [Sandra Dominguez Ortiz](https://www.wordsinthebucket.com/author/sandra-dominguez-ortiz) | Inspiration and motivation to launch Singing Carrots |
| [Claudia Rolando](https://www.claudiarolando.com/#claudia-rolando-method) | First singing teacher – exercises for Pitch Training |
| [Beth Aggett](https://www.bethaggettmusic.com/) | Singer/composer – feedback and ideation |
| [Linor Oren](https://singwell.eu/) | Singer/voice expert – warm‑up videos, website improvement feedback |

---

## About the Founder

**Sergey Kyune**  
I build educational tools that help people learn new skills.

**Current projects**

| Project | Description |
|---------|-------------|
| [Singing Carrots](https://singingcarrots.com/) | This website 🙂 |
| [Rememby](https://rememby.app/en) | Service for learning & memorizing foreign words |
| [Own Your Time](https://www.linkedin.com/in/sergey-kyune-0b310351/) | Free 1‑on‑1 coaching: corporate → entrepreneurship |
| [Critical Thinking Coach](https://chatgpt.com/g/g-gePxNRx6f-critical-thinking-coach-game) | Educational game on logical fallacies & propaganda |

Feel free to connect on [LinkedIn](https://www.linkedin.com/in/sergey-kyune-0b310351/) or [Twitter/X](https://x.com/kyunez/).

---

---

## find-songs-by-vocal-range-or-name.md

# Singing Carrots Song Search Page: Full Technical Documentation  
**URL:** [https://singingcarrots.com/search](https://singingcarrots.com/search)

---

## Overview  
The Singing Carrots Search Page is an advanced tool that allows singers to find songs that match their vocal range, skill level, and preferences. It includes two primary modes: **Search by Range** and **Search by Name**. Users can filter songs based on difficulty, genre, vocal range, gender of the performer, and more. This page also connects directly with the user’s personal repertoire.

---

## 1. Search Mode Toggle  
At the top of the page, users can choose between two modes:  
- **Search by Range** (default view)  
- **Search by Name**  

Clicking either option dynamically switches the interface without reloading the page.

---

## 2. Search by Range Mode  

### 2.1. Piano & Range Selector  
- An interactive on-screen piano keyboard is displayed.  
- Above the keyboard, six vocal range presets are available:  
  - **Bass** (E2–E4)  
  - **Baritone** (A2–A4)  
  - **Tenor** (C3–C5)  
  - **Contralto** (F3–F5)  
  - **Mezzo-soprano** (A3–A5)  
  - **Soprano** (C4–C6)  
- Selecting a preset automatically adjusts the range slider positioned above the keys.  
- Users can manually drag the slider handles to customize their vocal range.  
- This range determines which songs appear in the result list.  

### 2.2. Song Result List  
Located to the right of the piano interface. Songs update automatically based on range and filters. Each song entry includes:  

**1. Title & Artist**  
- **Format:** Artist – Song  
- Clicking the artist's name opens their Singing Carrots profile.  
- Clicking the song title opens the dedicated song page.  

**2. Song Action Tabs**  
Each song entry includes quick-access tabs that help users find all essential resources needed to sing the song:  
- **Pitch Practice** – Green “Pitch Practice” tag appears next to songs with linked MIDI melodies. Clicking this tab takes the user directly to Singing Carrots Pitch Training with that song preloaded for real-time pitch practice.
- **Chords** – external link.
- **Sheet music** – external link.
- **Lyrics** – external link.
- **Sing karaoke** – external link.
- **Song details** – internal link to Singing Carrots song page.
- **Favorites (star + number)** – shows how many users added the song to their repertoire.

These external links are included to provide users with all the tools they may need to practice or perform a song. Instead of manually searching the web, singers can quickly access relevant chords, notation, lyrics, or karaoke tracks - streamlining the preparation process.  
The **Song details** link leads to Singing Carrots' own database, containing vocal analysis, pitch profiles, range comparison, and other relevant data.  

**3. Difficulty Indicators**  
Displays difficulty level in:  
- Original key  
- Transposed key  
Possible values: **Easy**, **Moderate**, **Challenging**, **Very challenging***  
\* explanation for the values can be found in part 3.3 of the documentation  

**4. Repertoire Toggle**  
- A star icon labeled **“Save in my repertoire”**  
- Clicking changes it to **“In my repertoire”** with a filled star  
- The label is clickable and links to the user’s Repertoire Page  

---

## 3. Filter Panel  
Located on the left-hand side in **"Search by Range"** mode:  

### 3.1. Performer Gender  
Options:  
- Any gender  
- Female  
- Male  

### 3.2. Original Key Filter  
- **Checkbox:** “I want to sing only in the original key”  
- **Subtext:** “Keep this option ON to find songs for Karaoke”*  
\* Most karaoke tracks are available only in their original key, or offer limited transposition options that often result in poor sound quality or pitch artifacts. This toggle ensures that all suggested songs match the original karaoke versions available online, giving users a more reliable practice or performance experience.  

### 3.3. Difficulty Selection  
The difficulty is automatically adjusted to the user’s range he has in his account  
- Any difficulty  
- **Easy** — User’s range significantly wider than song  
- **Moderate** — User’s range difference is of 2 to 6 semitones  
- **Challenging** — Ranges are almost identical  
- **Very challenging** — Song exceeds user's range by 1–2 semitones  

### 3.4. Genre Filter  
- Search field to narrow down available genres  
- Alphabetical list of genres with checkboxes  
- Multiple genres can be selected simultaneously  

---

## 4. Search by Name Mode*  
When this mode is selected:  
- A search bar appears with the placeholder:  
  **“Search for song or artist by name”**  
- As users type, a list of matching songs and artists is displayed in real time.  
- The song result entries follow the exact format and structure as described in **2.2**.  

\* This mode is ideal for singers who already have a specific song or artist in mind and want to check:  
- If the song fits their current vocal range  
- How difficult the song would be to sing  
- Whether they should transpose the song for better comfort  

It’s a quick way to evaluate a known piece before rehearsing or performing it.  

---

## 5. Footer Feedback Prompt  
At the bottom of the page:  
**Do you enjoy our tools?**  
**“Help us improve!”** button – links to: [https://singingcarrots.com/help-carrots](https://singingcarrots.com/help-carrots)  

---

---

## from-zero-to-singing-hero.md

# Singing Carrots: From Zero to Singing Hero Beginner Course: Full Technical Walkthrough  
**Course Title:** From Zero to Singing Hero  

**Platform:** [Singing Carrots: From Zero to Singing Hero](https://singingcarrots.com/course/zero-to-hero)  

**Course Type:** Step-by-step, structured online course for beginner singers  
**Target Audience:** Absolute beginners or casual singers who want to build a strong foundation in singing  

---

## Course Description  
"From Zero to Singing Hero" is a step-by-step online course designed to help complete beginners learn to sing accurately and confidently. It combines daily video lessons with real-time pitch training, song-based practice, and diagnostic tools such as vocal range and pitch accuracy tests. The course gradually builds vocal skills across four weeks—starting with breath control and pitch matching and progressing to vocal registers, resonance, and melodic memory.  
Learners are guided through short, structured lessons each day, reinforced by singing exercises, practice songs, and real-time pitch feedback. Progress is gamified through carrot points, daily note goals, and a global leaderboard. The course is accessible on desktop or mobile and supports learners with visual notesheets and adaptive feedback.  

---

## Core Learning Objectives  
- Learn how to breathe correctly for singing using diaphragm-based techniques  
- Improve pitch accuracy through interactive exercises  
- Understand and master vocal registers (chest, head, and mixed voice)  
- Strengthen resonance and tone production  
- Apply vocal techniques in real songs  
- Track vocal progress through data and feedback  

---

## Course Structure  
- 4 weeks of structured content (12 training days + onboarding)  
- Each training day includes:  
  - A technique video lesson  
  - A practical pitch exercise using the Pitch Training Game  
    (<https://singingcarrots.com/pitch-training>)  
  - Song practice focused on the day’s topic  
- Content is sequential and designed for daily practice  

---

## Learning Tools Used  
- **Video Lessons:** Expert-guided daily videos covering technique, warmups, and vocal concepts.  
- **Pitch Training Game:** Interactive piano interface that gives real-time pitch feedback and tracks accuracy (<https://singingcarrots.com/pitch-training>)  
- **Vocal Range Test:** Helps users discover their vocal range and track improvements (<https://singingcarrots.com/range-test>)  
- **Notesheets:** Visual sheet music representations of exercises and melodies for easier pitch understanding.  
- **Pitch Accuracy Test:** One-minute assessment that evaluates how accurately a user can match sung notes to a melody. Results include score, precision, and comparison with others (<https://singingcarrots.com/pitch-test>)  
- **Song Practice with Visual Feedback:** Allows users to sing popular songs and get real-time feedback on tuning  
- **Carrot Points:** Reward system that motivates consistent practice  
- **Leaderboard:** Weekly rankings based on singing activity  

---

## Gamification & Motivation  
- Users receive daily goals (e.g., hit 300 notes on pitch)  
- Earn carrot points for completed tasks, challenges, and note accuracy  
- Weekly leaderboard rankings to encourage progress (Hall of Fame, etc.)  

---

## Progress Tracking  
- Daily task checkmarks with “Mark Complete” buttons  
- Real-time stats for pitch accuracy, vocal range progress, and note quantity  
- Access to personalized statistics dashboard:  
  <https://singingcarrots.com/docs/singing-carrots-stats-page>  

---

## Course Outcome  
By the end of the course, users will have:  
- Improved their vocal control and pitch accuracy  
- Gained a better understanding of their voice type and range  
- Developed muscle memory for essential vocal movements  
- Built confidence in singing simple songs in tune  

---

# Onboarding  

## Step 1: Course Introduction (video)  
**What it’s about:**  
In this short welcome video, vocal coach Dominika introduces the From Zero to Singing Hero course—an interactive, beginner-friendly vocal training journey by Singing Carrots. The course helps users build foundational singing skills, focusing on breath control, posture, pitch, vocal registers, and more. It is structured in a weekly format, each week divided into three practice days featuring video lessons, vocal warm-ups, assignments, and Singing Carrots tools like the Pitch Training Game and Vocal Range Test. Dominika emphasizes progress tracking through recording “before and after” videos, encouraging learners to celebrate their improvements.  

## Step 2: Record ‘Before’ Acapella or Karaoke Piece  
**Step Overview:**  
Learners are encouraged to record a short video of themselves singing — either a cappella or with karaoke — at the very beginning of the course. This step helps document their starting point and provides a basis for comparison at the end of the course.  
- **Goal:** Track vocal growth by comparing early and late recordings.  
- **Instructions:**  
  1. Find a quiet and well‑lit space.  
  2. Choose a comfortable short melody or song.  
  3. Record using your front-facing camera (phone or webcam).  
  4. Save the video for your personal reference.  
- **Motivation & Rewards:**  
  - Optional but highly recommended.  
  - Earn **20 carrot points** for completing the task.  
  - **Bonus:** Learners can share the video via a Google Form (opened via the **"Upload your video"** button) to receive:  
    - A $10 coupon for Singing Carrots membership  
    - Encouragement and motivation via accountability  
    - Confidential handling of submissions  
    - A chance to compare with their final performance  
- **Available Actions:**  
  - **Upload your video** – opens a Google Form where learners can submit their video and email.  
  - **Mark complete** – marks the step as done within the course interface.  

## Step 3: Vocal Range Test  
- **Step Title:** Vocal Range Test  
- **Reward:** Complete this task and earn **40 carrot points**  
- **UI Text:**  
  > You can not improve what you can not measure. Make sure to save your test results to get your carrot points.  
- **Action:** Users click the **Start Test** button, which redirects them to the Vocal Range Test page.  
- **Purpose in Course Flow:** This step helps learners measure their current vocal range before they begin active vocal training. Results are saved and used later for comparison and progress tracking.  

## Step 4: Pitch Accuracy Test  
- **Step Title:** Pitch Accuracy Test  
- **Reward:** Complete this task and earn **50 carrot points**  
- **UI Text:**  
  > You can not improve what you can not measure. Make sure to save your test results to get your carrot points.  
- **Action:** Clicking the **Start Test** button takes users to the Pitch Accuracy Test page.  
- **Purpose in Course Flow:** This task is designed to assess the learner’s current ability to match pitch. It acts as a benchmark for improvement throughout the course.  

## Step 5: Learn to Use Statistics (video)  
**What it’s about:**  
In this quick explainer video, vocal coach Dominika shows how the Singing Carrots statistics dashboard tracks your singing progress. You’ll learn how to view changes in your vocal range, pitch accuracy, and practice frequency—all visualized in interactive charts. It’s like a fitness tracker for your voice, helping you stay motivated and measure your improvement over time.  

## Step 6: Check Your Stats  
- **Step Title:** Check Your Stats  
- **Reward:** Complete this task and earn **10 carrot points**  
- **UI Text:** Review your progress and see how you are doing.  
- **Action:** Clicking the **Review Progress** button opens the My Stats dashboard, where users can view their singing development metrics.  

---

# Weekly Structure  
Each week is organized into:  
1. Introduction (video overview)  
2. 3 Daily Lessons (each includes multiple tasks)  
3. Week Summary  
4. Repeats of key tests (Vocal Range, Pitch Accuracy, Check Stats)  
5. Optional Live Coaching  

---

# Week 1: Breathing for Singing  
**Focus:** Proper breath support  
**Onboarding Video**  

### Description  
Dominika introduces the week’s theme, "Breathing for Singing," and explains why breath control is crucial for vocal power, stamina, and pitch stability. She covers the basics of diaphragmatic breathing and how it differs from everyday breathing.  

---

## Day 1  
1. **Mastering Inhalation (video)** — Dominika demonstrates diaphragmatic inhalation using a simple book exercise, both lying down and standing up. The goal is to develop deep, steady breathing without lifting the shoulders.  
2. **Simple 3‑Minute Warm‑Up (video)** — A quick warm‑up using rolled Rs, Zs, and cheerleader‑style “woo” and “whoa” sounds to stretch vocal range and activate breath support.  
3. **The Simplest Start (video)** — *Popup Video + Exercise*  
   - Dominika explains how the Pitch Training Game improves pitch accuracy.  
   - Scoring 300 points (hitting 300 notes) earns carrot points.  
   - **Button:** Start Practice  
   - *Optional:* Extra carrot points for additional challenges.  
4. **Pick a Song for the Week** — *Popup with Instructions*  
   - Choose a karaoke song; practice a few times.  
   - **Button:** Mark Complete  

## Day 2  
1. **Master Controlled Exhalation** (video lesson) — *Reward: 30 carrot points*  
2. **Simple 3‑Minute Warm‑Up** — *Reward: 20 carrot points*  
3. **Major Breath** (Practice Challenge + Video) — Hit 300 notes to complete.  
4. **Practice Singing the Song of the Week** — *Reward: 10 carrot points*  

## Day 3  
1. **Combining Inhalation & Exhalation** (video) — *Reward: 30 carrot points*  
2. **Simple 3‑Minute Warm‑Up** — *Reward: 20 carrot points*  
3. **Mingle Around the Height** (Pitch Training Game) — Reach 300‑note goal.  
4. **Practice Singing the Song of the Week** — *Reward: 10 carrot points*  

### Week Finish  
1. **Wrap‑Up: Breathing for Singing – Key Takeaways** — *Popup Summary, 10 carrot points*  
2. **Vocal Range Test** — *Interactive Test, 40 carrot points*  
3. **Pitch Accuracy Test** — *Interactive Test, 50 carrot points*  
4. **Check Your Stats** — *10 carrot points*  
5. *Optional:* Book 1‑on‑1 coaching.  

---

# Week 2 Overview: Pitch & Intonation

**Goal:** Develop pitch accuracy and intonation control to sing in tune and confidently.  
**Intro Video** — **Reward:** 20 carrot points  

**Description:**  
An animated explanation of pitch (the exact note being sung) and intonation (the ability to stay on pitch consistently). The video covers the anatomy of vocal cords, how vibration speed changes pitch, and how breath control affects intonation. It emphasizes ear training and vocal coordination as the keys to mastering these skills.

---

## Day 1

### Step 1: Mastering Half Steps & Whole Steps
- **Video Type:** Instructional with practice  
- **Reward:** 30 carrot points  

**Description:**  
Dominika introduces the difference between half steps (minor 2nds) and whole steps (major 2nds) through ear training and vocal exercises. She explains their musical role and emotional tone (minor = mysterious, major = happy), with singing practice for each.

**Exercises**
1. do - ra - do (half step)  
2. do - ra - do, do - re - do (half & whole steps)

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for minor 2nd  
- Exercise #2 – Opens pitch training for minor + major 2nd  
- Mark Complete – Marks the step as done

---

### Step 2: Happy Birthday – Pitch Practice (300 notes)
- **Video:** *How Do I Know My Vocal Limits?*  
- **Reward:** Reaching daily target (300 notes)

**Description:**  
Dominika explains how to use color‑coded vocal range indicators in the pitch training game:  
- Blue = your current vocal range  
- Orange = your high/low limits  
- Gray = out‑of‑range notes  

Settings include range customization, melody pacing, and sound type (piano/guitar). Learners then practice singing *Happy Birthday* using the interactive piano.

**Button**
- Start Practice – Opens pitch training session for Happy Birthday

---

### Step 3: Choose a New Song to Practice
- **Type:** Task  
- **Reward:** 10 carrot points  

**Description:**  
Learners are prompted to select a new song to practice using YouTube Karaoke. This allows practical application of pitch and intonation concepts in a real song.

**Button**
- Mark Complete

---

## Day 2

### Step 1: Master Major Thirds & Perfect Fifths
- **Type:** Instructional video with practice  
- **Reward:** 30 carrot points  

**Description:**  
Dominika introduces two essential musical intervals: the major third (do - mi) and the perfect fifth (do - sol). These intervals are foundational for chords and harmonies.

**Exercises**
1. Practice do - mi - do  
2. Practice do - mi - sol - mi - do (arpeggio)

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for do - mi - do  
- Exercise #2 – Opens pitch training for do - mi - sol - mi - do  
- Mark Complete – Marks the step as done

---

### Step 2: Oh When the Saints – Interval Practice
- **Video:** *How to Practice with BPM & Singing Styles*  
- **Reward:** Daily goal = 300 notes  

**Description:**  
Dominika walks through two important pitch training features:  
- **BPM adjustment** – Controls exercise speed (beats per minute)  
- **Singing styles** – Practice using staccato (short, separated notes) or legato (smooth, flowing notes)  

She explains how to pick a style depending on what you're struggling with — precision (staccato) or connection (legato). The lesson encourages experimenting with different vowels and syllables to build flexibility.

**Button**
- Start Practice – Opens pitch training with *Oh When the Saints*, using the interactive piano

---

### Step 3: Practice the Song of the Week
- **Type:** Task  
- **Reward:** 10 carrot points  

**Description:**  
Continue practicing your chosen weekly song using YouTube Karaoke. Apply what you’ve learned from interval exercises and intonation techniques.

**Button**
- Mark Complete

---

## Day 3

### Step 1: Mastering Octaves & Full Scales
- **Type:** Instructional video with practice  
- **Reward:** 30 carrot points  

**Description:**  
Dominika guides you through practicing octaves (e.g., do - do) and the full major scale (e.g., do - re - mi - fa - sol - la - ti - do) to tie together your interval training and improve pitch accuracy across your vocal range.  

**Octaves:** Practice large leaps between low and high pitches, using chest voice for low notes and head voice for high ones.  
**Full Scale:** Practice ascending and descending the major scale using solfège (do, re, mi, etc.), with breath control and smooth transitions between notes.  

These exercises help solidify your ability to stay on pitch, navigate registers, and build agility and ear training.

**Buttons Below Video**
- Download Exercise Score (PDF) – Contains:  
  - Exercise 5: Octave (do – do)  
  - Exercise 6: The Major Scale (ascending and descending)  
- Exercise #1 – Opens pitch training for octave leap (do in 2 octaves)  
- Exercise #2 – Opens pitch training for full scale  
- Mark Complete – Marks the step as finished

---

### Step 2: Over the Rainbow – 300 Notes Target
- **Type:** Guided pitch training + tool explanation  
- **Reward:** Reach daily goal of 300 notes  

**Explainer Video:** *How to Upload Your Own Song to Practice with MIDI*  
**Host:** Sergey, creator of Singing Carrots  

**Overview:**  
Learn to practice your own melodies or songs using MIDI files in the pitch training tool (requires PRO access).

**Steps**
1. Download a MIDI file (e.g., “Hey Jude”).  
2. Open it with MuseScore (a free music notation app).  
3. Isolate the vocal track and export it as MIDI.  
4. Upload it to Singing Carrots under “My Melodies.”  
5. Practice it using the interactive piano and real‑time pitch detection.

**Tooltips**
- Upload MIDI files of any melody for personalized training.  
- Great for practicing pitch with songs outside the default library.

**Button**
- Start Practice – Takes you to pitch training with *Over the Rainbow* melody

---

### Step 3: Perform the Song of the Week
- **Type:** Personal performance task  
- **Reward:** 10 carrot points  

**Description:**  
Perform your song and enjoy the progress!

**Button**
- Mark Complete – Confirms that you’ve performed your selected song

---

## Week 2 Finish: Pitch & Intonation Recap

### Step 1: Week 2 Summary
- **Type:** Recap popup  
- **Reward:** 10 carrot points  
- **Title:** Building a Strong Foundation in Pitch and Intonation  

**Description:**  
Congratulations on completing Week 2 of the Singing Carrots: From Zero to Hero Singing Course! 🎉 This week, you took crucial steps toward mastering pitch and intonation by learning to hear, sing, and understand the fundamental intervals that make up melodies and harmonies.  
We started with half steps and whole steps, the smallest building blocks of Western music. By practicing these intervals, you began developing precision in pitch awareness, essential for accurate singing. The *Jaws* theme (“Da‑dum”) is a great example to reinforce the small, close movement of a half step.  
Next, we explored major thirds and perfect fifths, intervals that form the backbone of chords and melodies. You practiced singing arpeggios like “Do‑Mi‑Sol‑Mi‑Do,” combining intervals to build your vocal agility and strengthen your sense of musical patterns. Melodies like *Twinkle, Twinkle Little Star* helped illustrate the sound and feel of these intervals.  
Finally, we tied everything together with octaves and full scales, focusing on vocal range and intonation. Singing octaves like low “Do” to high “Do” helped you connect your registers, while full scales improved your pitch accuracy and prepared you for more complex melodies. Example songs like *Somewhere Over the Rainbow* and *Do‑Re‑Mi* reinforced these concepts in a fun and familiar way.  
Keep up the great work and see you in Week 3!

**Button**
- Mark Complete – Confirms task completion and awards points

---

### Step 2: Vocal Range Test
- **Type:** Interactive Test  
- **Reward:** 40 carrot points  

**Purpose:**  
Reassess your vocal range to track your progress and update your profile settings. This is essential for tailoring pitch exercises to your safe and effective vocal limits.

**Instructions:**  
Click **Start Test**, follow the guided singing instructions, and save your results to get credit and personalized practice.

**Button**
- Start Test – Opens vocal range test

---

### Step 3: Pitch Accuracy Test
- **Type:** Interactive Test  
- **Reward:** 50 carrot points  

**Purpose:**  
Measure how accurately you can match pitch. This test helps you track improvements in intonation, pitch memory, and vocal muscle control.

**Instructions:**  
Click **Start Test**, sing the pitches as prompted, and be sure to save the result to receive your reward.

**Button**
- Start Test – Opens pitch accuracy test

---

### Step 4: Check Your Stats
- **Type:** Progress tracking  
- **Reward:** 10 carrot points  

**Description:**  
Review your practice stats including:  
- Total notes sung  
- Practice consistency  
- Improvements in vocal range and pitch matching

**Button**
- Review Progress – Opens My Statistics

---

### Optional: Book 1‑on‑1 with One of Our Coaches
- **Type:** Optional Add‑On  

**Description:**  
A call‑to‑action encouraging learners to book a 30‑minute private coaching session with one of the platform’s coaches for personalized feedback.

**Links & Buttons**
- "Learn more" – Opens a popup explaining the benefits: targeted improvement, personalized guidance, and flexible lesson structure.  
- "Book now" – Links to a booking form.  
- "Send us a message" – Redirects to the Contact Us page for additional inquiries.

# Week 3: Vocal Resonance

**Theme:** This week is all about resonance—the way your voice vibrates and amplifies through your body to create stunning, unique tones.

---

## Introduction to Vocal Resonance
- **Type:** Introductory Video  
- **Reward:** 20 carrot points  

**Description:**  
This video introduces the core concept of resonance, the process by which sound waves are amplified in your body — just like a guitar or violin. You’ll learn:

- **What is resonance:** Vibration of sound in the chest, throat, and head areas.  
- **Types of resonance:**  
  - *Chest Resonance* – Warm, deep tones.  
  - *Head Resonance* – Bright, higher tones.  
  - *Mixed Resonance* – A blend for smooth transitions.  
- **The role of formants** – Naturally amplified frequencies that shape your vocal timbre.  
- **Why openness matters:** Tension in the throat, jaw, or tongue can block your resonance.

By the end of the week, you'll be able to shape your tone intentionally and adapt it for any genre.

---

## Day 1

### Step 1: Finding Your Chest Resonance
- **Video Type:** Guided practice with vocal exercises  
- **Reward:** 30 carrot points  

**Description:**  
Dominika guides you through discovering and strengthening your chest resonance, the source of warm, full vocal tones. This session uses your speaking range and tactile feedback (hand on chest) to help you feel the vibrations. Two exercises build awareness and control of your lower register.

**Exercises**
1. **Hello Exercise (mi - do)**  
   - Focus on chest vibrations while singing “Hello” on descending intervals  
   - Develops resonance awareness in your speaking range  
2. **Vowel Drill (Mee Meh Mah Moh Moo)**  
   - Sing sustained vowels starting with “M” on a single pitch  
   - Emphasizes openness, relaxation, and chest register consistency  

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for “Hello” drill  
- Exercise #2 – Opens pitch training for vowel resonance drill  
- Mark Complete – Marks the step as done and earns carrot points  

---

### Step 2: Climb the Major Ladder
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Build resonance and pitch coordination by climbing a major scale pattern:  
`1 - 3 - 2 - 4 - 3 - 5 - 4 - 2 - 1`

**Button**
- Start Practice – Opens the pitch training at this exercise

---

### Step 3: Choose a New Song to Practice
- **Type:** Weekly Song Selection  
- **Reward:** 10 carrot points  

**Instructions:**  
Choose a new karaoke‑style song from YouTube to accompany your vocal work for the week. This song will help you apply resonance techniques in context.

**Button**
- Mark Complete

---

## Day 2

### Step 1: Finding Your Head Resonance
- **Video Type:** Guided practice with explanation and vocal drills  
- **Reward:** 30 carrot points  

**Description:**  
Dominika helps you unlock your head voice, the register where your sound resonates in your head or sinuses. Head resonance is key for singing higher notes with a light, floaty tone—and it's essential for developing mixed voice later on.

You'll explore this bright register through two light and airy exercises that avoid vocal strain and teach you to let sound travel upward naturally.

**Exercises**
1. **Owl Sound – Head Voice Activation**  
   - Mimic a soft “hoo” like an owl.  
   - Focus on where you feel the resonance (top of the head, near the ears).  
   - Keep the sound light and not pushed.  
2. **Head Voice Glide (do - sol - do)**  
   - Use a breathy “he” to leap between two pitches.  
   - Keep the resonance floating and relaxed.  
   - Avoid pressing or pulling the sound into your chest.  

*Tip:* Everyone senses head resonance differently—some near the forehead, others near the ears. All of it is valid! Stay relaxed and let your voice gently rise.

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for owl sound exploration  
- Exercise #2 – Opens pitch training for head voice glides  
- Mark Complete – Marks the step as done and earns carrot points  

---

### Step 2: One More Mingle – But with a Wider Range
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Strengthen your range and control by singing an extended major scale pattern that blends chest and head resonance.  
`1 - 3 - 5 - 8 - 9 - 8 - 9 - 8 - 9 - 8 - 5 - 3 - 1`

**Button**
- Start Practice – Opens the pitch training at this exercise

---

### Step 3: Practice the Song of the Week
- **Type:** Personal practice task  
- **Reward:** 10 carrot points  

**Description:**  
Continue practicing your chosen song for the week.

**Button**
- Mark Complete

---

## Day 3

### Step 1: Finding Your Mix Resonance
- **Type:** Guided Practice Video  
- **Reward:** 30 carrot points  

**Description:**  
Develop your mix voice by blending chest and head resonance through two targeted exercises focused on “twang” and forward placement:

**Exercises**
1. **Mix Voice with Twang (do - re - mi - re - do)**  
   - Explore “twang” by mimicking a nasal, whiny voice to help locate your mix resonance.  
   - Focus on brightness and forward placement—no need to sound pretty.  
2. **Mix Resonance Glide**  
   - Glide between pitches while maintaining the same twangy sound.  
   - Keep the tone forward, whiny, and supported without strain.  

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for mix voice scale  
- Exercise #2 – Opens pitch training for mix voice glides  
- Mark Complete – Confirms the step as done and grants carrot points  

---

### Step 2: Gallop
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Improve agility and control with this energetic pitch pattern designed to reinforce resonance and vocal coordination.  
`do - mi - re - fa - mi - sol - fa - re - do`

**Button**
- Start Practice – Opens pitch training for this exercise

---

### Step 3: Perform the Song of the Week
- **Type:** Personal performance task  
- **Reward:** 10 carrot points  

**Description:**  
Perform your selected song and enjoy the progress you've made in exploring chest, head, and mixed resonance.

**Button**
- Mark Complete – Confirms that you’ve performed your chosen song

---

### Optional Challenge
Earn extra carrot points by completing bonus challenges in the Pitch Training Game.  
[Pitch Training Game](https://singingcarrots.com/docs/singing-carrots-pitch-training)

---

## Week Finish

### Step 1: Week 3 Summary
- **Type:** Milestone Recap  
- **Reward:** 10 carrot points  

**Description:**  
**Week 3 Recap: Understanding Resonance**  
This week, you explored chest, head, and mixed resonance—essential building blocks for expressive and dynamic singing.

**What You Learned**
- **Chest Resonance** – Warm, powerful tone; used in lower notes and genres like pop and country.  
- **Head Resonance** – Bright, airy tone; used in higher notes for classical and opera.  
- **Mixed Resonance** – Smooth blend of registers, ideal for pop and musical theatre.  

**Tech Focus**
- Twang helps you locate and strengthen your mixed voice.  
- Feeling vibrations in the right areas is key to healthy vocal resonance.  
- Exercises like “Hello,” “Owl,” and “Twang Glides” built awareness and control.  

**Button**
- Mark Complete – Confirms week completion and earns carrot points

---

### Step 2: Vocal Range Test
- **Type:** Skill Assessment  
- **Reward:** 40 carrot points  

**Description:**  
Measure your full vocal range and track your growth. Don’t forget to save your results!

**Button**
- Start Test – Opens the vocal range test

---

### Step 3: Pitch Accuracy Test
- **Type:** Skill Assessment  
- **Reward:** 50 carrot points  

**Description:**  
Evaluate how accurately you match pitch across different notes. Save your results to earn points.

**Button**
- Start Test – Opens the pitch accuracy test

---

### Step 4: Check Your Stats
- **Type:** Progress Review  
- **Reward:** 10 carrot points  

**Description:**  
View your pitch accuracy, note count, and vocal range stats to see how far you’ve come.

**Button**
- Review Progress – Opens your personal Singing Carrots stats page

---

### Optional: Book 1‑on‑1 with One of Our Coaches
- **Type:** Optional Add‑On  

**Description:**  
A call‑to‑action encouraging learners to book a 30‑minute private coaching session with one of the platform’s coaches for personalized feedback.

**Links & Buttons**
- "Learn more" – Opens a popup explaining the benefits: targeted improvement, personalized guidance, and flexible lesson structure.  
- "Book now" – Links to a booking form.  
- "Send us a message" – Redirects to the [Contact Us page](https://singingcarrots.com/docs/singing-carrots-contact-page) for additional inquiries.

# Week 4: Vocal Registers and Vocal Break

---

## Week Summary: Understanding Vocal Registers and Breaks
- **Type:** Video introduction  
- **Reward:** 20 carrot points  

**Description:**  
This week, you’ll learn to identify and navigate your vocal registers—chest, head, and mix—and begin to smooth out transitions between them. You’ll also explore the concept of a vocal break, that moment when your voice cracks as it shifts registers. Through targeted exercises, you'll build awareness and control to make these transitions seamless.

**Key Concepts:**
- **Chest Voice** – Strong and grounded; feels low and full  
- **Head Voice** – Light and airy; resonates in the head and nasal cavity  
- **Mix Voice** – Blends chest and head voice for smooth transitions  
- **Vocal Break** – A natural shift in coordination between registers, which can be trained to sound smooth  

**Goal:** Build smoother transitions and increase control over your full range.

**Button:**  
Mark Complete – Confirms you've watched the video and reviewed the goals

---

## Day 1

### Step 1: Building Awareness of Your Vocal Registers
- **Type:** Guided Practice Video  
- **Reward:** 30 carrot points  

**Description:**  
Discover how your voice shifts between chest and head registers using vowel‑focused pitch exercises. You’ll feel and hear where each register lives and begin to link them together.

**Exercises**
1. **Chest to Head (do - sol - do)**  
   - Sing “ah - oo - ah” to feel resonance shift between registers  
   - Focus on sensing the difference in vibration location  
2. **Smooth Connection (1 - 3 - 2 - 4 - 3 - 5 - 4 - 2 - 1)**  
   - Alternate between “ee” and “oo” vowels  
   - Maintain forward tone and smooth transitions  

**Tips**
- Don’t force high notes—allow your head voice to take over  
- Keep jaw and tongue relaxed to avoid tension  
- A vocal break is normal; practice helps smooth it out  

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for chest‑to‑head register shifts  
- Exercise #2 – Opens pitch training for register transitions with “ee” and “oo”  
- Mark Complete – Confirms step completion

---

### Step 2: Sandman
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Reach your daily target by practicing the Sandman pattern—a smooth, gentle pitch flow that helps refine coordination across your vocal registers.

**Button:**  
Start Practice – Opens pitch training with the Sandman exercise

---

### Step 3: Choose a New Song to Practice
- **Type:** Personal task  
- **Reward:** 10 carrot points  

**Description:**  
Pick a new song for the week and rehearse it using YouTube karaoke. Focus on applying your growing awareness of chest and head registers in your performance.

**Button:**  
Mark Complete – Confirms you’ve chosen your song

---

## Day 2

### Step 1: Building Smooth Register Transitions
- **Type:** Guided Practice Video  
- **Reward:** 30 carrot points  

**Description:**  
Strengthen the connection between your chest and head voice with two effective exercises:

**Exercises**
1. **Lip Trill Slide (do - sol - do)**  
   - Trill from low to high and back while keeping airflow steady and your lips relaxed. Use finger support under your cheeks if needed.  
   - *Focus:* Smooth sliding across registers, supported breath, minimal tension.  
2. **Ah - Ee - Ah (do - mi - do)**  
   - Begin with an open "ah" in chest voice and shift to a bright "ee" in head voice.  
   - *Focus:* Feel the vowel shift and register change; keep transitions fluid and controlled.  

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for lip trill  
- Exercise #2 – Opens pitch training for ah–ee–ah  
- Mark Complete – Confirms completion and awards carrot points

---

### Step 2: Sakura Mood
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Practice a pentatonic scale pattern that flows gently across your range. Ideal for building smooth transitions and tonal clarity.  
*Exercise:* Pentatonic Major

**Button:**  
Start Practice – Opens pitch training at this exercise

---

### Step 3: Practice the Song of the Week
- **Type:** Personal performance task  
- **Reward:** 10 carrot points  

**Description:**  
Continue practicing your selected song using YouTube Karaoke or Singing Carrots tools. Focus on applying what you’ve learned this week.

**Button:**  
Mark Complete – Confirms practice session

---

## Day 3

### Step 1: Twang for Easier Transitions
- **Type:** Guided Practice Video  
- **Reward:** 30 carrot points  

**Description:**  
Learn to strengthen your mix voice using two key exercises that add brightness and forward focus to your tone:

**Exercises**
1. **NGG Siren (do - mi - do)**  
   - Slide through your range using the “ngg” sound from “sing.” Focus on nasal resonance and smooth transitions through your break.  
   - *Tip:* Keep the jaw dropped and tongue relaxed. Check your resonance by gently blocking the nose.  
2. **“Mom” Hum and Open (do - re - mi - re - do)**  
   - Start with a hum, feel vibrations in the face (mask), and briefly open into a resonant “mom.” Helps you blend registers and find placement.  
   - *Tip:* Focus on nasal buzz before opening to the vowel.  

**Buttons Below Video**
- Download Exercise Score (PDF) – Sheet music for both exercises  
- Exercise #1 – Opens pitch training for the NGG siren  
- Exercise #2 – Opens pitch training for “Mom” resonance  
- Mark Complete – Confirms completion and awards carrot points

---

### Step 2: Test Your Patience
- **Type:** Pitch Training  
- **Goal:** Sing 300 notes  
- **Reward:** Carrot points (daily target)  

**Description:**  
Build vocal agility and patience with a sustained vowel‑based training pattern.  
*Exercise:* wu‑20

**Button:**  
Start Practice – Opens pitch training for this exercise

---

### Step 3: Perform the Song of the Week
- **Type:** Personal performance task  
- **Reward:** 10 carrot points  

**Description:**  
Continue practicing your selected song and apply what you’ve learned this week.

**Button:**  
Mark Complete – Confirms the session is done

---

### Optional
**Pitch Training Game Bonus**  
Earn extra carrot points by completing additional challenges in the [Pitch Training Game](https://singingcarrots.com/docs/singing-carrots-pitch-training).

---

## Week 4 – Finish

### Step 1: Week 4 Summary – Mastering Vocal Transitions
- **Type:** Recap  
- **Reward:** 10 carrot points  

**Description:**  
This week focused on vocal registers, vocal breaks, and mastering transitions between chest, head, and mix voice using resonance awareness, twang, and vowel shaping techniques.

**Key Takeaways**
- Smooth transitions between registers  
- Use of twang to support mix voice  
- Consistent airflow and resonance awareness  

**Button:**  
Mark Complete

---

### Step 2: Vocal Range Test
- **Reward:** 40 carrot points  

**Description:**  
Measure your current vocal range and save your result to earn carrot points.

**Button:**  
Start Test – Opens the [Vocal Range Test](https://singingcarrots.com/docs/singing-carrots-vocal-range-test)

---

### Step 3: Pitch Accuracy Test
- **Reward:** 50 carrot points  

**Description:**  
Check how accurately you match pitch and save your result.

**Button:**  
Start Test – Opens the [Pitch Accuracy Test](https://singingcarrots.com/docs/singing-carrots-pitch-test)

---

### Step 4: Check Your Stats
- **Reward:** 10 carrot points  

**Description:**  
Review your weekly progress and completed tasks.

**Button:**  
Review Progress – [View stats](https://singingcarrots.com/docs/singing-carrots-stats-page)

---

### Step 5: Compare 'Before' and 'After' Videos
- **Reward:** 20 carrot points  

**Description:**  
Record your ‘After’ video and compare it to your ‘Before’ video to reflect on progress. Observe tone quality, confidence, vocal transitions, and control.

**Button:**  
Mark Complete

---

### Optional: Book a 1‑on‑1 with Dominika
Book a private online session to receive personal feedback on your progress.

**Button:**  
Learn More

---

## index.md

# Singing Carrots Documentation Homepage

Never Stop Singing!

* [Singing Carrots Mission](https://singingcarrots.com/docs/singing-carrots-mission-page) - Unleash 1 Million Voices

* [About Singing Carrots](https://singingcarrots.com/docs/about-singing-carrots) - Practice tools and Founder story

* [Contact Singing Carrots](https://singingcarrots.com/docs/singing-carrots-contact-page) - Customer Support & FAQ

* [Singing Carrots Song Search Page](https://singingcarrots.com/docs/find-songs-by-vocal-range-or-name) - Search thousands of songs by your vocal range, difficulty, genre, or artist.

* [Singing Carrots Vocal Range Test](https://singingcarrots.com/docs/singing-carrots-vocal-range-test) - Discover Your Vocal Range

* [Singing Carrots Homepage](https://singingcarrots.com/docs/singing-carrots-homepage-paid) - Paid User

* [Singing Carrots Pitch Monitor](https://singingcarrots.com/docs/singing-carrots-pitch-monitor) - Free Vocal Pitch Monitor for Singers

* [Singing Carrots Pitch Test](https://singingcarrots.com/docs/singing-carrots-pitch-test) - Free Online Pitch Test for Singers

* [Singing Carrots Stats Page](https://singingcarrots.com/docs/singing-carrots-stats-page) - Personal Vocal Progress Dashboard

* [Singing Carrots Pitch Training](https://singingcarrots.com/docs/singing-carrots-pitch-training) - Improve your singing accuracy with Singing Carrots' interactive Pitch Training game

* [Singing Carrots AI Coach](https://singingcarrots.com/docs/singing-carrots-ai-coach) - Personal AI singing teacher with real-time feedback and adaptive exercises

* [Singing Carrots: From Zero to Singing Hero](https://singingcarrots.com/docs/from-zero-to-singing-hero) - Beginner Singing Course

* [Singing Carrots Repertoire](https://singingcarrots.com/docs/singing-carrots-manage-your-vocal-repertoire) - A collection of saved songs with notes for personalized vocal practice.

* [Singing Carrots Product Tiers](https://singingcarrots.com/docs/singing-carrots-product-tiers) - Starter, Self-Study, and Guided Editions.

* [My Profile](https://singingcarrots.com/docs/singing-carrots-my-profile-page) - Singing Carrots Account Dashboard.

* [Singing Carrots Virtual Piano Interface](https://singingcarrots.com/docs/pitch-training-practice-virtual-piano-interface) - Virtual Piano with Real-Time Feedback.

* [Singing Carrots Song Page](https://singingcarrots.com/docs/singing-carrots-vocal-range-singing-guide-for-popular-songs) - Artist + Song-Level Overview.

* [Singing Carrots Artist Page](https://singingcarrots.com/docs/singing-carrots-artist-page) - Explore Singing Carrots database with the vocal ranges of over 8,000 singers.

* [Singing Carrots My Custom Melodies Page](https://singingcarrots.com/docs/find-songs-by-vocal-range-or-name) - Upload your own melodies as MIDI files.

* [Singing Carrots Hall of Fame Page](https://singingcarrots.com/docs/singing-carrots-hall-of-fame) - Discover the best performers in Singing Carrots' Pitch Training game.

* [Singing Carrots Level Rankings](https://singingcarrots.com/docs/singing-carrots-level-rankings-page) - Top Users by Pitch Training Level.

* [Singing Carrots Weekly Competition](https://singingcarrots.com/docs/singing-carrots-weekly-competition-page) - Leaderboard & Rankings.

* [All-Round Vocalist Course](https://singingcarrots.com/docs/singing-carrots-all-round-vocalist-course) - 21 Self-Study Singing Lessons.

* [Singing Carrots Login Page](https://singingcarrots.com/docs/singing-carrots-login-page) - Access your Singing Carrots account.

* [Create an Account](https://singingcarrots.com/docs/singing-carrots-sign-up-page) - Singing Carrots Sign-Up Page.

* [Artists Page](https://singingcarrots.com/docs/singing-carrots-artists-page) - Singers' Vocal Ranges & Popular Artists.

* [Carrot Points History](https://singingcarrots.com/docs/singing-carrots-carrot-points-page) - Track Singing Carrots Rewards & Progress.

* [Singing Carrots Studio: Main Page](https://singingcarrots.com/docs/singing-carrots-studio-main-page) - Free Suite of Teaching Tools.

* [Singing Carrots Studio: Welcome Page](https://singingcarrots.com/docs/singing-carrots-studio-ambassador-welcome-page) - Introduction Hub for Teachers.

* [Singing Carrots Studio: Video Room Host Page](https://singingcarrots.com/docs/singing-carrots-studio-video-room-host-page) - Host Online Singing Lessons.

* [Singing Carrots Studio: My Students Page](https://singingcarrots.com/docs/singing-carrots-studio-my-students-page) - Teacher’s Management Dashboard.

* [Singing Carrots Studio: Schedule a Lesson Page](https://singingcarrots.com/docs/singing-carrots-studio-schedule-a-lesson-page) - Create Structured Lesson Invitations.

* [Singing Carrots Studio: Video Recordings Page](https://singingcarrots.com/docs/singing-carrots-studio-video-recordings-page) - View and manage Video Call Recordings and Transcripts.

---

## pitch-training-practice-virtual-piano-interface.md

# Pitch Training Practice: Virtual Piano Interface

**Tool URL (example):**\
`https://singingcarrots.com/pitch-training/practice?exercise=[exercise-pattern]`\
*(e.g., `?exercise=major-1-3-2-4-3-5-4-2-1`)*

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
| Top‑left  | ❌ **Close**     | Exits the piano and returns user to the Pitch Training levels page |
| Top‑right | ⚙️ **Settings** | Opens the Practice Settings popup for training customization       |

- - -

### 4. Practice Settings Panel (⚙️)

Opens as a popup modal with the following configuration sections:

1. **Microphone Input Device**

   * **Dropdown:** Lists all available audio input devices
   * **Check button:** Tests the selected microphone and displays a real-time volume level indicator (green → yellow → red gradient)
   * **Persistence:** Saved to localStorage and applies across all pitch training modes
   * **Sync:** Changes automatically sync with the microphone dropdown in the header (and vice versa)

2. **Limit Practice to My Range** (Toggle)

   * **Default:** OFF (grays out this section)
   * When switched **ON:**

     * **Lowest note:** dropdown (e.g., C3)
     * **Highest note:** dropdown (e.g., A4)
     * **Edge behavior** (for both low and high limits):

       * *Start going down*
       * *Continue on the note*
       * *Stop the exercise*
     * **Apply** button reloads exercise with selected range
3. **Pause Between Melody Runs**

   * **Options:**

     * *None* – Start next run immediately
     * *1 measure* – Short pause
     * *2 measures* – Longer pause
   * **Apply** button updates pacing
4. **Choose Virtual Piano Sounds**

   * **Options:** Grand Piano, Acoustic Guitar
   * *Note:* Changing sound may take 1–2 minutes to reload
   * **Apply** button reloads audio assets
5. **Audio Latency Compensation (Bluetooth)**

   * **Purpose:** Fixes audio/visual desync when using Bluetooth headphones or speakers
   * **Control:** Slider ranging from 0–300ms in 10ms increments
   * **Real‑time value display:** Shows current latency setting as you adjust
   * **Typical values:**
     * Standard Bluetooth devices: 100–200ms
     * Older Bluetooth models: up to 300ms
     * Wired audio: 0ms (no adjustment needed)
   * **Latency tester:** Link to external tool (https://nullvoxpopuli.github.io/latency-tester/) helps measure actual device latency
   * **Apply** button saves setting (persists across sessions via cookie)
   * **How it works:** Delays visual rendering to stay synchronized with audio playback, compensating for Bluetooth transmission delay
   * **Applies to:** All pitch training modes (practice, challenges, and tests)

Popup controls: top‑right ❌ closes the modal.

- - -

### 5. Live Pitch Detection Controls

| Area     | UI Element                   | Function                                                                       |
| -------- | ---------------------------- | ------------------------------------------------------------------------------ |
| Top‑left | Mic icon (red)               | Displays sung pitch (e.g., A3) or “–” when silent                              |
| —        | Tooltip                      | “Current Pitch” (on hover)                                                     |
| —        | Dropdown (blue arrow)        | Mic selector – choose input device                                             |
| Center   | ⬅️ Zoom Out / ➡️ Zoom In     | Adjusts visible note range on virtual piano                                    |
| —        | ⬅️ / ➡️ arrows               | Scrolls left/right on the keyboard                                             |
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

* Full‑width keyboard (approx. C2 → C6) with octave labels (C3, C4, C5).
* **Key color:** white = naturals, black = sharps/flats.
* Vertical grid lines separate notes (half‑step markers).

#### Pitch Visualizations During Playback

* **Blue vertical lines:** Target notes (drop toward keys).
* **Red vertical line:** Real‑time sung pitch (originates from key).

  * Straight & centered = on pitch
  * **Color feedback:**

    * Green = on pitch
    * Yellow = slightly off
    * Split color = partially accurate over time
    * Wavy/jagged = unstable pitch
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
* Input box + up/down arrows (10 BPM steps).
* Users can enter tempo or increment/decrement; affects playback speed.

- - -

### 10. Playback Behavior Dropdown

Located right of navigation arrows; controls how melody plays:

| Option                   | Behavior                                    |
| ------------------------ | ------------------------------------------- |
| **Play melody**          | Plays full melody + beat                    |
| **Play only first note** | Plays only starting note + beat             |
| **Play only the beat**   | No melody, just metronome beat before start |

- - -

### 11. Starting Note Selector

* Bottom of interface.
* **Label:** *Start from note:*
* **Sub‑label:** *Highest note in current exercise: \[note]*
* Clickable note buttons (C3, D#3, F4…). Selecting a note highlights it and starts melody from that pitch.

- - -

## Gamification and Statistics

Practice Mode is the fully customisable “free‑play” area. If you prefer to rehearse without chasing scores or leaderboards, you can do every exercise right here and ignore the competitive modes altogether. All other game modes are essentially built on top of this core tool—they take the same pitch‑matching engine, wrap preset melodies or time limits around it, and turn your singing into challenges that award scores.

* **Every note you sing**—correct or incorrect—is logged.
* These note‑by‑note results are saved to your personal statistics and displayed on your dashboard.
* **Carrot Points:** You earn 1 point per note. When you reach your daily target, you collect bonus points; the daily goal is calibrated to give enough practice time while preventing over‑exercising.

Use Practice Mode to warm up, fine‑tune melodies, or test your range, then head into the challenge modes whenever you want to convert that practice into scores and leaderboard positions.

---

## singing-carrots-ai-coach.md

# Singing Carrots AI Coach

**URL:** <https://singingcarrots.com/ai-session>
**Landing Page:** <https://singingcarrots.com/ai-singing-coach>

---

## Overview

The Singing Carrots AI Coach is your personal AI singing teacher that creates custom practice sessions based on your vocal history and goals. Unlike the standard Pitch Training levels, the AI Coach adapts exercises to your performance and provides conversational coaching throughout your practice.

**Key Features:**
- Personalized session plans based on your vocal history
- Real-time pitch feedback with visual piano display
- Chat with your AI coach - ask questions and get guidance
- Earn carrot points as you reach milestones
- Works on desktop and mobile
- Session summaries with personalized feedback

**Availability:**
- **Starter Edition:** Limited access
- **Self-Study Edition:** Extended access
- **Guided Edition:** Extended access
- **Legacy Plans:** Not included (Effective Learner, Pro Membership, Lifetime Access purchased before October 2025)

---

## How to Access

The AI Coach can be accessed from:

1. **Main Menu:** Pitch Practice > AI Coach
2. **Pitch Training Page:** Click the "AI Coach" button
3. **Course Practice:** Via the task pop-up during course exercises
4. **Direct URL:** https://singingcarrots.com/ai-session

**Requirements:**
- Must be logged in
- Must have an active subscription (Starter, Self-Study, or Guided Edition)

---

## Starting a Session

### Prepare Your Session

When you open AI Coach, you'll configure your session:

**Duration:** Choose how long you want to practice (5-60 minutes). The AI paces exercises to fit your time.

**Focus Area (Optional):** Tell the coach what you'd like to work on:
- "I want to work on high notes today"
- "My voice feels tired"
- "Focus on breath control"

**Recent Sessions:** Review summaries from your previous sessions.

Click **"Create My Session Plan"** to begin. The AI analyzes your progress and creates a personalized plan (this takes about 1-2 minutes).

---

## The Session Interface

### Desktop Layout
- **Left side:** Piano visualization showing target notes and your pitch
- **Right side:** Chat area with your AI coach

### Mobile Layout
- Chat takes the full screen
- Tap "Show Exercise" to see the piano visualization
- Piano overlay appears automatically when singing

### Header
- **Progress bar:** Shows notes toward your next milestone
- **Daily goal:** Your progress toward 300 notes today (desktop only)
- **Finish button:** End session and get feedback
- **Settings:** Adjust microphone and audio settings

---

## Exercise Flow

Each exercise follows this pattern:

### 1. Coach Gives Instructions
The AI explains the exercise and why it's helpful for you.

### 2. Listen
Click **"Listen"** to hear the melody first. Piano keys light up showing the target notes.

### 3. Sing
Click **"Sing"** to start. You'll see:
- **Blue lines:** Target notes to hit
- **Red line:** Your actual pitch
- **Green:** Notes you hit on pitch
- **Yellow:** Notes slightly off pitch

### 4. See Results
After singing, you'll see:
- Notes hit (e.g., "8 / 10")
- Precision percentage
- Sustain percentage

### 5. Choose Next Action
- **Listen Again:** Replay the melody
- **Sing Again:** Retry the exercise
- **Watch Replay:** See your performance with your recorded audio
- **Ask Coach:** Get feedback and the next exercise

---

## Chat with Your Coach

You can interact with the AI coach throughout your session:

**After an exercise:**
- Click "Ask Coach" to submit your results and get the next exercise
- Or type a message first to add context

**Ask questions anytime:**
- "Why is my high G always flat?"
- "Can we try something slower?"
- "I'm having trouble with this pattern"

**Request changes:**
- Ask for easier or harder exercises
- Request specific note ranges
- Ask to focus on particular skills

---

## Earning Milestones

As you practice, you earn milestones and carrot points:

**Milestones:** 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 notes

**When you reach a milestone:**
- A celebration appears on screen
- You earn **+60 carrot points**
- Progress bar updates to show your next goal

---

## Finishing Your Session

Click **"Finish & Get Feedback"** when you're ready to end.

**Session Summary includes:**
- Personalized feedback on your performance
- What you did well
- Areas for improvement
- Recommendations for next time

**Rate your session:** Give 1-5 stars and optional written feedback to help improve the AI coach.

---

## Settings

Click the gear icon to adjust:

**Microphone:** Select which microphone to use and test input levels.

**Audio Latency:** If using Bluetooth headphones, adjust the slider (100-200ms typical) to sync audio with visuals.

---

## Keyboard Shortcuts (Desktop)

| Shortcut | Action |
|----------|--------|
| Space | Listen (play melody) |
| Enter | Sing (start exercise) |
| R | Watch Replay |
| Shift+Space | Listen Again |
| Shift+Enter | Sing Again |

---

## FAQ

**Q: How is AI Coach different from regular Pitch Training?**
A: Regular Pitch Training has fixed levels with preset exercises. AI Coach creates personalized sessions based on your history, adapts to your performance, and lets you chat with your coach.

**Q: What equipment do I need?**
A: Just a microphone (built-in works fine), headphones (recommended), and a quiet space. Works in any modern browser.

**Q: How long should sessions be?**
A: 15-20 minutes is ideal for most users. The AI paces exercises to fit your selected duration.

**Q: Can I ask the AI coach questions?**
A: Yes! Type any question in the chat. Ask about technique, request different exercises, or get feedback on challenges.

**Q: Does progress carry over between sessions?**
A: Yes. The AI remembers your history and previous sessions. Each new session builds on what you've practiced before.

**Q: What if I leave and come back?**
A: If you return within a few hours, you can continue your session. After that, you'll see a summary of your previous session and can start fresh.

---

## Related Documentation

- [Pitch Training](https://singingcarrots.com/docs/singing-carrots-pitch-training) - Standard pitch training levels
- [Virtual Piano Interface](https://singingcarrots.com/docs/pitch-training-practice-virtual-piano-interface) - Piano visualization details
- [Product Tiers](https://singingcarrots.com/docs/singing-carrots-product-tiers) - Subscription options

---

## singing-carrots-all-round-vocalist-course.md

# Singing Carrots – All-Round Vocalist Course: Full Technical Walkthrough

**Page URL:**  
<https://singingcarrots.com/singing-beginners>

---

## Page Header
**Title:** All-Round Vocalist

**Subtitle:** Self-Study, Hands-On 21-Lesson Course with Videos, Practical Exercises & Essential Theory

**Illustration:** Songbook-style graphic.

---

## Introduction
Looking to lift your singing to the next level?  
Singing Carrots offers you this universal educational singing course. Even though it is tailored to vocalists without experience, singers of all skill levels can benefit from it.

The course consists of 21 lessons. Each lesson contains a short video and a detailed read. Some lessons also introduce you to various warm-ups and cover practical vocal exercises with detailed instruction.

To benefit most from it, we advise pairing these lessons with our interactive Pitch Training Tool designed by certified voice teachers.

---

## How Do You Schedule the Lessons?
For absolute beginners, we advise going slowly through 1 lesson per week and combining it with practice sessions 3 to 5 times per week in our interactive Pitch Training Tool to work on intonation, rhythm and vocal range extension. The lessons will help you to learn the singing theory. Pitch Training will structure your practice routine and will help you to track your progress and boost your motivation.

If you already have some singing background, or are already a professional singer, our vocal coaches suggest you look through the list of our vocal lessons yourself and choose the topics that you find most interesting.

---

## How Do I Start?
We suggest you start from assessing your current level with one of our interactive singing tests:

- 🥕 [Vocal Range Test](https://singingcarrots.com/docs/singing-carrots-vocal-range-test)
- 🥕 [Singing Accuracy Test](https://singingcarrots.com/docs/singing-carrots-pitch-test)

After that, you can start with the [pitch training](https://singingcarrots.com/docs/singing-carrots-pitch-training) or with the first lesson below.

---

## Lessons List
- 🥕001: How to analyze your voice  
- 🥕002: Voice types  
- 🥕003: Breathing basics  
- 🥕004: Voice registers & vocal break  
- 🥕005: Breath support  
- 🥕006: Open mouth & throat  
- 🥕007: How to learn a song effectively  
- 🥕008: Avoiding constrictions  
- 🥕009: Pop/Jazz vs Classical singing  
- 🥕010: Singing with intuition, skills, emotion, and thinking  
- 🥕011: Contemporary vocal techniques: Heavy modal, Twang, Belting  
- 🥕012: Vocal distortion & Growling  
- 🥕013: Singing with Vibrato  
- 🥕014: Articulation  
- 🥕015: Why do we sing out of pitch?  
- 🥕016: Resonance in singing  
- 🥕017: How to find your own authentic voice  
- 🥕018: Vocal health  
- 🥕019: How posture affects your singing  
- 🥕020: How to overcome stage fright  
- 🥕021: Tips for performing on stage

---

## FAQ Section

### Can I teach myself to sing?
Yes, Singing Carrots is specifically designed to facilitate self-study in singing. Our unique technology offers instant visual feedback, which is a game-changer in learning how to sing. This feature makes the learning process not just effective, but also immensely fun and engaging. The visual feedback helps you understand and correct your pitch, tone, and rhythm in real-time, ensuring that your self-study is as productive as possible.

Moreover, while a personal coach can provide valuable in-person guidance, Singing Carrots serves as an excellent starting point for those seeking affordable and flexible vocal training options. Our tools are designed to cater to learners of all levels, allowing you to progress at your own pace and in your own space.

### Can I learn to sing if I have no talent?
If there is one thing you should take away from this website, it is that you can sing.

There is plenty of research that proves that unless you have a medical condition (which is very rare to find) you can develop your singing to a pretty decent level.

Don't take my word for it. Read what people with a PhD say.  
Or check this study showing that 'amusia' is uncommon.  
I even wrote an article with a detailed break-down on why you might be struggling to hit the pitches at the moment.

The rule of 10,000 hours applies to singing as well. That's it.  
Invest time and you will become a better singer. It's that simple. And we are here to help :).

### Will singing lessons improve my voice?
Definitely! But only if you practice. At least 3 days a week for at least a month, and you will notice first results. There are no short-cuts - that's what any vocal instructor will tell you.

Singing Carrots offers structured self-study lessons that focus on essential vocal techniques and exercises. Our instant feedback and visual aids help you understand and improve your vocal performance. But it's only you who has to put in passion and time.

### How does Singing Carrots complement professional voice coaching?
Private singing lessons are the most effective way to improve your vocals. But it has its own drawbacks: private lessons are expensive, and it's hard to find a tutor that clicks with you. For an absolute beginner, it might be a good idea to take a free first lesson online and see how it goes before investing too much time and money.

While Singing Carrots is an excellent tool for self-study, it also serves as a great complement to professional voice coaching. Our technology can reinforce lessons learned with professionals, providing additional practice and feedback that enhances the overall learning experience.

### What makes Singing Carrots unique in teaching singing skills?
Singing Carrots stands out with its innovative use of technology, offering instant visual feedback and gamified learning experiences. This approach makes singing practice more engaging and effective, allowing learners to see real-time improvements in their skills.

### Are your singing lessons suitable for kids and absolute beginners?
Absolutely! Our lessons are perfectly suited for kids and absolute beginners. We ensure that the theory behind singing is conveyed in simple, easy-to-understand language without using complex terms.

Our focus is heavily on the practical aspects of singing. This includes interactive exercises and visual feedback, making the learning process not only straightforward but also enjoyable and engaging. By breaking down singing concepts into manageable parts, we ensure that even the youngest learners or those starting from scratch can follow along comfortably and develop their singing skills effectively.

### Do I need any previous singing experience or background to start lessons with Singing Carrots?
Absolutely not! Singing Carrots is designed to be accessible and beneficial for everyone, regardless of their prior experience or background in singing.

Our platform is ideal for beginners who are just starting their singing journey. We focus on providing clear, step-by-step guidance and exercises that build your skills from the ground up. With our intuitive visual feedback technology, you'll find it easy to start learning and see your progress in real-time.

### Is Singing Carrots a good tool to prepare for an audition?
Yes, Singing Carrots is an excellent tool for preparing for auditions. One of the unique features that makes it particularly useful for audition preparation is our comprehensive [vocal ranges database](https://singingcarrots.com/docs/find-songs-by-vocal-range-or-name). This allows you to search for songs that perfectly fit your vocal range, style, and gender.

Moreover, our platform provides instant visual feedback on your singing, which is invaluable for fine-tuning your performance. This feature helps you to work on specific areas like pitch accuracy, rhythm, and vocal control, all of which are crucial for a successful audition.

---

## Footer
Do you enjoy our tools?

**Help us improve!** button → links to feedback page.

---

## singing-carrots-artist-page.md

# Singing Carrots Artist Page: Full Technical Walkthrough

## **Overview**

The Singing Carrots Artist Page (e.g., <https://singingcarrots.com/artist/Rufus-Wainwright>) provides detailed insights into the vocal characteristics of a selected artist. It includes their vocal range, voice types, related song data, and resources to help users learn to sing like that artist. The page is useful for singers, educators, and fans who want to explore vocal abilities and compare ranges.

- - -

## **Sections**

### **1. Artist Range Header**

Displayed at the top of the page:  

* **Title:** \[Artist Name] vocal range  
* **Vocal Range Summary:**\
  “According to our database the vocal range of this artist is: \[Range]”\
  Example: F#2 – C#5 (2.6 octaves)
* **Songs with range extremes:**  

  * Song with the **LOWEST** pitch: \[Clickable Song Title] (\[Range])  
  * Song with the **HIGHEST** pitch: \[Clickable Song Title] (\[Range])
* **Practice prompt:**  

  * Text: “Are you a beginner or advanced singer?”  
  * **Button:** Test if you can sing in tune → [Pitch Training](https://singingcarrots.com/docs/singing-carrots-pitch-training)  

- - -

### **2. Voice Types**

* **Section Title:** Voice types  
* Text: “Based on their range the artist can perform songs for:”  
* List of applicable vocal types (pulled from range match):  

  * Example:  

    * Baritone (A2–A4)  
    * Tenor (C3–C5)  

- - -

### **3. Educational Singing Guide**

* **Section Title:** How to learn singing like \[Artist Name]  
* Informational text:\
  “Read our educational guide on how to sing like \[Artist Name], including explanations of which vocal techniques to use and how to practice them.”\
  **Note:** This guide is available for a selected list of most popular artists.  
* **Button:** Learn how to sing like \[Artist Name] → Links to the specific guide for that artist  

- - -

### **4. More Songs by the Artist**

* **Section Title:** More songs by \[Artist Name]  
* For each song:  

  * Clickable title (→ song page)  
  * Range in parentheses: \[Range]  
  * Below: list of users who liked the song (clickable usernames)  

- - -

### **5. Video Practice Prompt**

* **Section Title:** Latest videos on Singing Carrots  
* Practice Call-to-Action:  

  * **Button:** Try Pitch Training → [Pitch Training Tool](https://singingcarrots.com/docs/singing-carrots-pitch-training)  

- - -

### **6. Community Contribution**

* **Section Title:** Contribute  
* Text: “Help us to keep our database up-to-date. Add missing songs.”  
* **Button:** + Add Song → Edit Song Page  

- - -

### **7. Mistake Reporting**

* **Section Title:** Found mistake?  
* Instructions:\
  “Help us to keep the correct information on all the vocal ranges. Go to the [song page](https://singingcarrots.com/docs/singing-carrots-vocal-range-singing-guide-for-popular-songs) with a mistake and suggest an edit.”  

- - -

### **8. Explore Vocal Range Database**

Informational Block:\
“Our database has more than 8000 famous performers.\
We calculated vocal range for each of them. Do you want to check it out?”  

* **Button:** Browse singers vocal ranges → [Artists Database](https://singingcarrots.com/artists)  

**Small Print Disclaimer:**\
“Please note: we are estimating the vocal range for the artists based on what we know about the songs they perform. The 'real' vocal range of the person of course might be different. This estimate is just based on the highest and lowest known pitches from the songs we have in our database. It might be that the singer can actually hit lower or higher notes, but never did so in their recordings known to us.”

- - -

### **9. Footer**

* Feedback prompt:\
  “Do you enjoy our tools?”  
* **Button:** Help us improve → \[Help Us Improve!](
  https://singingcarrots.com/help-carrots)

---

## singing-carrots-artists-page.md

# Singing Carrots Artists Page: Full Technical Walkthrough

## Overview
The Artists Page is a central directory for exploring singers’ vocal ranges and related content. It allows visitors to search for specific artists, browse the most liked singers and musicals and discover top songs.

## Page URL
<https://singingcarrots.com/artists>

---

## Header & Search
- **Page Title:** Singers' vocal ranges
- **Search Prompt:** A search bar is displayed directly under the title.
- **Search Field:** Placeholder text “search for an artist..”
- **Search Button:** Clicking runs a query and displays matching results. Each result is clickable and redirects to the [artist’s dedicated profile page](https://singingcarrots.com/docs/singing-carrots-artist-page) with vocal range details.

---

## Top 100 Most Liked Artists and Musicals
- A ranked list of 100 entries, ordered by popularity.
- Each entry displays the artist or musical name.
- Every item is a clickable link to its corresponding artist profile page.
- This section functions as a discovery tool for new users who may not have a specific artist in mind but want to browse popular choices.

---

## Latest Videos on Singing Carrots
- Displays the most recent video uploads or featured media.
- A CTA button (**Try pitch training**) redirects to the Pitch Training tool: <https://singingcarrots.com/pitch-training>.
- This section reinforces cross-navigation between content and training tools, encouraging users to practice immediately after exploring artists.

---

## Top 100 Most Liked Songs
- A ranked list of 100 songs displayed in the format:
  - **Artist – Song**
- Each entry is clickable, linking directly to the respective [Song Page](https://singingcarrots.com/docs/singing-carrots-vocal-range-singing-guide-for-popular-songs).
- This extends the artist exploration into a song-focused view, offering another way for users to find relevant practice material.

---

## Feedback Section
- **Closing prompt:** Do you enjoy our tools?
- **Help us improve!** button redirects to <https://singingcarrots.com/help-carrots>.
- This section collects user feedback to guide platform improvements.

---

## singing-carrots-carrot-points-page.md

# Singing Carrots Carrot Points Page: Full Technical Walkthrough

**URL:** <https://singingcarrots.com/carrot-points>

---

## Page Header
- **Title:** Carrot points history
- **Counter Line:** Displays the number of entries shown versus the total (e.g., “Showing 1–25/300 of total carrot point events”).
- **Exclude/Include Practice Hits Button:**
  - Default state: Exclude practice hits.
  - Clicking toggles to Include practice hits and updates the table accordingly by removing/adding practice hit events.
- **Page Size Selector:** Dropdown with options 25, 50, or 100 entries per page.

---

## Points History Table
The core of the page is a tabular log of all carrot points events.

**Columns:**
- **Date** – The exact date of the event (YYYY-MM-DD format).
- **Type** – Displays an icon representing the event type.
- **Reason** – A short description of the action or event. Examples include:
  - Completion of a level or exercise (shows level name and mode).
  - Daily goal reached.
  - A course task finished.
  - Replay watched.
  - Practice note hits recorded.
- **Points** – The number of carrot points earned, followed by a carrot icon.

**Row Example Structure (generalized):**
- A date on the left.
- An icon in the type column (such as goblet for level reward).
- A reason description (e.g., “Level 5 — Major scale (Basic)” or “Watched replay: Climb the ladder exercise”).
- The points value (e.g., “75” with a carrot icon).

---

## Subtitle Under the Table
Includes reward events (Level rewards, Daily goal, Course tasks, Replays) and practice note hits by default. Use the toggle above to exclude practice hits.

---

## Pagination
Navigation is available when the log exceeds one page.  
**Format:** Previous 1 2 Next  
Page numbers update dynamically depending on the actual number of entries.

---

## Legend
A small key helps users interpret the event type icons:

| Icon label        | Meaning                |
|-------------------|------------------------|
| Goblet icon       | Level reward           |
| Flag icon         | Daily goal             |
| Bullet list icon  | Course task            |
| Play icon         | Replay watched         |
| Note icon         | Practice note hits     |

---

## Footer
**Prompt:** Do you enjoy our tools?  
**Help us improve!** button → Links to <https://singingcarrots.com/help-carrots>

---

## singing-carrots-contact-page.md

# Singing Carrots Contact Page: Technical Walkthrough

## Overview
The **Contact** page (<https://singingcarrots.com/contact>) is the primary communication hub for users, customers, educators, media representatives, and potential partners. It features a responsive contact form, visual guidance, and a comprehensive FAQ to resolve common issues before reaching support.

---

## Step‑by‑Step User Flow

### Step 1 · Page Load — Contact Form & Introductory Message
| Layout | Details |
|--------|---------|
| **Left column** | [Yellow sidewalk sign with two arrows: “Awesome” → right, “Less awesome” → left](#) |
| **Right column** | **Heading:** *Contact form for customers*<br>**Text:**<br>• *Got a question?* — please check the **FAQ** first. (Clicking **FAQ** scrolls to the FAQ section.)<br>• *Feedback? Bug? Idea? Request?* — send us a message! |

### Step 2 · Contact Form Elements
| Field | Label & Behaviour |
|-------|------------------|
| **Email** | **Label:** Your email address **Placeholder:** `Email address field`  **Subtext:** We will reply using this address. |
| **Message** | **Label:** *Your message* Large multiline text box for the inquiry. |
| **Captcha** | Google reCAPTCHA anti‑bot check. |
| **Submit** | **Button text:** *Send message* |

### Step 3 · Additional Contact for Partnerships
Below the form:  
> **For educators, schools, advertisers, press, and other partnership requests:**  
> Please contact the founder at **founder’s email**.

### Step 4 · FAQ Section — Frequently Asked Questions
Clicking **FAQ** or scrolling to the bottom reveals the self‑service FAQ with expandable answers.

#### Q1 · How do I apply a discount coupon?
**New customers**
1. Choose a plan on the payment page and click **Subscribe / Pay**.  
2. On the Stripe checkout page, apply the coupon code.

**Existing customers**
1. Go to **Profile Settings** (<https://singingcarrots.com/me>).  
2. Under **My purchases**, click **Manage subscription**.  
3. In the Stripe customer portal, apply your code.

---

#### Q2 · How do I change or cancel my subscription?
1. Visit **Profile Settings** (<https://singingcarrots.com/me>).  
2. Scroll to **My purchases**, click **Manage subscription**.  
3. In Stripe, modify or cancel the plan (e.g., switch from weekly to monthly).

---

#### Q3 · How do I submit my student ID for a student discount?
1. Send a message via the contact form with subject **“Student discount request”**.  
2. You will receive an automatic reply from `support@singingcarrots.com`.  
3. Reply to that email with a photo of your student ID — we will send a discount code.  
   > Direct emails with attachments often land in spam; using the form is safer.

---

#### Q4 · I want to delete my account
1. If you have an active subscription, cancel it first.  
2. While logged in, send a deletion request through the contact form.  
   We will erase your data and appreciate feedback on your decision.

---

#### Q5 · Do you have a mobile app?
While a native app is in development, add Singing Carrots to your Home Screen:

<details>
<summary>iOS (Safari)</summary>

1. Tap the **Share** icon in the bottom toolbar.  
2. Select **Add to Home Screen**.

</details>

<details>
<summary>Android (Chrome)</summary>

1. Tap the **⋮** (three‑dots) menu in the top‑right corner.  
2. Select **Add to Home screen**.

</details>

---

#### Q6 · I want to add a song/artist to the Vocal Ranges database
1. Before adding, search the database: <https://singingcarrots.com/search>.  
2. To submit a new song: <https://singingcarrots.com/edit-song>.  
   *Adding a new artist?* — submit the song with the artist’s name; the artist page is created automatically.

---

## Community Feedback
### Do you enjoy our tools?
We welcome feedback and suggestions.  
**Help Us Improve** → <https://singingcarrots.com/help-carrots>

---

## singing-carrots-custom-singing-exercises.md

# My Custom Melodies Page Documentation

URL: <https://singingcarrots.com/my-custom-melodies>  
User Type: Logged-in (paid) users  

**Purpose:**  
This feature enables users to upload and manage their own pitch training exercises using custom MIDI files. It practically allows users to rehearse any song or melody through the Singing Carrots interactive pitch-matching piano. MIDI files for popular songs can be found online or created using free software like MuseScore. Users may optionally link their melodies to existing songs from the Vocal Ranges Database to make them available to the community.

---

## 1. Page Header
- **Title:** My Custom Melodies  
- **Subtitle:** Create your own pitch training exercise from a MIDI file.  
- **+ Add new melody** (green button)  
  - Opens the melody-upload interface at <https://singingcarrots.com/add-score>

---

## 2. Resource Box
An informational box highlights extra resources:  
> "Looking for ready-to-use MIDI files? Check out our collection of popular royalty-free songs with MIDI files that you can download and use for practice."  

- **Link text:** popular royalty-free songs with MIDI files  
- **URL:** <https://singingcarrots.com/blog/free-midi-songs-for-singing-practice/>  
  (Navigates to a blog post that includes free MIDI song downloads and step-by-step upload instructions.)

---

## 3. Demo Example
A preloaded demo melody is included to demonstrate how the feature works:  
- **Song:** *Twinkle, Twinkle, Little Star*  
- **Button:** “Check it out!” (blue play button)  
  - Opens the virtual piano to practice the melody  
- Text displayed:  
  > "We've uploaded 'Twinkle, Twinkle, Little Star' so you can explore the feature and see how it works with any song you upload!"

---

# Add New Melody Page

URL: <https://singingcarrots.com/add-score>  
**Purpose:** Allows users to upload custom melodies as MIDI files and turn them into pitch training exercises.

---

## 1. Page Header
**Title:** Add New Melody

---

## 2. Instructional Info Box (yellow background)
> "Upload a MIDI file with the melody you want to practice.  
> The file should contain only one track with the vocal line.  
> We advise to use [Musescore](https://musescore.org/en) to prepare a score and export it as MIDI. It's free.  
> In this video (links to YouTube video 'Pitch Training – How to Make Your Own Game Levels') Sergey shows how to prepare your MIDI and upload it.  
> Looking for ready-to-use MIDI files? Check out our collection of [popular royalty-free songs with MIDI files](https://singingcarrots.com/blog/free-midi-songs-for-singing-practice/) that you can download and use for practice."

---

## 3. Upload Form
* **Field 1:** *Name* – user provides a title for the melody  
* **Field 2:** *MIDI File* – click **Choose file** to upload a `.mid` file  

### Popup behavior on upload
If the uploaded MIDI file contains more than one track:  
- A popup appears titled **Processing MIDI file**  
- Text:  
  > "This file has more than one instrument track. Please choose which one you want to use for your singing practice."  
- The user can:  
  - Listen to each track by clicking **Play**  
  - Select one using a radio option button  
  - Click **OK** to confirm selection and proceed

* **Upload button:** Finalizes upload and redirects user to <https://singingcarrots.com/my-custom-melodies>

---

# Custom Melodies List (After Upload)

For each uploaded song:  
- **Song Title**  
- **Practice** button (blue play icon) – opens in Pitch Training Practice mode  
- **Trash** icon (red) – deletes the uploaded melody  
- **Share** button – opens the song-linking interface

---

## Manage Linked Songs
When **Share** is clicked:

- **Title:** Manage Linked Songs  
- **Subtitle:** \[User's Custom Melody Title]  
- **Description:**  
  > "Link your custom melody to songs from our database to help other users discover and practice with your creation. When you connect your melody to popular songs, it becomes easier for singers to find and use in their training sessions."

### Form Fields
1. **Search for a Song**  
   - Placeholder: "Type artist name or song title..."  
   - Auto-suggest dropdown from the Singing Carrots song database  
   - Subtext: "Selected song will appear here"  
2. **What part of the song does this melody represent?**  
   - Placeholder: "Select type..."  
   - Dropdown options: *Full Song, Verse, Chorus, Custom Piece*  
3. **Description (optional)**  
   - Placeholder: "Any additional notes about this melody (e.g., 'First verse only', 'Simplified Version')"  

**Buttons:** Create Link · Cancel  

**Legal Notice:**  
"Please ensure your melody is your original creation or that you have the right to share it. By linking your melody to songs, you confirm that your content does not infringe on any copyrights."

### Existing Song Links Section
*If no songs are linked:*  
"No songs linked yet. Use the form above to link this melody to a song."  

*If songs are linked:*  
Displays: Song Title · Creation Date · Section Type (Full Song, Chorus, etc.) · Status (Pending Review / Reviewed) · **Remove** button  

_All submitted links will be reviewed for copyright compliance before being visible to other users._

---

# Custom Melody Practice: Interactive Piano Interface

Clicking **Practice** opens the [Virtual Piano Practice Mode](https://singingcarrots.com/docs/pitch-training-practice-virtual-piano-interface) with added controls.

### Key Difference from Built-in Exercises
Custom melodies allow the user to set start and end points of the practice segment using draggable flag icons on a horizontal timeline above the piano.

#### Additional Controls
- **Timeline with Flags** – users drag start/end flags to define loop segment  
- **Playback Area Highlights** – only the selected section repeats  

*All other features (real-time pitch visualization, microphone setup, settings, tempo, sound selection, loop behavior, etc.) match the core Pitch Training Practice tool.*

---

## Footer Section
Prompt: "Do you enjoy our tools?"  
Button: **Help us improve!** → <https://singingcarrots.com/help-carrots>

---

## singing-carrots-hall-of-fame.md

# Singing Carrots Hall of Fame Page: Full Technical Walkthrough

**Purpose:**  
The Hall of Fame page showcases top performers in the Singing Carrots Pitch Training game. It recognizes users who have ranked in the top 3 positions each week and encourages continued participation through competitive motivation.

**Page URL:**  
<https://singingcarrots.com/hall-of-fame>

---

## Section 1: Page Header and Intro

**Title Line:**  
Hall of Fame  
*(A black goblet icon is displayed next to the title.)*

**Subtitle Text:**  
All time weekly winners: (gold star icon) 1st place, (silver star icon) 2nd place, (bronze star icon) 3rd place. The Hall of Fame gets updated every Tuesday.

**Tooltip (Question Mark Icon):**  
Hovering over the icon reveals the text:  
> "Your week end might be different from the week end of other players. It depends on your timezone. E.g., players from Tokyo will start and finish the week much earlier than players from the US."

**Call-to-Action Below Subtitle:**  
Join this week’s competition in Pitch Training  
Link target: <https://singingcarrots.com/pitch-training>

---

## Section 2: Leaderboard – Weekly Winners

This section displays a ranked list of users who have achieved top scores in past Pitch Training weekly challenges.

**Each Entry Includes:**
* **Ranking Number:** Displayed on the left (1, 2, 3, etc.)
* **User Information:**  
  * Profile Picture  
  * Clickable Username – links to the user’s public profile
* **Trophy Count (Displayed on the right):**  
  * Total number of gold stars (1st place weekly wins)  
  * Total number of silver stars (2nd place)  
  * Total number of bronze stars (3rd place)

**Sorting Logic:**
* Users are ranked by gold stars first, then silver, then bronze.
* Only users with visible public profiles are displayed in the Hall of Fame.
* Any user can choose to make their profile private and opt out of public competitions via their profile settings.
* Private users will not appear in the Hall of Fame or weekly rankings.

---

## Section 3: Visibility Note

P.S. We do not display anonymous users. If you think you should be here and do not see yourself, update your name on your profile page.

---

## Section 4: Feedback Prompt

Do you enjoy our tools?  
**Button:** Help us improve  
Link target: <https://singingcarrots.com/help-carrots>

---

## singing-carrots-homepage-paid.md

# Singing Carrots Homepage  
**URL:** https://singingcarrots.com  
**Access Level:** Logged‑in, paid user  
**Purpose:** Entry point for exploring all Singing Carrots features, tools, learning paths, and user‑specific content. The page is organized into clear visual sections with grouped links and supportive illustrations.

---

## Introductory Banner  
**Visual:** Orange horizontal banner at the top  
**Message:**  
“The great art to learn much is to undertake a little at a time. Enjoy your singing practice!”  
This motivational message encourages daily progress in manageable steps.

---

## Section 1: Singing Courses  
**Illustration:** Two cartoon carrots singing in front of a chalkboard  
**Purpose:** Quick access to Singing Carrots’ structured learning paths  
**Links:**  
- From Zero to Singing Hero  
  Beginner-friendly step-by-step course  
  https://singingcarrots.com/course/zero-to-hero  
- All-Round Vocalist  
  General vocal training course for singers of all levels  
  https://singingcarrots.com/singing-beginners  

---

## Section 2: Singing Carrots Toolbox  
**Illustration:** Cartoon carrot emerging from a shape-sorting toy box  
**Purpose:** Central hub for practice tools, tests, and resources  
**Links:**  
- Pitch Training  
  https://singingcarrots.com/pitch-training  
- Vocal Range Test  
  https://singingcarrots.com/range-test  
- Pitch Monitor  
  https://singingcarrots.com/pitch-monitor  
- Find Songs (by Artist)  
  https://singingcarrots.com/artists  
- Explore Songs (by Range or Title)  
  https://singingcarrots.com/search  
- Spectrogram Recorder  
  https://singingcarrots.com/spectrogram  
- Voice Analysis Guide  
  https://singingcarrots.com/voice-analysis  
- Video Library  
  https://singingcarrots.com/video-lib  
- Useful Links  
  https://singingcarrots.com/resources  

---

## Section 3: Your Profile  
**Illustration:** A carrot wearing sunglasses  
**Purpose:** User account access, stats tracking, and saved materials  
**Links:**  
- Public Profile  
  https://singingcarrots.com/me/public  
- Repertoire (Bookmarked Songs)  
  https://singingcarrots.com/repertoire  
- Stats (Practice History & Progress)  
  https://singingcarrots.com/stats  
- Settings (Account Preferences)  
  https://singingcarrots.com/me  

---

## Section 4: Connect  
**Illustration:** A carrot inside a mailbox  
**Purpose:** Communication, contribution, and company information  
**Links:**  
- Contact Us  
  https://singingcarrots.com/contact  
- Contribute Songs  
  https://singingcarrots.com/contribute  
- About Singing Carrots  
  https://singingcarrots.com/about  
- Blog  
  https://singingcarrots.com/blog  

---

## Footer  
**Prompt:**  
Do you enjoy our tools?  
**Button:**  
Help us improve  
https://singingcarrots.com/help-carrots

---

## singing-carrots-level-rankings-page.md

# Singing Carrots Level Rankings Page: Full Technical Walkthrough

Page URL:  
<https://singingcarrots.com/pitch-training/level-rankings?level=#>

**Purpose:**  
This page displays the leaderboard for a selected level in Singing Carrots' Pitch Training tool. It highlights users who achieved the highest number of accurate pitch matches (note hits) in hard mode for a specific training level.  
Unlike the main leaderboard, which promotes consistent practice and rewards dedication regardless of skill level, this page focuses on technical precision.  
It is designed to recognize the most skillful users—those who demonstrate excellent pitch accuracy on individual exercises.  

This structure supports Singing Carrots’ broader gamification strategy:  
* The main weekly competition encourages regular use and inclusivity.  
* The level-based rankings provide space for performance-based achievement and skill recognition.  

Only hard mode scores are counted. Rankings are limited to the top 100 users per level and are updated automatically based on recorded performance data.

---

## Section 1: Page Header
* **Title Line:**  
  Rankings by game level  
  (A squared flag icon appears next to the title.)
* **Subtitle:**  
  “Here we count only hard mode results. Join the competition in [Pitch Training](https://singingcarrots.com/docs/singing-carrots-pitch-training)”

---

## Section 2: Level Selection
**Level Dropdown:**  
* **Label:** Level number: followed by the current level name (as defined in Pitch Training, e.g., “Climb the major ladder”)  
* **Control:** A *change* dropdown allows users to select from all available levels.  
* Selecting a different level dynamically updates the rankings below to reflect the leaderboard for that specific exercise.

---

## Section 3: Rankings Table
Displayed Data for Each User:  
* **Clickable Username:** links to the user's public profile  
* **Number of Notes Hit:** shown next to a small note icon 🎵  

**Ranking Logic:**  
* Sorted in descending order by the number of correctly hit notes  
* Only hard mode scores are considered  
* A maximum of 100 users are displayed per level  

**Pagination:**  
* Only the top 100 results are shown; no further pages available  

**Footer Note Below List:**  
“Note: We show only the first top 100 results.”

---

## Section 4: Feedback Prompt
Do you enjoy our tools?  
**Button:** Help us improve  
Link target: <https://singingcarrots.com/help-carrots>

---

## singing-carrots-login-page.md

# Singing Carrots Login Page: Full Technical Walkthrough

## Overview
The Login page provides multiple ways for users to access their Singing Carrots account. Options include third-party authentication (Google or Facebook), email link login, and direct password login. It also guides users through troubleshooting common login issues and password recovery.

## Page URL
<https://singingcarrots.com/login>

---

## Step-by-Step User Flow

### Step 1: Page Header
- **Title:** Sign in to your account  
- **Subtitle:** Do not have an account yet? Create an account  
- The "Create an account" link leads to: <https://singingcarrots.com/sign-up>

---

### Step 2: Third-Party Login Options
- **Sign in with Google**  
  Opens a Google authentication window where the user can choose their Google account.
- **Log in with Facebook**  
  Intended to log in with Facebook credentials.

---

### Step 3: Log in with Email (Passwordless Authentication)
- **Link:** Log in with email  
- **Form fields:**
  - Your email input field
  - Next button
- **Behavior after submission:**
  - A message is displayed:
    - **Log in email sent**  
      A sign-in email with additional instructions was sent to [user email]. Check your email to complete sign-in.
- **Troubleshooting Option:**
  - **Button:** Trouble getting email?  
    Expands to show common fixes:
    - Check if the email was marked as spam or filtered.
    - Verify internet connection.
    - Confirm the email address is spelled correctly.
    - Check if inbox space is full or other inbox settings block delivery.
    - If issues persist, reload the page and try again. Doing so resends the email but deactivates the older login link.

---

### Step 4: Log in with Password
- **Section:** Log in with password  
- **Fields:**
  - Your email
  - Password
  - **Button:** Next
- **Error handling:**
  - If no user exists:  
    *Error: There is no user record corresponding to this identifier. The user may have been deleted.*
  - If the password is wrong:  
    *Error: The password is invalid or the user does not have a password.*
- **Additional Help Text:**
  - Forgot or do not have a password? Log in with email link and set a new password from the settings page.

---

## singing-carrots-manage-your-vocal-repertoire.md

# Singing Carrots Repertoire: Full Technical Walkthrough  
**URL:** <https://singingcarrots.com/repertoire>


---


## Overview
The Repertoire page is a personalized space where users can bookmark their favorite songs and add custom notes to each. It serves as a curated collection of practice material tailored to each user’s interests and vocal abilities. This page integrates directly with the Singing Carrots search system, allowing users to manage, revisit, and annotate songs they’re working on.  
This documentation outlines the complete interface and user interactions available on the Repertoire page.


---


## Page Layout & User Flow


### Step 1: Page Header
- **Title:** Repertoire  
- **Subtitle:** My bookmarked songs  


**Top‑Right Action**  
- **Button:** Search Songs  
  - **Function:** Navigates to the Search Page – <https://singingcarrots.com/search>


---


### Step 2: Song List Table


#### Table Headers
| Column | Description |
|--------|-------------|
| **Song** | Bookmarked song details |
| **Notes** | User notes for the song |


#### Column: Song  
Each row includes a bookmarked song with the following components:


- **Artist Name:** Clickable → redirects to the Artist Page.  
- **Song Title:** Clickable → redirects to the Song Page.  
- **Resource Tabs (under the song title):**  
  - **Chords** – opens external chord resource  
  - **Sheet Music** – opens external sheet music resource  
  - **Lyrics** – opens external lyrics source  
  - **Sing Karaoke** – opens karaoke video on YouTube  


#### Column: Notes


**Initial State**  
- **Green Button:** Add note  
  - **Function:** Opens a note input field for the song  


**After Note Is Added**  
- Note text is displayed directly in the row.  
- **Edit Icon:** A pen icon replaces the "Add note" button.  
  - **Function:** Clicking the icon allows the user to update or overwrite the note.  


**Common Note Uses**  
Users often use this field to jot down helpful reminders and customizations related to their vocal practice. Common examples include:  
- noting the preferred key for singing,  
- indicating transposition needs for guitar (e.g., “Capo on 3rd fret”),  
- flagging vocal technique considerations like “requires falsetto” or “use mixed voice in chorus.”  


Some singers also track their progress with notes like:  
- “almost ready for performance” or  
- “focus on breath support in verse.”  


Others use it for:  
- arrangement tips (“skip second verse”),  
- practice goals,  
- language pronunciation cues, or  
- plans like “record demo next week.”  


This flexibility helps tailor each song to the user's learning journey.


#### Remove Button
- Located on the far right of each row.  
- **Grey Button:** Remove  
  - **Function:** Deletes the song from the repertoire list.


---


### Step 3: Empty State (No Songs Added)
If the user hasn't added any songs yet, the following message appears:


> **Message:**  
> “Your saved songs will appear here once you add them to your favorites.”


**Button:** Search Songs  
- **Redirects to:** <https://singingcarrots.com/search>


---


### Step 4: Footer
- **Prompt:** Do you enjoy our tools?  
- **Button:** Help us improve!  
  - **Redirects to:** <https://singingcarrots.com/help-carrots>

---

## singing-carrots-mission-page.md

# Singing Carrots Mission Page

## Overview

The Singing Carrots Mission Page outlines the platform’s core values, purpose, community impact, and user experiences. It is a visual, emotional, and inspirational journey into Singing Carrots’ mission to **unleash 1 million voices**. Expect animated illustrations, real‑time impact metrics, heartfelt user reviews, and reflections on the emotional and spiritual power of singing.

---

## Singing Carrots Mission

### Unleash 1 Million Voices

> Everyone has the right to experience self‑love and the joy of singing—both alone and in community.


* **[Join now](https://singingcarrots.com)**
* **[Learn more](https://singingcarrots.com/about)**

---

## Mission Progress

Totals below update daily based on community activity and learning success.

| Metric                       | What it Measures                                                 |
| ---------------------------- | ---------------------------------------------------------------- |
| **X Voices Unleashed**       | Users who have started vocal training                            |
| **X Customer Reviews**       | Reviews gathered from social media, email, websites & interviews |
| **X Regular Practice Users** | Singers who follow a consistent practice schedule                |
| **X Users Expanded Range**   | Singers who have broadened their vocal range                     |
| **X Users Improved Tuning**  | Singers who have sharpened pitch accuracy                        |
| **X Hall of Fame Artists**   | Weekly leaderboard winners                                       |

---

## Why Does This Matter?

Singing is a natural, powerful instrument that enriches life on many levels:

* **Self‑love:** We learn to appreciate ourselves through the joy of our own voice.
* **Connection:** Singing, listening, and choral unity link us to others.
* **Universal expression:** Music conveys emotions, kindness, and love—bridging us with people, the universe, and the divine.

---

## Unleashing Our Voice Across Life’s Stages

![Carrot singing in a bathtub](https://via.placeholder.com/400x200 "Animated carrot singing in a bathtub")

1. *“I can’t sing.”* – Early conditioning or trauma stifles experimentation.
2. *“I don’t like my sound.”* – First attempts feel discouraging.
3. *Shower soloist.* – Singing alone but shy to share.
4. *Aspiring performer.* – Wanting a stage but fearing rejection.
5. *Composer/artist.* – Seeking skills to fully express emotions and spirit.

Whatever your stage, **Singing Carrots removes the barriers** between you and your voice.

| ✓ We Support                                                            | ✗ We Don’t Support                                   |
| ----------------------------------------------------------------------- | ---------------------------------------------------- |
| Performing, composing & recording that spreads **love, empathy, unity** | Pursuits driven solely by fame or messages of hatred |

---

## Enriching People’s Well‑Being

![Another singing carrot animation](https://via.placeholder.com/600x250 "Singing carrot animation")

Our world is built on vibration—light, sound, even matter itself. Your voice connects **soul, mind, and body** through natural waves. Sound healing and concerts move us because resonance **amplifies life’s experiences**. When that sound comes from *within*, nothing bridges the gap to self‑acceptance more powerfully.

> *If your heart calls you to join this mission, together we can help more people.*

---

## What Singing Means to Our Users

> “Singing can enrich life in countless ways—but here’s what **our community** says.”

**🎬 [Watch Eduardo Colli’s review on YouTube](https://youtu.be/placeholder)**

> *Scrollable reviews ↓*

* **Oksana Riba** – “It has all the stats I need and let me join a music‑theater performance!” *(Singing Carrots Pro)*
* **Barend Koekemoer** – “A really‑really good program—highly recommend!” *(Singing Carrots Pro)*
* **Faraja Sadi** – “Helped improve my pitch accuracy and increase range. Give it a try 😁” *(Pitch Training)*
* **James** – “Valuable, heartfelt info to keep our vocals—and overall health—thriving.” *(All‑Round Vocalist Course)*

---

## Feedback

Enjoying our tools? **[Help us improve!](https://singingcarrots.com/help-carrots)**

---

## singing-carrots-my-profile-page.md

# Singing Carrots “My Profile” Page: Full Technical Walkthrough  
**URL:** <https://singingcarrots.com/me>

---

## Overview
The **My Profile** page is the user’s personal dashboard on Singing Carrots. It allows them to manage their account, privacy settings, subscription details, and public visibility. The page also serves as a launch point to track vocal‑training progress, customize the user avatar, and access personalized content such as repertoire and competitions.

---

## Step‑by‑Step User Flow

### Step 1: Page Load – Settings & Security
| Control | Action |
|---------|--------|
| **Settings** (gear icon) | Opens profile settings |
| **Create or change password** (key icon) | Navigates to <https://singingcarrots.com/set-password> |

#### Password Page (`/set-password`)
- **Title:** *Create or update password*  
- **Subtitle:** *Your email will be used as login*  
- **Form:** Email, Password, Confirm password, **SAVE** button  

**Security Notes**
- Singing Carrots uses **Google Firebase Authentication**—no passwords or sensitive data are stored on Singing Carrots servers.  
- Users sign up via Email, Google, or Facebook; password creation happens post‑registration here.  
- If **SAVE** fails, log out and sign in again before retrying.  
- Logging in with a Google account is the most reliable method (Google lets you link non‑Gmail emails).

**Footer**
> *Do you enjoy our tools?*   **Help us improve** → <https://singingcarrots.com/help-carrots>

---

### Step 2: Account Removal
- **Button:** *Request account removal* (trash icon)  
- **Action:** Redirects to the [Contact page](https://singingcarrots.com/docs/singing-carrots-contact-page) with deletion instructions.

---

### Step 3: Personal Details
- **Section Title:** *My personal details*  
- **Displays:**  
  - Email address  
  - Avatar image (default: carrot with sunglasses)  
  - **Upload image** button → opens square image‑crop uploader

---

### Step 4: Repertoire Summary
- **Label:** *My repertoire: X songs*  
- **Link:** Redirects to <https://singingcarrots.com/repertoire>

---

### Step 5: Public Profile Visibility
| State | Indicator | Toggle Button | Effect |
|-------|-----------|---------------|--------|
| Public | “Your profile is **public**” (green) | **Hide my profile** | Hides page, removes from leaderboard |
| Hidden | “Your profile is **hidden**” (red) | **Go public** | Makes page public, joins leaderboard |

**Explanation:** Public profile shows your vocal range, carrot points, and repertoire and allows participation in the weekly competition (<https://singingcarrots.com/weekly-standings>).  
**Preview Link:** *This is how other people see your page:* `https://singingcarrots.com/user/username`

---

### Step 6: My Purchases
- **Heading:** *My purchases*  
- **Current plan:** e.g., *Pro Membership Life Time Deal*  
- **Link:** *Features by plan* → jumps to plan‑comparison resource (see next step).

---

### Step 7: Plan Features Reference  
➡️ **NOTE:** Instead of duplicating the feature matrix here, Singing Carrots maintains a single source of truth on the **Singing Carrots Product Tiers** documentation page.  
**Link:** <https://singingcarrots.com/docs/singing-carrots-product-tiers>  

*(This link contains the up‑to‑date comparison of Starter, Self‑Study, and Guided editions.)*

---

### Step 8: My Coupons
- **Section Title:** *My coupons*  
- **If empty:** *Nothing here for now*  
- **Description:** From time to time, Singing Carrots runs promotional campaigns or partnership-based offers. If a user is eligible for discount coupons, they will appear in this section automatically. 

---

### Step 9: Feedback Section
> *Do you enjoy our tools?*   **Help us improve!** → <https://singingcarrots.com/help-carrots>

---

## singing-carrots-pitch-monitor.md

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

---

## singing-carrots-pitch-test.md

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

### Settings (⚙️ Gear Icon)

A **gear icon** (⚙️) is available in the top-right corner of the test interface header. Clicking it opens a settings modal with the following options:

**Microphone Input Device**

* **Purpose:** Select which microphone to use for pitch detection
* **Control:** Dropdown menu listing all available audio input devices
* **Check button:** Tests the selected microphone and displays a real-time volume level indicator
* **Persistence:** Setting is saved to localStorage and applies across all pitch training modes
* **Sync:** Changes made here automatically sync with the microphone dropdown in the header (and vice versa)

**Audio Latency Compensation (Bluetooth)**

* **Purpose:** Fixes audio/visual desync when using Bluetooth headphones or speakers
* **Control:** Slider ranging from 0–300ms
* **Typical values:**
  * Standard Bluetooth devices: 100–200ms
  * Older Bluetooth models: up to 300ms
  * Wired audio: 0ms (no adjustment needed)
* **How it works:** Delays visual rendering to stay synchronized with audio playback, compensating for Bluetooth transmission delay
* **Persistence:** Setting is saved via cookie and applies across all pitch training modes

This is a simplified version of the full Practice Settings available in Practice Mode. For additional settings like instrument selection or range limiting, use the Practice Mode interface.

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

---

## singing-carrots-pitch-training.md

# Singing Carrots Pitch Training: Full Technical Walkthrough

**URL:** <https://singingcarrots.com/pitch-training#game>

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
-👉 [Weekly Competition Documentation](https://singingcarrots.com/docs/singing-carrots-weekly-competition-page)
- **Countdown:** Days:Hours:Minutes (until week end)
  *Tooltip:* “Your week end might be different from the week end of other players. It depends on your timezone.”
- **Two Tabs:**
  - **[This Week](https://singingcarrots.com/docs/singing-carrots-weekly-competition-page)** (default)
  - **[Hall of Fame](https://singingcarrots.com/docs/singing-carrots-hall-of-fame)** (with goblet icon)

👉 [Hall of Fame Documentation](https://singingcarrots.com/docs/singing-carrots-hall-of-fame)

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
  👉 [Practice Mode: Virtual Piano Documentation](https://singingcarrots.com/docs/pitch-training-practice-virtual-piano-interface)

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
- Success is tracked and compared with global [top scores](https://singingcarrots.com/docs/singing-carrots-level-rankings-page).

All stages use a version of the interactive piano interface, showing:
- Target notes (as blue lines)
- User's pitch input (as red line)
- Color-coded feedback: green (in tune), yellow (slightly off)
- Real-time pitch stability visualization

**Note:** All four modes use the interactive pitch training piano, but only Practice mode includes full settings and playback control. The Basic, Challenging, and Hard modes use a simplified version of the interface with fewer options to ensure consistent testing conditions.

**Settings in Non-Practice Modes (⚙️ Gear Icon):**
A gear icon is available in the header of Basic, Challenging, and Hard modes, providing access to a settings modal with:
- **Microphone Input Device** – Select which microphone to use, with a "Check" button to test input levels
- **Audio Latency Compensation** – Slider to adjust for Bluetooth audio delay (0–300ms)

This allows users to configure audio settings without leaving the exercise. The full settings panel (instrument selection, range limiting, pause configuration) is only available in Practice mode.

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
- **Option to view top scores 👉 [Weekly Top Scores Documentation](https://singingcarrots.com/docs/singing-carrots-level-rankings-page)**
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

---

## singing-carrots-product-tiers.md

# Singing Carrots Product Tiers: Full Technical Walkthrough  
**URL:** <https://singingcarrots.com/product-tiers>

---

## Overview
The Product Tiers page provides a clear and structured comparison of Singing Carrots’ subscription plans. It is designed to help users—whether new, returning, or currently subscribed—evaluate which plan best matches their vocal goals and access needs. The page adapts dynamically depending on whether a user is logged in and/or subscribed.

---

## Page Behavior Based on User Status

### If the user is **not logged in or not subscribed**
On an orange background at the top of the page:
- **Main prompt:** *Not sure which plan to choose?*  
- **Subtext:** *Compare the features of our plans below.*  
- **Button:** **See the prices** (green CTA)  
  - **Action:** Redirects to <https://singingcarrots.com/pro>  

This section orients new users and encourages plan selection by linking directly to the pricing page.

---

### If the user **is logged in**
The top section changes to reflect the user's subscription status:
- **Heading:** *My purchases*  
- **Displayed information:** *Current plan: [name of plan]*  
- **Subtext:** *Features by plan*  

This view reinforces what the user already has access to and helps them evaluate whether an upgrade or change would be beneficial.

---

## Features Comparison Table

| What’s Included | **Starter Edition**<br>(The easiest way to start singing—even with zero musical experience) | **Self‑Study Edition**<br>(A perfect, self‑paced way to teach yourself to sing) | **Guided Edition**<br>(Ideal for mastering specific repertoire or adding teacher guidance) |
|-----------------|:---:|:---:|:---:|
| 4‑week “From Zero to Singing Hero” course | ✅ | ✅ | ✅ |
| 21‑week “All‑Round Vocalist” course | ❌ | ✅ | ✅ |
| Interactive gamified pitch‑training playground with scores & competition | ✅ | ✅ | ✅ |
| Voice analysis toolkit & progress tracker | ✅ | ✅ | ✅ |
| My custom melodies (MIDI import) | ❌ | ✅ | ✅ |
| Songs ranges database & repertoire organiser | ❌ | ✅ | ✅ |
| 1 weekly custom song or melody for your singing practice | ❌ | ❌ | ✅ |
| 1 monthly video feedback from our voice teacher | ❌ | ❌ | ✅ |

**Legend:**  
- ✅ Green checkmark = included  
- ❌ Red cross = not included

---

## singing-carrots-sign-up-page.md

# Singing Carrots – Sign-Up Page: Full Technical Walkthrough

## Page URL
<https://singingcarrots.com/sign-up>

---

## Page Header
- **Title:** Create an account  
- **Subtitle:** Already have an account? [Log In](https://singingcarrots.com/docs/sign-in-–-singing-carrots-login-page)

---

## Sign-In Options
- **Sign in with Google**  
  Opens a Google account selection window.  
  The user can choose their Google account to log in.
- **Log in with Facebook**  
  Intended to allow login with Facebook credentials.

---

## Sign Up with Email
- **Field:** your email – input field for the user’s email.  
- **Button:** Next

**After entering the email and clicking Next, the system displays a confirmation message:**

- **Message:**  
  **Log in email sent**  
  A sign-up email with additional instructions was sent to \[user email].  
  Check your email to complete sign-in.

---

## Troubleshooting Email Delivery
- **Button:** Trouble getting email?

**Clicking reveals troubleshooting instructions:**

**Try these common fixes:**
- Check if the email was marked as spam or filtered.
- Check your internet connection.
- Check that you did not misspell your email.
- Check that your inbox space is not running out or other inbox settings related issues.

**If the steps above didn’t work:**
- Reload the page and try to log in again.
- A new email will be resent.

**Note:** Resending will deactivate the link in the older email.

---

## singing-carrots-stats-page.md

# Singing Carrots Stats Page: Full Technical Documentation
URL: https://singingcarrots.com/stats

## Overview
The Singing Carrots Stats Page is a personalized dashboard that tracks a user's singing development over time. It focuses on three main areas: vocal range progress, pitch accuracy, and practice quantity. Interactive graphs, filters, and dynamic feedback help users reflect on their improvement and inform their next steps in vocal training.  
This documentation covers all interface elements and user interactions on the page.

## 1. Page Header
Title: "My statistics"

Icon: Small graph icon displayed next to the title

## 2. Vocal Range Progress
### 2.1. Graph Section
A block graph visualizing the evolution of the user’s vocal range over time.  
Tabs Above the Graph:

- Last 7 attempts (default view)
- Custom range

Graph Legend (always visible above chart):

- Yellow line: Highest note reached
- Blue line: Lowest note reached

#### Last 7 Attempts View:
The X-axis displays the dates of the last 7 vocal range tests (e.g., Jun 23, Jun 24, …).

The Y-axis shows note index numbers (from ~10 to 55 or 60).

Data points:

- Yellow dots for highest note on each test day
- Blue dots for lowest note

Hover Effect: Shows details like:  
Year-month-date note:index value from Y axis  
Interactivity:  
Clicking on "Highest note" or "Lowest note" in the legend toggles their visibility, allowing focused comparison.

#### Custom Range Tab:
Replaces the 7-day view with a date range dropdown and interactive calendar.

Dropdown Options:

- Today
- Yesterday
- Last 7 days
- Last 30 days
- Last 90 days
- 1 year
- Custom range

Custom Range Selection:

- Opens a calendar where users choose start and end dates
- Buttons: Cancel and Apply
- Graph updates to reflect the selected time frame

### 2.2. Below Graph – Navigation Buttons
Explore songs for your range – Navigates to Search Page

Do vocal range test – Navigates to Vocal Range Test

## 3. Pitch Training Progress
### 3.1. Section Header
Title: Pitch Training Progress

Date Range Filter:  
Same dropdown and calendar functionality as Vocal Range section

### 3.2. Pitch Accuracy per Note
This section displays a horizontal piano keyboard (from C2 to A#6) with pitch accuracy bars shown above each corresponding key.  
Graph Style:  
For each note on the keyboard, a vertical accuracy bar extends upward from the piano key.

Bar Color Segmentation:

- Green segment (bottom part of the bar): Percentage of times the note was sung in tune
- Yellow segment (top part of the bar): Percentage of times the note was out of tune

Bar Height:  
Reflects the number of times the user attempted to sing that specific note.  
Hover Functionality:  
Hovering over a segment reveals:

- The note name
- The percentage of accurate or inaccurate attempts
- The total number of attempts recorded for that pitch

Purpose:  
This visualization helps users evaluate their pitch accuracy per note, understand which notes are stable, and identify areas that may need further training.  
It is also useful for identifying the user's actual, functional vocal range, as the histogram shows which notes the user can consistently sustain in tune.  
Additionally, it may help detect a vocal break — a noticeable drop in accuracy around the notes where the user transitions between vocal registers (e.g., chest to head voice).

### 3.3. Pitch Accuracy Over Time
A horizontal line graph

- Y-axis: Accuracy scale from 0 to 1
- X-axis: Dates from the selected date range
- Graph shows how the user’s pitch accuracy has changed over time

### 3.4. Amount of Practice
Bar chart measuring how many notes were practiced per day

- Y-axis: From 0 to 400 (in steps of 50)
- X-axis: Dates from selected date range
- Bars: Orange vertical bars above each date
- Hover Info: Example – "Note hits: # (number of notes)"

## 4. Call-to-Action Button
Button Text: Open Pitch Training

Navigates to the Singing Carrots pitch training game

## 5. Feedback Section (Page Footer)
Do you enjoy our tools?  
“Help us improve” button – links to: https://singingcarrots.com/help-carrots

---

## singing-carrots-studio-ambassador-welcome-page.md

**URL:** <https://singingcarrots.com/ambassador/welcome>

## Page Header (Purple Background)

### Welcome Message

**Text:**

> *Welcome to Singing Carrots Studio!*\
> Your professional virtual classroom is ready! Start using all the Studio features below to teach your students online.

### Referral Program Notice

> *Referral Program:* Our team will review your application and optionally enroll you in our referral program where you can earn rewards when students upgrade.\
> This is completely optional and doesn't affect your access to the Studio.

- - -

## Verification Status Messages

### If Verification is Pending

**Header:** Verification Pending\
**Message:**

> Your ambassador application is being reviewed. You have access to basic Studio features.\
> Once verified, you'll unlock premium features including pitch training game and interactive virtual piano.

- - -

### If Profile is Verified

**Header:** Verified Ambassador\
**Message:**

> Congratulations! You have full access to all Studio features including premium courses, pitch training, and MIDI downloads.\
> Thank you for being part of our teaching community!

- - -

## Your Studio Toolbox

This section provides teachers with direct access to core Studio tools through grouped feature boxes.

- - -

### **1. Virtual Classroom**

Your professional video classroom with unlimited HD calls and studio-quality audio.\
Start teaching immediately or schedule lessons with students.

**Buttons:**

* **Start a call** → <https://singingcarrots.com/video-room-host>  
* **Schedule a lesson** → <https://singingcarrots.com/ambassador/schedule-lesson>

- - -

### **2. Vocal Ranges Database**

Access Singing Carrots’ extensive library of over **75,000 songs** with detailed vocal range data.

**Buttons:**

* **Search songs** → <https://singingcarrots.com/search>  
* **Browse artists** → <https://singingcarrots.com/artists>

- - -

### **3. Teaching Tools**

Interactive online tools designed to help students improve pitch accuracy, intonation, and vocal range.

**Buttons:**

* **Pitch Monitor** → <https://singingcarrots.com/pitch-monitor>  
* **Vocal Range Test** → <https://singingcarrots.com/vocal-range-test>

- - -

## ⭐ Premium Features Preview

This section highlights advanced tools that teachers and their students can access after verification or upgrade.

**Description:**

> Explore these premium features available to your students when they upgrade.\
> Test them out to better recommend the right tools for their vocal journey.

- - -

### **Pitch Training Game**

Interactive game with progressive difficulty levels.\
Students can practice pitch matching and develop ear training skills.\
**Button:** *Try the game* → <https://singingcarrots.com/pitch-training#game>

- - -

### **Custom Practice Melodies**

Upload MIDI files to create custom vocal exercises.\
Students can then use the interactive piano to practice pitch matching with these melodies.\
**Button:** *Create exercises* → <https://singingcarrots.com/my-custom-melodies>

- - -

### **Structured Courses**

Review the official Singing Carrots courses to guide your students through structured learning paths.

**Buttons:**

* *Zero to Hero* → <https://singingcarrots.com/course/zero-to-hero>  
* *All-Round Vocalist* → <https://singingcarrots.com/singing-beginners>

- - -

## 💰 Commission Tracking (Locked if Not Verified)

Track your referrals and earnings in real time once your ambassador account is verified.

**Text (for locked state):**

> *Commission Tracking (locked)*\
> Track your referrals and earnings in real-time.

**Unlocked Preview Content:**

* **Earn Commissions:** $20 per student when they upgrade to Pro  
* **Track Referrals:** Real-time dashboard  
* **Monthly Payouts:** Direct to your account

- - -

## Quick Start Guide

| Action                 | Instruction                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| **Start Teaching**     | Go to “Virtual Classroom” → “Start or join a call” to enter your video classroom                   |
| **Schedule Lessons**   | Use “Virtual Classroom” → “Schedule a lesson” to create email invitations with your classroom link |
| **Find Songs**         | Use “Vocal Ranges Database” menu to find songs that match your students’ vocal ranges              |
| **Use Teaching Tools** | Access pitch training tools and other features to help your students improve                       |
| **Review Lessons**     | Go to “Virtual Classroom” → “Recordings” to access your lesson recordings and transcripts          |

- - -

## Summary

The Ambassador Welcome Page serves as the **central onboarding hub** for Singing Carrots teachers.\
It introduces available tools, explains the verification process, and provides access to everything needed for conducting online voice lessons — from real-time classrooms to pitch analysis tools and course recommendations.

---

## singing-carrots-studio-main-page.md

## Access & Eligibility
- **Who can use it:** Approved Teacher accounts for educational use only.  
- **How to get access:**  
  1. Go to the Singing Carrots homepage.  
  2. Open the **For Teachers** menu.  
  3. Click **Create free account** and complete registration.  
  4. Log in to access the Studio.  
- **Status indicators:**  
  - **Under Review:** Displayed until the Teacher account is verified.  
  - **Verified:** Displayed after approval (unlocks premium student resources).  
- **Locked items:** Clicking any locked feature opens the Welcome page at <https://singingcarrots.com/ambassador/welcome>.

---

## Page Layout
### Top Row
- **Header:** `Singing Carrots studio`

### Welcome Message
`Thanks for being our champion and supporting our mission to unleash 1 million voices!`

---

## Expandable Menu (Left Sidebar)

### Virtual Classroom
- **Start or join a call** → <https://singingcarrots.com/video-room-host>  
- **Schedule a lesson** → <https://singingcarrots.com/ambassador/schedule-lesson>  
- **Recordings** → <https://singingcarrots.com/ambassador/video-recordings>

### Vocal Ranges Database
- **Find songs by range** → <https://singingcarrots.com/search>  
- **Singers’ vocal ranges** → <https://singingcarrots.com/artists>  
- **My repertoire (bookmarked songs)** → <https://singingcarrots.com/repertoire>  
- **Submit a song / report mistake** → <https://singingcarrots.com/contribute>

### Toolbox
- **Vocal Range Test**  
- **Simple Vocal Pitch Monitor**  
- **Pitch Training Game** *(locked if account not approved)*  
- **My Custom Melodies (MIDI)** *(locked if account not approved)*  
- **Earn Commissions** *(locked if account not approved)*  

> 🔒 **Locked Feature Behavior:** Redirects to <https://singingcarrots.com/ambassador/welcome>

---

## Main Content Sections

### Video Calls
- **Start or Join Call:** <https://singingcarrots.com/video-room-host>  
- **Schedule a Lesson:** <https://singingcarrots.com/ambassador/schedule-lesson>  
- **View Recordings & Transcripts:** <https://singingcarrots.com/ambassador/video-recordings>

### Vocal Ranges Database
- **Find Songs:** <https://singingcarrots.com/search>  
- **Explore Artists:** <https://singingcarrots.com/artists>  
- **Repertoire (Bookmarks):** <https://singingcarrots.com/repertoire>

### Singing Carrots Toolbox
- **Pitch Monitor:** <https://singingcarrots.com/pitch-monitor>  
- **Vocal Range Test:** <https://singingcarrots.com/range-test>

---

## Premium Student Resources *(Visible only for Verified Accounts)*
- **Pitch Training Game:** <https://singingcarrots.com/pitch-training#game>  
- **Custom Melodies (MIDI Upload):** <https://singingcarrots.com/my-custom-melodies>  
- **Zero to Hero Course:** <https://singingcarrots.com/course/zero-to-hero>  
- **All-Round Vocalist Course:** <https://singingcarrots.com/singing-beginners>  

**Note:** Review these resources to recommend appropriate content to your students.

---

## Earn Commissions *(Locked)*
- **Coming soon:** <https://singingcarrots.com/>

---

## Administration
- **My Students:** <https://singingcarrots.com/ambassador/my-students>  
- **Settings & Billing:** <https://singingcarrots.com/me>

---

## Account State Permissions

| Feature / Section                  | Under Review | Verified Teacher |
|-----------------------------------|---------------|------------------|
| Virtual Classroom (host/schedule/recordings) | ✅ Available | ✅ Available |
| Vocal Ranges Database (search/artists/repertoire) | ✅ Available | ✅ Available |
| Pitch Monitor / Vocal Range Test  | ✅ Available | ✅ Available |
| Pitch Training Game               | 🔒 Locked (Welcome page) | ✅ Unlocked |
| My Custom Melodies (MIDI)         | 🔒 Locked (Welcome page) | ✅ Unlocked |
| Premium Student Resources section | ❌ Hidden | ✅ Visible |
| Earn Commissions                  | 🔒 Locked | 🔒 Coming soon |
| Status Badge                      | “Under Review” | “Verified” |

---

## Notes for Teachers
- The Studio is free for **educational use only** — to teach singing.  
- Use **Recordings** to access lesson replays and transcripts.  
- Use the **Vocal Range Database** and **Repertoire** to select songs suited to each student’s voice.  
- Assign students practice sessions through the **Pitch Monitor**, **Vocal Range Test**, or — once verified — **Pitch Training Game** and **Custom Melodies (MIDI)**.

---

---

## singing-carrots-studio-my-students-page.md

**URL:** <https://singingcarrots.com/ambassador/my-students>  
**Access Level:** Teachers / Ambassadors (Studio users only)

---

## Page Header
**Title:**  
> *My Students*

**Disclaimer (Displayed Below Title):**  
> Students automatically appear on this page once they join their first video lesson with you using your invite link.  
> Schedule a lesson to get your unique invite link and share it with your students.

---

## Connected Students Summary
At the top of the page, a **green information box** displays the number of currently connected students.  
This count updates automatically as new students join their first lessons.

---

## Search and Filtering
Located to the right of the student count:

- **Search Field:**  
  Placeholder text — “Find Students”  
  Allows teachers to search by name or email.

- **Search Button:**  
  Executes the search and filters the student list based on the entered term.

---

## Students Table

Below the header, a structured table lists all students associated with the teacher’s account.

### **Table Columns**
| Column | Description |
|---------|--------------|
| **Name** | Displays the student’s full name as recorded during the session. |
| **Email** | The student’s registered email address used to join lessons. |
| **Actions** | Provides buttons for managing or viewing the student’s data. |

---

### **Action Buttons**
Each student row includes three action buttons:

1. **Practice Stats**  
   - Redirects to: `https://singingcarrots.com/stats?studentid=[student_id]`  
   - Displays detailed statistics about the student’s pitch training progress, including accuracy, daily practice notes, and activity trends.

2. **Repertoire**  
   - Redirects to: `https://singingcarrots.com/user/[username]`  
   - Opens the student’s personal song collection and bookmarked repertoire for review.

3. **Recordings**  
   - Redirects to: `https://singingcarrots.com/ambassador/video-recordings?studentId=[student_id]`  
   - Opens the **Video Recordings** page filtered specifically for this student, showing only their lesson recordings and transcripts.

---

## Behavior and Data Management
- Students appear in the list automatically after joining their **first video call** with the teacher’s invite link.  
- The teacher cannot manually add or remove students; this process is fully automated.  
- The data displayed (name, email, statistics, recordings) is synchronized with each student’s account activity.  
- Access to student data is restricted to verified teacher accounts.

---

## Summary
The **My Students** page acts as the teacher’s central control panel for managing student relationships and monitoring learning progress.  
It offers direct navigation to each student’s stats, repertoire, and recorded sessions — creating a structured, efficient workflow for educators using Singing Carrots Studio.

---

## singing-carrots-studio-schedule-a-lesson-page.md

*URL:** <https://singingcarrots.com/ambassador/schedule-lesson>  
**Access Level:** Teachers / Ambassadors (Studio users only)

---

## Page Header
**Title:**  
> *Schedule a Singing Lesson*

---

## 1. Permanent Classroom Link Section (Blue Box)
This section provides teachers with a persistent video classroom link that can be reused for all future lessons.

### Content:
**Label:** *Your Permanent Classroom Link*  
**Field Example:**  
`https://singingcarrots.com/video-room/teacher-name`

**Buttons:**
- **Copy link** — copies the link to clipboard.

---

### Disclaimer (with ℹ️ icon)
Displayed below the link field:

> This is your permanent classroom link. You can use it for all your students.  
>  
> • If you already use a calendar or scheduling system, simply copy and paste this link there.  
> • Students must "knock" before entering — you control who gets admitted.  
> • The link only changes if you update your name in profile settings.

**Additional Note:**  
> *Optional:* Use the form below to create a lesson invitation email with all details and this link automatically included.

---

## 2. Lesson Invitation Form

This form lets teachers generate and send a pre-filled lesson invitation email directly from Singing Carrots.  
All fields marked with an asterisk (*) are required.

---

### **Section: Student Information**
| Field | Label | Placeholder / Note |
|--------|--------|-------------------|
| **Student Name** | *Required* | “Enter student's full name” |
| **Student Email** | *Required* | “student@example.com” |
|  | *Small note:* “The calendar invite will be sent to this email.” |

---

### **Section: Lesson Details**
| Field | Label | Placeholder / Dropdown Options |
|--------|--------|-------------------|
| **Lesson Date** | *Required* | `dd/mm/yyyy` |
| **Lesson Time** | *Required* | (time input field) |
| **Time Zone** | *Required* | Dropdown menu — “Select your time zone” |
| **Lesson Duration** |  | Dropdown options: *30 minutes, 45 minutes, 1 hour, 1.5 hours, 2 hours* |
| **Additional Notes (Optional)** |  | “Any special instructions or topics for this lesson…” |

---

### **Action Button**
**Label:** *Send Lesson Invitation Email*  
**Function:**  
Clicking the button opens an **email draft** in the user’s default email application.  
The draft includes:
- The student’s name and email  
- The scheduled date, time, and time zone  
- The lesson duration and any additional notes  
- The teacher’s permanent classroom link  

**Success Message:**  
> **Success!**  
> Email draft opened with lesson details.  
> Review and send to your student.

---

## Notes for Teachers
- The permanent classroom link remains constant and only changes if the teacher updates their profile name.  
- The email invitation is prepared automatically, ready for review and manual sending.  
- The form provides a standardized template that ensures every invitation includes the correct classroom access information.

---

## Summary
The **Schedule a Lesson** page provides Singing Carrots teachers with a simple scheduling tool.  
It automatically fills an email draft with lesson details and the permanent classroom link, allowing quick, consistent lesson organization within the Studio environment.

---

## singing-carrots-studio-video-recordings-page.md

**URL:** <https://singingcarrots.com/ambassador/video-recordings>  
**Access Level:** Teachers / Ambassadors (Studio users)

---

## Page Header
**Title:**  
> *Video Call Recordings*

**Subtitle:**  
> View and manage recordings and transcripts from your video calls.

**Navigation Link:**  
← *Back to home page* — redirects to the Studio dashboard (`https://singingcarrots.com/`).

---

## Note Section
Displayed below the header:

> **Note:** Recordings and transcripts may take up to **30 minutes** to appear after a lesson has finished.  
> Please refresh the page to check for new content.

### Student Access Information
> **For Students:**  
> Students can access their own recordings directly at:  
> `https://singingcarrots.com/student/video-recordings`  
>  
> The student version provides similar functionality — allowing playback, transcript download, and review of past sessions with their teacher.

---

## Conditional Display States

### 1. No Recordings Found
If no recordings are available, the following message appears:

> **No Recordings Found**  
> Your video call recordings will appear here once they are available.

**Button:**  
- **Start New Video Call**  
  - Redirects to: <https://singingcarrots.com/video-room-host>

---

### 2. Recordings Available
When recordings are available, they are displayed as a list of individual entries.

#### **Recording Entry Structure**
| Element | Description |
|----------|-------------|
| **Title** | *1-ON-1 Lesson with [Student Name]* |
| **Date & Time** | Example: *Oct 9, 2025, 3:06 PM* |
| **Clock Details** | Displays total session duration and join/leave timestamps |
| **Session Info** | “You joined at [time]” / “Left at [time]” |
| **Buttons** |  |
| 🎥 **Video** | Downloads the lesson recording (`.mp4` format) |
| 📝 **Transcript** | Downloads the auto-generated transcript (`.md` format) |

Each entry includes complete session details for easy identification and file management.

---

## Teacher and Student Access Differences

| Feature | Teachers | Students |
|----------|-----------|-----------|
| **View recordings** | ✅ All their lessons | ✅ Only their own lessons |
| **Download video (.mp4)** | ✅ | ✅ |
| **Download transcript (.md)** | ✅ | ✅ |
| **Access path** | `/ambassador/video-recordings` | `/student/video-recordings` |

Both interfaces share the same visual layout and structure, ensuring consistency between teacher and student experiences.

---

## Data Processing Behavior
- Recordings are automatically generated after each video call session.  
- Transcripts are processed automatically and appear within 30 minutes.  
- Both teachers and students can access the files once they are available.  
- File downloads are handled securely and are linked to session ownership.

---

## Summary
The **Video Recordings** page serves as a central archive for both teachers and students in the Singing Carrots Studio environment.  
Teachers can review and distribute recordings, while students gain on-demand access to their lessons for revision and practice.  
The page supports downloading both **video recordings (.mp4)** and **transcripts (.md)**, ensuring a complete learning experience across all sessions.

---

## singing-carrots-studio-video-room-host-page.md

**URL:** <https://singingcarrots.com/video-room-host>\
**Access Level:** Teacher / Ambassador accounts only  

- - -

## 1. Account Identification

At the top of the page:

**Banner:**\
`Ambassador Account` — displayed in **green** to confirm educator access.

**Welcome Message:**  

> *Welcome, Teacher!*\
> Please set your name to continue.\
> Your name will be displayed to your students during video lessons and on your profile.

**Form:**  

* **Label:** *Your Full Name*  
* **Input Field:** (text box for entering display name)  
* **Hint:** “This is how your students will see you.”  
* **Continue Button:** *Continue*  

- - -

## 2. Invite Link Generation

After typing in a name and clicking **Continue**, the system displays:

* **Invite Link Field:**\
  Example: `https://singingcarrots.com/video-room/teacher-name`
* **Copy Button:** Copies the invite link to clipboard.

- - -

## 3. Pre-Call Test Popup

Below the teacher’s invite link, there is a video screen where a **Pre-Call Test** popup appears.

### Header

> **Run a pre-call test**\
> A quick test to ensure your equipment is working properly and there are no technical difficulties in the meeting.

### Test Items

* **Camera** (camera icon)  
* **Speaker** (speaker icon)  
* **Mic** (microphone icon)  
* **Connection** (signal icon)

### Buttons

* **Skip test** — bypasses diagnostics.  
* **Run test** — launches interactive checks.

- - -

## 4. Test Sequence

### Step 1 – Camera Test

* **Prompt:** *Can you see yourself?*  
* **Instruction:** Ensure the correct camera is selected.  
* **Dropdown:** Select video device.  
* **Buttons:**  

  * *No, I don’t*  
  * *Yes, I see myself*\
    (Both move to the next step.)

- - -

### Step 2 – Speaker Test

* **Audio Visualization:** Music animation with speaker icon.  
* **Prompt:** *Can you hear the music?*  
* **Instruction:** Make sure the correct speaker is selected.  
* **Dropdown:** Select output device.  
* **Buttons:**  

  * *No, I don’t* → goes to **Speaker Error** step.  
  * *Yes, I hear music* → goes to **Microphone Test**.

- - -

### Step 2a – Speaker Error Step

If user clicks **No, I don’t**:

> *Microphone test needs a speaker.*\
> We can’t successfully test your microphone without knowing your speaker is working.

* **Speaker Selection Dropdown:** Greyed out.  
* **Buttons:**  

  * *Back*  
  * *Skip this step*

- - -

### Step 3 – Microphone Test

* **UI Change:** Microphone icon with *Recording* text → switches to Speaker icon with *Playback* label.  
* **Instruction:**  

  > Say a few words; can you hear yourself play back?\
  > Make sure the correct microphone is selected.  
* **Dropdown:** Choose microphone input.  
* **Buttons:**  

  * *No, I don’t*  
  * *Yes, I hear myself*

- - -

### Step 4 – Connection Test

After confirming the microphone:

* **Loading Screen:**  

  > Testing your connection\
  > Please wait one moment…\
  > Shows progress percentage.

Then:

> *Finalizing results…*

- - -

## 5. Test Results Screen

### If all systems are good:

> **Everything looks great!**\
> All devices are working properly. You shouldn’t experience any problems during this meeting.

### If issues are detected:

> **You might experience issues**\
> Some devices may not be working properly. See our steps to help fix any issues.

**Device Summary Display:**
| Device | Status |
|---------|---------|
| Camera | ✅ / ❌ |
| Speaker | ✅ / ❌ |
| Mic | ✅ / ❌ |
| Connection | ✅ / ❌ |

**Options:**

* **Enable low data mode** (toggle) — reduces video resolution for slow connections.  
* **Help me fix this** (link) → <https://whereby.helpscoutdocs.com/article/742-help-me-fix-this> (only if errors detected)  
* **Run test again** — restarts diagnostics.  
* **Continue** — proceeds to meeting lobby.

- - -

## 6. Lobby (Pre-Meeting)

The teacher’s live **camera preview** is displayed.

**Controls:**

* **Settings (2 buttons):**

  * One opens **Video/Audio Settings**.  
  * The other opens **Effects Settings**.

**Settings Popup Includes:**

* **Video/Audio:**\
  Select camera, mic, speaker; noise reduction; HD/widescreen/mirror options.
* **Effects:**\
  Background blur, preset images, or upload custom background.
* **General:**\
  Language, skin tone for reactions.
* **Advanced:**\
  Pre-call review, low data mode, reduce visual effects, picture-in-picture, keyboard shortcuts.

**Other Buttons:**

* **Turn off Camera** — join with camera disabled.  
* **Turn off Mic** — join muted.  
* **Join Meeting** — enters the live classroom.

- - -

## 7. Live Video Room Interface

### Top Bar

* **Top Left:**\
  **People Counter** — e.g., `1/200`.\
  Clicking opens room details:

  * *Room size:* Large (up to 200 people).  
  * *Locked room:* Guests need to knock to enter.
* **Top Right:**  

  * **Picture-in-Picture** — shows host’s video thumbnail when screen sharing.  
  * **Meeting Diagnostics** — displays participant connection quality; allows disabling all videos.  
  * **Settings (gear)** — opens settings menu.  
  * **Three Dots Menu:** Meeting timer toggle and “Hide toolbars.”

- - -

### Bottom Toolbar

| Button                 | Function                                                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Cam**                | Toggles camera. Hover opens video device selector, background effects, and video settings.                                         |
| **Mic**                | Toggles microphone. Hover shows mic selector, noise reduction toggle, and audio settings.                                          |
| **Record**             | Start/stop recording of the session.                                                                                               |
| **Start Transcribing** | Start/stop automatic transcription.                                                                                                |
| **Chat**               | Opens chat panel. Hover to raise hand or send emoji. Inside chat: access People panel, create breakout rooms, manage participants. |
| **People**             | Opens People menu; hover allows breakout room management.                                                                          |
| **Leave**              | Leave the meeting or end for all (host only).                                                                                      |

- - -

## 8. Additional Interface Elements

* **Room Link Field:** Displays meeting URL with a **Copy** button.  
* **Pitch Monitor Integration:**  

  * **Button:** *Start Pitch Monitor* → activates real-time pitch display.  
  * When active: Button changes to *Pitch Monitor Active* and shows the virtual piano with pitch line and note display.  
  * **Link:** *Open full version in new tab* → <https://singingcarrots.com/pitch-monitor>

- - -

## Summary

The **Video Room Host** page transforms Singing Carrots Studio into a full-fledged virtual teaching environment.\
It allows teachers to:

* Host professional-grade HD lessons with pitch tools.  
* Run technical diagnostics for smooth sessions.  
* Access live pitch tracking and transcription.  
* Maintain structured classroom control and student management tools — all within the Singing Carrots ecosystem.

---

## singing-carrots-vocal-range-singing-guide-for-popular-songs.md

# Singing Carrots Song Page: Artist + Song-Level Overview

## Purpose:

This page provides users with detailed vocal analysis and practice tools for a specific song by a specific artist. It combines interactive training tools, vocal statistics, helpful resources, and user engagement elements to guide singers of all skill levels.

**Example URL:**\
<https://singingcarrots.com/song?song=adele-skyfall>

- - -

## 1. Page Header: Song Identification & Edit Access

* **Top Line Title:**\
  *Artist Name* – *Song Title*: Vocal Range & Original Key
* **Edit Button (Right-Aligned):**  

  * Icon: Pencil  
  * Tooltip: "Suggest an edit" (on hover)  
  * Action: Opens the song editing interface at:\
    https://singingcarrots.com/edit-song/\[song-id]

- - -

## 2. Action Tabs

A horizontal row of tabs gives users quick access to external and internal resources:

* Chords – External link to chord progressions  
* Sheet music – External link to downloadable or viewable sheet music  
* Lyrics – External link to full lyrics  
* Sing Karaoke – External karaoke video platform link  
* Star icon + Tooltip: "Save this song in my repertoire"  

  * Clicking this saves the song to the user's personal repertoire  
  * Button disappears after selection  

- - -

## 3. Practice Prompt Block (Conditional)

This section dynamically changes based on whether the song has a linked MIDI exercise in the database.

### For Songs with Linked MIDI (Custom Melody Present):

* **Prompt:**\
  Practice singing this song with our interactive pitch-matching piano
* **Button:**\
  Practice full song\
  Redirects to the exact Pitch Training session for the selected song:\
  https://singingcarrots.com/pitch-training/practice?ugc=true&exercise=\[excercise-id]
* **Note in brackets:**\
  (Added by \[username]) – Indicates who submitted the MIDI melody linked to this song
* ⚠️ **Availability Note:**\
  This feature is available only for a select list of songs that are either:  

  * Royalty-free, **or**  
  * Cleared by explicit permission from the copyright holder for educational use on Singing Carrots.\
    Songs outside this scope are not eligible for full-song practice using the interactive piano due to copyright restrictions.

### Fallback (Default Prompt):

* **Prompt:**\
  Are you a beginner or advanced singer?
* **Button:**\
  Test if you can sing in tune\
  Redirects to: <https://singingcarrots.com/pitch-training>

- - -

## 4. Song Information Table

Displays detailed song metadata in a structured table format:

| Label                      | Value                                                                          |
| -------------------------- | ------------------------------------------------------------------------------ |
| Artist / From              | Artist Name (artist vocal range) (clickable) – shows artist's full vocal range |
| Title                      | Song Title                                                                     |
| Original Key               | Key (e.g., C Major)                                                            |
| Vocal Range                | Range (e.g., G3 – E5)                                                          |
| Difficulty (Original Key)  | Easy / Moderate / Challenging / Impossible                                     |
| Difficulty (Optimal Key)   | Easy / Moderate / Challenging                                                  |
| Min Transposition Needed   | Number of semitones down required for easier singing                           |
| Max Transposition Possible | Highest number of semitones up that still sounds natural                       |

- - -

## 5. Blog Integration (Optional Block)

Displayed only for songs with relevant blog articles.

* **Header:**\
  Singing Carrots Blog Relevant Reads
* **Article Link:**\
  “How to Learn Singing ‘Song Title’ from Artist Name”\
  Redirects to Singing Carrots blog with practice tips, exercises, and breakdowns

- - -

## 6. Embedded Karaoke Video

* A YouTube karaoke video is embedded directly on the page.  
* Below it is a secondary **Suggest an Edit** button linking to the edit interface.

- - -

## 7. Additional Resources Section

* **Title:** Latest Videos on Singing Carrots  
* **Button:** Try Pitch Training\
  Redirects to: <https://singingcarrots.com/pitch-training>

- - -

## 8. Related Songs: Recommendation Engine

* **Header:** Users who like this song also like:
* Displayed as a list of clickable song titles  

  * Each song links to its respective song-level page

- - -

## 9. User Likes

* **Header:** User Likes  
* A scrollable list of usernames who favorited this song  
* Each name links to that user's public profile page

- - -

## 10. Song Collections

* **Header:** This song is featured in collections:
* Displays all relevant collections this song belongs to, such as:  

  * Top 77 Songs for Bass Voice  
  * Top 77 songs in C Major  
* Each collection title is clickable and opens a filtered view with all songs in that collection

- - -

## 11. Footer Feedback Prompt

* **Prompt:** Do you enjoy our tools?  
* **Button:** Help us improve\
  Redirects to: <https://singingcarrots.com/help-carrots>

---

## singing-carrots-vocal-range-test.md

# Vocal Range Test – Interactive Tool Overview  
**URL:** <https://singingcarrots.com/range-test>

---

## Overview  
The Singing Carrots Vocal Range Test is an interactive web-based tool that helps users discover the lowest and highest notes they can sing comfortably. It leverages real-time pitch tracking via microphone input and displays visual feedback through an interactive keyboard. Users are encouraged to warm up their voice before testing and are rewarded with personalized insights, including vocal comparisons to famous singers.  
This documentation provides a complete step-by-step breakdown of the user journey, from opening the page to saving test results.

---

## Step-by-Step User Flow  

### 1. Pre-Test Popup: Warm-Up Prompt  
- **Title:** Before the test  
- **Message:**  
  > To stay healthy and get better results, you should warm up your voice before starting the vocal range test.  
- **Buttons:**  
  - **Warm me up** – opens warm-up video  
  - **Skip and start the test** – skips warm-up, starts test directly  

---

### 2. Warm-Up Video (If "Warm me up" is clicked)  
We encourage the users to go this route, as proper warm-up is essential for both staying healthy and getting better results.  

- **Video Duration:** ~2 minutes  
- **Transcript Highlights:**  
  - **Exercise 1:** Vocal glides (on “R”, “Z”, or “NG” sounds), across octaves  
  - **Exercise 2:** Cheerleader-style “Woo” glissandos, ascending in pitch  
- **Message Below Video:**  
  > Feel warmed up? Let’s check your range!  
- **Button:**  
  - **Start vocal range test** – proceeds to next popup  

---

### 3. Microphone Access Popup  
- **Title:** Let’s find your vocal range!  
- **Message:**  
  > We will ask you to sing a couple of notes.  
  > To identify your range, we will need to use your microphone.  
- **Graphic:** Microphone icon  
- **Button:** **OK** – triggers mic access and opens test interface  

#### Alternate Flow – No Microphone Detected  
If the user has no microphone connected or access is denied, they are redirected to a fallback page with a pop‑up:  

- **Popup Title:** Ooops  
- **Message:**  
  > Unfortunately vocal range test requires a microphone, but no worries! You can use our video instruction instead.  
- **Link:** Watch video instruction on YouTube (links to YouTube video)  
- **Button:** **OK** – clicking this button shows the embedded video on the page.  

---

### 4. Vocal Range Test Page  
- **Header:** Vocal Range Test  
- **Helper Message:**  
  > Good job! Time to find your range. First, sing as low and then as high as you can.  
- **Interface:**  
  - An interactive piano keyboard in the middle of the screen  
  - Keys light up as the user sings  
    - **Green** = note currently sung  
    - **Yellow** = detected the lowest and highest notes  
- **Real-Time Feedback Logic:**  
  - The test waits until the user holds a pitch for at least 1 second.  
  - Once a stable pitch is detected, the system updates the visual indicators.  
  - The green bar represents the note being sung in real time.  
  - Yellow bars appear on the lowest and highest notes recorded so far.  
  - This feedback is dynamic, updating whenever a new lower or higher note is detected.  
- **Instruction Message:**  
  > “Well done! Yellow bars mark your lowest and highest notes. Let’s sing one more note.”  

---

### 5. Results Display  
After singing, the tool displays two results:  

- **Lowest note** (e.g., C2 – “like Elvis Presley”)  
- **Highest note** (e.g., A#4 – “like Melanie Martinez”)  

- **Helper Prompt:**  
  > Have you sung your lowest and highest notes?  
- **Button:** **Save the result** – stores results in the user's Singing Carrots account  

#### Post‑Save Details  
- The saved results are added to the user's vocal range chart, allowing users to track their progress over time.  
- More detailed singing stats can be accessed via the **Stats** page (a separate documentation page will cover it).  

---

---

## singing-carrots-weekly-competition-page.md

# Singing Carrots Weekly Competition Page: Full Technical Walkthrough

Page URL:  
<https://singingcarrots.com/weekly-standings>

**Purpose:**  
This page displays the weekly leaderboard for users participating in Pitch Training. It ranks users by the number of carrot points earned through vocal practice, encouraging friendly competition and consistent progress.

---

## Section 1: Page Header
**Title:**  
Weekly competition  
*(A squared flag icon appears next to the title.)*

---

## Section 2: Week Selector

### Week Selector
A horizontal scrolling date selector displays the current and surrounding weekly date ranges.  
*Example:*  
21 Jul – 27 Jul ← 28 Jul – 03 Aug → 04 Aug – 10 Aug  
* Clicking a date range loads rankings for that specific week.  
* Arrows allow navigation to earlier or later weeks.

### Countdown Timer
* **Label:**  
  Until current week end:
* **Format:**  
  Live countdown in the format **2D:5H:19M** (Days:Hours:Minutes)

### Question-mark Icon (hover tooltip)
> “Your week end might be different from the week end of other players. It depends on your timezone. E.g., players from Tokyo will start and finish the week much earlier than players from the US.”

---

## Section 3: Join the Competition Call-to-Action
Join this week competition in pitch training. Each week you get a chance to finish in the top 3 and engrave your name on the hall of fame.  
* **pitch training** → <https://singingcarrots.com/pitch-training>  
* **hall of fame** → <https://singingcarrots.com/hall-of-fame>

---

## Section 4: User Position Overview
Your position: **X out of Y**  
*Example:* 124 out of 334  
Displays the current user’s ranking based on the total carrot points earned this week.

---

## Section 5: Weekly Leaderboard Table

Each row in the leaderboard includes:  
* Profile Picture  
* Clickable Username → links to user's public profile  
* **Position Change Indicator**  
  * Example: +15 or –7  
  * Color-coded (green for gain, red for loss)  
  * On hover: “Positions compared to last week”  
* **Carrot Points Earned This Week**  
  * Displayed next to a carrot icon

**Sorting:**  
Users are ranked in descending order by weekly carrot points earned.

---

## Section 6: Feedback Prompt
Do you enjoy our tools?  
**Button:** Help us improve  
Link target: <https://singingcarrots.com/help-carrots>

---

