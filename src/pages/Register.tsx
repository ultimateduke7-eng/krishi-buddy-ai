import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Upload, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logoIcon from "@/assets/logo-icon.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    landArea: "",
    landUnit: "hectares",
    location: "",
    soilType: "",
    currentCrops: "",
    contactNumber: "",
    notificationPreference: "push"
  });

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      toast.info("Detecting your location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({ 
            ...prev, 
            location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` 
          }));
          toast.success("Location detected successfully!");
        },
        (error) => {
          toast.error("Unable to detect location. Please enter manually.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.landArea || !formData.location || !formData.soilType || !formData.contactNumber) {
      toast.error("Please fill in all required fields");
      return;
    }

    // For now, just show success and navigate to dashboard
    toast.success("Registration successful! Welcome to KrishiMitra 🌾");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <Card className="shadow-card">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <img src={logoIcon} alt="KrishiMitra" className="w-12 h-12" />
              <CardTitle className="text-3xl">Register with KrishiMitra</CardTitle>
            </div>
            <CardDescription>
              Tell us about your farm so we can provide personalized recommendations
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Land Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Land Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="landArea">Land Area *</Label>
                    <Input
                      id="landArea"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      value={formData.landArea}
                      onChange={(e) => setFormData(prev => ({ ...prev, landArea: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="landUnit">Unit</Label>
                    <Select value={formData.landUnit} onValueChange={(value) => setFormData(prev => ({ ...prev, landUnit: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hectares">Hectares</SelectItem>
                        <SelectItem value="acres">Acres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      placeholder="Enter location or detect automatically"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                    <Button type="button" variant="outline" onClick={handleLocationDetect}>
                      <MapPin className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll use this to provide weather alerts and local recommendations
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilType">Soil Type *</Label>
                  <Select value={formData.soilType} onValueChange={(value) => setFormData(prev => ({ ...prev, soilType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                      <SelectItem value="black">Black Soil (Regur)</SelectItem>
                      <SelectItem value="red">Red Soil</SelectItem>
                      <SelectItem value="laterite">Laterite Soil</SelectItem>
                      <SelectItem value="desert">Desert Soil</SelectItem>
                      <SelectItem value="mountainous">Mountainous Soil</SelectItem>
                      <SelectItem value="loamy">Loamy Soil</SelectItem>
                      <SelectItem value="clay">Clay Soil</SelectItem>
                      <SelectItem value="sandy">Sandy Soil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Crop Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Crop Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="currentCrops">Currently Growing (Optional)</Label>
                  <Textarea
                    id="currentCrops"
                    placeholder="e.g., Wheat, Rice, Sugarcane"
                    value={formData.currentCrops}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentCrops: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilPhoto">Soil/Crop Photo (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload soil or crop photo for AI analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Notification Preferences</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="notifications">Preferred Method</Label>
                  <Select value={formData.notificationPreference} onValueChange={(value) => setFormData(prev => ({ ...prev, notificationPreference: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="push">Push Notifications</SelectItem>
                      <SelectItem value="sms">SMS Alerts</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" variant="hero" size="lg">
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
