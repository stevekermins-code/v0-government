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
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Gavel className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Judicial Branch</span>
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
              <div className="w-24 h-1 bg-gold mb-6" />
              
              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h3 className="text-2xl font-bold text-gold mb-2">Justice Clarence Thomas</h3>
                <p className="text-muted-foreground mb-4">Associate Justice of the Supreme Court</p>
                
                <p className="text-foreground leading-relaxed">
                  Justice Clarence Thomas is the model for our judicial picks. He was appointed in 1991 and has served with a strong commitment to reading the Constitution as it was written. His rulings show a dedication to understanding the Constitution based on what it meant when it was created, not what modern judges might want it to mean.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Original Meaning</p>
                    <p className="text-muted-foreground">Reads the Constitution based on what it meant when it was first written.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Plain Text Reading</p>
                    <p className="text-muted-foreground">Relies on the actual words of laws and the Constitution rather than what lawmakers intended or policy goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
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
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-4 border-gold shadow-2xl">
                <Image
                  src="https://www.reuters.com/resizer/v2/ICLBC23PDRONLIXNUXU7TH5EFA.jpg?auth=9cbd6bf8b396728da204b756e009eb0128dcf4f49864a92b1b71d730bdabc0fe&width=1920&quality=80"
                  alt="Justice Clarence Thomas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
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
              <Scale className="h-8 w-8 text-gold" />
              <h2 className="text-3xl font-bold">Our Judicial Philosophy</h2>
            </div>
            
            <div className="space-y-6 text-primary-foreground/80 text-lg leading-relaxed">
              <p>
                The Wong Administration believes in <strong className="text-gold">reading the Constitution as it was written</strong>. This means understanding the Constitution based on what it meant when it was first created. This is not a rigid or old-fashioned approach. Instead, it is a commitment to following the law and letting the people govern themselves through elections.
              </p>
              <p>
                When judges read the Constitution based on their own personal views, they take power away from elected lawmakers. Our judicial picks will respect the separation of powers and let the democratic process handle policy questions.
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
            <div className="w-24 h-1 bg-gold" />
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
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Gavel className="h-5 w-5 text-gold" />
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
