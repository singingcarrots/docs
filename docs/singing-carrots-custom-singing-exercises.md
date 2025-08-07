---
title: Singing Carrots Custom Singing Exercises
description: Upload your own melodies as MIDI files and turn them into
  interactive pitch training exercises. Practice any song, loop sections, and
  share with others on Singing Carrots.
---
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
