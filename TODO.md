# Project TODO

## [x] Responsive page shell and introductory header
- Use React + TypeScript + Tailwind CSS + lucide-react.
- Use full-screen dark background `#0a0a0a`, white text, Inter font with antialiased smoothing.
- Top header row: left side heading `Hi, I'm Suresh!` (size `text-[28px] sm:text-3xl md:text-4xl lg:text-[44px]`, leading `1.15`, font-normal, tracking-tight) followed by: `A multidisciplinary developer and designer creating modern websites, scalable applications, and purposeful digital experiences. Combining technical expertise with creative thinking, I help transform ideas into products that are functional, engaging, and built to make an impact.` (text-sm md:text-[15px], `leading-[1.6]`, text-white/60, max-w-3xl). Header container has `max-w-3xl`.
- Right side of header: liquid-glass rounded-full button `Let’s Build Something Great Together` (`px-5 sm:px-6`, `py-2.5 sm:py-3`).
- Overall section padding: `px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10`; full screen at `lg:h-screen`.
- Main grid: 3 columns on `lg`, 2 on `md`, 1 on mobile, with `gap-4 md:gap-5`.

## [x] Background, client voice, and achievement cards
- Column 1 Background card has `rounded-2xl`, `bg-black`, and video `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4` with `autoPlay`, `loop`, `muted`, `playsInline`, absolute inset-0 and `object-cover`.
- Its top label is centered `BACKGROUND` (uppercase, `tracking-[0.22em]`, `text-[11px]`, `text-white/70`) with Sparkle icons on both sides (`h-3 w-3`, `strokeWidth={1.5}`). Its bottom career timeline is a 4-column `[auto_auto_1fr_auto]` grid with: `2023-Now · Freelance Creative · Solo Studio`; `2020-2023 · Head of Brand Design · Rove Studio`; `2017-2020 · Visual Stylist · Ember Works`. Place a Sparkle icon (`h-3 w-3`, `text-white/60`) between year and role.
- Column 2 uses stacked rows with `md:grid-rows-[auto_1fr]`. Top Client Voice card has `rounded-2xl`, `bg-[#324444]`, `p-5 md:p-6`, and `noise-overlay`; left-aligned `CLIENT VOICE` label with Sparkle icons (`justify-start`); quote `Max reshaped our image with a degree of finesse and vision that surpassed what we'd hoped for. The process felt graceful, and the outcomes speak for themselves.` (`text-[13px] sm:text-[13.5px]`, `leading-[1.6]`, `text-white/85`); attribution **Elena Brooks**, Creative Director — Halcyon.
- Bottom 10M+ card has `rounded-2xl`, `bg-black`, and background video `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4`. Center huge `10M+` (`text-5xl sm:text-6xl md:text-7xl lg:text-[88px]`, `font-light`, `tracking-tight`, drop shadow) with bottom centered caption `Raised for startups` (`text-white/85`).

## [x] Daily Software and Reach Me cards
- Column 3 stacks two cards. Top Daily Software card has `rounded-2xl`, `bg-black`, video `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4`, and top `DAILY SOFTWARE` section label.
- Its bottom contains two scrolling marquee rows of liquid-glass icon tiles (`h-14 w-14 md:h-16 md:w-16`, `rounded-xl`). Row 1 scrolls left with [Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome]. Row 2 scrolls right with [Camera, Brush, Box, Wand2, Figma, Framer, Type, Layers]. Duplicate each row for a seamless loop. Fade both mask edges with `[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]`.
- Bottom Reach Me card has `rounded-2xl`, `bg-[#324444]`, `p-5 md:p-6`, and `noise-overlay`; `REACH ME` section label; email `hello@suresh.app`; phone `+60 10 4368 680`; top-right ArrowUpRight icon button (`h-9 w-9 rounded-full`).

## [x] Shared visual effects, icon styling, and responsive behavior
- In `index.css`, implement `.liquid-glass` with `background: rgba(255, 255, 255, 0.01)`, `background-blend-mode: luminosity`, `backdrop-filter: blur(4px)`, inset shadow `0 1px 1px rgba(255, 255, 255, 0.1)`, `position: relative`, and `overflow: hidden`.
- Implement `.liquid-glass::before` with empty content, absolute inset 0, inherited border radius, 1.4px padding, vertical border gradient with stops `rgba(255,255,255,0.45)` at 0% and 100%, `rgba(255,255,255,0.15)` at 20% and 80%, transparent at 40% and 60%, dual white masks with `-webkit-mask-composite: xor` and `mask-composite: exclude`, and `pointer-events: none`.
- Implement `marquee-left` from `translateX(0)` to `translateX(-50%)`; `marquee-right` from `translateX(-50%)` to `translateX(0)`; `.animate-marquee-left` runs 22s linear infinite and `.animate-marquee-right` runs 26s linear infinite.
- Implement `.noise-overlay::after` with empty content, absolute inset, no pointer events, opacity 0.55, `mix-blend-mode: soft-light`, the supplied inline 240×240 fractal-noise SVG background, and `background-size: 240px 240px`.
- Use lucide-react icons `ArrowUpRight`, `Sparkle`, `Figma`, `Framer`, `Palette`, `PenTool`, `Layers`, `Type`, `Aperture`, `Chrome`, `Camera`, `Brush`, `Box`, and `Wand2` where available; all icons use `strokeWidth={1.5}`.
- Preserve readable contrast and keyboard-accessible links while keeping all supplied content and media intact at mobile, tablet, and desktop breakpoints.
