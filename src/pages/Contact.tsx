import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, PhoneCall, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { organization, caleb, ORG_REF, breadcrumb } from "@/data/organization";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    caleb,
    {
      "@type": "ContactPage",
      "@id": "https://pillarpeo.com/contact#page",
      url: "https://pillarpeo.com/contact",
      name: "Contact Pillar PEO Advisors",
      about: ORG_REF,
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

const contactCards = [
  { icon: Mail, label: "Email", value: "info@pillarpeo.com", href: "mailto:info@pillarpeo.com" },
  { icon: Phone, label: "Phone", value: "(704) 787-1261", href: "tel:+17047871261" },
  { icon: MapPin, label: "Location", value: "Charlotte, NC", href: undefined },
];

const steps = [
  {
    icon: Clock,
    title: "We'll reach out within 1 business day",
  },
  {
    icon: PhoneCall,
    title: "Brief 15-minute discovery call",
  },
  {
    icon: BarChart3,
    title: "Custom PEO comparison delivered",
  },
];

const FIRM_SIZES = ["1–9", "10–25", "26–75", "76–150", "150+"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employees: "",
    locations: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = "That email address doesn't look right.";
    }
    if (!formData.employees) next.employees = "Please choose a firm size.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      type: "client",
      source: "contact",
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: "",
      employees: formData.employees,
      message: formData.locations.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again or email us at info@pillarpeo.com.");
      setErrors({ form: "We couldn't send that. Please try again, or email info@pillarpeo.com." });
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch within 1 business day.");
    setFormData({ name: "", email: "", employees: "", locations: "" });
  };


  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Pillar PEO Advisors. Schedule a free consultation or send us a message about your PEO needs."
        jsonLd={contactJsonLd}
      />
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container text-center">
          <Reveal>
            <h1 className="font-heading text-4xl md:text-5xl font-800 text-primary-foreground">
              Let's find the right PEO for your team.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              No sales pitch, no obligation, just an honest conversation about
              what's best for your business.
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 text-base px-8"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule a Call Instead
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-background">
        <div className="container grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-700 text-foreground mb-6">
                  Or send us a message
                </h2>
                {submitted ? (
                  <div
                    role="status"
                    className="rounded-lg border border-accent/40 bg-accent/10 p-6"
                  >
                    <p className="font-heading text-lg font-700 text-foreground">
                      Thanks, we've got it.
                    </p>
                    <p className="mt-2 text-base text-muted-foreground">
                      We'll be in touch within 1 business day. If it's urgent, call{" "}
                      <a href="tel:+17047871261" className="font-semibold text-green-ink hover:underline">
                        (704) 787-1261
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span aria-hidden="true" className="text-green-ink">*</span>
                        <span className="sr-only">(required)</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Smith"
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm font-semibold text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Work email <span aria-hidden="true" className="text-green-ink">*</span>
                        <span className="sr-only">(required)</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@firm.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm font-semibold text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">
                      Firm size <span aria-hidden="true" className="text-green-ink">*</span>
                      <span className="sr-only">(required)</span>
                    </Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(v) =>
                        setFormData({ ...formData, employees: v })
                      }
                    >
                      <SelectTrigger
                        id="employees"
                        aria-invalid={!!errors.employees}
                        aria-describedby={errors.employees ? "employees-error" : undefined}
                      >
                        <SelectValue placeholder="Select firm size" />
                      </SelectTrigger>
                      <SelectContent>
                        {FIRM_SIZES.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size} people
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.employees && (
                      <p id="employees-error" className="text-sm font-semibold text-destructive">
                        {errors.employees}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="locations">Where are your people? (optional)</Label>
                    <Textarea
                      id="locations"
                      value={formData.locations}
                      onChange={(e) =>
                        setFormData({ ...formData, locations: e.target.value })
                      }
                      placeholder="e.g. 22 in Charlotte, 6 remote across SC, GA and TX"
                      rows={4}
                    />
                  </div>

                  {errors.form && (
                    <p role="alert" className="text-sm font-semibold text-destructive">
                      {errors.form}
                    </p>
                  )}

                  <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    {submitting ? "Sending…" : "Send My Request"}
                  </Button>
                </form>
                )}

              </CardContent>
            </Card>
          </Reveal>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 120}>
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{card.label}</p>
                      {card.href ? (
                        <a href={card.href} className="font-semibold text-foreground hover:text-green-ink transition-colors">
                          {card.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{card.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <Reveal>
            <h2 className="font-heading text-3xl font-700 text-foreground text-center">
              What to Expect
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground font-heading text-xl font-800">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-600 text-foreground">
                    {step.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-14 bg-background">
        <div className="container text-center">
          <Reveal>
            <p className="text-lg font-medium text-muted-foreground italic">
              "No sales pitch. No obligation. Just clarity."
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
