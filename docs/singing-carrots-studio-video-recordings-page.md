---
title: "Singing Carrots Studio: Video Recordings Page"
description: >-
  The Video Call Recordings page allows Singing Carrots teachers to view and
  manage video call recordings and transcripts from their virtual classroom
  sessions.  

  It serves as a central archive for past lessons, giving educators access to both the video files and automatically generated transcripts.
---

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
