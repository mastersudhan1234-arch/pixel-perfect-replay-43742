import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Products, Recycling, Industries, WhyUs, Quote, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoPoly Industries — Plastic Recycling & Polymer Materials" },
      { name: "description", content: "Recycled plastic granules, carry bags, plastic covers and polymer raw materials for manufacturers and wholesalers." },
      { property: "og:title", content: "EcoPoly Industries — Plastic Recycling & Polymer Materials" },
      { property: "og:description", content: "Recycled plastic granules, carry bags, plastic covers and polymer raw materials for manufacturers and wholesalers." },
    ],
  }),
  component: Page,
});

function Page() {
  return <main><Hero /><About /><Products limit={8} /><Recycling /><Industries /><WhyUs /><Quote /><Contact /></main>;
}
