---
title: Singing Carrots Contact Page
description: >-
  The Singing Carrots Contact Page (https://singingcarrots.com/contact) serves
  as the primary communication hub for users, customers, educators, media
  representatives, and potential partners. It includes a responsive contact
  form, helpful visual guidance, and an extensive Frequently Asked Questions
  (FAQ) section to address common inquiries before contacting support.

  This documentation outlines the layout, user flow, form behavior, and embedded guidance provided on the page to ensure smooth support interactions.
---
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
