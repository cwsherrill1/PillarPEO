import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { SITE_URL, breadcrumb, ORG_REF, organization } from "@/data/organization";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/partners" },
      { name: "Client one-pager", path: "/partners/client-one-pager" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/partners/client-one-pager#webpage`,
      url: `${SITE_URL}/partners/client-one-pager`,
      name: "Client one-pager",
      description:
        "A printable one-page explanation of what Pillar does, for partners to hand to a client.",
      isPartOf: ORG_REF,
      publisher: ORG_REF,
      dateModified: "2026-09-06",
    },
  ],
};

const ClientOnePager = () => {
  const [params] = useSearchParams();
  const partner = (params.get("partner") || "").trim().slice(0, 80);

  useEffect(() => {
    document.body.classList.add("one-pager");
    return () => document.body.classList.remove("one-pager");
  }, []);

  return (
    <>
      <SEOHead
        title="Client One-Pager | Pillar"
        fullTitle
        description="A printable one-page explanation of what Pillar does, for partners to hand to a client. Add ?partner=Your+Firm to stamp your firm name on it."
        canonical={`${SITE_URL}/partners/client-one-pager`}
        jsonLd={jsonLd}
      />

      {/* Screen-only instructions — never printed */}
      <section className="print-hide border-b border-border bg-muted/40">
        <div className="container max-w-3xl py-10">
          <h1 className="font-heading text-2xl font-800 text-foreground md:text-3xl">
            Client one-pager
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Print this page, or save it as a PDF, and hand it to a client. Everything
            below the line prints on a single page — this box, the site navigation
            and the footer do not.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            To stamp your firm name on it, add{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-sm">
              ?partner=Your+Firm+Name
            </code>{" "}
            to the end of the address. Example:{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-sm">
              /partners/client-one-pager?partner=Acme+Advisors
            </code>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() => window.print()}
              className="bg-accent font-heading font-700 text-accent-foreground hover:bg-accent/90"
            >
              Print this page
            </Button>
            <Button asChild variant="outline">
              <Link to="/partners">Back to partners</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The printable sheet */}
      <section className="bg-background">
        <div className="print-sheet container max-w-3xl py-12">
          <header className="border-b border-border pb-4">
            <p className="font-heading text-xl font-800 text-foreground">
              Pillar PEO Advisors
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Independent HR advisory · Charlotte, NC · Every state your people work in
            </p>
            {partner && (
              <p className="mt-3 text-sm font-semibold text-green-ink">
                Provided by {partner}
              </p>
            )}
          </header>

          <h2 className="mt-6 font-heading text-lg font-700 text-foreground">
            What Pillar does
          </h2>
          <p className="mt-2 text-base leading-relaxed text-foreground/85">
            We are an independent HR firm for organisations of roughly 10 to 150
            people. We run fixed-price HR audits and projects, provide fractional HR
            support, manage transitions into and out of a PEO, and compare PEOs on
            your behalf. We do not sell software, insurance or accounting.
          </p>

          <h2 className="mt-6 font-heading text-lg font-700 text-foreground">
            Where we usually start
          </h2>
          <ul className="mt-2 space-y-2 text-base leading-relaxed text-foreground/85">
            <li>
              <strong>Renewal review.</strong> Your PEO or benefits renewal, read line
              by line, so you know what actually moved and why. Free.
            </li>
            <li>
              <strong>HR audit.</strong> A written review of documentation,
              classification, handbook and multi-state exposure, with a prioritised
              fix list. Fixed price, quoted first.
            </li>
            <li>
              <strong>PEO comparison.</strong> A full-market comparison at no cost to
              you. Frequently the recommendation is not to use a PEO at all.
            </li>
            <li>
              <strong>Transitions.</strong> Moving into or out of a PEO, or switching
              payroll or HRIS, run as a fixed-price project.
            </li>
          </ul>

          <h2 className="mt-6 font-heading text-lg font-700 text-foreground">
            How we are paid
          </h2>
          <p className="mt-2 text-base leading-relaxed text-foreground/85">
            Advisory work is quoted in writing before it starts. PEO comparison and
            placement cost you nothing: the provider pays a commission, and we tell
            you the provider and the amount in writing before anything is signed. If
            the right answer is to stay where you are, we say so and nobody is paid.
          </p>

          <h2 className="mt-6 font-heading text-lg font-700 text-foreground">
            What we need to give you an answer
          </h2>
          <p className="mt-2 text-base leading-relaxed text-foreground/85">
            An employee census with states and pay basis, three months of current
            payroll or PEO invoices, your current agreement and renewal letter, and
            benefit plan summaries where benefits are part of the question.
          </p>

          <footer className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
            <p>
              {organization.email} ·{" "}
              <a href={`tel:${organization.telephone}`} className="text-green-ink">
                {organization.telephone}
              </a>{" "}
              · pillarpeo.com
            </p>
            <p className="mt-2">
              Pillar is not a law firm. This is general information, not legal advice.
              Updated September 2026.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default ClientOnePager;
