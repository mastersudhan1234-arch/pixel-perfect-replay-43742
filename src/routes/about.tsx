import { createFileRoute } from "@tanstack/react-router";
import { About, WhyUs, Facilities, PageHeader } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SRI KRISHNA PLASTIC" },
      { name: "description", content: "Learn about SRI KRISHNA PLASTIC: plastic recycling, quality materials and reliable industrial supply." },
      { property: "og:title", content: "About Us — SRI KRISHNA PLASTIC" },
      { property: "og:description", content: "Learn about SRI KRISHNA PLASTIC: plastic recycling, quality materials and reliable industrial supply." },
    ],
  }),
  component: Page,
});

function Page() {
  return <main><PageHeader eyebrow="About Us" title="Sustainable plastics, supplied reliably." text="Our story, mission and commitment to quality materials." /><About /><Facilities /><WhyUs /></main>;
}
