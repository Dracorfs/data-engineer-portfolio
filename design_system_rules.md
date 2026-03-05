# Portfolio Design System

## 1. Design Philosophy

The visual direction should follow a **modern soft-glass editorial UI** aesthetic.
The goal is to create a portfolio that feels:

* minimal
* premium
* calm
* readable
* spacious

The interface should prioritize **clarity, hierarchy, and subtle depth** rather than strong visual effects.

Key principles:

* Soft contrast
* Large spacing
* Rounded shapes
* Subtle motion
* Glass / blur layering
* Clean typography

Avoid:

* harsh shadows
* heavy gradients
* saturated colors
* dense layouts
* aggressive animations

---

# 2. Typography

## Primary Font

Use:

```
Inter
```

Fallback stack:

```
Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif
```

Inter provides:

* excellent web readability
* neutral tone
* strong UI compatibility

---

## Type Scale

### Headings

```
H1
32–40px
font-weight: 600
letter-spacing: -0.02em
```

```
H2
26–30px
font-weight: 600
letter-spacing: -0.02em
```

```
H3
20–24px
font-weight: 600
```

---

### Body Text

```
16–18px
font-weight: 400
line-height: 1.5
```

---

### Secondary Text

```
14–16px
font-weight: 400
opacity: 0.75
```

---

### UI Labels

```
14–16px
font-weight: 500
```

---

# 3. Color System

The palette should be restrained and rely heavily on **opacity rather than multiple colors**.

## Background

```
Primary background
#0f172a (very dark blue / slate)
```

Alternative sections may use:

```
#111827
```

---

## Text

```
Primary text
#ffffff
```

```
Secondary text
rgba(255,255,255,0.75)
```

```
Muted text
rgba(255,255,255,0.55)
```

---

## Glass Surfaces

Glass surfaces use transparency instead of solid colors.

```
background: rgba(255,255,255,0.08)
border: 1px solid rgba(255,255,255,0.18)
backdrop-filter: blur(20px)
```

Optional stronger glass:

```
background: rgba(255,255,255,0.12)
backdrop-filter: blur(30px) saturate(1.4)
```

---

# 4. Layout and Spacing

The layout should feel **airy and balanced**.

Use consistent spacing scale:

```
8px
12px
16px
20px
24px
32px
40px
48px
64px
```

Preferred internal card padding:

```
24px – 32px
```

Section spacing:

```
80px – 120px
```

Avoid cramped layouts.

---

# 5. Border Radius

Soft rounded corners are a key part of the aesthetic.

Use:

```
Cards
28px – 36px
```

```
Buttons
20px – 28px
```

```
Pills / badges
999px
```

---

# 6. Shadows

Shadows should be **soft and diffuse**, not sharp.

Preferred shadow:

```
box-shadow:
0 10px 40px rgba(0,0,0,0.35)
```

Secondary shadow:

```
0 4px 20px rgba(0,0,0,0.25)
```

Avoid strong drop shadows.

---

# 7. Glass / Blur Effects

Glass surfaces are a major visual element.

Typical card style:

```
background: rgba(255,255,255,0.08)
border: 1px solid rgba(255,255,255,0.18)
backdrop-filter: blur(20px)
border-radius: 32px
```

Optional enhancement:

```
backdrop-filter: blur(30px) saturate(1.4)
```

---

# 8. Gradients

Gradients should be **subtle and mostly radial**.

Example radial background:

```
radial-gradient(
circle at center,
rgba(59,130,246,0.15),
transparent 60%
)
```

Used behind:

* section titles
* hero areas

Never use strong rainbow gradients.

---

# 9. Noise Texture

To avoid sterile blur surfaces, add subtle noise.

Noise settings:

```
opacity: 2–3%
mix-blend-mode: overlay
```

The noise must be barely visible.

---

# 10. Iconography

Use a **line icon system**.

Recommended library:

```
Lucide Icons
```

Icon style:

* thin lines
* minimal
* consistent stroke

Sizes:

```
18px
20px
22px
```

---

# 11. Buttons

Buttons should feel **soft and tactile**.

Primary button:

```
border-radius: 999px
padding: 12px 24px
font-weight: 500
```

Example style:

```
background: white
color: #111
```

Hover behavior:

```
transform: scale(1.02)
transition: 200ms ease
```

---

# 12. Cards

Cards should follow this structure:

```
rounded corners
soft shadow
glass surface
large padding
clear hierarchy
```

Typical card structure:

```
title
description
metadata
action
```

Spacing inside cards:

```
16px – 24px between elements
```

---

# 13. Motion and Interaction

Animations should be **minimal and smooth**.

Use:

```
transition: 200ms – 300ms ease
```

Typical hover effects:

### Card Hover

```
transform: translateY(-4px)
```

### Button Hover

```
transform: scale(1.02)
```

### Icon Hover

```
color accent change
```

Avoid:

* bouncing animations
* long transitions
* flashy effects

---

# 14. Image Style

Images should feel editorial and clean.

Recommended characteristics:

* soft lighting
* neutral backgrounds
* desaturated colors
* portrait framing
* shallow depth of field

Avoid:

* busy backgrounds
* heavy color grading

---

# 15. Content Hierarchy

Each section should follow a consistent structure:

```
Section Title
Section Description
Content Grid / Cards
```

Title styling:

```
large font
semi-bold
slightly tight letter spacing
```

---

# 16. Grid System

Use a flexible responsive grid.

Typical desktop layout:

```
12 column grid
max width: 1100–1200px
centered
```

Spacing between columns:

```
24px – 32px
```

---

# 17. Accessibility

Ensure:

* strong text contrast
* readable font sizes
* large clickable areas
* clear focus states

Minimum font size:

```
14px
```

---

# 18. Consistency Rules

All components must follow the same visual language.

Never mix:

* multiple border radius styles
* different shadow styles
* different icon styles
* inconsistent spacing

Consistency is critical for a polished design.

---

# 19. Overall Visual Tone

The final interface should feel:

* modern
* calm
* minimal
* refined
* spacious

It should resemble the design quality of:

* modern SaaS landing pages
* designer portfolios
* Apple-style UI aesthetics
