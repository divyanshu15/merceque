# Merceque Design System

## Aesthetic Vision
**Theme:** Minimalist & Brutalist Fusion
**Core Feel:** Dark, crisp, grounded, and physical, merging brutalist structure with elegant, organic 3D elements.

## Color Palette
- **Background:** True Black (`#000000`) to Charcoal (`#121212`)
- **Primary Accent (Nature Green):** Deep forest green to vibrant leaf green (e.g., `#2E8B57`, `#00FF7F`)
- **Secondary Accent (Bamboo):** Warm, natural bamboo tones (e.g., `#E8C396`, `#D4A373`)
- **Borders & Separators:** Subtle gray or dim green (`#333333` or `#1A4D2E`)
- **Typography:** Off-white (`#F5F5F5`) for primary text, muted gray (`#A3A3A3`) for secondary text.

## UI Elements
- **Borders:** 1px solid borders for all container separation.
- **Shadows:** NO heavy drop shadows. Rely on border contrast and physical geometry.
- **Texture:** Lightweight CSS noise/film grain overlay across the entire application to provide a tactile feel without heavy asset costs.
- **Buttons:** High-contrast accent colors (Nature Green / Bamboo) with sharp, unrounded corners (Brutalist).

## 3D & Interactivity
- **Hero Object:** A low-poly 3D bamboo product/nature element that reacts to scroll and mouse movement.
- **Scroll Experience:** Scroll-driven animations replacing static scroll. Elements fade, slide, and rotate into place based on scroll progress.
- **Typography:** Kinetic typography in the About/Features section (font weight/width altering dynamically based on scroll position).

## Optimization Mandate
- **No-Lag:** Strict adherence to high-performance rendering.
- **3D Assets:** Heavily optimized, low-poly models only. Lazy-loaded and initialized asynchronously.
- **Load Time:** Sub-2 seconds.
- **Mobile-First:** Fluid, responsive, and performance-tested on mobile hardware.
