import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logoIcon} alt="KrishiMitra" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            See KrishiMitra in Action
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Watch how farmers are using AI to transform their agriculture
          </p>

          <Card className="shadow-card mb-12">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Button variant="hero" size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Play Demo Video
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "AI Recommendations",
                description: "See how our AI advisor provides crop suggestions based on real soil and weather data"
              },
              {
                title: "Smart Tracking",
                description: "Learn how to monitor multiple crops and get timely reminders for critical tasks"
              },
              {
                title: "Government Benefits",
                description: "Discover how to access subsidies and support programs with just a few clicks"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-gradient-card hover:shadow-soft transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/register">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
