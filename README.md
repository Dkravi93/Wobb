
# README: Design Choices for Wobb Homepage Redesign

## Overview

This document outlines the design decisions made for the redesign of the Wobb homepage, including the rationale behind the selected color scheme, typography, spacing, and overall layout. If needed please run npm install -D tailwindcss postcss autoprefixer.

---

## Color Scheme

### Primary Colors:

* **Blue (#1E3A8A)** : Used as the primary accent color for text highlights, buttons, and interactive elements. Blue symbolizes trust, professionalism, and reliability, aligning with Wobb's brand identity.
* **Purple (#7C3AED)** : Incorporated as a secondary accent color in icons and subtle backgrounds to create a modern and approachable look.

### Neutral Colors:

* **White (#FFFFFF)** : Dominantly used for backgrounds to ensure a clean, uncluttered design.
* **Gray (#F3F4F6 - #6B7280)** : Applied for text, borders, and background sections to provide subtle contrasts and maintain readability.

#### Rationale:

The combination of blue and purple ensures a vibrant yet professional appearance, appealing to both influencers and brands. Neutral tones provide balance and readability, avoiding visual fatigue.

---

## Typography

### Fonts:

* **Primary Font:** Sans-serif system font (`font-sans`) for all text elements.
  * **Headings:** Bold and larger font sizes to create visual hierarchy.
  * **Body Text:** Regular weights for clarity and ease of reading.

### Text Sizes:

* **Heading Levels:**
  * `text-4xl` for the Hero Section title to grab attention.
  * `text-2xl` for section headers to ensure clear separation of content.
  * `text-lg` for body text to balance readability and aesthetic appeal.

#### Rationale:

Sans-serif fonts ensure a clean, modern look. The distinct sizes create a clear visual hierarchy, helping users navigate the page intuitively.

---

## Spacing

### Padding and Margins:

* **Container Spacing:**
  * `px-6` and `py-10` applied for consistent padding across sections.
* **Element Gaps:**
  * `space-x-4` for horizontal spacing in navigation menus.
  * `gap-6` for grid layouts to ensure balanced spacing between cards and features.

### Section Layout:

* A modular grid system (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) was used to achieve flexibility and responsiveness across devices.

#### Rationale:

Consistent spacing enhances readability and visual harmony. Using a grid-based layout ensures responsive design, catering to both desktop and mobile users.

---

## Features Section Design

* **Card Layout:**
  * Each feature is presented in a card with a clean white background and a shadow (`shadow` class) to create a floating effect.
  * Icons are displayed in circular containers with a subtle background color (`bg-purple-100`), reinforcing the secondary color theme.
* **Text Alignment:**
  * Centered text ensures focus and readability.
  * Iconography and headings provide quick visual cues about each feature.

#### Rationale:

The card design ensures that information is digestible and visually appealing. Consistent icon usage builds familiarity and enhances user experience.

---

## Responsiveness

* Media queries (`md`, `lg` breakpoints) were used to ensure the layout adapts seamlessly across various screen sizes.
* Example: Navigation switches from a flex-based horizontal layout to a sidebar for smaller devices.

#### Rationale:

Responsive design ensures accessibility for all users, regardless of device, enhancing usability and engagement.

---

## Conclusion

The redesign of the Wobb homepage prioritizes usability, aesthetic appeal, and brand consistency. By focusing on a harmonious color scheme, readable typography, and balanced spacing, the layout aims to deliver a seamless and engaging user experience.
