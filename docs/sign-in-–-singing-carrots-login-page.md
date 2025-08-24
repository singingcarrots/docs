---
title: Singing Carrots Login Page
description: Access your Singing Carrots account to continue vocal training. Log
  in with Google, Facebook, email link, or password to track progress and
  practice singing with our tools.
---
# Singing Carrots Login Page: Full Technical Walkthrough

## Overview
The Login page provides multiple ways for users to access their Singing Carrots account. Options include third-party authentication (Google or Facebook), email link login, and direct password login. It also guides users through troubleshooting common login issues and password recovery.

---

## Step-by-Step User Flow

### Step 1: Page Header
- **Title:** Sign in to your account  
- **Subtitle:** Do not have an account yet? Create an account  
- The "Create an account" link leads to: <https://singingcarrots.com/sign-up>

---

### Step 2: Third-Party Login Options
- **Sign in with Google**  
  Opens a Google authentication window where the user can choose their Google account.
- **Log in with Facebook**  
  Intended to log in with Facebook credentials.

---

### Step 3: Log in with Email (Passwordless Authentication)
- **Link:** Log in with email  
- **Form fields:**
  - Your email input field
  - Next button
- **Behavior after submission:**
  - A message is displayed:
    - **Log in email sent**  
      A sign-in email with additional instructions was sent to [user email]. Check your email to complete sign-in.
- **Troubleshooting Option:**
  - **Button:** Trouble getting email?  
    Expands to show common fixes:
    - Check if the email was marked as spam or filtered.
    - Verify internet connection.
    - Confirm the email address is spelled correctly.
    - Check if inbox space is full or other inbox settings block delivery.
    - If issues persist, reload the page and try again. Doing so resends the email but deactivates the older login link.

---

### Step 4: Log in with Password
- **Section:** Log in with password  
- **Fields:**
  - Your email
  - Password
  - **Button:** Next
- **Error handling:**
  - If no user exists:  
    *Error: There is no user record corresponding to this identifier. The user may have been deleted.*
  - If the password is wrong:  
    *Error: The password is invalid or the user does not have a password.*
- **Additional Help Text:**
  - Forgot or do not have a password? Log in with email link and set a new password from the settings page.
