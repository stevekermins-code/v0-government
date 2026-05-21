"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Flag,
  Scale,
  Building2,
  Gavel,
  Landmark,
  DollarSign,
  Menu,
  X,
  Star,
} from "lucide-react";
import MegaMenu, { type MegaMenuItem } from "@/components/ui/mega-menu";
import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";
import { useState } from "react";

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Administration",
    subMenus: [
      {
        title: "Leadership",
        items: [
          {
            label: "The President",
            description: "Dylan Wong - 47th President",
            icon: Star,
            href: "/president",
          },
          {
            label: "The Vice President",
            description: "Ethan Landrigan",
            icon: Users,
            href: "/vice-president",
          },
          {
            label: "The Cabinet",
            description: "Executive department heads",
            icon: Building2,
            href: "/cabinet",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Priorities",
    subMenus: [
      {
        title: "Key Issues",
        items: [
          {
            label: "Platform",
            description: "Our policy positions",
            icon: FileText,
            href: "/platform",
          },
          {
            label: "Election Strategy",
            description: "Road to 270",
            icon: Flag,
            href: "/strategy",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Government",
    subMenus: [
      {
        title: "Branches",
        items: [
          {
            label: "Constitutional",
            description: "Amendments & liberties",
            icon: Scale,
            href: "/constitutional",
          },
          {
            label: "Executive Branch",
            description: "Bureaucratic vision",
            icon: Building2,
            href: "/executive",
          },
          {
            label: "Judicial Branch",
            description: "Supreme Court philosophy",
            icon: Gavel,
            href: "/judicial",
          },
          {
            label: "Legislative Branch",
            description: "State of the Union",
            icon: Landmark,
            href: "/legislative",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Budget",
    link: "/budget",
  },
  {
    id: 5,
    label: "Media",
    link: "/media",
  },
  {
    id: 6,
    label: "Contact",
    link: "/contact",
  },
];

const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "The President", href: "/president" },
  { label: "The Vice President", href: "/vice-president" },
  { label: "The Cabinet", href: "/cabinet" },
  { label: "Platform", href: "/platform" },
  { label: "Election Strategy", href: "/strategy" },
  { label: "Constitutional", href: "/constitutional" },
  { label: "Executive Branch", href: "/executive" },
  { label: "Judicial Branch", href: "/judicial" },
  { label: "Legislative Branch", href: "/legislative" },
  { label: "Budget", href: "/budget" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-navy-dark via-navy to-navy-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-navy">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground tracking-tight">WONG 2028</p>
              <p className="text-xs text-navy font-medium -mt-1">For America</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <MegaMenu items={NAV_ITEMS} />
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle variant="icon" buttonSize={32} duration={500} />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-card border-t border-border"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-2">
              {MOBILE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-4 rounded-md text-foreground hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
