"use client"

import { useState, useEffect } from "react"

// relative paths used
// We use "../" to go up one folder, then into "ui"
import { Menu, X, Zap } from "../ui/icons"     
import { Button } from "../ui/button"
// ----------------------------------------------------

// cn defined here to resolve import errors
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() { // default export added for easier importing
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Cadence", href: "#features" }, // Changed href to match our section IDs
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-xl border-b border-white/10",
        isScrolled ? "bg-black/80" : "bg-black/60",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-orange-600 to-red-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Rhythm</span>
          </div>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions (Right) */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-gray-400 transition-colors hover:bg-white/5 hover:text-orange-500">
              Log in
            </Button>
            <Button className="rounded-full bg-linear-to-r from-orange-600 to-red-600 px-6 text-white transition-transform hover:scale-105 hover:from-orange-500 hover:to-red-500">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center text-gray-400 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
              <Button
                variant="ghost"
                className="w-full text-gray-400 transition-colors hover:bg-white/5 hover:text-orange-500"
              >
                Log in
              </Button>
              <Button className="w-full rounded-full bg-linear-to-r from-orange-600 to-red-600 text-white transition-transform hover:scale-105 hover:from-orange-500 hover:to-red-500">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}