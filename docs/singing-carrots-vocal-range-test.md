---
title: Singing Carrots Vocal Range Test
description: Use Singing Carrots’ interactive vocal range test to find your
  lowest and highest notes, get real-time feedback, and compare your voice to
  famous singers. Save your results and track your vocal progress online.
---
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
