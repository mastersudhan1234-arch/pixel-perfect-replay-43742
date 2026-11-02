import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Contact, PageHeader, Quote } from "@/components/site/Sections";

const t = "Contact & Request a Quote — SRI KRISHNA PLASTIC";
const d = "Request a quote for recycled plastic granules, carry bags, covers or polymer raw materials. Call, email or WhatsApp SRI KRISHNA PLASTIC.";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ product: z.string().optional() }),
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: Page,
});

function Page() {
  const { product } = Route.useSearch();
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Let's talk materials." text="Send an enquiry and our team will get back to you with pricing and availability." />
      <Quote key={product} product={product} />
      <Contact />
    </main>
  );
}
