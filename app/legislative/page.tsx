"use client";

import { motion } from "framer-motion";
import { Landmark, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LegislativePage() {
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
              <Landmark className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Legislative Branch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              State of the Union
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              President Wong&apos;s address to Congress outlining the administration&apos;s legislative priorities for the coming year.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* State of the Union Address */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-6 w-6 text-navy" />
                Opening Remarks
              </h2>
              <p className="text-foreground leading-relaxed">
                Mr. Speaker, Madam Vice President, members of Congress, my fellow Americans — tonight I stand before you not just as your President, but as a fellow citizen who shares your hopes, your concerns, and your unwavering belief in the promise of America. Our nation stands at a crossroads. The path we choose in the coming year will determine whether we leave our children a legacy of prosperity or a burden of debt. I am here to tell you: we will choose prosperity. We will choose fiscal responsibility. We will choose America.
              </p>
            </div>
            
            {/* Theme 1 */}
            <div className="bg-card p-8 rounded-lg border-2 border-navy/30 mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Theme One: Fiscal Responsibility
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                For too long, Washington has spent money it doesn&apos;t have. Our national debt threatens the future of every American family. Tonight, I call upon Congress to join me in passing the most comprehensive fiscal reform package in our nation&apos;s history.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We will balance the federal budget within four years. We will reduce wasteful spending across every department. And yes, we will hold Congress accountable through our proposed Constitutional amendment — if you cannot balance the budget, you will not be paid. This is not punishment; this is partnership. The American people make sacrifices every day to balance their family budgets. Their representatives should do no less.
              </p>
              <p className="text-foreground leading-relaxed">
                Fiscal responsibility is not just about numbers on a ledger. It is about freedom — the freedom of future generations to pursue their dreams without the crushing weight of our debts upon their shoulders.
              </p>
            </div>
            
            {/* Theme 2 */}
            <div className="bg-card p-8 rounded-lg border-2 border-navy/30 mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Theme Two: Tax Relief for All Americans
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The American people work hard for their money. They deserve to keep more of what they earn. Tonight, I am proposing the largest tax reduction for working families in a generation.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Our plan is simple: lower rates for everyone. Not targeted breaks for special interests. Not complicated credits that require an accountant to understand. Simple, across-the-board relief that puts money back in the pockets of hardworking Americans.
              </p>
              <p className="text-foreground leading-relaxed">
                When families keep more of their earnings, they spend it in their communities. They save for their children&apos;s education. They invest in small businesses. This is how economies grow — not through government programs, but through the enterprise and ingenuity of free people.
              </p>
            </div>
            
            {/* Theme 3 */}
            <div className="bg-card p-8 rounded-lg border-2 border-navy/30 mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Theme Three: Immigration Reform
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                America has always been a nation of immigrants. My own family&apos;s story is proof of the American Dream. But we are also a nation of laws. It is time to fix our broken immigration system — not with more bureaucracy, but with efficiency and fairness.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Our plan will streamline the legal immigration process, cutting wait times and reducing paperwork. Those who want to come to America legally should not have to wait decades. At the same time, we will secure our borders and enforce our laws. These are not contradictory goals — they are complementary.
              </p>
              <p className="text-foreground leading-relaxed">
                We welcome those who come seeking opportunity and freedom. We ask only that they do so through proper channels, respecting the laws that protect us all.
              </p>
            </div>
            
            {/* Conclusion */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Conclusion
              </h2>
              <p className="leading-relaxed mb-4">
                My fellow Americans, the work ahead is not easy. It will require sacrifice, compromise, and courage. But I have faith in this Congress. I have faith in the American people. And I have faith that together, we can build a future worthy of our great nation.
              </p>
              <p className="leading-relaxed font-medium">
                Vote Wong, Not Wrong. Thank you, God bless you, and God bless the United States of America.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Legislative Priorities Summary */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Legislative Priorities Summary</h2>
            <div className="w-24 h-1 bg-navy mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Fiscal Responsibility",
                points: ["Balance the budget", "Reduce national debt", "Congressional accountability amendment"],
              },
              {
                number: "02",
                title: "Tax Relief",
                points: ["Lower rates for all", "Simplify the tax code", "Support small businesses"],
              },
              {
                number: "03",
                title: "Immigration Reform",
                points: ["Streamline legal process", "Secure borders", "Enforce existing laws"],
              },
            ].map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <span className="text-5xl font-bold text-navy/30">{priority.number}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{priority.title}</h3>
                <ul className="space-y-2">
                  {priority.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-muted-foreground">
                      <Star className="h-4 w-4 text-navy" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
