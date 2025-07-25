---
title: Singing Carrots My Profile Page
description: Manage your Singing Carrots account, update your password and
  avatar, control public visibility, view purchases, and access your personal
  repertoire.
---
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
