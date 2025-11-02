import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Sprout, 
  Bell, 
  Award, 
  Calendar,
  CloudRain,
  Thermometer,
  Droplets,
  Wind,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Dashboard = () => {
  const alerts = [
    { id: 1, type: "weather", message: "Heavy rain expected in 12 hours — delay pesticide spray", time: "2 hours ago", urgent: true },
    { id: 2, type: "fertilizer", message: "Nitrogen dose due in 7 days for Plot A", time: "1 day ago", urgent: false },
    { id: 3, type: "harvest", message: "Wheat harvest window opens in 14 days", time: "2 days ago", urgent: false }
  ];

  const schemes = [
    {
      title: "PM-KISAN Income Support",
      benefit: "₹6,000 per year",
      eligibility: "All landholding farmers",
      deadline: "31 March 2024"
    },
    {
      title: "Fasal Bima Yojana",
      benefit: "Crop Insurance",
      eligibility: "All farmers with registered crops",
      deadline: "15 April 2024"
    },
    {
      title: "Fertilizer Subsidy Program",
      benefit: "40% subsidy on fertilizers",
      eligibility: "Farmers with verified land records",
      deadline: "Ongoing"
    }
  ];

  const weatherData = {
    temp: "28°C",
    humidity: "65%",
    rainfall: "10mm",
    wind: "12 km/h"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="KrishiMitra" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">KrishiMitra</h1>
              <p className="text-xs text-muted-foreground">Welcome back, Farmer!</p>
            </div>
          </div>
          <Button variant="ghost">Profile</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Thermometer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weatherData.temp}</p>
                <p className="text-xs text-muted-foreground">Temperature</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weatherData.humidity}</p>
                <p className="text-xs text-muted-foreground">Humidity</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weatherData.rainfall}</p>
                <p className="text-xs text-muted-foreground">Rainfall</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Wind className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weatherData.wind}</p>
                <p className="text-xs text-muted-foreground">Wind Speed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Advisor */}
          <Card className="hover:shadow-soft transition-all duration-300 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <CardTitle>AI Advisor</CardTitle>
                </div>
                <Badge variant="secondary">💬 Voice Enabled</Badge>
              </div>
              <CardDescription>Ask me anything about your crops, soil, or farming decisions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground text-sm font-bold">
                    AI
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      Based on your loamy soil and moderate rainfall forecast, I recommend planting wheat this season. 
                      Expected yield: 40-45 quintals per hectare. 🌾
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Add to Tracker
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="hero" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask KrishiMitra
                </Button>
                <Button variant="outline" className="px-4">
                  🎤
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Real-Time Alerts */}
          <Card className="hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <CardTitle>Alerts</CardTitle>
              </div>
              <CardDescription>Time-sensitive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-3 rounded-lg border ${alert.urgent ? 'border-destructive bg-destructive/5' : 'border-border bg-muted/50'}`}
                  >
                    <div className="flex items-start gap-2">
                      {alert.urgent && <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">View All Alerts</Button>
            </CardContent>
          </Card>

          {/* Crop Tracker */}
          <Card className="hover:shadow-soft transition-all duration-300 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-primary" />
                  <CardTitle>Crop Tracker</CardTitle>
                </div>
                <Button variant="outline" size="sm">+ New Plot</Button>
              </div>
              <CardDescription>Monitor your crops from sowing to harvest</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 bg-gradient-card">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Plot A - Wheat</h4>
                      <p className="text-sm text-muted-foreground">2.5 hectares • Sowed 15 Jan 2024</p>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      Next: Fertilizer (7 days)
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 bg-gradient-card opacity-60">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Plot B - Rice</h4>
                      <p className="text-sm text-muted-foreground">1.8 hectares • Planned for Apr 2024</p>
                    </div>
                    <Badge variant="outline">Planned</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Government Schemes */}
          <Card className="hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <CardTitle>Schemes</CardTitle>
              </div>
              <CardDescription>Available support programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schemes.map((scheme, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-border bg-gradient-card">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm text-foreground">{scheme.title}</h4>
                      <Badge variant="secondary" className="text-xs">{scheme.benefit}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{scheme.eligibility}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Due: {scheme.deadline}</span>
                      <Button size="sm" variant="link" className="h-auto p-0 text-xs">
                        Apply →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">View All Schemes</Button>
            </CardContent>
          </Card>

          {/* Crop Calendar */}
          <Card className="hover:shadow-soft transition-all duration-300 lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <CardTitle>Crop Calendar</CardTitle>
                </div>
                <Button variant="outline" size="sm">📄 Export PDF</Button>
              </div>
              <CardDescription>Your farming schedule at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Sowing", date: "15 Jan", color: "bg-blue-500" },
                  { label: "Fertilizer", date: "2 Feb", color: "bg-green-500" },
                  { label: "Pesticide", date: "20 Feb", color: "bg-yellow-500" },
                  { label: "Harvest", date: "15 Apr", color: "bg-primary" }
                ].map((event, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-4 bg-gradient-card">
                    <div className={`w-3 h-3 ${event.color} rounded-full mb-2`} />
                    <p className="font-semibold text-foreground">{event.label}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
