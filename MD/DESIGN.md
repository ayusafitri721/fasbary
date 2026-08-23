---
name: Blueprint Portfolio
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#516070'
  on-secondary: '#ffffff'
  secondary-container: '#d5e4f8'
  on-secondary-container: '#576676'
  tertiary: '#3e4555'
  on-tertiary: '#ffffff'
  tertiary-container: '#555c6e'
  on-tertiary-container: '#ced5ea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#d5e4f8'
  secondary-fixed-dim: '#b9c8db'
  on-secondary-fixed: '#0e1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#dce2f7'
  tertiary-fixed-dim: '#c0c6db'
  on-tertiary-fixed: '#141b2b'
  on-tertiary-fixed-variant: '#404758'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  stats-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 64px
  margin-x-mobile: 20px
  section-gap: 120px
  grid-unit: 40px
---

## Brand & Style
The design system embodies a **Modern Professional** aesthetic tailored for high-fidelity digital product design. It balances the precision of an architectural blueprint with the approachability of a contemporary SaaS product.

The visual narrative is defined by:
- **Structure & Precision:** A pervasive grid background suggests a methodical, systematic approach to design.
- **Dynamic Professionalism:** High-contrast typography and a vibrant royal blue accent create an energetic yet trustworthy atmosphere.
- **Layered Clarity:** Use of large-scale background text ("ETHAN", "DESIGNER") adds depth and environmental storytelling without cluttering the functional UI layers.
- **Human-Centricity:** Large, high-quality photography and rounded UI elements soften the technical grid, making the professional expertise feel accessible.

## Colors
The palette is rooted in a "Deep Tech Blue" theme, utilizing high-saturation accents against a pristine, neutral canvas.

- **Primary (Royal Blue):** Used for primary actions, buttons, and critical highlights to drive engagement.
- **Secondary (Sky Tint):** Used for subtle background gradients, hover states, and light containers to maintain a soft, airy feel.
- **Tertiary (Ink Black):** Reserved for primary headings and body text to ensure maximum legibility and a grounded feel.
- **Neutral/Surface:** A range of cool whites and light greys used for card backgrounds and the technical grid lines.
- **Accents:** Occasional use of light blue-to-white gradients to create depth in the "hero" and "footer" sections.

## Typography
The system utilizes **Plus Jakarta Sans** exclusively to achieve a modern, geometric, yet friendly appearance. 

- **Display Text:** Large-scale headings use heavy weights and tight letter spacing to create a "bold" and confident presence.
- **Hierarchical Contrast:** "Sub-labels" (like "About Me" or "Service") use a medium weight with increased letter spacing and uppercase styling to act as section anchors.
- **Numerical Emphasis:** Stats and numbers are treated as visual elements, using the largest weights to showcase achievements effectively.
- **Readability:** Body copy is kept at a comfortable 18px for long-form content, ensuring the portfolio is as readable as it is visual.

## Layout & Spacing
The layout follows a **Fixed-Width Centered Grid** for desktop and a **Fluid Single-Column** for mobile.

- **The Blueprint Grid:** A background decorative grid is set to 40px units. Design elements often align their edges to these grid lines to reinforce the "designer" persona.
- **Section Breathing Room:** A generous 120px vertical gap is maintained between major sections to prevent visual fatigue and allow the large typography to shine.
- **Grid System:** A 12-column system is used for content organization. Cards in the "Services" section typically span 6 columns on desktop (2x2 grid) and 12 columns on mobile.
- **Margins:** Desktop layouts utilize a wide 64px horizontal margin to maintain a premium, high-end editorial feel.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Subtle Shadows** rather than heavy skeuomorphism.

- **Cards:** Use a solid white background against the light-grey grid, paired with a very soft, diffused low-opacity shadow (e.g., `0px 4px 20px rgba(0,0,0,0.04)`).
- **Glass Effects:** Subtle backdrop blurs are applied to the navigation bar when scrolling to maintain context while keeping the "clean" aesthetic.
- **Layered Text:** Large, semi-transparent background typography (10% opacity) sits behind foreground elements, creating a 3D environment within a 2D space.
- **Interactive Depth:** Buttons utilize a slight "lift" effect (increase in shadow spread) on hover to indicate tactility.

## Shapes
The shape language is **Softly Rounded**, balancing the rigid 90-degree angles of the background grid.

- **Standard Containers:** Content cards and service blocks use a `1rem` (16px) corner radius.
- **Interactive Elements:** Buttons and pills use a fully rounded "pill" shape to distinguish them from structural content.
- **Media:** Images and profile photos should follow the `1rem` radius to maintain a consistent visual rhythm with the card containers.
- **Icons:** Circular containers are used for social links to provide a distinct "touch target" look.

## Components

### Buttons
- **Primary:** Pill-shaped, royal blue background, white text, and a right-pointing arrow icon for "CTA" clarity.
- **Outline:** Pill-shaped, thin blue border, blue text. Used for secondary actions.
- **Icon Buttons:** Circular white backgrounds with centered icons, used for social media links.

### Cards (Service/Portfolio)
- White background with `rounded-lg` corners.
- Features a subtle 1px border (`#E5E7EB`) and a soft shadow.
- Top-aligned numerical indicators (e.g., "01", "02") in a light grey font to establish sequence.

### Testimonials
- Uses a large-scale quotation mark in the primary blue as a decorative anchor.
- High-contrast between the quote (Body LG) and the attribution (Body MD Bold).

### Input Fields
- Clean, 1px bordered boxes with `rounded-md` corners.
- Focused state should use the primary blue for the border and a subtle light-blue glow.

### Stats Block
- Horizontally aligned on desktop, vertically stacked on mobile.
- Features a large bold number followed by a smaller, grey-tinted label.
