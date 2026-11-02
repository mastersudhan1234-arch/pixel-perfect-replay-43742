// Central, editable business configuration. Replace placeholders with real details.
import granules from "@/assets/machine-recycling-extruder.jpg";
import bags from "@/assets/machine-bag-making.jpg";
import resin from "@/assets/machine-film-roll.jpg";

// Referrer-restricted Maps browser key (safe for embeds). Keyless embed is used if it is absent.
const MAPS_BROWSER_KEY = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as string | undefined;

// Exact pin for the business address: X2HC+54R, Katrambakkam, Sriperumbudur (geocoded).
const COMPANY_LOCATION = { lat: 12.9779875, lng: 80.0202656 };
const COMPANY_ADDRESS = "X2HC+54R, Katrambakkam, Sriperumbudur, Tamil Nadu 602117, India";

// Keyless embed: renders the same pin from any origin, and never shows a key-authorization error.
const keylessEmbedUrl = `https://maps.google.com/maps?q=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}&z=17&output=embed`;

// Managed browser key is referrer-restricted to Lovable hosts; off those hosts Google renders
// an "not authorized to use this API key" error inside the iframe, so we only use it when allowed.
const keyedEmbedUrl = MAPS_BROWSER_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_BROWSER_KEY}&q=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}&zoom=17`
  : keylessEmbedUrl;
const MAPS_AUTHORIZED_HOSTS = ["lovable.app", "lovableproject.com"];

export const resolveMapEmbed = () => {
  const host = typeof window === "undefined" ? "" : window.location.hostname;
  const authorized = MAPS_AUTHORIZED_HOSTS.some((d) => host === d || host.endsWith(`.${d}`));
  return authorized ? keyedEmbedUrl : keylessEmbedUrl;
};

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}&travelmode=driving`;

export const site = {
  name: "SRI KRISHNA PLASTIC",
  tagline: "Plastic recycling, packaging & polymer materials",
  description:
    "SRI KRISHNA PLASTIC supplies recycled plastic granules, carry bags, plastic covers and polymer raw materials for manufacturers and wholesalers.",
  contact: {
    address: COMPANY_ADDRESS,
    addressLines: ["X2HC+54R", "Katrambakkam, Sriperumbudur", "Tamil Nadu 602117, India"],
    location: COMPANY_LOCATION,
    phone: "+00 00000 00000",
    whatsapp: "000000000000", // digits only, with country code
    email: "hello@example.com",
    hours: "Mon – Sat, 9:00 AM – 6:00 PM",
    // Safe default for first paint; upgraded to the keyed Embed API on authorized hosts.
    mapEmbed: keylessEmbedUrl,
    directions: directionsUrl,
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const whatsappLink = (text = `Hello ${site.name}, I would like to enquire about your products.`) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export type Category = "recycled" | "bags" | "raw";
export const categories: { id: Category; label: string; image: string }[] = [
  { id: "recycled", label: "Recycled Plastic Materials", image: granules },
  { id: "bags", label: "Carry Bags & Plastic Covers", image: bags },
  { id: "raw", label: "Manufacturing Raw Materials", image: resin },
];

export type Product = { name: string; category: Category; material: string; description: string };
export const products: Product[] = [
  { name: "Recycled HDPE Granules", category: "recycled", material: "HDPE", description: "Processed granules for moulding and extrusion applications." },
  { name: "Recycled LDPE Granules", category: "recycled", material: "LDPE", description: "Flexible-grade granules suited for film and bag production." },
  { name: "Recycled PP Granules", category: "recycled", material: "PP", description: "Polypropylene granules for injection moulding and fabrication." },
  { name: "Recycled Plastic Flakes", category: "recycled", material: "Mixed / Sorted", description: "Cleaned, shredded flakes ready for further processing." },
  { name: "Shopping Carry Bags", category: "bags", material: "LDPE / HDPE", description: "Durable carry bags for retail and wholesale distribution." },
  { name: "Industrial Packaging Bags", category: "bags", material: "LDPE / PP", description: "Heavy-duty bags for bulk and industrial packaging." },
  { name: "Plastic Cover Rolls", category: "bags", material: "LDPE", description: "Continuous cover rolls for wrapping and protection." },
  { name: "Custom Packaging Covers", category: "bags", material: "As required", description: "Covers made to your size, gauge and print needs." },
  { name: "HDPE Raw Materials", category: "raw", material: "HDPE", description: "High-density polyethylene for rigid product manufacturing." },
  { name: "LDPE Raw Materials", category: "raw", material: "LDPE", description: "Low-density polyethylene for film and flexible products." },
  { name: "PP Polymer Granules", category: "raw", material: "PP", description: "Polypropylene polymer for moulding and fibre applications." },
  { name: "Industrial Plastic Resins", category: "raw", material: "Various", description: "Resin grades sourced for specific industrial requirements." },
];

export const productImage = (c: Category) => categories.find((x) => x.id === c)!.image;
