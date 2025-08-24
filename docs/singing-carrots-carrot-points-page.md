---
title: Singing Carrots Carrot Points Page
description: View your complete Carrot Points history on Singing Carrots. Track
  rewards from level completions, daily goals, course tasks, replays, and
  practice hits. Stay motivated with detailed logs of your singing progress.
---
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
