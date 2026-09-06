import React, { useState } from "react";
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
import { supabase } from "@/integrations/supabase/client";

export const PARTNER_TYPES = [
  "Fractional CFO / COO",
  "Benefits broker",
  "Accountant",
  "Attorney",
  "Other",
];

/**
 * Partner enquiry form. Deliberately separate from the client contact form.
 * Rows are written with type = "partner" so partner enquiries are
 * distinguishable from client enquiries in the leads table.
 */
const PartnerEnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    firm: "",
    email: "",
    partnerType: "",
    clients: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.firm.trim()) next.firm = "Please enter your firm name.";
    if (!form.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email address doesn't look right.";
    }
    if (!form.partnerType) next.partnerType = "Please choose a partner type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      type: "partner",
      source: "partner-enquiry",
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255),
      company: form.firm.trim().slice(0, 150),
      employees: form.partnerType,
      message: form.clients.trim().slice(0, 1000),
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please email info@pillarpeo.com.");
      setErrors({ form: "We couldn't send that. Please try again, or email info@pillarpeo.com." });
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Thanks, we'll be in touch within one business day.");
    setForm({ name: "", firm: "", email: "", partnerType: "", clients: "" });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-background p-8 text-center">
        <p className="font-heading text-lg font-700 text-foreground">
          Thanks, that's with us.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          Caleb reads every partner enquiry himself and will reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-background p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="partner-name">Your name</Label>
          <Input
            id="partner-name"
            value={form.name}
            maxLength={100}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            aria-invalid={!!errors.name}
            className="mt-2"
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="partner-firm">Firm</Label>
          <Input
            id="partner-firm"
            value={form.firm}
            maxLength={150}
            onChange={(e) => setForm({ ...form, firm: e.target.value })}
            aria-invalid={!!errors.firm}
            className="mt-2"
          />
          {errors.firm && <p className="mt-1 text-sm text-destructive">{errors.firm}</p>}
        </div>

        <div>
          <Label htmlFor="partner-email">Work email</Label>
          <Input
            id="partner-email"
            type="email"
            value={form.email}
            maxLength={255}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={!!errors.email}
            className="mt-2"
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="partner-type">Partner type</Label>
          <Select
            value={form.partnerType}
            onValueChange={(v) => setForm({ ...form, partnerType: v })}
          >
            <SelectTrigger id="partner-type" className="mt-2" aria-invalid={!!errors.partnerType}>
              <SelectValue placeholder="Choose one" />
            </SelectTrigger>
            <SelectContent>
              {PARTNER_TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.partnerType && (
            <p className="mt-1 text-sm text-destructive">{errors.partnerType}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="partner-clients">What kind of clients do you work with?</Label>
          <Textarea
            id="partner-clients"
            rows={4}
            maxLength={1000}
            value={form.clients}
            onChange={(e) => setForm({ ...form, clients: e.target.value })}
            placeholder="Size, states, industries, and what usually triggers the HR question."
            className="mt-2"
          />
        </div>
      </div>

      {errors.form && <p className="mt-4 text-sm text-destructive">{errors.form}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-6 bg-accent px-8 font-heading text-base font-700 text-accent-foreground hover:bg-accent/90"
      >
        {submitting ? "Sending…" : "Start a partner conversation"}
      </Button>
      <p className="mt-3 text-sm text-muted-foreground">
        Goes to Caleb directly. No mailing list, no sequence.
      </p>
    </form>
  );
};

export default PartnerEnquiryForm;
