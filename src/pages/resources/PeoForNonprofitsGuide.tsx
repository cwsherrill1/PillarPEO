import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import SEOHead from "@/components/SEOHead";
import { ArticleByline, ArticleAuthorBio, buildArticleJsonLd } from "@/components/ArticleByline";

const ARTICLE = buildArticleJsonLd({
  title: "PEO for Nonprofits: What to Know Before You Buy",
  description: "What nonprofit leaders need to understand before partnering with a PEO.",
  path: "/resources/peo-for-nonprofits-guide",
});

const BOOKING_URL = "https://meetings.hubspot.com/caleb-sherrill";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /><span>{children}</span></li>
);

const Section = ({ title, children, alt = false }: { title: string; children: React.ReactNode; alt?: boolean }) => (
  <section className={alt ? "bg-muted/30 py-20 md:py-28" : "py-20 md:py-28"}>
    <div className="container max-w-3xl">
      <Reveal>
        <h2 className="font-heading text-2xl font-800 text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-foreground/85">{children}</div>
      </Reveal>
    </div>
  </section>
);

const PeoForNonprofitsGuide = () => (
  <>
    <SEOHead
      title="PEO for Nonprofits: What to Know Before You Buy"
      description="Your mission deserves better HR infrastructure. Learn what nonprofit leaders need to understand before partnering with a PEO."
      jsonLd={ARTICLE}
      ogType="article"
    />

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Guide</Badge>
          <h1 className="font-heading text-4xl font-800 leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            PEO for Nonprofits:
            <span className="text-accent"> What to Know Before You Buy</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Your mission deserves better HR infrastructure. Here's what nonprofit leaders need to understand before partnering with a PEO.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ArticleByline />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <Link to="/resources" className="mb-8 inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Resources
          </Link>
          <p className="text-xl leading-8 text-foreground/85">
            Nonprofits face a unique HR challenge: the expectation that you'll compete for talented staff without the budget of a private company, while also navigating the compliance demands of a regulated, board-governed organization. A PEO can solve a significant portion of that problem — but only if it's the right PEO for your specific situation. This guide is written specifically for nonprofit executive directors, finance leaders, and operations teams who are evaluating a PEO for the first time or reconsidering their current provider.
          </p>
        </Reveal>
      </div>
    </section>

    <Section title="Why Nonprofits Often Underinvest in HR Infrastructure" alt>
      <p>The pressure to keep overhead low is real. Boards, funders, and watchdog groups scrutinize administrative spending. The result is that many nonprofits patch together HR with a combination of an overwhelmed executive director, an outside bookkeeper, a mid-range payroll platform, and a bare-bones benefits package that makes recruiting harder than it should be.</p>
      <p>The irony is that a PEO — often perceived as an added cost — frequently reduces total HR spend while dramatically improving the employee experience.</p>
    </Section>

    <Section title="What a PEO Actually Delivers for Nonprofits">
      <ul className="space-y-3">
        <Bullet><strong className="text-foreground">Benefit competitiveness:</strong> By pooling your employees with thousands of others, a PEO gives you access to Fortune 500-quality health, dental, and vision plans at rates a 40-person nonprofit could never negotiate independently.</Bullet>
        <Bullet><strong className="text-foreground">Compliance confidence:</strong> Nonprofits navigate state labor law, ACA requirements, multi-state payroll tax, and in some cases grant-specific employment requirements. A PEO carries compliance liability alongside you.</Bullet>
        <Bullet><strong className="text-foreground">Time back for leadership:</strong> When HR administration flows to the PEO, executive directors and operations leads get meaningful time back to focus on mission.</Bullet>
        <Bullet><strong className="text-foreground">Board and funder credibility:</strong> "We have professional HR infrastructure" is a better answer to a funder or board member than "our ED handles it."</Bullet>
      </ul>
    </Section>

    <Section title="Nonprofit-Specific Considerations" alt>
      <p>Not every PEO is set up to serve nonprofits well. Key questions to ask:</p>
      <ul className="space-y-3">
        <Bullet>Do they have experience with 501(c)(3) organizations and understand grant reporting requirements?</Bullet>
        <Bullet>Can they handle multi-state employees, including remote program staff?</Bullet>
        <Bullet>Do they understand FLSA classifications for roles common in nonprofits?</Bullet>
        <Bullet>How do they handle benefits for part-time employees, which is common in many nonprofits?</Bullet>
        <Bullet>Do they have experience with board reporting or can they produce reports in useful formats?</Bullet>
      </ul>
    </Section>

    <Section title="How to Make the Case to Your Board">
      <p>Boards often push back on PEO costs before understanding the full picture. Here's how to frame it:</p>
      <p className="rounded-lg border border-accent/20 bg-accent/5 p-4 italic text-foreground">
        "We are currently spending X on payroll processing, benefits administration, and compliance support — fragmented across multiple vendors and a significant amount of staff time. A PEO consolidates those costs, adds compliance protection, and gives employees access to better benefits — often at a similar or lower total cost once you account for staff time and error risk."
      </p>
      <p>Frame it as infrastructure investment with a return, not overhead. The strongest version of this case includes a side-by-side cost comparison — which Pillar can help you build.</p>
    </Section>

    <Section title="What to Watch For in Nonprofit PEO Contracts" alt>
      <ul className="space-y-3">
        <Bullet><strong className="text-foreground">Fiscal year alignment:</strong> Nonprofits often run July–June fiscal years. Make sure the PEO benefits contract year and your fiscal year are aligned or at least understood.</Bullet>
        <Bullet><strong className="text-foreground">Grant-specific payroll reports:</strong> Confirm the PEO can produce payroll reports segmented by cost center, program, or grant code if your funding requires it.</Bullet>
        <Bullet><strong className="text-foreground">Workforce mix flexibility:</strong> If you have a mix of full-time, part-time, and seasonal staff, confirm how each category is handled in pricing and benefits eligibility.</Bullet>
      </ul>
    </Section>

    <section className="bg-primary py-24 md:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-800 text-primary-foreground md:text-4xl">
            Running a nonprofit and evaluating your HR options?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Pillar works with mission-driven organizations to find the right PEO partner — one that understands your budget constraints, board expectations, and employee needs. Talk to an advisor who knows the nonprofit landscape.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground font-heading font-700 hover:bg-accent/90 shadow-lg shadow-accent/20">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Talk to an Advisor</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default PeoForNonprofitsGuide;
