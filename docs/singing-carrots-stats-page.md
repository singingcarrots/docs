---
title: Singing Carrots Stats Page
description: Track your vocal range, pitch accuracy, and daily practice with
  interactive graphs and filters on the Singing Carrots Stats Page.
---
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
