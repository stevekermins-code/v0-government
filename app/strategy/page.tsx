"use client";

import { motion } from "framer-motion";
import { Flag, Target, CheckCircle, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const safeStates = [
  { name: "Indiana", votes: 11, reason: "Strong Republican base, conservative values" },
  { name: "Texas", votes: 40, reason: "Large electoral prize, reliable red state" },
  { name: "Florida", votes: 30, reason: "Growing conservative population" },
  { name: "Ohio", votes: 17, reason: "Working class appeal" },
  { name: "Tennessee", votes: 11, reason: "Solid conservative state" },
  { name: "Alabama", votes: 9, reason: "Deep South stronghold" },
  { name: "Kentucky", votes: 8, reason: "Traditional Republican support" },
  { name: "Oklahoma", votes: 7, reason: "Reliably conservative" },
  { name: "Kansas", votes: 6, reason: "Heartland values" },
  { name: "Utah", votes: 6, reason: "Conservative Mountain West" },
  { name: "Iowa", votes: 6, reason: "Rural conservative base" },
  { name: "Arkansas", votes: 6, reason: "Southern conservative" },
  { name: "Missouri", votes: 10, reason: "Trending Republican" },
  { name: "Louisiana", votes: 8, reason: "Southern stronghold" },
  { name: "South Carolina", votes: 9, reason: "Solid red state" },
];

const battlegroundStates = [
  { name: "Minnesota", votes: 10, strategy: "Focus on rural voters and fiscal responsibility message" },
  { name: "New Hampshire", votes: 4, strategy: "Appeal to independents with tax reduction platform" },
  { name: "Pennsylvania", votes: 19, strategy: "Working class voters in steel country" },
  { name: "Michigan", votes: 15, strategy: "Manufacturing and auto worker outreach" },
  { name: "Wisconsin", votes: 10, strategy: "Midwest values and economic message" },
  { name: "Arizona", votes: 11, strategy: "Immigration policy resonates with border concerns" },
  { name: "Georgia", votes: 16, strategy: "Suburban voters and economic growth" },
  { name: "Nevada", votes: 6, strategy: "Economic recovery and jobs message" },
];

const totalSafe = safeStates.reduce((sum, state) => sum + state.votes, 0);
const totalBattleground = battlegroundStates.reduce((sum, state) => sum + state.votes, 0);

export default function StrategyPage() {
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
              <Flag className="h-4 w-4 text-navy" />
              <span className="text-sm font-medium text-navy">Campaign Strategy</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6">
              Road to 270
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic path to victory in the Electoral College. Every vote counts, every state matters.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Campaign Slogan */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Campaign Slogan</h2>
            <div className="bg-navy text-background px-8 py-6 rounded-lg inline-block">
              <p className="text-3xl sm:text-4xl font-black tracking-tight">
                VOTE WONG, NOT WRONG
              </p>
            </div>
            <p className="mt-6 text-primary-foreground/70 text-lg italic">
              {'"'}What&apos;s Wong with you?{'"'}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Electoral Math */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Electoral Math</h2>
            <div className="w-24 h-1 bg-navy mx-auto mb-8" />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-4xl font-bold text-navy">{totalSafe}</p>
                <p className="text-muted-foreground">Safe States</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-4xl font-bold text-navy">{totalBattleground}</p>
                <p className="text-muted-foreground">Battleground</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-navy">
                <p className="text-4xl font-bold text-navy">{totalSafe + totalBattleground}</p>
                <p className="text-muted-foreground">Total Potential</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-navy/10 rounded-lg inline-block">
              <p className="text-lg font-medium text-foreground">
                Target: <span className="text-navy font-bold">270 Electoral Votes</span> to Win
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Safe States */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-navy" />
              <h2 className="text-3xl font-bold text-foreground">Safe States ({totalSafe} votes)</h2>
            </div>
            <p className="text-muted-foreground">States where we have strong, reliable support.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeStates.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-card p-4 rounded-lg border border-border flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold">{state.votes}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{state.name}</h3>
                  <p className="text-sm text-muted-foreground">{state.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Battleground States */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-navy" />
              <h2 className="text-3xl font-bold text-foreground">Battleground States ({totalBattleground} votes)</h2>
            </div>
            <p className="text-muted-foreground">Key competitive states that will decide the election.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {battlegroundStates.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-lg border-2 border-navy/30 hover:border-navy transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-xl">{state.votes}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-navy" />
                      <h3 className="text-xl font-bold text-foreground">{state.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{state.strategy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
