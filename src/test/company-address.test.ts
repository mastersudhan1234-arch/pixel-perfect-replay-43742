import { describe, expect, it } from "vitest";

import { resolveMapEmbed, site } from "@/lib/site";

// The business address the company supplied; every surface (contact section, footer, map,
// directions) reads it from src/lib/site.ts, so these values are the single source of truth.
const ADDRESS = "X2HC+54R, Katrambakkam, Sriperumbudur, Tamil Nadu 602117, India";

describe("Company address", () => {
  it("stores the complete address the company supplied", () => {
    expect(site.contact.address).toBe(ADDRESS);
  });

  it("splits the address into lines that rejoin to the same address", () => {
    expect(site.contact.addressLines.join(", ")).toBe(ADDRESS);
  });

  it("opens Google Maps navigation to the geocoded company pin", () => {
    expect(site.contact.directions).toBe(
      "https://www.google.com/maps/dir/?api=1&destination=12.9779875,80.0202656&travelmode=driving",
    );
  });

  it("embeds a map centred on the company pin", () => {
    expect(site.contact.mapEmbed).toContain("12.9779875");
    expect(site.contact.mapEmbed).toContain("80.0202656");
  });

  it("withholds the referrer-restricted browser key on unauthorized hosts", () => {
    // Test runs on an unauthorized origin, so the embed must be the keyless one.
    expect(resolveMapEmbed()).not.toContain("key=");
    expect(resolveMapEmbed()).toContain("12.9779875");
  });
});
