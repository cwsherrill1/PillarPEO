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
const PeoForNonprofits = lazy(() => import("./pages/PeoForNonprofits"));
const DoWeNeedAPeo = lazy(() => import("./pages/DoWeNeedAPeo"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HrHeadacheQuiz = lazy(() => import("./pages/HrHeadacheQuiz"));

// Resource sub-pages
const FiveQuestions = lazy(() => import("./pages/resources/FiveQuestions"));
const CoEmployment = lazy(() => import("./pages/resources/CoEmployment"));
const PeoVsAsoVsInhouse = lazy(() => import("./pages/resources/PeoVsAsoVsInhouse"));
const PeoForNonprofitsGuide = lazy(() => import("./pages/resources/PeoForNonprofitsGuide"));
const PeoReadiness = lazy(() => import("./pages/resources/PeoReadiness"));
const PeoCostGuide = lazy(() => import("./pages/resources/PeoCostGuide"));
const PeoVsPayrollService = lazy(() => import("./pages/resources/PeoVsPayrollService"));
const BestPeoForSmallBusiness = lazy(() => import("./pages/resources/BestPeoForSmallBusiness"));
const TopPeoCompanies = lazy(() => import("./pages/resources/TopPeoCompanies"));
const PeoForStartups = lazy(() => import("./pages/resources/PeoForStartups"));
const PeoBenefits = lazy(() => import("./pages/resources/PeoBenefits"));
const PeoBrokerVsDirect = lazy(() => import("./pages/resources/PeoBrokerVsDirect"));
const WhatIsAPeo = lazy(() => import("./pages/resources/WhatIsAPeo"));
const EmployeeHealthBenefitsOptions = lazy(() => import("./pages/resources/EmployeeHealthBenefitsOptions"));
const PeoForVentureBackedStartups = lazy(() => import("./pages/resources/PeoForVentureBackedStartups"));
const SignsOutgrownPeoCharlotte = lazy(() => import("./pages/resources/SignsOutgrownPeoCharlotte"));
const PeoForNonprofitsCharlotte = lazy(() => import("./pages/resources/PeoForNonprofitsCharlotte"));
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
const PeoBrokerCharlotte = lazy(() => import("./pages/PeoBrokerCharlotte"));
const PeoBrokerNorthCarolina = lazy(() => import("./pages/PeoBrokerNorthCarolina"));
const PeoBrokerSouthCarolina = lazy(() => import("./pages/PeoBrokerSouthCarolina"));

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
              <Route path="/peo-for-nonprofits" element={<PeoForNonprofits />} />
              <Route path="/do-we-need-a-peo" element={<DoWeNeedAPeo />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/5-questions" element={<FiveQuestions />} />
              <Route path="/resources/co-employment" element={<CoEmployment />} />
              <Route path="/resources/peo-vs-aso-vs-inhouse" element={<PeoVsAsoVsInhouse />} />
              <Route path="/resources/peo-for-nonprofits-guide" element={<PeoForNonprofitsGuide />} />
              <Route path="/resources/peo-readiness" element={<PeoReadiness />} />
              <Route path="/resources/peo-cost-guide" element={<PeoCostGuide />} />
              <Route path="/resources/peo-vs-payroll-service" element={<PeoVsPayrollService />} />
              <Route path="/resources/best-peo-for-small-business" element={<BestPeoForSmallBusiness />} />
              <Route path="/resources/top-peo-companies" element={<TopPeoCompanies />} />
              <Route path="/resources/peo-for-startups" element={<PeoForStartups />} />
              <Route path="/resources/peo-benefits" element={<PeoBenefits />} />
              <Route path="/resources/peo-broker-vs-direct" element={<PeoBrokerVsDirect />} />
              <Route path="/resources/what-is-a-peo" element={<WhatIsAPeo />} />
              <Route path="/blog/employee-health-benefits-options" element={<EmployeeHealthBenefitsOptions />} />
              <Route path="/peo-broker-charlotte" element={<PeoBrokerCharlotte />} />
              <Route path="/peo-broker-north-carolina" element={<PeoBrokerNorthCarolina />} />
              <Route path="/peo-broker-south-carolina" element={<PeoBrokerSouthCarolina />} />
              <Route path="/blog/peo-for-venture-backed-startups" element={<PeoForVentureBackedStartups />} />
              <Route path="/blog/signs-outgrown-peo-charlotte" element={<SignsOutgrownPeoCharlotte />} />
              <Route path="/blog/peo-for-nonprofits-charlotte" element={<PeoForNonprofitsCharlotte />} />
              <Route path="/blog/peo-industry-transparency" element={<PeoIndustryTransparency />} />
              <Route path="/hr-headache-score" element={<HrHeadacheQuiz />} />
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
