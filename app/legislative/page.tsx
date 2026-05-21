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
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Landmark className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Legislative Branch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              State of the Union
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              President Wong address to Congress outlining the administration legislative priorities for the coming year.
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
                <Star className="h-6 w-6 text-gold" />
                Opening Remarks
              </h2>
              <p className="text-foreground leading-relaxed">
                Mr. Vice President, members of Congress, my fellow Americans: tonight I stand before you not just as your President, but as a fellow citizen who shares your hopes, your concerns, and your unwavering belief in the promise of America. Our nation stands at a crossroads. The path we choose in the coming years will determine whether we leave our children a legacy of prosperity or a burden of debt. I am here to tell you: we will choose prosperity. We will choose the future. We will choose America.
              </p>
            </div>
            
            {/* Theme 1 */}
            <div className="bg-card p-8 rounded-lg border-2 border-gold/30 mb-8">
              <h2 className="text-2xl font-bold text-gold mb-4">
                Theme One: Space Exploration
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Two score and forty-seven years ago, we made it our mission to send four astronauts to the moon. They lied. Our government was allegedly truthful with you citizens. Not then, but now, under new leadership and guidance, shall everything be uncovered. They faked the moon landing. Under cameras and in a Hollywood set right in California, the lie was created.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                No more shall these lies from the government be created. Now, all media about the government will be totally truthful. To make up for past wrongings, we have developed the Artemis Missions. The next one is our redemption. The next one is the true moon landing.
              </p>
              <p className="text-foreground leading-relaxed">
                With new funding for future space missions we, as American citizens, can truly grasp the wonders of interplanetary exploration.
              </p>
            </div>
            
            {/* Theme 2 */}
            <div className="bg-card p-8 rounded-lg border-2 border-gold/30 mb-8">
              <h2 className="text-2xl font-bold text-gold mb-4">
                Theme Two: Tax Relief for All Americans
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                This country went to war over a 2% tax, and now we experience tax rates well above this. This country is built on freedom, and you should not have to be stripped of your money so that the federal government can force you to save for Social Security and health care.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                While we gradually decrease spending, we can decrease taxes to the bare minimum and fight for American citizens. All brackets will receive a tax decrease.
              </p>
              <p className="text-foreground leading-relaxed">
                We will not tax the rich and middle class to death like our opponents want to because pursuing wealth should not be disincentivized.
              </p>
            </div>
            
            {/* Theme 3 */}
            <div className="bg-card p-8 rounded-lg border-2 border-gold/30 mb-8">
              <h2 className="text-2xl font-bold text-gold mb-4">
                Theme Three: Spending Cuts
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Because of decreased taxes and our pursuit for less debt in future generations, we will need to make cuts in government spending. If we continue to push this off, our children and grandchildren will have to face an even more crippling debt.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Primarily, we will focus on cutting Social Security. Rather than forcing Americans to be a part of Social Security, we will make it an opt-in program and decrease the percentage we take out and therefore the amount given out.
              </p>
              <p className="text-foreground leading-relaxed">
                This is no easy task, but still a necessary one. We must work together for the common good of the United States of America.
              </p>
            </div>
            
            {/* Conclusion */}
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Conclusion
              </h2>
              <p className="leading-relaxed mb-4">
                My fellow Americans, the work ahead is a hard road. It will require sacrifice, compromise, and courage. But I have faith in this Congress. I have faith in the American people. And I have faith that together, we can build a future worthy of our great nation.
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
            <div className="w-24 h-1 bg-gold mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Space Exploration",
                points: ["Uncover the truth", "Fund Artemis Missions", "Lead in interplanetary exploration"],
              },
              {
                number: "02",
                title: "Tax Relief",
                points: ["Lower rates for all", "Decrease spending", "Fight for citizens"],
              },
              {
                number: "03",
                title: "Spending Cuts",
                points: ["Reform Social Security", "Make it opt-in", "Reduce debt burden"],
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
                <span className="text-5xl font-bold text-gold/30">{priority.number}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{priority.title}</h3>
                <ul className="space-y-2">
                  {priority.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-muted-foreground">
                      <Star className="h-4 w-4 text-gold" />
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
