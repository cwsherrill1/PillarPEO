import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import { activeRedirects } from "@/data/redirects";

const Index = lazy(() => import("./pages/Index"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Resource sub-pages
const FiveQuestions = lazy(() => import("./pages/resources/FiveQuestions"));
const CoEmployment = lazy(() => import("./pages/resources/CoEmployment"));
const PeoVsAsoVsInhouse = lazy(() => import("./pages/resources/PeoVsAsoVsInhouse"));
const PeoCostGuide = lazy(() => import("./pages/resources/PeoCostGuide"));
const PeoVsPayrollService = lazy(() => import("./pages/resources/PeoVsPayrollService"));
const BestPeoForSmallBusiness = lazy(() => import("./pages/resources/BestPeoForSmallBusiness"));
const TopPeoCompanies = lazy(() => import("./pages/resources/TopPeoCompanies"));
const PeoForStartups = lazy(() => import("./pages/resources/PeoForStartups"));
const PeoBenefits = lazy(() => import("./pages/resources/PeoBenefits"));
const PeoBrokerVsDirect = lazy(() => import("./pages/resources/PeoBrokerVsDirect"));
const WhatIsAPeo = lazy(() => import("./pages/resources/WhatIsAPeo"));
const EmployeeHealthBenefitsOptions = lazy(() => import("./pages/resources/EmployeeHealthBenefitsOptions"));
const PeoIndustryTransparency = lazy(() => import("./pages/resources/PeoIndustryTransparency"));
const Services = lazy(() => import("./pages/services/Services"));
const HrAudit = lazy(() => import("./pages/services/HrAudit"));
const HrProjects = lazy(() => import("./pages/services/HrProjects"));
const FractionalHr = lazy(() => import("./pages/services/FractionalHr"));
const TransitionsPage = lazy(() => import("./pages/services/Transitions"));
const PeoBrokerage = lazy(() => import("./pages/services/PeoBrokerage"));
const HowWeGetPaid = lazy(() => import("./pages/HowWeGetPaid"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const CalebSherrill = lazy(() => import("./pages/about/CalebSherrill"));
const IndustriesIndex = lazy(() => import("./pages/industries/Industries"));
const LawFirms = lazy(() => import("./pages/industries/LawFirms"));
const CpaFirms = lazy(() => import("./pages/industries/CpaFirms"));
const EngineeringArchitecture = lazy(() => import("./pages/industries/EngineeringArchitecture"));
const MedicalDental = lazy(() => import("./pages/industries/MedicalDental"));
const FinancialAdvisors = lazy(() => import("./pages/industries/FinancialAdvisors"));
const NonprofitsIndustry = lazy(() => import("./pages/industries/Nonprofits"));
const HrConsulting = lazy(() => import("./pages/locations/HrConsulting"));
const CharlotteNc = lazy(() => import("./pages/locations/CharlotteNc"));
const RockHillFortMillSc = lazy(() => import("./pages/locations/RockHillFortMillSc"));
const RaleighDurhamNc = lazy(() => import("./pages/locations/RaleighDurhamNc"));

// Batch 4 — state employer guides and compliance resources
const StateEmployerGuides = lazy(() => import("./pages/resources/stateGuides/StateEmployerGuides"));
const StateGuideNorthCarolina = lazy(() => import("./pages/resources/stateGuides/NorthCarolina"));
const StateGuideSouthCarolina = lazy(() => import("./pages/resources/stateGuides/SouthCarolina"));
const NcVsScEmploymentLaw = lazy(() => import("./pages/resources/NcVsScEmploymentLaw"));
const MultiStateEmployerChecklist = lazy(() => import("./pages/resources/MultiStateEmployerChecklist"));
const HrAuditChecklist = lazy(() => import("./pages/resources/HrAuditChecklist"));
const EVerifyNorthCarolina = lazy(() => import("./pages/resources/EVerifyNorthCarolina"));
const EVerifySouthCarolina = lazy(() => import("./pages/resources/EVerifySouthCarolina"));
const NcHandbookRequirements = lazy(() => import("./pages/resources/NcHandbookRequirements"));
const ScHandbookRequirements = lazy(() => import("./pages/resources/ScHandbookRequirements"));
const DoWeNeedAPeoResource = lazy(() => import("./pages/resources/DoWeNeedAPeo"));
const HrRiskScore = lazy(() => import("./pages/tools/HrRiskScore"));
const PeoCostCalculator = lazy(() => import("./pages/tools/PeoCostCalculator"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));

const queryClient = new QueryClient();

// Fixed-height placeholder: no spinner, no layout shift.
const RouteFallback = () => <div style={{ minHeight: "70vh" }} aria-hidden="true" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/hr-audit" element={<HrAudit />} />
              <Route path="/services/hr-projects" element={<HrProjects />} />
              <Route path="/services/fractional-hr" element={<FractionalHr />} />
              <Route path="/services/transitions" element={<TransitionsPage />} />
              <Route path="/services/peo-brokerage" element={<PeoBrokerage />} />
              <Route path="/how-we-get-paid" element={<HowWeGetPaid />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about/caleb-sherrill" element={<CalebSherrill />} />
              <Route path="/industries" element={<IndustriesIndex />} />
              <Route path="/industries/law-firms" element={<LawFirms />} />
              <Route path="/industries/cpa-firms" element={<CpaFirms />} />
              <Route path="/industries/engineering-architecture" element={<EngineeringArchitecture />} />
              <Route path="/industries/medical-dental" element={<MedicalDental />} />
              <Route path="/industries/financial-advisors" element={<FinancialAdvisors />} />
              <Route path="/industries/nonprofits" element={<NonprofitsIndustry />} />
              <Route path="/hr-consulting" element={<HrConsulting />} />
              <Route path="/hr-consulting/charlotte-nc" element={<CharlotteNc />} />
              <Route path="/hr-consulting/rock-hill-fort-mill-sc" element={<RockHillFortMillSc />} />
              <Route path="/hr-consulting/raleigh-durham-nc" element={<RaleighDurhamNc />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/5-questions" element={<FiveQuestions />} />
              <Route path="/resources/co-employment" element={<CoEmployment />} />
              <Route path="/resources/peo-vs-aso-vs-inhouse" element={<PeoVsAsoVsInhouse />} />
              <Route path="/resources/peo-cost-guide" element={<PeoCostGuide />} />
              <Route path="/resources/peo-vs-payroll-service" element={<PeoVsPayrollService />} />
              <Route path="/resources/best-peo-for-small-business" element={<BestPeoForSmallBusiness />} />
              <Route path="/resources/top-peo-companies" element={<TopPeoCompanies />} />
              <Route path="/resources/peo-for-startups" element={<PeoForStartups />} />
              <Route path="/resources/peo-benefits" element={<PeoBenefits />} />
              <Route path="/resources/peo-broker-vs-direct" element={<PeoBrokerVsDirect />} />
              <Route path="/resources/what-is-a-peo" element={<WhatIsAPeo />} />
              <Route path="/resources/employee-health-benefits-options" element={<EmployeeHealthBenefitsOptions />} />
              <Route path="/resources/state-employer-guides" element={<StateEmployerGuides />} />
              <Route path="/resources/state-employer-guides/north-carolina" element={<StateGuideNorthCarolina />} />
              <Route path="/resources/state-employer-guides/south-carolina" element={<StateGuideSouthCarolina />} />
              <Route path="/resources/nc-vs-sc-employment-law" element={<NcVsScEmploymentLaw />} />
              <Route path="/resources/multi-state-employer-checklist" element={<MultiStateEmployerChecklist />} />
              <Route path="/resources/hr-audit-checklist" element={<HrAuditChecklist />} />
              <Route path="/resources/e-verify-north-carolina" element={<EVerifyNorthCarolina />} />
              <Route path="/resources/e-verify-south-carolina" element={<EVerifySouthCarolina />} />
              <Route path="/resources/nc-handbook-requirements" element={<NcHandbookRequirements />} />
              <Route path="/resources/sc-handbook-requirements" element={<ScHandbookRequirements />} />
              <Route path="/resources/do-we-need-a-peo" element={<DoWeNeedAPeoResource />} />
              <Route path="/tools/hr-risk-score" element={<HrRiskScore />} />
              <Route path="/tools/peo-cost-calculator" element={<PeoCostCalculator />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources/peo-industry-transparency" element={<PeoIndustryTransparency />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* 301 redirects — generated from src/data/redirects.ts */}
              {activeRedirects.map((r) => (
                <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
              ))}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
