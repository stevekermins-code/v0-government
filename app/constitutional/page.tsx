"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Shield, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const cherrishedLiberties = [
  {
    title: "Freedom of Speech",
    description: "The First Amendment guarantees the right of all Americans to express their views without government censorship. We will defend this fundamental liberty against all threats.",
  },
  {
    title: "Right to Bear Arms",
    description: "The Second Amendment is not negotiable. Law-abiding citizens have the constitutional right to keep and bear arms for self-defense and protection of their families.",
  },
  {
    title: "Due Process",
    description: "Every American is entitled to fair treatment through the judicial system. We will protect against government overreach and ensure equal justice under law.",
  },
  {
    title: "Property Rights",
    description: "The right to own and control private property is fundamental to American liberty. We will defend against unreasonable government seizure and regulation.",
  },
  {
    title: "Religious Freedom",
    description: "Americans have the right to practice their faith freely. We will protect religious institutions and individuals from government interference.",
  },
];

export default function ConstitutionalPage() {
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
              <Scale className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Constitutional Underpinnings</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Civil Liberties & Amendments
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to the Constitution and the fundamental principles that make America exceptional.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Proposed Amendment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-gold" />
              <h2 className="text-3xl font-bold">Proposed Constitutional Amendment</h2>
            </div>
            
            <div className="bg-primary-foreground/5 border border-primary-foreground/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gold mb-4">The Congressional Accountability Amendment</h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Section 1:</strong> If the United States operates under a budget deficit at the end of any fiscal year, members of Congress shall receive no compensation for the following fiscal year until a balanced budget is passed.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Section 2:</strong> Congress must pass a budget that is at least balanced (revenues equal to or exceeding expenditures) for members to receive their full compensation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong>Section 3:</strong> This amendment shall take effect two years after ratification by three-fourths of the state legislatures.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-gold/20 rounded-lg">
                <h4 className="font-bold text-gold mb-2">Impact on Fundamental Principles</h4>
                <p className="text-primary-foreground/80">
                  This amendment reinforces the principle of representative accountability. Our elected officials should share in the consequences of fiscal irresponsibility. It does not alter the separation of powers or fundamental rights, but adds a powerful incentive for fiscal discipline.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Cherished Liberties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-gold" />
              <h2 className="text-3xl font-bold text-foreground">Most Cherished Liberties</h2>
            </div>
            <p className="text-muted-foreground">
              The principles President Wong will champion and defend as Commander in Chief.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cherrishedLiberties.map((liberty, index) => (
              <motion.div
                key={liberty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{liberty.title}</h3>
                <p className="text-muted-foreground">{liberty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
