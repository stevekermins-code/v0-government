"use client";

import { motion } from "framer-motion";
import { Building2, Star, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ExecutivePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Building2 className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Executive Branch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Bureaucratic Vision
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach to transforming the federal bureaucracy into an efficient, accountable, and citizen-focused institution.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Vision Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Vision Statement to the Federal Bureaucracy</h2>
            
            <div className="bg-gold text-background p-8 rounded-lg">
              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
                {'"'}To all federal employees: Our administration will streamline and reduce the size of the federal bureaucracy while enhancing its efficiency. We will eliminate redundant agencies, cut wasteful programs, and empower those who remain to serve the American people with excellence. Our goal is not to destroy government, but to make it work — smaller, smarter, and more responsive to citizens&apos; needs. Performance will be rewarded; waste will be eliminated. Together, we will restore the public&apos;s trust in their government.{'"'}
              </blockquote>
              <p className="mt-6 font-bold">— President Dylan Wong</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Principles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Principles</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Shrink the Size",
                description: "Reduce the federal workforce through attrition and elimination of unnecessary positions.",
              },
              {
                title: "Streamline Operations",
                description: "Consolidate redundant agencies and eliminate bureaucratic red tape.",
              },
              {
                title: "Performance Metrics",
                description: "Implement measurable goals and hold agencies accountable for results.",
              },
              {
                title: "Citizen Focus",
                description: "Reorient every agency to prioritize service to the American people.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA to Cabinet */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Cabinet</h2>
            <p className="text-muted-foreground mb-8">
              See the exceptional leaders President Wong has selected to lead the executive departments.
            </p>
            <Link href="/cabinet">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-background font-bold px-8">
                View Cabinet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
