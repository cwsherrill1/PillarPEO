import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const SwitchYourPeo = lazy(() => import("./pages/SwitchYourPeo"));
const PeoForNonprofits = lazy(() => import("./pages/PeoForNonprofits"));
const DoWeNeedAPeo = lazy(() => import("./pages/DoWeNeedAPeo"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/switch-your-peo" element={<SwitchYourPeo />} />
            <Route path="/peo-for-nonprofits" element={<PeoForNonprofits />} />
            <Route path="/do-we-need-a-peo" element={<DoWeNeedAPeo />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
