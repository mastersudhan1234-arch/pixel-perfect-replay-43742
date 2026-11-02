// Central, editable business configuration. Replace placeholders with real details.
import granules from "@/assets/machine-recycling-extruder.jpg";
import bags from "@/assets/machine-bag-making.jpg";
import resin from "@/assets/machine-film-roll.jpg";

export const site = {
  name: "EcoPoly Industries",
  tagline: "Plastic recycling, packaging & polymer materials",
  description:
    "EcoPoly Industries supplies recycled plastic granules, carry bags, plastic covers and polymer raw materials for manufacturers and wholesalers.",
  contact: {
    address: "[Placeholder] Plot 00, Industrial Estate, Your City, State 000000",
    phone: "+00 00000 00000",
    whatsapp: "000000000000", // digits only, with country code
    email: "hello@example.com",
    hours: "Mon – Sat, 9:00 AM – 6:00 PM",
    mapEmbed: "https://www.google.com/maps?q=industrial+estate&output=embed",
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
