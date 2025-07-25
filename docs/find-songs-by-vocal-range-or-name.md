---
title: Singing Carrots Song Search Page - Find Songs by Vocal Range or Name
description: Search thousands of songs by your vocal range, difficulty, genre,
  or artist. Use the interactive piano tool to find the songs that fit your
  voice. Add favorites to your personal repertoire.
---
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
- **Chords** – external link  
- **Sheet music** – external link  
- **Lyrics** – external link  
- **Sing karaoke** – external link  
- **Song details** – internal link to Singing Carrots song page  
- **Favorites (star + number)** – shows how many users added the song to their repertoire  

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
