import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar
          collapsed={sidebarCollapsed}
          onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 w-full h-full bg-foreground/20 backdrop-blur-sm md:hidden cursor-default"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 md:hidden transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          collapsed={false}
          onCollapse={() => setMobileSidebarOpen(false)}
          isMobile
        />
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <TopNav
          sidebarCollapsed={sidebarCollapsed}
          onMenuClick={() => setMobileSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="p-4 md:p-6 lg:p-8">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
