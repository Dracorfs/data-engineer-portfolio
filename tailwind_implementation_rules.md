# Tailwind Implementation Guide

Portfolio UI Design System

This document defines **implementation rules for Tailwind CSS** so an AI assistant (or developer) can generate consistent UI components that match the design system.

The goal is to prevent inconsistent spacing, radius, shadows, and typography.

---

# 1. Global Layout Rules

## Max Width

All main sections must be constrained.

```
max-w-6xl
mx-auto
px-6
```

Optional larger layout:

```
max-w-7xl
```

---

## Section Spacing

Use consistent vertical rhythm.

```
py-24
```

or

```
py-28
```

Avoid smaller sections like `py-10` or `py-12` for main content areas.

---

# 2. Typography

## Font

Use **Inter** globally.

Tailwind config:

```js
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"]
}
```

---

## Headings

### H1

```
text-4xl
md:text-5xl
font-semibold
tracking-tight
```

### H2

```
text-3xl
md:text-4xl
font-semibold
tracking-tight
```

### H3

```
text-xl
md:text-2xl
font-semibold
```

---

## Body Text

```
text-base
text-gray-400
leading-relaxed
```

Important paragraphs:

```
text-lg
```

---

# 3. Color System

## Background

Primary:

```
bg-slate-950
```

Secondary section:

```
bg-slate-900
```

Light sections (optional):

```
bg-white
```

---

## Text Colors

Primary:

```
text-white
```

Secondary:

```
text-gray-400
```

Muted:

```
text-gray-500
```

---

# 4. Glass Card Component

Standard glass card style.

```
rounded-3xl
border
border-white/20
bg-white/10
backdrop-blur-xl
shadow-xl
```

Padding:

```
p-8
```

Optional stronger blur:

```
backdrop-blur-2xl
```

---

# 5. Contact Card (Profile Style)

Structure:

```
flex
flex-col
items-center
gap-4
text-center
```

Card container:

```
rounded-3xl
border
border-white/20
bg-white/10
backdrop-blur-xl
shadow-xl
p-8
```

Profile image:

```
w-24
h-24
rounded-full
object-cover
```

Name:

```
text-xl
font-semibold
text-white
```

Role:

```
text-gray-400
text-sm
```

---

# 6. Status Badge

Example: "Open to opportunities"

```
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-emerald-500/10
text-emerald-400
text-sm
font-medium
```

Status dot:

```
w-2
h-2
rounded-full
bg-emerald-400
```

---

# 7. Buttons

## Primary Button

```
inline-flex
items-center
justify-center
gap-2
px-6
py-3
rounded-full
bg-white
text-slate-900
font-medium
transition
duration-200
hover:scale-[1.02]
```

---

## Secondary Button

```
rounded-full
border
border-white/20
px-6
py-3
text-white
hover:bg-white/10
transition
```

---

# 8. Input Fields

Input style:

```
w-full
rounded-xl
border
border-white/20
bg-white/10
px-4
py-3
text-white
placeholder:text-gray-500
focus:outline-none
focus:ring-2
focus:ring-blue-500
```

Textarea:

```
min-h-[120px]
resize-none
```

---

# 9. Social Icons

Container:

```
flex
items-center
justify-center
gap-4
```

Icon button:

```
w-10
h-10
flex
items-center
justify-center
rounded-lg
bg-white/10
hover:bg-white/20
transition
```

Icon size:

```
w-5
h-5
```

---

# 10. Subtle Radial Gradient

Use behind section titles.

```
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]
```

Opacity adjustment if needed:

```
opacity-60
```

---

# 11. Noise Texture Layer

Optional noise overlay to avoid flat UI.

```
absolute
inset-0
opacity-[0.03]
mix-blend-overlay
pointer-events-none
```

---

# 12. Hover Effects

Cards:

```
transition
duration-300
hover:-translate-y-1
```

Buttons:

```
hover:scale-[1.02]
```

Icons:

```
hover:text-blue-400
```

---

# 13. Grid Layouts

Projects grid:

```
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
```

Two column layout:

```
grid
lg:grid-cols-2
gap-12
items-start
```

---

# 14. Contact Section Layout

Recommended layout:

```
grid
lg:grid-cols-2
gap-16
items-start
```

Left:

Form

Right:

Profile / contact card

---

# 15. Motion Rules

All animations should remain subtle.

Default transition:

```
transition
duration-200
ease-out
```

Avoid:

* bounce animations
* long transitions
* aggressive transforms

---

# 16. Component Radius Rules

Consistency rule:

| Component | Radius         |
| --------- | -------------- |
| Cards     | `rounded-3xl`  |
| Buttons   | `rounded-full` |
| Inputs    | `rounded-xl`   |
| Badges    | `rounded-full` |

Never mix random radii.

---

# 17. Image Style

Use:

```
object-cover
rounded-2xl
```

Portrait:

```
aspect-[4/5]
```

Project preview:

```
aspect-video
```

---

# 18. Spacing System

Preferred spacing:

```
gap-4
gap-6
gap-8
gap-12
```

Avoid very tight spacing like `gap-2` for main layouts.

---

# 19. Consistency Rules

All components must respect:

* same radius scale
* same shadow scale
* same spacing rhythm
* same icon style
* same hover behavior

Consistency matters more than visual complexity.

---

# 20. Target Visual Result

The UI should feel:

* calm
* premium
* minimal
* modern
* spacious

Comparable to modern:

* designer portfolios
* SaaS landing pages
* Apple-inspired UI design.
