import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, site } from "@/lib/site";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{6,19}$/, "Enter a valid phone number"),
  product: z.string().min(1, "Select a product"),
  quantity: z.string().trim().min(1, "Enter required quantity").max(60),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});
export type Enquiry = z.infer<typeof enquirySchema>;

// Integration point: replace with a real API / server call later.
async function submitEnquiry(_data: Enquiry) {
  await new Promise((r) => setTimeout(r, 700));
}

const field = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-emerald focus:ring-2 focus:ring-ring/30";

function Field({ label, children, error }: { name: keyof Enquiry; label: string; children: ReactNode; error?: string | undefined }) {
  return (
    <label className="block text-sm font-semibold text-forest">
      {label}
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string | undefined }) {
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = enquirySchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const errs: typeof errors = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Enquiry] = i.message));
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitEnquiry(parsed.data);
      setStatus("done");
      form.reset();
      toast.success("Enquiry received — we'll be in touch soon.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again or contact us on WhatsApp.");
    }
  }

  if (status === "done")
    return (
      <div className="py-12 text-center" role="status">
        <CheckCircle2 className="mx-auto size-14 text-emerald" />
        <h3 className="mt-4 text-2xl font-bold text-forest">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">The {site.name} team will respond to your enquiry shortly.</p>
        <Button variant="soft" size="xl" className="mt-6" onClick={() => setStatus("idle")}>Send another enquiry</Button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field name="name" error={errors.name} label="Your name *"><input name="name" className={field} autoComplete="name" aria-invalid={!!errors.name} /></Field>
      <Field name="company" error={errors.company} label="Company name"><input name="company" className={field} autoComplete="organization" /></Field>
      <Field name="email" error={errors.email} label="Email *"><input name="email" type="email" className={field} autoComplete="email" aria-invalid={!!errors.email} /></Field>
      <Field name="phone" error={errors.phone} label="Phone number *"><input name="phone" type="tel" className={field} autoComplete="tel" aria-invalid={!!errors.phone} /></Field>
      <Field name="product" error={errors.product} label="Product *">
        <select name="product" defaultValue={defaultProduct} className={field} aria-invalid={!!errors.product}>
          <option value="">Select a product</option>
          {products.map((p) => <option key={p.name}>{p.name}</option>)}
          <option>Other / Multiple</option>
        </select>
      </Field>
      <Field name="quantity" error={errors.quantity} label="Required quantity *"><input name="quantity" placeholder="e.g. 5 tonnes / 10,000 pcs" className={field} aria-invalid={!!errors.quantity} /></Field>
      <div className="sm:col-span-2"><Field name="message" error={errors.message} label="Message"><textarea name="message" rows={4} className={field} placeholder="Specifications, delivery location, timelines…" /></Field></div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="forest" size="xl" className="w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" && <Loader2 className="animate-spin" />} Submit Enquiry
        </Button>
      </div>
    </form>
  );
}
