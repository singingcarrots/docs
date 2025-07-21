---
title: Singing Carrots Stats Page
description: Track your vocal range, pitch accuracy, and daily practice with
  interactive graphs and filters on the Singing Carrots Stats Page.
---
# Singing Carrots Stats Page: Full Technical Documentation  
**URL:** <https://singingcarrots.com/stats>

---

## Overview  
The Singing Carrots **Stats Page** is a personalized dashboard that tracks a user's singing development over time. It focuses on three main areas: **vocal range progress, pitch accuracy, and practice quantity**. Interactive graphs, filters, and dynamic feedback help users reflect on their improvement and inform their next steps in vocal training.  
This documentation covers all interface elements and user interactions on the page.

---

## 1. Page Header  
- **Title:** “My statistics”  
- **Icon:** Small graph icon displayed next to the title  

---

## 2. Vocal Range Progress  

### 2.1. Graph Section  
A block graph visualizing the evolution of the user’s vocal range over time.

**Tabs above the graph**  
- **Last 7 attempts** (default view)  
- **Custom range**  

**Graph Legend** (always visible above chart)  
- **Yellow line:** Highest note reached  
- **Blue line:** Lowest note reached  

#### Last 7 Attempts View  
- **X‑axis:** Dates of the last 7 vocal range tests (e.g., Jun 23, Jun 24, …).  
- **Y‑axis:** Note index numbers (from ~10 to 55 or 60).  
- **Data points:**  
  - Yellow dots for highest note on each test day  
  - Blue dots for lowest note  
- **Hover effect:** Shows details like: `Year‑month‑date  note:index value from Y axis`  
- **Interactivity:** Clicking **“Highest note”** or **“Lowest note”** in the legend toggles their visibility.

#### Custom Range Tab  
- Replaces the 7‑day view with a date‑range dropdown and interactive calendar.  
- **Dropdown options:**  
  - Today  
  - Yesterday  
  - Last 7 days  
  - Last 30 days  
  - Last 90 days  
  - 1 year  
  - Custom range  
- **Custom Range Selection:**  
  - Opens a calendar where users choose start and end dates  
  - **Buttons:** *Cancel* and *Apply*  
  - Graph updates to reflect the selected time frame  

### 2.2. Below Graph – Navigation Buttons  
- **Explore songs for your range** – Navigates to **Search Page**  
- **Do vocal range test** – Navigates to **Vocal Range Test**

---

## 3. Pitch Training Progress  

### 3.1. Section Header  
- **Title:** Pitch Training Progress  
- **Date Range Filter:** Same dropdown and calendar functionality as Vocal Range section  

### 3.2. Pitch Accuracy per Note  
Displays a horizontal piano keyboard (C2 → A#6) with pitch accuracy bars above each key.

- **Graph style:** A vertical accuracy bar extends upward from each piano key.  
- **Bar color segmentation:**  
  - **Green segment:** Percentage sung *in tune*  
  - **Yellow segment:** Percentage sung *out of tune*  
- **Bar height:** Reflects the number of attempts for that note.  
- **Hover functionality:** Reveals:  
  - Note name  
  - Percentage accurate/inaccurate  
  - Total attempts for that pitch  

**Purpose**  
- Evaluate pitch accuracy per note  
- Identify stable notes and areas needing work  
- Detect functional vocal range and possible vocal breaks between registers  

### 3.3. Pitch Accuracy Over Time  
- **Graph type:** Horizontal line graph  
- **Y‑axis:** Accuracy scale from 0 to 1  
- **X‑axis:** Dates from the selected range  
- Shows how pitch accuracy changes over time  

### 3.4. Amount of Practice  
- **Graph type:** Bar chart measuring notes practiced per day  
- **Y‑axis:** 0 → 400 (steps of 50)  
- **X‑axis:** Dates from selected range  
- **Bars:** Orange vertical bars above each date  
- **Hover info:** e.g., “Note hits: # (number of notes)”

---

## 4. Call‑to‑Action Button  
- **Button text:** Open Pitch Training  
- Navigates to the Singing Carrots **pitch training game**

---

## 5. Feedback Section (Page Footer)  
**Do you enjoy our tools?**  
*Help us improve* button → <https://singingcarrots.com/help-carrots>
