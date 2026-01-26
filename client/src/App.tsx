import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { IntlProvider } from "./contexts/IntlContext";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import Podcast from "./pages/Podcast";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/music"} component={Music} />
      <Route path={"/podcast"} component={Podcast} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <IntlProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </IntlProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
