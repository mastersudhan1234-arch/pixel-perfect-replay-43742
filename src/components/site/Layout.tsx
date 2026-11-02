import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Recycle, Mail, Phone, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, categories, whatsappLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/recycling", label: "Recycling" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="grid size-10 place-items-center rounded-xl bg-lime text-forest">
        <Recycle className="size-5" />
      </span>
      <span className={`font-display text-lg font-extrabold ${light ? "text-forest-foreground" : "text-forest"}`}>
        SRI KRISHNA<span className="font-medium opacity-70"> PLASTIC</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-background"}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-forest" activeProps={{ className: "bg-secondary !text-forest" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="forest" size="lg"><Link to="/contact">Get a Quote</Link></Button>
        </div>
        <button className="grid size-11 place-items-center rounded-full bg-secondary text-forest lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="container-x animate-rise flex flex-col gap-1 pb-6 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-forest hover:bg-secondary" activeProps={{ className: "bg-secondary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Button asChild variant="forest" size="xl" className="mt-2"><Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link></Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-gradient-forest text-forest-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm leading-relaxed text-forest-foreground/70">{site.description}</p>
          <div className="flex gap-2">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} className="rounded-full border border-forest-foreground/20 px-3 py-1.5 text-xs hover:bg-lime hover:text-forest">{s.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lime">Quick links</h3>
          <ul className="space-y-2 text-sm text-forest-foreground/75">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-lime">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lime">Products</h3>
          <ul className="space-y-2 text-sm text-forest-foreground/75">
            {categories.map((cat) => <li key={cat.id}><Link to="/products" search={{ category: cat.id }} className="hover:text-lime">{cat.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lime">Contact</h3>
          <ul className="space-y-3 text-sm text-forest-foreground/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" /><address className="not-italic leading-relaxed">{c.address}</address></li>
            <li className="flex gap-2"><Phone className="size-4" /><a href={`tel:${c.phone}`}>{c.phone}</a></li>
            <li className="flex gap-2"><Mail className="size-4" /><a href={`mailto:${c.email}`}>{c.email}</a></li>
            <li className="flex gap-2"><MessageCircle className="size-4" /><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp us</a></li>
            <li className="flex gap-2"><Navigation className="mt-0.5 size-4 shrink-0" /><a href={c.directions} target="_blank" rel="noreferrer" className="font-semibold text-lime hover:text-foreground">Get Directions</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10">
        <p className="container-x py-6 text-xs text-forest-foreground/60">© {new Date().getFullYear()} {site.name}. All rights reserved. Placeholder details shown — replace before launch.</p>
      </div>
    </footer>
  );
}
