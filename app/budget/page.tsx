"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const currentBudget = [
  { name: "Social Security", value: 23, color: "#d4af37" },
  { name: "Medicare", value: 15, color: "#f0d875" },
  { name: "Medicaid", value: 10, color: "#9a7b1a" },
  { name: "Defense", value: 13, color: "#1a1a1a" },
  { name: "Interest on Debt", value: 10, color: "#404040" },
  { name: "Other Mandatory", value: 14, color: "#666666" },
  { name: "Discretionary", value: 15, color: "#999999" },
];

const proposedBudget = [
  { name: "Social Security (Reformed)", value: 18, color: "#d4af37" },
  { name: "Medicare", value: 14, color: "#f0d875" },
  { name: "Medicaid", value: 8, color: "#9a7b1a" },
  { name: "Defense", value: 15, color: "#1a1a1a" },
  { name: "Interest on Debt", value: 8, color: "#404040" },
  { name: "Infrastructure", value: 10, color: "#666666" },
  { name: "Debt Reduction", value: 12, color: "#228B22" },
  { name: "Other Discretionary", value: 15, color: "#999999" },
];

export default function BudgetPage() {
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
              <DollarSign className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Fiscal Policy</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Budget Proposal
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comparison of current federal spending and the Wong Administration&apos;s proposed budget priorities.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Budget Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Current Budget */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-destructive" />
                <h2 className="text-2xl font-bold text-foreground">Current Budget Projections</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                The current federal budget continues unsustainable spending patterns with growing mandatory programs and increasing debt interest payments.
              </p>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={currentBudget}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {currentBudget.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Share"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--card)', 
                        border: '1px solid var(--border)',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Problem:</strong> 10% of the budget goes to interest on debt alone — money that could be invested in America&apos;s future.
                </p>
              </div>
            </motion.div>
            
            {/* Proposed Budget */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border-2 border-navy"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="h-6 w-6 text-navy" />
                <h2 className="text-2xl font-bold text-foreground">Wong Administration Proposal</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Our proposal prioritizes debt reduction, maintains strong defense, reforms entitlements, and invests in infrastructure for future growth.
              </p>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={proposedBudget}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {proposedBudget.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Share"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--card)', 
                        border: '1px solid var(--border)',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 p-4 bg-navy/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Solution:</strong> 12% dedicated to debt reduction — investing in our children&apos;s future by reducing what they&apos;ll owe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Changes */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Budget Changes</h2>
            <div className="w-24 h-1 bg-navy mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Social Security Reform",
                change: "-5%",
                description: "Market-based options for younger workers while protecting current beneficiaries.",
              },
              {
                title: "Defense Investment",
                change: "+2%",
                description: "Modernize military capabilities and support our troops.",
              },
              {
                title: "Debt Reduction",
                change: "+12%",
                description: "Dedicated fund to pay down the national debt.",
              },
              {
                title: "Interest Savings",
                change: "-2%",
                description: "Lower debt means lower interest payments over time.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 p-6 rounded-lg border border-primary-foreground/10"
              >
                <p className={`text-3xl font-bold mb-2 ${item.change.startsWith('+') ? 'text-navy' : 'text-navy-light'}`}>
                  {item.change}
                </p>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Budget Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Budget Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The federal budget is not just a financial document — it is a moral statement about our priorities as a nation. The Wong Administration believes that every dollar spent should serve the American people efficiently and effectively. We reject the false choice between fiscal responsibility and compassion. By eliminating waste and reforming outdated programs, we can better serve those in need while securing a prosperous future for all Americans.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
