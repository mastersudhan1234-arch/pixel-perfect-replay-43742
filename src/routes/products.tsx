import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Products, PageHeader, Quote } from "@/components/site/Sections";

const t = "Products — Recycled Granules, Carry Bags & Polymers | EcoPoly Industries";
const d = "Browse recycled HDPE, LDPE and PP granules, carry bags, plastic covers and polymer raw materials. Request pricing.";

export const Route = createFileRoute("/products")({
  validateSearch: z.object({ category: z.enum(["recycled", "bags", "raw"]).optional() }),
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  return (
    <main>
      <PageHeader eyebrow="Products" title="Our product catalogue." text="Recycled materials, packaging and polymer raw materials — pricing on request." />
      <Products key={category ?? "all"} initial={category ?? "all"} />
      <Quote />
    </main>
  );
}
