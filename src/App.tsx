import {
  Aperture,
  ArrowUpRight,
  Box,
  Brush,
  Camera,
  Chrome,
  Figma,
  Framer,
  Layers,
  Palette,
  PenTool,
  Sparkle,
  Type,
  Wand2,
  type LucideIcon,
} from 'lucide-react';

const videos = {
  background:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4',
  raised:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4',
  software:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4',
} as const;

const career = [
  { years: '2023-Now', role: 'Freelance Creative', studio: 'Solo Studio' },
  { years: '2020-2023', role: 'Head of Brand Design', studio: 'Rove Studio' },
  { years: '2017-2020', role: 'Visual Stylist', studio: 'Ember Works' },
] as const;

type SoftwareItem = {
  name: string;
  Icon: LucideIcon;
};

const softwareRows: SoftwareItem[][] = [
  [
    { name: 'Figma', Icon: Figma },
    { name: 'Framer', Icon: Framer },
    { name: 'Palette', Icon: Palette },
    { name: 'PenTool', Icon: PenTool },
    { name: 'Layers', Icon: Layers },
    { name: 'Type', Icon: Type },
    { name: 'Aperture', Icon: Aperture },
    { name: 'Chrome', Icon: Chrome },
  ],
  [
    { name: 'Camera', Icon: Camera },
    { name: 'Brush', Icon: Brush },
    { name: 'Box', Icon: Box },
    { name: 'Wand2', Icon: Wand2 },
    { name: 'Figma', Icon: Figma },
    { name: 'Framer', Icon: Framer },
    { name: 'Type', Icon: Type },
    { name: 'Layers', Icon: Layers },
  ],
];

function SectionLabel({
  children,
  align = 'center',
}: {
  children: string;
  align?: 'center' | 'start';
}) {
  return (
    <div
      className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <Sparkle aria-hidden="true" className="h-3 w-3 shrink-0" strokeWidth={1.5} />
      <span>{children}</span>
      <Sparkle aria-hidden="true" className="h-3 w-3 shrink-0" strokeWidth={1.5} />
    </div>
  );
}

function VideoBackdrop({ src, label }: { src: string; label: string }) {
  return (
    <>
      <video
        aria-hidden="true"
        autoPlay
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/75"
      />
      <span className="sr-only">{label}</span>
    </>
  );
}

function BackgroundCard() {
  return (
    <article
      aria-label="Background and career timeline"
      className="relative isolate flex min-h-[470px] flex-col overflow-hidden rounded-2xl bg-black p-5 sm:p-6 lg:h-full lg:min-h-0"
    >
      <VideoBackdrop src={videos.background} label="Ambient background video" />
      <div className="relative z-10 pt-1">
        <SectionLabel>Background</SectionLabel>
      </div>
      <div className="relative z-10 mt-auto space-y-1 pb-1 pt-16">
        {career.map(({ years, role, studio }) => (
          <div
            className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-x-1.5 border-t border-white/15 py-3 sm:gap-x-2"
            key={years}
          >
            <span className="whitespace-nowrap text-[10px] text-white/75 sm:text-[11px]">
              {years}
            </span>
            <Sparkle
              aria-hidden="true"
              className="h-3 w-3 text-white/60"
              strokeWidth={1.5}
            />
            <span className="min-w-0 text-[10px] font-medium leading-tight text-white/95 sm:text-[11px]">
              {role}
            </span>
            <span className="whitespace-nowrap text-right text-[9px] leading-tight text-white/65 sm:text-[10px]">
              {studio}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

function ClientVoiceCard() {
  return (
    <article className="noise-overlay relative isolate flex min-h-[245px] flex-col overflow-hidden rounded-2xl bg-[#324444] p-5 sm:p-6 lg:min-h-0">
      <div className="relative z-10">
        <SectionLabel align="start">Client Voice</SectionLabel>
      </div>
      <blockquote className="relative z-10 mt-5 max-w-[34rem] text-[13px] leading-[1.6] text-white/85 sm:text-[13.5px]">
        “Max reshaped our image with a degree of finesse and vision that surpassed
        what we&apos;d hoped for. The process felt graceful, and the outcomes speak
        for themselves.”
      </blockquote>
      <div className="relative z-10 mt-auto pt-5 text-[11px] leading-relaxed text-white/65 sm:text-xs">
        <span className="font-medium text-white">Elena Brooks</span>
        <span aria-hidden="true">, </span>
        Creative Director <span aria-hidden="true">—</span> Halcyon
      </div>
    </article>
  );
}

function RaisedCard() {
  return (
    <article
      aria-label="Ten million dollars raised for startups"
      className="relative isolate flex min-h-[255px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-black p-6 lg:min-h-0"
    >
      <VideoBackdrop src={videos.raised} label="Ambient achievement video" />
      <p className="relative z-10 mb-auto mt-auto text-5xl font-light tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-6xl md:text-7xl lg:text-[88px]">
        10M+
      </p>
      <p className="relative z-10 mt-auto text-center text-sm text-white/85">
        Raised for startups
      </p>
    </article>
  );
}

function SoftwareMarquee({ items, direction }: { items: SoftwareItem[]; direction: 'left' | 'right' }) {
  return (
    <div className="marquee-mask overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`marquee-track flex w-max items-center gap-3 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {[0, 1].map((copy) => (
          <div
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-3 pr-3"
            key={`${direction}-${copy}`}
          >
            {items.map(({ name, Icon }, index) => (
              <div
                className="liquid-glass flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white/85 transition-colors duration-300 hover:text-white md:h-16 md:w-16"
                key={`${name}-${index}`}
                title={name}
              >
                <Icon aria-hidden="true" className="relative z-10 h-[22px] w-[22px]" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function DailySoftwareCard() {
  return (
    <article className="relative isolate flex min-h-[315px] flex-col overflow-hidden rounded-2xl bg-black p-5 sm:p-6 lg:min-h-0">
      <VideoBackdrop src={videos.software} label="Ambient software video" />
      <div className="relative z-10">
        <SectionLabel>Daily Software</SectionLabel>
      </div>
      <div className="relative z-10 mt-auto space-y-3 pb-1 pt-12">
        <SoftwareMarquee items={softwareRows[0]} direction="left" />
        <SoftwareMarquee items={softwareRows[1]} direction="right" />
        <p className="sr-only">
          Daily software: Figma, Framer, Palette, PenTool, Layers, Type, Aperture,
          Chrome, Camera, Brush, Box, and Wand2.
        </p>
      </div>
    </article>
  );
}

function ReachMeCard() {
  return (
    <article
      className="noise-overlay relative isolate flex min-h-[220px] flex-col overflow-hidden rounded-2xl bg-[#324444] p-5 sm:p-6 lg:min-h-0"
      id="contact"
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <SectionLabel align="start">Reach Me</SectionLabel>
        <a
          aria-label="Email Suresh"
          className="liquid-glass relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/90 transition-transform duration-300 hover:-translate-y-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="mailto:hello@suresh.app"
          title="Email Suresh"
        >
          <ArrowUpRight aria-hidden="true" className="relative z-10 h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
      <div className="relative z-10 mt-auto space-y-1 pt-8 text-sm text-white/90">
        <a className="block w-fit transition-colors hover:text-white" href="mailto:hello@suresh.app">
          hello@suresh.app
        </a>
        <a className="block w-fit transition-colors hover:text-white" href="tel:+60104368680">
          +60 10 4368 680
        </a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-6 text-white antialiased sm:px-6 sm:py-8 md:px-10 md:py-10 lg:flex lg:h-screen lg:flex-col lg:overflow-hidden lg:px-14">
      <header className="mb-8 flex flex-col gap-5 sm:gap-6 lg:mb-7 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-[28px] font-normal leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[44px]">
            Hi, I&apos;m Suresh!
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-[1.6] text-white/60 md:text-[15px]">
            A multidisciplinary developer and designer creating modern websites,
            scalable applications, and purposeful digital experiences. Combining
            technical expertise with creative thinking, I help transform ideas
            into products that are functional, engaging, and built to make an
            impact.
          </p>
        </div>
        <a
          className="liquid-glass inline-flex w-fit shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-xs font-medium text-white/90 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:py-3 sm:text-[13px]"
          href="#contact"
        >
          <span className="relative z-10">Let’s Build Something Great Together</span>
        </a>
      </header>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:min-h-0 lg:flex-1 lg:grid-cols-3 lg:grid-rows-1">
        <BackgroundCard />

        <div className="grid gap-4 md:min-h-[520px] md:grid-rows-[0.92fr_1.08fr] md:gap-5 lg:h-full lg:min-h-0">
          <ClientVoiceCard />
          <RaisedCard />
        </div>

        <div className="grid gap-4 md:min-h-[520px] md:grid-rows-[1.18fr_0.82fr] md:gap-5 lg:h-full lg:min-h-0">
          <DailySoftwareCard />
          <ReachMeCard />
        </div>
      </div>
    </main>
  );
}
