---
title: Manage Your Vocal Repertoire – Singing Carrots
description: Bookmark your favorite songs and track custom notes with the
  Singing Carrots Repertoire tool. Stay organized, monitor vocal progress, and
  personalize your singing journey with ease.
---
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
