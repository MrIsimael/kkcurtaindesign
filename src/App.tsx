import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import FabricSamples from "./pages/FabricSamples";
import QuoteRequest from "./pages/QuoteRequest";
import ThankYou from "./pages/ThankYou";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Initialize Firebase (this will run when the app starts)
import './lib/firebase';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fabric-samples" element={<FabricSamples />} />
            <Route path="/quote" element={<QuoteRequest />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<Navigate to="/admin-login" replace />} />
            <Route path="/admin-kk" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
