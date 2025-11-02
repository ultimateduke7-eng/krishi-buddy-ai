import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Leaf, CloudRain, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Index = () => {
  const features = [
    {
      icon: Sprout,
      title: "AI Crop Advisor",
      description: "Get personalized crop recommendations based on your soil, weather, and market trends."
    },
    {
      icon: CloudRain,
      title: "Weather Alerts",
      description: "Real-time weather notifications to help you make timely farming decisions."
    },
    {
      icon: TrendingUp,
      title: "Crop Tracker",
      description: "Monitor your crops from sowing to harvest with smart scheduling and reminders."
    },
    {
      icon: Award,
      title: "Government Schemes",
      description: "Stay updated with subsidies, insurance, and support programs available for you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="KrishiMitra" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">KrishiMitra</h1>
              <p className="text-xs text-muted-foreground">Smart Agriculture Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Smart guidance for smarter harvests</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Farmers with{" "}
              <span className="text-primary">AI & Data</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make data-driven decisions for crop selection, fertilizer usage, weather planning, 
              and access government schemes—all in one simple platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Works offline • Available in multiple languages
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Farm Smarter
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              KrishiMitra combines AI technology with agricultural expertise to help you maximize yields and reduce risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 bg-gradient-card border-border hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works 🌱
            </h3>
            <p className="text-lg text-muted-foreground">Simple steps to start your smart farming journey</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Register", desc: "Create your farmer profile with land and crop details" },
              { step: "2", title: "Get Insights", desc: "Receive AI-powered recommendations for your farm" },
              { step: "3", title: "Track & Grow", desc: "Monitor progress and optimize your harvests" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers already using KrishiMitra to increase yields and reduce costs.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logoIcon} alt="KrishiMitra" className="w-8 h-8" />
            <span className="font-bold text-foreground">KrishiMitra</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Smart guidance for smarter harvests. © 2024 KrishiMitra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
