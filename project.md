# AI Conference London 2025 - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page with hero and registration
├── confirmation.html       # Registration success page
├── main.js                # Core JavaScript functionality
├── resources/             # Local assets folder
│   ├── hero-ai.jpg        # Generated hero image
│   ├── speaker-1.jpg      # Speaker headshots
│   ├── speaker-2.jpg
│   ├── speaker-3.jpg
│   └── testimonial-bg.jpg # Background for testimonials
├── design.md              # Design philosophy
├── interaction.md         # Interaction design
└── project.md            # This project outline
```

## Page Breakdown

### index.html - Main Landing Page
**Sections:**
1. **Hero Area** (Full viewport)
   - Liquid metal shader background
   - Animated headline with typewriter effect
   - Countdown timer to event date
   - Primary CTA button

2. **Value Proposition** 
   - "Move beyond the hype" messaging
   - Key benefits with icon animations
   - Free access value highlight

3. **Speaker Showcase**
   - Horizontal scrolling speaker cards
   - Dr. Stephen Akintayo featured prominently
   - Interactive speaker details

4. **What You'll Gain**
   - Actionable frameworks
   - Exclusive insights
   - High-level connections
   - Future-proofing strategies

5. **Social Proof**
   - Testimonials with photos
   - Company logos (if available)
   - Attendee count from previous events

6. **Registration Form**
   - Multi-step progressive form
   - Real-time validation
   - Progress indicator

### confirmation.html - Success Page
**Sections:**
1. **Confirmation Message**
   - Success animation
   - Event details recap
   - Calendar integration buttons

2. **Next Steps**
   - What to expect
   - Preparation tips
   - Networking opportunities

3. **Share & Invite**
   - Social sharing buttons
   - Referral link generation

## Technical Implementation
- **Framework**: Vanilla HTML/CSS/JS with Tailwind CSS
- **Animations**: Anime.js for smooth transitions
- **Effects**: PIXI.js for hero background shader
- **Forms**: Native HTML5 with custom validation
- **Images**: Generated hero image, searched professional photos
- **Responsive**: Mobile-first with progressive enhancement