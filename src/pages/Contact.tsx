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
import SEOHead from "@/components/SEOHead";

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const contactCards = [
  { icon: Mail, label: "Email", value: "caleb@pillarpeo.com", href: "mailto:caleb@pillarpeo.com" },
  { icon: Phone, label: "Phone", value: "(704) 787-1261", href: undefined },
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 1 business day.");
    setFormData({ name: "", email: "", company: "", employees: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Pillar PEO Advisors. Schedule a free consultation or send us a message about your PEO needs."
      />
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container text-center">
          <Reveal>
            <h1 className="font-heading text-4xl md:text-5xl font-800 text-primary-foreground">
              Let's find the right PEO for your team.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              No sales pitch, no obligation — just an honest conversation about
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select
                        value={formData.employees}
                        onValueChange={(v) =>
                          setFormData({ ...formData, employees: v })
                        }
                      >
                        <SelectTrigger id="employees">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5-25">5 – 25</SelectItem>
                          <SelectItem value="25-50">25 – 50</SelectItem>
                          <SelectItem value="50-150">50 – 150</SelectItem>
                          <SelectItem value="150+">150+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your team and what you're looking for…"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    Send My Request
                  </Button>
                </form>
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
                        <a href={card.href} className="font-semibold text-foreground hover:text-accent transition-colors">
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
