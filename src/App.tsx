import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import SwitchYourPeo from "./pages/SwitchYourPeo";
import PeoForNonprofits from "./pages/PeoForNonprofits";
import DoWeNeedAPeo from "./pages/DoWeNeedAPeo";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import HrHeadacheQuiz from "./pages/HrHeadacheQuiz";

// Resource sub-pages
import FiveQuestions from "./pages/resources/FiveQuestions";
import CoEmployment from "./pages/resources/CoEmployment";
import PeoPricing from "./pages/resources/PeoPricing";
import PeoVsAsoVsInhouse from "./pages/resources/PeoVsAsoVsInhouse";
import HowToSwitchPeos from "./pages/resources/HowToSwitchPeos";
import PeoForNonprofitsGuide from "./pages/resources/PeoForNonprofitsGuide";
import PeoReadiness from "./pages/resources/PeoReadiness";
import PeoImplementation from "./pages/resources/PeoImplementation";
import PeoCostGuide from "./pages/resources/PeoCostGuide";
import PeoVsPayrollService from "./pages/resources/PeoVsPayrollService";
import BestPeoForSmallBusiness from "./pages/resources/BestPeoForSmallBusiness";
import TopPeoCompanies from "./pages/resources/TopPeoCompanies";
import PeoForStartups from "./pages/resources/PeoForStartups";
import PeoBenefits from "./pages/resources/PeoBenefits";
import PeoBrokerVsDirect from "./pages/resources/PeoBrokerVsDirect";
import WhatIsAPeo from "./pages/resources/WhatIsAPeo";
import EmployeeHealthBenefitsOptions from "./pages/resources/EmployeeHealthBenefitsOptions";
import PeoForVentureBackedStartups from "./pages/resources/PeoForVentureBackedStartups";
import SignsOutgrownPeoCharlotte from "./pages/resources/SignsOutgrownPeoCharlotte";
import PeoForNonprofitsCharlotte from "./pages/resources/PeoForNonprofitsCharlotte";
import PeoIndustryTransparency from "./pages/resources/PeoIndustryTransparency";
import PeoBroker from "./pages/PeoBroker";
import PeoBrokerCharlotte from "./pages/PeoBrokerCharlotte";
import PeoBrokerNorthCarolina from "./pages/PeoBrokerNorthCarolina";
import PeoBrokerSouthCarolina from "./pages/PeoBrokerSouthCarolina";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <BrowserRouter>
          <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/switch-your-peo" element={<SwitchYourPeo />} />
            <Route path="/peo-for-nonprofits" element={<PeoForNonprofits />} />
            <Route path="/do-we-need-a-peo" element={<DoWeNeedAPeo />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/5-questions" element={<FiveQuestions />} />
            <Route path="/resources/co-employment" element={<CoEmployment />} />
            <Route path="/resources/peo-pricing" element={<PeoPricing />} />
            <Route path="/resources/peo-vs-aso-vs-inhouse" element={<PeoVsAsoVsInhouse />} />
            <Route path="/resources/how-to-switch-peos" element={<HowToSwitchPeos />} />
            <Route path="/resources/peo-for-nonprofits-guide" element={<PeoForNonprofitsGuide />} />
            <Route path="/resources/peo-readiness" element={<PeoReadiness />} />
            <Route path="/resources/peo-implementation" element={<PeoImplementation />} />
            <Route path="/resources/peo-cost-guide" element={<PeoCostGuide />} />
            <Route path="/resources/peo-vs-payroll-service" element={<PeoVsPayrollService />} />
            <Route path="/resources/best-peo-for-small-business" element={<BestPeoForSmallBusiness />} />
            <Route path="/resources/top-peo-companies" element={<TopPeoCompanies />} />
            <Route path="/resources/peo-for-startups" element={<PeoForStartups />} />
            <Route path="/resources/peo-benefits" element={<PeoBenefits />} />
            <Route path="/resources/peo-broker-vs-direct" element={<PeoBrokerVsDirect />} />
            <Route path="/resources/what-is-a-peo" element={<WhatIsAPeo />} />
            <Route path="/blog/employee-health-benefits-options" element={<EmployeeHealthBenefitsOptions />} />
            <Route path="/peo-broker" element={<PeoBroker />} />
            <Route path="/peo-broker-charlotte" element={<PeoBrokerCharlotte />} />
            <Route path="/peo-broker-north-carolina" element={<PeoBrokerNorthCarolina />} />
            <Route path="/peo-broker-south-carolina" element={<PeoBrokerSouthCarolina />} />
            <Route path="/blog/peo-broker-charlotte-nc" element={<Navigate to="/peo-broker-charlotte" replace />} />
            <Route path="/blog/peo-for-venture-backed-startups" element={<PeoForVentureBackedStartups />} />
            <Route path="/blog/signs-outgrown-peo-charlotte" element={<SignsOutgrownPeoCharlotte />} />
            <Route path="/blog/peo-for-nonprofits-charlotte" element={<PeoForNonprofitsCharlotte />} />
            <Route path="/blog/peo-industry-transparency" element={<PeoIndustryTransparency />} />
            <Route path="/hr-headache-score" element={<HrHeadacheQuiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* 301 redirects from old pillarpeo.com URLs */}
            <Route path="/services" element={<Navigate to="/how-it-works" replace />} />
            <Route path="/why-peo" element={<Navigate to="/do-we-need-a-peo" replace />} />
            <Route path="/industries" element={<Navigate to="/peo-for-nonprofits" replace />} />
            <Route path="/nonprofit-toolkit" element={<Navigate to="/peo-for-nonprofits" replace />} />
            <Route path="/peo-onboarding" element={<Navigate to="/switch-your-peo" replace />} />
            <Route path="/roi-calculator" element={<Navigate to="/resources/peo-pricing" replace />} />
            <Route path="/blog" element={<Navigate to="/resources" replace />} />
            <Route path="/blog/peo-roi-calculator" element={<Navigate to="/resources/peo-pricing" replace />} />
            <Route path="/blog/how-much-peo-costs" element={<Navigate to="/resources/peo-pricing" replace />} />
            <Route path="/blog/peo-vs-hr-outsourcing" element={<Navigate to="/resources/peo-vs-aso-vs-inhouse" replace />} />
            <Route path="/blog/should-your-business-use-peo" element={<Navigate to="/resources/peo-readiness" replace />} />
            <Route path="/blog/what-is-a-peo-broker-charlotte-nc" element={<Navigate to="/about" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
