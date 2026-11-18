# Nicholson Monument Company — React landing page

A responsive, five-section company landing page built with React + Vite, GSAP/ScrollTrigger, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Included

- Home, Information, Design, About, and Contact sections
- Six switchable themes (Classic Brown, Elegant Light, Modern Blue, Rose Heritage, Forest Green, Royal Purple); selected theme persists in local storage
- Responsive mobile navigation and layouts
- GSAP entrance animations and scroll-triggered hero parallax
- Scroll-scrubbed HTML5 video support: place your own licensed MP4 at `public/videos/memorial-story.mp4`. As the visitor scrolls through the hero's scroll range, the video seeks forward; scrolling upward rewinds it. The supplied hero image remains as the visual fallback until a video is added.
- Design gallery with category filters
- Contact form with first/last name, email, phone, optional file upload, question, and submit
- On submit, form values and attachment metadata are printed in the browser developer console. This is a front-end demo: it does not email, upload, or persist submissions.
- OpenStreetMap embed centered on Clinton, Oklahoma

## Customizing the hero video

Add an MP4 you own or are licensed to use as:

`public/videos/memorial-story.mp4`

Use an H.264 MP4 encoded for web playback. A silent video is recommended because the interaction is scroll-controlled. The GSAP ScrollTrigger maps scroll progress to `video.currentTime`, so it scrubs in both directions.

## Notes

- Gallery imagery uses remote Unsplash image URLs and requires internet access. Replace these with approved company photography for production.
- The generated hero fallback image is in `public/images/hero-memorial.jpg`.
- The map is an approximate Clinton, Oklahoma map center; verify the exact business pin/address before publishing.
- For real enquiries, connect the form to a backend/API, add server-side validation, and handle uploaded files securely. Browser-console logging is not a production submission workflow.
