"use client";

import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import CursorGlow from "@/components/CursorGlow";
import SceneCanvas from "@/components/SceneCanvas";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { companyReferences, education, method, nav, personalReferences, profile, profileCards, specialties, timeline, tools, workVideos } from "@/lib/content";
import { assets } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;
const slug = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const tikTokUrl = (handle: string, id: string) => `https://www.tiktok.com/${handle}/video/${id}`;

function ScrollMeter() {
  const progress = useScrollProgress();
  return <motion.div className="scroll-meter" style={{ scaleX: progress }} />;
}

function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-nav">
      <a href="#inicio" className="brand-mark" aria-label="Ir al inicio">
        <span className="brand-avatar"><img src={assets.avatars.me} width={64} height={64} alt="" aria-hidden="true" /></span>
        <span className="brand-copy">
          <strong>Elquin</strong>
          <small>Editor audiovisual y marketing</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {nav.map((item) => <a key={item} href={`#${slug(item)}`}>{item}</a>)}
      </nav>

      <a className="nav-cta" href={`https://wa.me/57${profile.phone}`} target="_blank" rel="noreferrer">Hablemos</a>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menú"><Menu size={20} /></button>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu-panel" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }}>
              <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Cerrar menú"><X /></button>
              {nav.map((item) => <a key={item} href={`#${slug(item)}`} onClick={() => setOpen(false)}>{item}</a>)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.22], [0, -190]);
  const titleX = useTransform(scrollYProgress, [0, 0.22], [0, 42]);
  const personY = useTransform(scrollYProgress, [0, 0.22], [0, 82]);

  return (
    <section className="hero" id="inicio">
      <motion.div className="hero-bg-word" style={{ y: titleY, x: titleX }} aria-hidden="true">PORTAFOLIO</motion.div>

      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }}>
          <Sparkles size={16} /> {profile.heroLine}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08, ease }}>
          {profile.heroTitle}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .16, ease }}>
          {profile.manifesto}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .24, ease }}>
          <a className="button primary" href={`https://wa.me/57${profile.phone}`} target="_blank" rel="noreferrer">{profile.ctaPrimary}<ArrowUpRight size={18} /></a>
          <a className="button secondary" href="#videos">{profile.ctaSecondary}<ChevronDown size={18} /></a>
        </motion.div>
      </div>

      <motion.div className="hero-stage" style={{ y: personY }}>
        <motion.div className="hero-light-sweep" aria-hidden="true" />
        <motion.img className="hero-person-stack" src={assets.portraits.headStackFade} width={1122} height={1602} alt="Retrato creativo de Elquin Hernández" fetchPriority="high" initial={{ opacity: 0, scale: .96, y: 54 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .16, ease }} />
        <motion.img className="floating-object object-star" src={assets.objects.asterisk} width={491} height={737} alt="" aria-hidden="true" />
        <motion.img className="floating-object object-smile" src={assets.objects.smileOrb} width={491} height={737} alt="" aria-hidden="true" />
        <div className="quick-tags" aria-label="Especialidades rápidas">
          <span>Guion</span><span>Edición</span><span>Pauta</span><span>Marketplace</span>
        </div>
      </motion.div>
    </section>
  );
}

function Profile() {
  return (
    <section className="profile-section" id="perfil">
      <div className="section-header compact-left">
        <span className="section-kicker">Perfil profesional</span>
        <h2>{profile.role}</h2>
        <p>Integro creatividad, edición y criterio comercial para crear contenido que explique, conecte y genere conversaciones de venta.</p>
      </div>

      <div className="profile-grid">
        <article className="portrait-card">
          <img src={assets.portraits.sideNeonFade} width={1086} height={1448} alt="Elquin Hernández con iluminación naranja" loading="lazy" />
          <div>
            <strong>{profile.shortName}</strong>
            <span>{profile.city}</span>
          </div>
        </article>
        {profileCards.map((card) => (
          <article className="profile-card" key={card.title}>
            <span>{card.title}</span>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="resume-block">
        <div>
          <span className="section-kicker">Experiencia</span>
          {timeline.map((item) => (
            <article className="timeline-item" key={item.role}>
              <small>{item.period}</small>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div>
          <span className="section-kicker">Formación</span>
          <ul className="clean-list">
            {education.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="section-header">
        <div>
          <span className="section-kicker">Servicios</span>
          <h2>Servicios.</h2>
        </div>
        <p>Producción, edición, pauta y gestión comercial para negocios que venden en redes, WhatsApp, Marketplace o tienda física.</p>
      </div>
      <div className="services-grid">
        {specialties.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article className="service-card" key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .24 }} transition={{ duration: .6, delay: index * .04, ease }}>
              <span className="service-no">{String(index + 1).padStart(2, "0")}</span>
              <Icon size={24} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section" id="proceso">
      <div className="process-visual" aria-hidden="true">
        <img src={assets.objects.asterisk} width={491} height={737} alt="" />
      </div>
      <div className="section-header compact-left">
        <span className="section-kicker">Proceso</span>
        <h2>Proceso de trabajo.</h2>
        <p>Un flujo claro para convertir una oferta en contenido publicable, entendible y accionable.</p>
      </div>
      <div className="process-grid">
        {method.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article className="process-step" key={step.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .6, delay: index * .05, ease }}>
              <span>{step.kicker}</span>
              <Icon size={26} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function ToolMarquee() {
  const rows = useMemo(() => [...tools, ...tools], []);
  return (
    <section className="tool-marquee" aria-label="Herramientas">
      <div className="marquee-row">{rows.map((tool, index) => <span key={`${tool}-${index}`}>{tool}</span>)}</div>
    </section>
  );
}

function Videos() {
  return (
    <section className="section videos" id="videos">
      <div className="section-header">
        <div>
          <span className="section-kicker">Videos</span>
          <h2>Videos y proyectos.</h2>
        </div>
        <p>Selección de piezas publicadas. Los enlaces abren cada video directamente en TikTok.</p>
      </div>
      <div className="video-grid">
        {workVideos.map((video, index) => (
          <motion.a className="video-card" key={video.id} href={tikTokUrl(video.handle, video.id)} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .55, delay: index * .035, ease }}>
            <img src={video.image} width={900} height={1200} alt="" aria-hidden="true" loading="lazy" />
            <span className="video-card-shade" />
            <span className="video-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="video-info">
              <small>{video.category}</small>
              <strong>{video.title}</strong>
              <em>{video.focus}</em>
            </span>
            <span className="video-link">Ver video <ArrowUpRight size={15} /></span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function AvatarReferences() {
  return (
    <section className="avatar-section">
      <div className="avatar-panel">
        <div className="avatar-copy">
          <span className="section-kicker">Empresas y referencias</span>
          <h2>Personas y negocios vinculados a mi trabajo.</h2>
        </div>

        <div className="reference-grid companies">
          {companyReferences.map((item) => (
            <article className="reference-card company" key={item.company}>
              <div className="company-reference-head">
                <img src={item.avatar} width={100} height={100} alt="" aria-hidden="true" loading="lazy" />
                <small>Empresa</small>
              </div>

              <h3>{item.company}</h3>
              <strong>{item.contact}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>

        <div className="reference-grid personal">
          {personalReferences.map((item) => (
            <article className="reference-card personal-ref" key={item.name}>
              <span className="reference-initials" aria-hidden="true">{item.initials}</span>
              <div>
                <small>{item.role}</small>
                <h3>{item.name}</h3>
                <a href={`tel:+57${item.phone}`}>{item.phone}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-panel">
        <div>
          <span className="section-kicker">Contacto</span>
          <h2>Conversemos sobre tu próximo video o campaña.</h2>
          <p>Portafolio personal de {profile.name}. Producción audiovisual, edición de video, contenido vertical, campañas digitales, Marketplace y diseño comercial.</p>
        </div>
        <div className="contact-links">
          <a href={`tel:+57${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <span><MapPin size={18} /> {profile.city}</span>
        </div>
        <a className="button primary huge" href={`https://wa.me/57${profile.phone}`} target="_blank" rel="noreferrer">Iniciar conversación <ArrowUpRight /></a>
      </div>
    </section>
  );
}

export default function PortfolioExperience() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.86, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollMeter />
      <SceneCanvas />
      <CursorGlow />
      <div className="site-shell">
        <TopNav />
        <main>
          <Hero />
          <Profile />
          <Services />
          <Process />
          <ToolMarquee />
          <Videos />
          <AvatarReferences />
          <Contact />
        </main>
        <footer className="footer">© {new Date().getFullYear()} {profile.shortName}. Productor audiovisual y estratega de marketing.</footer>
      </div>
    </>
  );
}
