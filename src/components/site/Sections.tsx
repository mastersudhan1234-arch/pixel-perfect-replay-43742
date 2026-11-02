import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight, Truck, Filter, Droplets, Scissors, CircleDot, ShieldCheck, Factory, Package, Store, Boxes, Cog,
  Leaf, SlidersHorizontal, Handshake, HeartHandshake, Award, Target, Eye, History, Briefcase, Phone, Mail, MapPin, Clock, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/machine-film-extrusion.jpg";
import facility from "@/assets/facility-recycling-wide.jpg";
import extruder from "@/assets/machine-recycling-extruder.jpg";
import bagMachine from "@/assets/machine-bag-making.jpg";
import filmRoll from "@/assets/machine-film-roll.jpg";
import { categories, products, productImage, site, whatsappLink, type Category } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl font-extrabold text-forest md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-gradient-forest text-forest-foreground">
      <div className="container-x animate-rise py-20 md:py-28">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-lime">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-forest-foreground/75">{text}</p>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-forest-foreground">
      <img src={hero} alt="Modern plastic recycling facility with extrusion machinery and recycled granules" width={1920} height={1088} className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="container-x flex min-h-[calc(100svh-5rem)] flex-col justify-center py-24">
        <div className="max-w-3xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 bg-forest-foreground/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Leaf className="size-3.5 text-lime" /> Recycling · Packaging · Polymers
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Building a Sustainable Future Through <span className="text-lime">Smarter Plastics.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-forest-foreground/80 md:text-xl">
            Reliable plastic recycling, quality packaging solutions, and industrial materials for businesses that build tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="lime" size="xl"><Link to="/products">Explore Our Products <ArrowRight /></Link></Button>
            <Button asChild variant="glass" size="xl"><Link to="/contact">Request a Quote</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutItems = [
  { icon: History, title: "Our History", text: "[Placeholder] Share how and when the company started, and how it has grown." },
  { icon: Briefcase, title: "Experience", text: "[Placeholder] Describe your team's experience in recycling and plastics supply." },
  { icon: Target, title: "Mission", text: "[Placeholder] To supply dependable plastic materials while reducing plastic waste." },
  { icon: Eye, title: "Vision", text: "[Placeholder] To be a trusted partner for sustainable plastics in our region." },
  { icon: Award, title: "Quality Commitment", text: "[Placeholder] Explain your inspection and quality-control approach." },
];

export function About() {
  return (
    <section className="py-24">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHead eyebrow="About EcoPoly" title="Turning used plastic into dependable material." text={`${site.name} focuses on plastic recycling, quality materials and reliable industrial supply — connecting collected plastic with the businesses that turn it into new products.`} />
          <Button asChild variant="forest" size="xl"><Link to="/about">More about us <ArrowRight /></Link></Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutItems.map((a, i) => (
            <div key={a.title} className={`rounded-3xl border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1 ${i === 0 ? "sm:col-span-2 bg-secondary" : ""}`}>
              <a.icon className="size-6 text-emerald" />
              <h3 className="mt-4 text-lg font-bold text-forest">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products({ initial = "all", limit }: { initial?: Category | "all"; limit?: number }) {
  const [filter, setFilter] = useState<Category | "all">(initial);
  const list = products.filter((p) => filter === "all" || p.category === filter);
  const shown = limit ? list.slice(0, limit) : list;
  const tabs = [{ id: "all" as const, label: "All Products" }, ...categories];
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead eyebrow="Product Catalogue" title="Materials for every stage of production." />
          <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
            {tabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={filter === t.id} onClick={() => setFilter(t.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${filter === t.id ? "bg-forest text-forest-foreground shadow-soft" : "bg-card text-forest hover:bg-lime"}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={productImage(p.category)} alt={p.name} loading="lazy" width={1024} height={768} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-bold text-emerald">{p.material}</span>
                <h3 className="mt-3 text-lg font-bold text-forest">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-3 text-xs text-muted-foreground"><strong className="text-foreground">Specifications:</strong> [Grade, MFI, size, gauge — to be added]</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-6">
                  <span className="text-xs font-semibold text-muted-foreground">Request Pricing</span>
                  <Button asChild variant="soft" size="sm" className="h-9 px-4"><Link to="/contact" search={{ product: p.name }}>Request Enquiry</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {limit && <div className="mt-12 text-center"><Button asChild variant="forest" size="xl"><Link to="/products">View full catalogue <ArrowRight /></Link></Button></div>}
      </div>
    </section>
  );
}

const steps = [
  { icon: Truck, title: "Plastic Collection", text: "Post-industrial and post-consumer plastic is gathered from partners." },
  { icon: Filter, title: "Sorting & Segregation", text: "Material is separated by polymer type and colour." },
  { icon: Droplets, title: "Washing & Cleaning", text: "Contaminants, labels and residue are removed." },
  { icon: Scissors, title: "Shredding & Processing", text: "Clean plastic is shredded into uniform flakes." },
  { icon: CircleDot, title: "Granule Production", text: "Flakes are melted, extruded and pelletised." },
  { icon: ShieldCheck, title: "Quality Inspection", text: "Batches are checked before packing and dispatch." },
];

export function Recycling() {
  return (
    <section className="bg-gradient-forest py-24 text-forest-foreground">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-lime">Our Recycling Process</p>
          <h2 className="text-4xl font-extrabold md:text-5xl">From collected plastic to ready-to-use granules.</h2>
        </div>
        <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-5">
          <span aria-hidden className="absolute left-7 top-0 h-full w-px bg-forest-foreground/15 lg:left-0 lg:top-7 lg:h-px lg:w-full" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 lg:flex-col">
              <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-lime text-forest shadow-lift">
                <s.icon className="size-6" />
              </span>
              <div>
                <p className="text-xs font-bold text-lime">STEP 0{i + 1}</p>
                <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-forest-foreground/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const industries = [
  { icon: Factory, title: "Plastic Manufacturers", text: "Consistent granules and resins for moulding and extrusion." },
  { icon: Package, title: "Packaging Companies", text: "Film-grade materials, covers and custom packaging." },
  { icon: Store, title: "Retail & Wholesale", text: "Carry bags and covers supplied in bulk." },
  { icon: Boxes, title: "Industrial Suppliers", text: "Reliable material supply for downstream distribution." },
  { icon: Cog, title: "Manufacturing Units", text: "Raw materials matched to your production needs." },
];

export function Industries() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead center eyebrow="Industries We Serve" title="Built for businesses that make and move." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((d) => (
            <div key={d.title} className="group rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-emerald hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-emerald transition-colors group-hover:bg-lime group-hover:text-forest"><d.icon className="size-6" /></span>
              <h3 className="mt-5 font-bold text-forest">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Award, title: "Quality-focused materials" },
  { icon: Truck, title: "Reliable bulk supply" },
  { icon: Leaf, title: "Sustainable recycling practices" },
  { icon: SlidersHorizontal, title: "Flexible product specifications" },
  { icon: HeartHandshake, title: "Customer-focused service" },
  { icon: Handshake, title: "Consistent business partnerships" },
];

export function WhyUs() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <SectionHead eyebrow="Why Choose Us" title="A materials partner you can plan around." text="[Placeholder] These commitments are editable and should be confirmed by the company before launch." />
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest text-lime"><f.icon className="size-5" /></span>
              <p className="font-semibold text-forest">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quote({ product }: { product?: string | undefined }) {
  return (
    <section id="quote" className="py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHead eyebrow="Request a Quote" title="Tell us what you need." text="Share your product and quantity requirements and our team will respond with pricing and availability." />
          <Button asChild variant="lime" size="xl"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle /> Enquire on WhatsApp</a></Button>
        </div>
        <div className="rounded-3xl border bg-card p-6 shadow-lift md:p-10"><QuoteForm defaultProduct={product} /></div>
      </div>
    </section>
  );
}

export function Contact() {
  const c = site.contact;
  const items = [
    { icon: MapPin, label: "Address", value: c.address },
    { icon: Phone, label: "Phone", value: c.phone, href: `tel:${c.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: `+${c.whatsapp}`, href: whatsappLink() },
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    { icon: Clock, label: "Business Hours", value: c.hours },
  ];
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-x">
        <SectionHead eyebrow="Contact" title="Visit or reach us." text="All details below are placeholders — replace them with your real business information." />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={i.label} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <i.icon className="mt-0.5 size-5 shrink-0 text-emerald" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  {i.href ? <a href={i.href} className="font-semibold text-forest hover:text-emerald">{i.value}</a> : <p className="font-semibold text-forest">{i.value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <iframe title="Map location (placeholder)" src={c.mapEmbed} loading="lazy" className="min-h-96 w-full rounded-3xl border-0 shadow-soft" />
        </div>
      </div>
    </section>
  );
}
