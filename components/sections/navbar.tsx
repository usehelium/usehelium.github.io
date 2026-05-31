"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { NAV_LINKS, GITHUB_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <span className="text-primary font-mono font-semibold text-sm">He</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-text">Helium</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text transition-colors rounded-md hover:bg-bg-muted/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary hover:text-text hover:border-border-hover transition-all"
          >
            <GithubIcon className="h-4 w-4" />
            Star on GitHub
          </a>
          <a
            href={GITHUB_URL}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-bg hover:bg-primary-hover transition-colors"
          >
            Get Started
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-text-secondary hover:text-text rounded-md hover:bg-bg-muted/50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2 border-t border-border mt-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-text-secondary hover:text-text"
            >
              <GithubIcon className="h-4 w-4" />
              Star on GitHub
            </a>
            <a
              href={GITHUB_URL}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-bg"
            >
              Get Started
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
