import { createFileRoute } from "@tanstack/react-router";
import { Industries, WhyUs, PageHeader } from "@/components/site/Sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — SRI KRISHNA PLASTIC" },
      { name: "description", content: "Plastic materials and packaging for manufacturers, packaging companies, retailers and industrial suppliers." },
      { property: "og:title", content: "Industries We Serve — SRI KRISHNA PLASTIC" },
      { property: "og:description", content: "Plastic materials and packaging for manufacturers, packaging companies, retailers and industrial suppliers." },
    ],
  }),
  component: Page,
});

function Page() {
  return <main><PageHeader eyebrow="Industries" title="Materials for the businesses that build." text="We supply manufacturers, packagers, wholesalers and industrial units." /><Industries /><WhyUs /></main>;
}
