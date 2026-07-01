# AI Agent & Development Guidelines for Merceque

## Core Directives
1. **Performance is King:** The primary goal is a fluid, lag-free 3D experience. Load times must remain under 2s.
2. **Brutalist & Minimalist:** Stick strictly to the defined `design.md`. Do not add soft shadows or rounded corners unless specifically directed. Use 1px solid borders.
3. **Nature & Bamboo Theme:** Adhere to the nature green (`#2E8B57`, `#00FF7F`) and bamboo tones (`#E8C396`) on top of a dark mode (true black/charcoal) base.
4. **Mobile-First 3D:** All WebGL/Three.js components must be designed to downgrade gracefully or run optimally on mobile GPUs.

## Tech Stack
- **Framework:** Next.js (App Router, React Server Components)
- **Styling:** Tailwind CSS (configured for the custom color palette and typography)
- **3D Rendering:** React Three Fiber (R3F), Drei, and Three.js
- **Animations:** Framer Motion (DOM) and GSAP or Framer Motion 3D (WebGL)
- **State Management:** Zustand (if needed for global 3D interaction state)

## Implementation Rules
1. **Component Separation:** Isolate 3D components (`<Canvas />`) from DOM components. Use `next/dynamic` to lazy load all 3D heavy components.
2. **Asset Optimization:** Use `.glb`/`.gltf` formats heavily optimized via Draco compression. Do not load large texture maps.
3. **Scroll Animations:** Utilize Framer Motion's `useScroll` and `useTransform` to tie animations directly to the scroll timeline.
4. **CSS Noise:** Implement the film grain via a lightweight SVG data-URI applied to a fixed `::before` pseudo-element on the `body` or a dedicated background component.

## Workflow
1. Initialize Project.
2. Set up layout, fonts, and base Tailwind config.
3. Construct DOM structure with 1px borders and typography.
4. Integrate R3F Canvas and build the 3D Hero.
5. Tie DOM scroll events to 3D object properties.
6. Build Products and Contact forms using brutalist aesthetics.
7. Optimize and test across devices.
