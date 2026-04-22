import { AuthLayout } from "@/components/layout/AuthLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const LeadsPage = lazy(() => import("@/pages/Leads"));
const DealsPage = lazy(() => import("@/pages/Deals"));
const CustomersPage = lazy(() => import("@/pages/Customers"));
const TeamPage = lazy(() => import("@/pages/Team"));
const TasksPage = lazy(() => import("@/pages/Tasks"));
const CalendarPage = lazy(() => import("@/pages/Calendar"));
const ReportsPage = lazy(() => import("@/pages/Reports"));
const MessagesPage = lazy(() => import("@/pages/Messages"));
const SettingsPage = lazy(() => import("@/pages/Settings"));
const NotificationsPage = lazy(() => import("@/pages/Notifications"));
const LoginPage = lazy(() => import("@/pages/auth/Login"));
const SignupPage = lazy(() => import("@/pages/auth/Signup"));
const ForgotPasswordPage = lazy(() => import("@/pages/auth/ForgotPassword"));
const OtpPage = lazy(() => import("@/pages/auth/Otp"));
const ResetPasswordPage = lazy(() => import("@/pages/auth/ResetPassword"));
const TwoFactorPage = lazy(() => import("@/pages/auth/TwoFactor"));

const PageLoader = () => (
  <div className="flex h-full items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Outlet />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  ),
});

// Index redirect
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/dashboard" />,
});

// Main layout route
const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main",
  component: () => (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/dashboard",
  component: DashboardPage,
});
const leadsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/leads",
  component: LeadsPage,
});
const dealsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/deals",
  component: DealsPage,
});
const customersRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/customers",
  component: CustomersPage,
});
const teamRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/team",
  component: TeamPage,
});
const tasksRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/tasks",
  component: TasksPage,
});
const calendarRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/calendar",
  component: CalendarPage,
});
const reportsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/reports",
  component: ReportsPage,
});
const messagesRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/messages",
  component: MessagesPage,
});
const settingsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/settings",
  component: SettingsPage,
});
const notificationsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/notifications",
  component: NotificationsPage,
});

// Auth layout route
const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth",
  component: () => (
    <AuthLayout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/login",
  component: LoginPage,
});
const signupRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/signup",
  component: SignupPage,
});
const forgotPasswordRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/forgot-password",
  component: ForgotPasswordPage,
});
const otpRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/otp",
  component: OtpPage,
});
const resetPasswordRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/reset-password",
  component: ResetPasswordPage,
});
const twoFactorRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: "/auth/2fa",
  component: TwoFactorPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  mainLayoutRoute.addChildren([
    dashboardRoute,
    leadsRoute,
    dealsRoute,
    customersRoute,
    teamRoute,
    tasksRoute,
    calendarRoute,
    reportsRoute,
    messagesRoute,
    settingsRoute,
    notificationsRoute,
  ]),
  authLayoutRoute.addChildren([
    loginRoute,
    signupRoute,
    forgotPasswordRoute,
    otpRoute,
    resetPasswordRoute,
    twoFactorRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
