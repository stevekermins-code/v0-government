import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center border-2 border-gold">
                <span className="text-primary font-bold text-xl">W</span>
              </div>
              <div>
                <p className="font-bold text-xl tracking-tight">WONG 2028</p>
                <p className="text-sm text-gold font-medium">For America</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Vote Wong, Not Wrong. A new era of American leadership starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/president" className="text-primary-foreground/70 hover:text-gold transition-colors">The President</Link></li>
              <li><Link href="/vice-president" className="text-primary-foreground/70 hover:text-gold transition-colors">The Vice President</Link></li>
              <li><Link href="/cabinet" className="text-primary-foreground/70 hover:text-gold transition-colors">The Cabinet</Link></li>
              <li><Link href="/platform" className="text-primary-foreground/70 hover:text-gold transition-colors">Platform</Link></li>
            </ul>
          </div>

          {/* Government */}
          <div>
            <h3 className="font-bold text-gold mb-4">Government</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/executive" className="text-primary-foreground/70 hover:text-gold transition-colors">Executive Branch</Link></li>
              <li><Link href="/judicial" className="text-primary-foreground/70 hover:text-gold transition-colors">Judicial Branch</Link></li>
              <li><Link href="/legislative" className="text-primary-foreground/70 hover:text-gold transition-colors">Legislative Branch</Link></li>
              <li><Link href="/budget" className="text-primary-foreground/70 hover:text-gold transition-colors">Budget Proposal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-gold" />
                <span>1600 Pennsylvania Avenue NW</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-gold" />
                <span>(202) 555-WONG</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@wong2028.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2028 Wong for America. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Paid for by Wong for America
          </p>
        </div>
      </div>
    </footer>
  );
}
