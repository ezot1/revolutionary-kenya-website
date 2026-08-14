import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import Program from "./pages/Program";
import FullProgram from "./pages/FullProgram";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import AdminBlog from "./pages/AdminBlog";
import AdminEnquiries from "./pages/AdminEnquiries";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns";
import Education from "./pages/Education";
import Publications from "./pages/Publications";
import International from "./pages/International";
import Media from "./pages/Media";
import Events from "./pages/Events";
import Join from "./pages/Join";
import Donate from "./pages/Donate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/history" element={<History />} />
          <Route path="/program" element={<Program />} />
          <Route path="/program/full" element={<FullProgram />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/enquiries" element={<AdminEnquiries />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/education" element={<Education />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/international" element={<International />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
