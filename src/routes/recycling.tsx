import { createFileRoute } from "@tanstack/react-router";
import { Recycling, Quote, PageHeader } from "@/components/site/Sections";

export const Route = createFileRoute("/recycling")({
  head: () => ({
    meta: [
      { title: "Plastic Recycling Process — SRI KRISHNA PLASTIC" },
      { name: "description", content: "How SRI KRISHNA PLASTIC collects, sorts, cleans and processes plastic into quality recycled granules." },
      { property: "og:title", content: "Plastic Recycling Process — SRI KRISHNA PLASTIC" },
      { property: "og:description", content: "How SRI KRISHNA PLASTIC collects, sorts, cleans and processes plastic into quality recycled granules." },
    ],
  }),
  component: Page,
});

function Page() {
  return <main><PageHeader eyebrow="Recycling" title="How we recycle plastic." text="A six-step process from collected plastic to inspected, ready-to-use granules." /><Recycling /><Quote /></main>;
}
