import { useEffect, type ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  type ErrorComponentProps,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const SITE_DESCRIPTION =
  "The Permanent Revolutionary Congress organizes workers, youth, and the oppressed for socialist transformation in Kenya.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "PRC - Workers' Power. Socialist Democracy. Permanent Revolution." },
      {
        name: "description",
        content:
          "The Permanent Revolutionary Congress is building a revolutionary socialist alternative to capitalism, imperialism and oppression.",
      },
      { name: "author", content: "Permanent Revolutionary Congress" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Permanent Revolutionary Congress" },
      { property: "og:title", content: "PRC – Permanent Revolutionary Congress" },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: "https://prca.world/images/prc-og.jpg" },
      { property: "og:image:secure_url", content: "https://prca.world/images/prc-og.jpg" },
      { property: "og:image:alt", content: "PRC - Permanent Revolutionary Congress" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PRC – Permanent Revolutionary Congress" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "https://prca.world/images/prc-og.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black mb-3">This page didn't load</h1>
        <p className="text-muted-foreground mb-6">Something went wrong. Try again or head back home.</p>
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="px-4 py-2 bg-primary text-primary-foreground font-bold"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <Link to="/" className="px-4 py-2 border border-border">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
