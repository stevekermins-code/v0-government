"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gavel, Scale, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function JudicialPage() {
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
            <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/30 rounded-full px-4 py-2 mb-6">
              <Gavel className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Judicial Branch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Supreme Court Philosophy
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach to judicial appointments and the principles that guide our selections.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Ideal Justice */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Prototypical Judicial Appointee</h2>
              <div className="w-24 h-1 bg-navy mb-6" />
              
              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">Justice Clarence Thomas</h3>
                <p className="text-muted-foreground mb-4">Associate Justice of the Supreme Court</p>
                
                <p className="text-foreground leading-relaxed">
                  Justice Clarence Thomas represents the ideal model for our judicial appointments. Appointed in 1991, he has served with unwavering commitment to constitutional originalism and textualism. His opinions consistently reflect a dedication to interpreting the Constitution as written, not as modern judges might wish it to be.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Originalist Philosophy</p>
                    <p className="text-muted-foreground">Interprets the Constitution based on its original meaning at the time of ratification.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Textualist Approach</p>
                    <p className="text-muted-foreground">Relies on the plain text of laws and the Constitution rather than legislative intent or policy preferences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-navy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Limited Government</p>
                    <p className="text-muted-foreground">Believes in strict limits on federal power as outlined in the Constitution.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-4 border-navy shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=1000&fit=crop"
                  alt="Supreme Court Justice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Judicial Philosophy */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-navy" />
              <h2 className="text-3xl font-bold">Our Judicial Philosophy</h2>
            </div>
            
            <div className="space-y-6 text-primary-foreground/80 text-lg leading-relaxed">
              <p>
                The Wong Administration embraces <strong className="text-navy">constitutional originalism</strong> — the belief that the Constitution should be interpreted according to its original public meaning at the time of ratification. This is not a rigid or backwards-looking approach; rather, it is a commitment to the rule of law and democratic self-governance.
              </p>
              <p>
                When judges interpret the Constitution based on their own policy preferences, they usurp the role of elected legislators. Our judicial appointments will respect the separation of powers and defer to the democratic process on policy questions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Litmus Tests */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Major Litmus Tests</h2>
            <div className="w-24 h-1 bg-navy" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Second Amendment",
                description: "Must affirm the individual right to keep and bear arms.",
              },
              {
                title: "Federalism",
                description: "Must respect the constitutional limits on federal power and state sovereignty.",
              },
              {
                title: "Property Rights",
                description: "Must protect against government takings and unreasonable regulation.",
              },
              {
                title: "Religious Liberty",
                description: "Must uphold the free exercise clause and protect religious freedom.",
              },
              {
                title: "Free Speech",
                description: "Must robustly defend First Amendment speech protections.",
              },
              {
                title: "Separation of Powers",
                description: "Must respect the constitutional boundaries between branches.",
              },
            ].map((test, index) => (
              <motion.div
                key={test.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-navy/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <Gavel className="h-5 w-5 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{test.title}</h3>
                <p className="text-muted-foreground">{test.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
