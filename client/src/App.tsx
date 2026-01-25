import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { IntlProvider } from "./contexts/IntlContext";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
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
