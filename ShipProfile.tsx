import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { usePreferences } from "@/providers/PreferencesProvider";
import { 
  User, 
  Settings, 
  Calculator, 
  LogOut, 
  Bell, 
  Heart, 
  Users, 
  Ship, 
  MapPin, 
  Calendar,
      CreditCard,
      Plus,
      Trash2,
      Award,
      X
    } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Converts MM-DD-YYYY (storage) to YYYY-MM-DD (native date input)
const toDateInputFormat = (dateStr: string) => {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) return `${parts[2]}-${parts[0]}-${parts[1]}`;
  return dateStr;
};

// Converts YYYY-MM-DD (native date input) to MM-DD-YYYY (storage)
const toStorageFormat = (dateStr: string) => {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) return `${parts[1]}-${parts[2]}-${parts[0]}`;
  return dateStr;
};

export default function ProfileHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoading, logout } = useAuth();
  const { 
    preferences: contextPrefs, 
    companions, 
    loyalty: contextLoyalty, 
    updatePreferences, 
    updateCompanions, 
    updateLoyalty 
  } = usePreferences();
  
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "preferences";
  
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/profile?tab=${value}`, { replace: true });
  };

  const [isCruiseLinesOpen, setIsCruiseLinesOpen] = useState(false);
  const [cruiseLinesDraft, setCruiseLinesDraft] = useState<string[]>([]);
  const [isDeparturePortsOpen, setIsDeparturePortsOpen] = useState(false);
  const [departurePortsDraft, setDeparturePortsDraft] = useState<string[]>([]);
  const [isCruiseLengthOpen, setIsCruiseLengthOpen] = useState(false);
  const [cruiseLengthDraft, setCruiseLengthDraft] = useState<string[]>([]);
  const [isWhoTravelsOpen, setIsWhoTravelsOpen] = useState(false);
  const [whoTravelsDraft, setWhoTravelsDraft] = useState<string[]>([]);
  const [isOnboardExperienceOpen, setIsOnboardExperienceOpen] = useState(false);
  const [onboardExperienceDraft, setOnboardExperienceDraft] = useState<string[]>([]);
  const [isCabinTypeOpen, setIsCabinTypeOpen] = useState(false);
  const [cabinTypeDraft, setCabinTypeDraft] = useState<string[]>([]);
  const [isAddingCompanion, setIsAddingCompanion] = useState(false);
  const [newCompanion, setNewCompanion] = useState({ name: "", relationship: "", birthday: "" });
  const [loyaltyNumbers, setLoyaltyNumbers] = useState<Record<string, string>>(contextLoyalty);
  const [preferences, setPreferences] = useState({
    cruiseLines: contextPrefs.cruiseLines || [],
    departurePorts: contextPrefs.departurePorts || [],
    cruiseLength: contextPrefs.cruiseLength || [],
    cabinType: Array.isArray(contextPrefs.cabinType) ? contextPrefs.cabinType : (contextPrefs.cabinType ? [contextPrefs.cabinType] : []),
    birthday: contextPrefs.birthday || "",
    anniversary: contextPrefs.anniversary || "",
    priceRange: contextPrefs.priceRange || "",
    contactMethod: contextPrefs.contactMethod || "",
    presentationPreference: contextPrefs.presentationPreference || "",
    groupCruises: contextPrefs.groupCruises || "",
    internationalCruises: contextPrefs.internationalCruises || "",
    lastMinuteDeals: contextPrefs.lastMinuteDeals || "",
    drinksPackage: contextPrefs.drinksPackage || "",
    bookingConfidence: contextPrefs.bookingConfidence || "",
    cruiseFrequency: contextPrefs.cruiseFrequency || "",
    whoTravels: contextPrefs.whoTravels || [],
    onboardExperience: contextPrefs.onboardExperience || [],
    specialOccasions: contextPrefs.specialOccasions || []
  });

  useEffect(() => {
    setLoyaltyNumbers(contextLoyalty);
  }, [contextLoyalty]);

  useEffect(() => {
    setPreferences({
      cruiseLines: contextPrefs.cruiseLines || [],
      departurePorts: contextPrefs.departurePorts || [],
      cruiseLength: contextPrefs.cruiseLength || [],
      cabinType: Array.isArray(contextPrefs.cabinType) ? contextPrefs.cabinType : (contextPrefs.cabinType ? [contextPrefs.cabinType] : []),
      birthday: contextPrefs.birthday || "",
      anniversary: contextPrefs.anniversary || "",
      priceRange: contextPrefs.priceRange || "",
      contactMethod: contextPrefs.contactMethod || "",
      presentationPreference: contextPrefs.presentationPreference || "",
      groupCruises: contextPrefs.groupCruises || "",
      internationalCruises: contextPrefs.internationalCruises || "",
      lastMinuteDeals: contextPrefs.lastMinuteDeals || "",
      drinksPackage: contextPrefs.drinksPackage || "",
      bookingConfidence: contextPrefs.bookingConfidence || "",
      cruiseFrequency: contextPrefs.cruiseFrequency || "",
      whoTravels: contextPrefs.whoTravels || [],
      onboardExperience: contextPrefs.onboardExperience || [],
      specialOccasions: contextPrefs.specialOccasions || []
    });
  }, [contextPrefs]);

  const [accountDetails, setAccountDetails] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || ""
  });

  useEffect(() => {
    if (user) {
      setAccountDetails(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone
      }));
    }
  }, [user]);

  const handleSaveAccount = () => {
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Profile Hub - Account Update",
        formData: {
          email: accountDetails.email,
          first_name: accountDetails.name.split(" ")[0],
          last_name: accountDetails.name.split(" ").slice(1).join(" "),
          phone: accountDetails.phone
        },
        formLabels: {
          email: "Email",
          first_name: "First Name",
          last_name: "Last Name",
          phone: "Phone"
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        locationId: "qlxDlDHXX8eJ6lZDv2F7",
        sessionId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)
      }),
    }).catch(() => {});

    if (user) {
      const updatedUser = { ...user, name: accountDetails.name, email: accountDetails.email, phone: accountDetails.phone };
      localStorage.setItem("crm_user", JSON.stringify(updatedUser));
    }
    
    toast.success("Account details updated successfully");
  };

  const handleSaveLoyalty = () => {
    updateLoyalty(loyaltyNumbers);
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Profile Hub - Loyalty",
        formData: {
          email: user?.email,
          ...(loyaltyNumbers.carnival && { "contact.carnival_vifp": loyaltyNumbers.carnival }),
          ...(loyaltyNumbers.royal && { "contact.royal_caribbean_crown__anchor": loyaltyNumbers.royal }),
          ...(loyaltyNumbers.ncl && { "contact.ncl_latitudes": loyaltyNumbers.ncl }),
          ...(loyaltyNumbers.celebrity && { "contact.celebrity_captains_club": loyaltyNumbers.celebrity }),
          ...(loyaltyNumbers.msc && { "contact.msc_voyagers_club": loyaltyNumbers.msc }),
          ...(loyaltyNumbers.princess && { "contact.princess_captains_circle": loyaltyNumbers.princess }),
          ...(loyaltyNumbers.holland && { "contact.holland_america_mariner_society": loyaltyNumbers.holland }),
          ...(loyaltyNumbers.disney && { "contact.disney_castaway_club": loyaltyNumbers.disney }),
          ...(loyaltyNumbers.virgin && { "contact.virgin_voyages_sailing_club": loyaltyNumbers.virgin }),
          ...(loyaltyNumbers.cunard && { "contact.cunard_world_club": loyaltyNumbers.cunard })
        },
        formLabels: {
          "contact.carnival_vifp": "Carnival VIFP",
          "contact.royal_caribbean_crown__anchor": "Royal Caribbean Crown & Anchor",
          "contact.ncl_latitudes": "NCL Latitudes",
          "contact.celebrity_captains_club": "Celebrity Captain's Club",
          "contact.msc_voyagers_club": "MSC Voyagers Club",
          "contact.princess_captains_circle": "Princess Captain's Circle",
          "contact.holland_america_mariner_society": "Holland America Mariner Society",
          "contact.disney_castaway_club": "Disney Castaway Club",
          "contact.virgin_voyages_sailing_club": "Virgin Voyages Sailing Club",
          "contact.cunard_world_club": "Cunard World Club"
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        locationId: "qlxDlDHXX8eJ6lZDv2F7",
        sessionId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)
      }),
    }).catch(() => {});
    
    toast.success("Loyalty numbers saved successfully");
  };

  const handleSaveCompanion = () => {
    if (!newCompanion.name) return;
    const updated = [...companions, { ...newCompanion, id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15) }];
    updateCompanions(updated);
    setIsAddingCompanion(false);
    setNewCompanion({ name: "", relationship: "", birthday: "" });

    // Sync to CRM
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Profile Hub - Companions",
        formData: {
          email: user?.email,
          "contact.travel_companions": JSON.stringify(updated)
        },
        formLabels: {
          "contact.travel_companions": "Travel Companions"
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        locationId: "qlxDlDHXX8eJ6lZDv2F7",
        sessionId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)
      }),
    }).catch(() => {});
    
    toast.success("Companion added successfully");
  };

  const handleDeleteCompanion = (id: string) => {
    const updated = companions.filter(c => c.id !== id);
    updateCompanions(updated);
    
    // Sync to CRM
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Profile Hub - Companions",
        formData: {
          email: user?.email,
          "contact.travel_companions": JSON.stringify(updated)
        },
        formLabels: {
          "contact.travel_companions": "Travel Companions"
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        locationId: "qlxDlDHXX8eJ6lZDv2F7",
        sessionId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15)
      }),
    }).catch(() => {});
    
    toast.success("Companion removed");
  };

  const handleSavePreferences = () => {
    updatePreferences(preferences);
    toast.success("Preferences saved successfully");
  };

  const handleSaveCruiseLines = () => {
    updatePreferences({ cruiseLines: cruiseLinesDraft });
    setIsCruiseLinesOpen(false);
  };

  const handleSaveDeparturePorts = () => {
    updatePreferences({ departurePorts: departurePortsDraft });
    setIsDeparturePortsOpen(false);
  };

  const handleSaveCruiseLength = () => {
    updatePreferences({ cruiseLength: cruiseLengthDraft });
    setIsCruiseLengthOpen(false);
  };

  const handleSaveWhoTravels = () => {
    updatePreferences({ whoTravels: whoTravelsDraft });
    setIsWhoTravelsOpen(false);
  };

  const handleSaveOnboardExperience = () => {
    updatePreferences({ onboardExperience: onboardExperienceDraft });
    setIsOnboardExperienceOpen(false);
  };

  const handleSaveCabinType = () => {
    updatePreferences({ cabinType: cabinTypeDraft });
    setIsCabinTypeOpen(false);
  };

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-primary/20 bg-primary md:flex">
        <div className="flex h-20 items-center justify-center border-b border-white/10 px-6">
          <img 
            src="https://vibe.filesafe.space/1778337067611735212/attachments/291a6e47-2d1f-49b6-875e-b47c4ed26777.png" 
            alt="Dream Team Vacations" 
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <div className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-white/50">
            Menu
          </div>
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="justify-start gap-3 text-white/70 hover:bg-white/10 hover:text-white">
            <User className="h-4 w-4" />
            My Dashboard
          </Button>
          <Button variant="ghost" onClick={() => navigate('/matrix')} className="justify-start gap-3 text-white/70 hover:bg-white/10 hover:text-white">
            <Calculator className="h-4 w-4" />
            Run the Matrix
          </Button>
          <Button 
            variant={activeTab === 'preferences' ? "secondary" : "ghost"} 
            onClick={() => handleTabChange('preferences')} 
            className={`justify-start gap-3 ${activeTab === 'preferences' ? 'font-semibold text-primary bg-secondary hover:bg-secondary/90' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            <Bell className="h-4 w-4" />
            Alerts & Preferences
          </Button>
          <Button 
            variant={activeTab === 'account' ? "secondary" : "ghost"} 
            onClick={() => handleTabChange('account')} 
            className={`justify-start gap-3 ${activeTab === 'account' ? 'font-semibold text-primary bg-secondary hover:bg-secondary/90' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
          >
            <Settings className="h-4 w-4" />
            Account Settings
          </Button>
        </div>
        <div className="border-t border-white/10 p-4">
          <Button variant="ghost" onClick={logout} className="w-full justify-start gap-3 text-white/70 hover:bg-white/10 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
        {/* Mobile Header */}
        <header className="flex h-16 items-center justify-between border-b border-primary/20 bg-primary px-6 md:hidden">
          <img 
            src="https://vibe.filesafe.space/1778337067611735212/attachments/291a6e47-2d1f-49b6-875e-b47c4ed26777.png" 
            alt="Dream Team Vacations" 
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')} className="text-white hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
        </header>

        <div className="mx-auto max-w-5xl p-6 md:p-10">
          
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-heading text-3xl font-black text-primary md:text-4xl">
                Profile & Settings
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Manage your preferences, companions, and account details.
              </p>
            </div>
          </div>

          <Tabs value={activeTab} className="w-full" onValueChange={handleTabChange}>
            <TabsList className="mb-8 h-auto w-full flex-wrap justify-start gap-2 rounded-xl bg-white p-2 shadow-sm border border-border md:flex-nowrap">
              <TabsTrigger value="preferences" className="flex-1 gap-2 rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white md:flex-none md:px-6">
                <Ship className="h-4 w-4" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="companions" className="flex-1 gap-2 rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white md:flex-none md:px-6">
                <Users className="h-4 w-4" />
                Companions
              </TabsTrigger>
              <TabsTrigger value="loyalty" className="flex-1 gap-2 rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white md:flex-none md:px-6">
                <Award className="h-4 w-4" />
                Loyalty
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex-1 gap-2 rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white md:flex-none md:px-6">
                <Heart className="h-4 w-4" />
                My Preferred Ships
              </TabsTrigger>
              <TabsTrigger value="account" className="flex-1 gap-2 rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white md:flex-none md:px-6">
                <Settings className="h-4 w-4" />
                Account
              </TabsTrigger>
            </TabsList>

            {/* PREFERENCES TAB */}
            <TabsContent value="preferences" className="space-y-6 animate-in fade-in-50 duration-500">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Travel Style</CardTitle>
                  <CardDescription>Your preferred cruise lines, cabin types, and departure ports.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Favorite Cruise Lines</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.cruiseLines.map(line => (
                          <Badge key={line} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                            {line}
                            <button 
                              onClick={() => updatePreferences({ cruiseLines: preferences.cruiseLines.filter(l => l !== line) })}
                              className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                              aria-label={`Remove ${line}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-7 rounded-full text-xs gap-1 border-dashed"
                          onClick={() => {
                            setCruiseLinesDraft(preferences.cruiseLines || []);
                            setIsCruiseLinesOpen(true);
                          }}
                        >
                          <Plus className="h-3 w-3"/> Add
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Preferred Cabins</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.cabinType.map(cabin => (
                          <Badge key={cabin} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                            {cabin}
                            <button 
                              onClick={() => updatePreferences({ cabinType: preferences.cabinType.filter(c => c !== cabin) })}
                              className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                              aria-label={`Remove ${cabin}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-7 rounded-full text-xs gap-1 border-dashed"
                          onClick={() => {
                            setCabinTypeDraft(preferences.cabinType || []);
                            setIsCabinTypeOpen(true);
                          }}
                        >
                          <Plus className="h-3 w-3"/> Add
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Home Ports</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.departurePorts.map(port => (
                          <Badge key={port} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                            <MapPin className="mr-1 h-3 w-3"/> {port}
                            <button 
                              onClick={() => updatePreferences({ departurePorts: preferences.departurePorts.filter(p => p !== port) })}
                              className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                              aria-label={`Remove ${port}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-7 rounded-full text-xs gap-1 border-dashed"
                          onClick={() => {
                            setDeparturePortsDraft(preferences.departurePorts || []);
                            setIsDeparturePortsOpen(true);
                          }}
                        >
                          <Plus className="h-3 w-3"/> Add
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Ideal Length</Label>
                      <div className="flex flex-wrap gap-2">
                        {preferences.cruiseLength.map(length => (
                          <Badge key={length} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                            {length}
                            <button 
                              onClick={() => updatePreferences({ cruiseLength: preferences.cruiseLength.filter(l => l !== length) })}
                              className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                              aria-label={`Remove ${length}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-7 rounded-full text-xs gap-1 border-dashed"
                          onClick={() => {
                            setCruiseLengthDraft(preferences.cruiseLength || []);
                            setIsCruiseLengthOpen(true);
                          }}
                        >
                          <Plus className="h-3 w-3"/> Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={handleSavePreferences} className="bg-primary text-white hover:bg-primary/90">Update Preferences</Button>
                </CardFooter>
              </Card>

              <Dialog open={isCruiseLinesOpen} onOpenChange={setIsCruiseLinesOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Favorite Cruise Lines</DialogTitle>
                    <DialogDescription>
                      Select the cruise lines you are most interested in sailing with, or let us know if you are open to all.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      "Celebrity Cruises",
                      "Royal Caribbean",
                      "Norwegian Cruise Line (NCL)",
                      "Princess Cruises",
                      "Holland America Line",
                      "MSC Cruises",
                      "Carnival Cruise Line",
                      "Disney Cruise Line",
                      "Virgin Voyages",
                      "Oceania Cruise Line",
                      "I'm open to reviewing any line"
                    ].map((line) => (
                      <div key={line} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`line-${line.replace(/\s+/g, '-')}`} 
                          checked={cruiseLinesDraft.includes(line)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setCruiseLinesDraft(prev => [...prev, line]);
                            } else {
                              setCruiseLinesDraft(prev => prev.filter(l => l !== line));
                            }
                          }}
                        />
                        <Label htmlFor={`line-${line.replace(/\s+/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {line}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsCruiseLinesOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveCruiseLines} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={isDeparturePortsOpen} onOpenChange={setIsDeparturePortsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Home Ports</DialogTitle>
                    <DialogDescription>
                      Select the Florida ports you prefer to depart from.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      "Orlando (Port Canaveral)",
                      "Tampa",
                      "Miami",
                      "Fort Lauderdale (Port Everglades)",
                      "Jacksonville"
                    ].map((port) => (
                      <div key={port} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`port-${port.replace(/\s+/g, '-').replace(/[()]/g, '')}`} 
                          checked={departurePortsDraft.includes(port)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setDeparturePortsDraft(prev => [...prev, port]);
                            } else {
                              setDeparturePortsDraft(prev => prev.filter(p => p !== port));
                            }
                          }}
                        />
                        <Label htmlFor={`port-${port.replace(/\s+/g, '-').replace(/[()]/g, '')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {port}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDeparturePortsOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveDeparturePorts} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={isCruiseLengthOpen} onOpenChange={setIsCruiseLengthOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Ideal Length</DialogTitle>
                    <DialogDescription>
                      Select your preferred cruise durations.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      "3-6 Nights (Quick Getaway)",
                      "7 Nights (Week Escape)",
                      "8+ Nights (Grand Journey)"
                    ].map((length) => (
                      <div key={length} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`length-${length.replace(/\s+/g, '-').replace(/[()]/g, '')}`} 
                          checked={cruiseLengthDraft.includes(length)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setCruiseLengthDraft(prev => [...prev, length]);
                            } else {
                              setCruiseLengthDraft(prev => prev.filter(l => l !== length));
                            }
                          }}
                        />
                        <Label htmlFor={`length-${length.replace(/\s+/g, '-').replace(/[()]/g, '')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {length}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsCruiseLengthOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveCruiseLength} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Who Do You Travel With</CardTitle>
                  <CardDescription>The typical group you sail with.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Who Do You Travel With</Label>
                    <div className="flex flex-wrap gap-2">
                      {preferences.whoTravels.map(group => (
                        <Badge key={group} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                          {group}
                          <button 
                            onClick={() => updatePreferences({ whoTravels: preferences.whoTravels.filter(w => w !== group) })}
                            className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`Remove ${group}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-7 rounded-full text-xs gap-1 border-dashed"
                        onClick={() => {
                          setWhoTravelsDraft(preferences.whoTravels || []);
                          setIsWhoTravelsOpen(true);
                        }}
                      >
                        <Plus className="h-3 w-3"/> Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Dialog open={isWhoTravelsOpen} onOpenChange={setIsWhoTravelsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Who Do You Travel With</DialogTitle>
                    <DialogDescription>
                      Tell us who's typically on your cruises — pick all that apply.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      "Just me & my spouse/partner",
                      "Solo traveler",
                      "Family with children/teens",
                      "Group of friends",
                      "Larger group (8+, milestone trips)"
                    ].map((group) => (
                      <div key={group} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`group-${group.replace(/[^a-zA-Z0-9]/g, '-')}`} 
                          checked={whoTravelsDraft.includes(group)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setWhoTravelsDraft(prev => [...prev, group]);
                            } else {
                              setWhoTravelsDraft(prev => prev.filter(w => w !== group));
                            }
                          }}
                        />
                        <Label htmlFor={`group-${group.replace(/[^a-zA-Z0-9]/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {group}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsWhoTravelsOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveWhoTravels} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={isCabinTypeOpen} onOpenChange={setIsCabinTypeOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Preferred Cabins</DialogTitle>
                    <DialogDescription>
                      Select the cabin types you typically prefer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      'Interior',
                      'Oceanview',
                      'Balcony',
                      'Suite',
                      'Luxury enclave — The Retreat, Yacht Club, The Haven, Suite Neighborhood (Coming Soon)'
                    ].map((cabin) => (
                      <div key={cabin} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`cabin-${cabin.replace(/[^a-zA-Z0-9]/g, '-')}`} 
                          checked={cabinTypeDraft.includes(cabin)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setCabinTypeDraft(prev => [...prev, cabin]);
                            } else {
                              setCabinTypeDraft(prev => prev.filter(c => c !== cabin));
                            }
                          }}
                        />
                        <Label htmlFor={`cabin-${cabin.replace(/[^a-zA-Z0-9]/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {cabin}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsCabinTypeOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveCabinType} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Onboard Experience</CardTitle>
                  <CardDescription>What matters most to you onboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Onboard Experience</Label>
                    <div className="flex flex-wrap gap-2">
                      {preferences.onboardExperience.map(exp => (
                        <Badge key={exp} variant="secondary" className="bg-secondary/20 text-primary hover:bg-secondary/30 text-sm py-1 pr-1 flex items-center gap-1">
                          {exp}
                          <button 
                            onClick={() => updatePreferences({ onboardExperience: preferences.onboardExperience.filter(e => e !== exp) })}
                            className="rounded-full hover:bg-primary/20 p-0.5 focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label={`Remove ${exp}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-7 rounded-full text-xs gap-1 border-dashed"
                        onClick={() => {
                          setOnboardExperienceDraft(preferences.onboardExperience || []);
                          setIsOnboardExperienceOpen(true);
                        }}
                      >
                        <Plus className="h-3 w-3"/> Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Dialog open={isOnboardExperienceOpen} onOpenChange={setIsOnboardExperienceOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-primary">Onboard Experience</DialogTitle>
                    <DialogDescription>
                      What matters most to you onboard — pick up to 2.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
                    {[
                      "Modern / newer ships",
                      "Relaxed & quiet atmosphere",
                      "Premium dining & service",
                      "Lively / energetic onboard feel",
                      "Easy navigation & fewer crowds",
                      "Ship quality matters more than price"
                    ].map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`exp-${exp.replace(/[^a-zA-Z0-9]/g, '-')}`} 
                          checked={onboardExperienceDraft.includes(exp)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              if (onboardExperienceDraft.length < 2) {
                                setOnboardExperienceDraft(prev => [...prev, exp]);
                              }
                            } else {
                              setOnboardExperienceDraft(prev => prev.filter(e => e !== exp));
                            }
                          }}
                        />
                        <Label htmlFor={`exp-${exp.replace(/[^a-zA-Z0-9]/g, '-')}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {exp}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOnboardExperienceOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveOnboardExperience} className="bg-primary text-white hover:bg-primary/90">Save Selection</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Cruise Frequency</CardTitle>
                  <CardDescription>How often you typically set sail.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Cruise Frequency</Label>
                      <Select 
                        value={preferences.cruiseFrequency || ""} 
                        onValueChange={(val) => setPreferences({...preferences, cruiseFrequency: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.cruiseFrequency || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="First time cruiser">First time cruiser</SelectItem>
                          <SelectItem value="Once every few years">Once every few years</SelectItem>
                          <SelectItem value="1-2 times a year">1-2 times a year</SelectItem>
                          <SelectItem value="3+ times a year">3+ times a year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ cruiseFrequency: preferences.cruiseFrequency })} className="bg-primary text-white hover:bg-primary/90">Save Cruise Frequency</Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Contact Method</CardTitle>
                  <CardDescription>How you prefer to receive updates and alerts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Contact Method</Label>
                      <Select 
                        value={preferences.contactMethod || ""} 
                        onValueChange={(val) => setPreferences({...preferences, contactMethod: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.contactMethod || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Email">Email</SelectItem>
                          <SelectItem value="Text message">Text message</SelectItem>
                          <SelectItem value="Phone call">Phone call</SelectItem>
                          <SelectItem value="Email or text is fine">Email or text is fine</SelectItem>
                          <SelectItem value="No preference">No preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ contactMethod: preferences.contactMethod })} className="bg-primary text-white hover:bg-primary/90">Save Contact Method</Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Alert Cadence</CardTitle>
                  <CardDescription>How often you'd like to hear from us about new cruise deals.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Alert Cadence</Label>
                      <Select 
                        value={preferences.presentationPreference || ""} 
                        onValueChange={(val) => setPreferences({...preferences, presentationPreference: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.presentationPreference || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Daily — send alerts as soon as you find them">Daily — send alerts as soon as you find them</SelectItem>
                          <SelectItem value="Weekly — bundle the best into one email">Weekly — bundle the best into one email</SelectItem>
                          <SelectItem value="Only when something exceptional pops up">Only when something exceptional pops up</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ presentationPreference: preferences.presentationPreference })} className="bg-primary text-white hover:bg-primary/90">Save Alert Cadence</Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Budget & Pricing</CardTitle>
                  <CardDescription>Your comfortable per-person price range.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Price Range</Label>
                      <Select 
                        value={preferences.priceRange || ""} 
                        onValueChange={(val) => setPreferences({...preferences, priceRange: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.priceRange || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under $700">Under $700</SelectItem>
                          <SelectItem value="$700–$1,000">$700–$1,000</SelectItem>
                          <SelectItem value="$1,000–$1,400">$1,000–$1,400</SelectItem>
                          <SelectItem value="$1,400+">$1,400+</SelectItem>
                          <SelectItem value="I prefer not to set a range">I prefer not to set a range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ priceRange: preferences.priceRange })} className="bg-primary text-white hover:bg-primary/90">Save Price Range</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Group Cruises</CardTitle>
                  <CardDescription>Let us know if you'd like to be notified about Dream Team Vacations hosted group sailings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Group Cruises</Label>
                      <Select 
                        value={preferences.groupCruises || ""} 
                        onValueChange={(val) => setPreferences({...preferences, groupCruises: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.groupCruises || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes — I'd like to be notified if one fits">Yes — I'd like to be notified if one fits</SelectItem>
                          <SelectItem value="Maybe — I'm open to hearing about them">Maybe — I'm open to hearing about them</SelectItem>
                          <SelectItem value="No — I prefer individual sailings only">No — I prefer individual sailings only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ groupCruises: preferences.groupCruises })} className="bg-primary text-white hover:bg-primary/90">Save Group Cruises</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">International & River Cruises</CardTitle>
                  <CardDescription>Let us know if you're interested in non-Florida, global sailings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">International & River Cruises</Label>
                      <Select 
                        value={preferences.internationalCruises || ""} 
                        onValueChange={(val) => setPreferences({...preferences, internationalCruises: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.internationalCruises || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes — interested">Yes — interested</SelectItem>
                          <SelectItem value="Maybe — open to learning">Maybe — open to learning</SelectItem>
                          <SelectItem value="No — Florida-based cruising only">No — Florida-based cruising only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ internationalCruises: preferences.internationalCruises })} className="bg-primary text-white hover:bg-primary/90">Save International Cruises</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Last-Minute Deals</CardTitle>
                  <CardDescription>Let us know if you have the flexibility to travel on short notice.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Last-Minute Deals</Label>
                      <Select 
                        value={preferences.lastMinuteDeals || ""} 
                        onValueChange={(val) => setPreferences({...preferences, lastMinuteDeals: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.lastMinuteDeals || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes — I can travel on short notice">Yes — I can travel on short notice</SelectItem>
                          <SelectItem value="Maybe — depends on the deal">Maybe — depends on the deal</SelectItem>
                          <SelectItem value="No — I need to plan ahead">No — I need to plan ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ lastMinuteDeals: preferences.lastMinuteDeals })} className="bg-primary text-white hover:bg-primary/90">Save Last-Minute Deals</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Booking Confidence</CardTitle>
                  <CardDescription>Let us know how comfortable you feel booking cruises — you can update this anytime as your experience grows.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Booking Confidence</Label>
                      <Select 
                        value={preferences.bookingConfidence || ""} 
                        onValueChange={(val) => setPreferences({...preferences, bookingConfidence: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.bookingConfidence || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Very confident — just want confirmation">Very confident — just want confirmation</SelectItem>
                          <SelectItem value="Somewhat confident — appreciate guidance">Somewhat confident — appreciate guidance</SelectItem>
                          <SelectItem value="Still figuring things out">Still figuring things out</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ bookingConfidence: preferences.bookingConfidence })} className="bg-primary text-white hover:bg-primary/90">Save Booking Confidence</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Drinks Package</CardTitle>
                  <CardDescription>Let us know your typical drinks package preference so we can highlight (or skip) drinks-included offers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Drinks Package</Label>
                      <Select 
                        value={preferences.drinksPackage || ""} 
                        onValueChange={(val) => setPreferences({...preferences, drinksPackage: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={contextPrefs.drinksPackage || "Not specified"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes — I prefer all-inclusive drinks">Yes — I prefer all-inclusive drinks</SelectItem>
                          <SelectItem value="Sometimes — depends on the cruise length or price">Sometimes — depends on the cruise length or price</SelectItem>
                          <SelectItem value="No — I prefer pay-as-you-go">No — I prefer pay-as-you-go</SelectItem>
                          <SelectItem value="I don't drink alcohol, so I don't need it">I don't drink alcohol, so I don't need it</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ drinksPackage: preferences.drinksPackage })} className="bg-primary text-white hover:bg-primary/90">Save Drinks Package</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Special Occasions</CardTitle>
                  <CardDescription>We'll help you find the perfect sailings for your milestones.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="my-birthday" 
                        checked={preferences.specialOccasions.includes('My Birthday')}
                        onCheckedChange={(checked) => {
                          const newOccasions = checked 
                            ? [...preferences.specialOccasions, 'My Birthday']
                            : preferences.specialOccasions.filter(o => o !== 'My Birthday');
                          setPreferences({...preferences, specialOccasions: newOccasions});
                        }}
                      />
                      <Label htmlFor="my-birthday" className="font-medium cursor-pointer">My Birthday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="my-anniversary" 
                        checked={preferences.specialOccasions.includes('My Anniversary')}
                        onCheckedChange={(checked) => {
                          const newOccasions = checked 
                            ? [...preferences.specialOccasions, 'My Anniversary']
                            : preferences.specialOccasions.filter(o => o !== 'My Anniversary');
                          setPreferences({...preferences, specialOccasions: newOccasions});
                        }}
                      />
                      <Label htmlFor="my-anniversary" className="font-medium cursor-pointer">My Anniversary</Label>
                    </div>
                  </div>

                  {(preferences.specialOccasions.includes('My Birthday') || preferences.specialOccasions.includes('My Anniversary')) && (
                    <div className="grid gap-6 md:grid-cols-2 pt-4 border-t">
                      {preferences.specialOccasions.includes('My Birthday') && (
                        <div className="space-y-2">
                          <Label>Birthday</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" value={toDateInputFormat(preferences.birthday)} onChange={(e) => setPreferences({...preferences, birthday: toStorageFormat(e.target.value)})} className="pl-9" />
                          </div>
                        </div>
                      )}
                      {preferences.specialOccasions.includes('My Anniversary') && (
                        <div className="space-y-2">
                          <Label>Anniversary</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" value={toDateInputFormat(preferences.anniversary)} onChange={(e) => setPreferences({...preferences, anniversary: toStorageFormat(e.target.value)})} className="pl-9" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={() => updatePreferences({ specialOccasions: preferences.specialOccasions, birthday: preferences.birthday, anniversary: preferences.anniversary })} className="bg-primary text-white hover:bg-primary/90">Save Special Occasions</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary flex items-center gap-2">
                    <Heart className="h-5 w-5 text-destructive fill-destructive" /> My Preferred Ships
                  </CardTitle>
                  <CardDescription>Manage the ships you've saved to your personal library.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg border p-4 gap-4">
                    <div>
                      <p className="font-bold text-primary">Saved Ships</p>
                      <p className="text-sm text-muted-foreground">You have 1 ship saved in your library.</p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button variant="outline" onClick={() => navigate('/ship-library')} className="flex-1 sm:flex-none">Browse</Button>
                      <Button onClick={() => handleTabChange('saved')} className="bg-primary text-white hover:bg-primary/90 flex-1 sm:flex-none">View My Ships</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* COMPANIONS TAB */}
            <TabsContent value="companions" className="space-y-6 animate-in fade-in-50 duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary">Travel Companions</h2>
                  <p className="text-muted-foreground">Save details for the people you cruise with most.</p>
                </div>
                <Dialog open={isAddingCompanion} onOpenChange={setIsAddingCompanion}>
                  <DialogTrigger asChild>
                    <Button className="gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold">
                      <Plus className="h-4 w-4" /> Add Companion
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-primary">Add Companion</DialogTitle>
                      <DialogDescription>
                        Save their details so you can quickly check pricing and apply loyalty discounts.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="comp-name">Full Name</Label>
                        <Input id="comp-name" value={newCompanion.name} onChange={(e) => setNewCompanion({...newCompanion, name: e.target.value})} placeholder="e.g. John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="comp-rel">Relationship</Label>
                        <Input id="comp-rel" value={newCompanion.relationship} onChange={(e) => setNewCompanion({...newCompanion, relationship: e.target.value})} placeholder="e.g. Spouse, Friend" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="comp-bday">Birthday</Label>
                        <Input id="comp-bday" value={newCompanion.birthday} onChange={(e) => setNewCompanion({...newCompanion, birthday: e.target.value})} placeholder="MM-DD-YYYY" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleSaveCompanion} className="w-full bg-primary text-white hover:bg-primary/90">Save Companion</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {companions.map((companion) => (
                  <Card key={companion.id} className="shadow-sm border-primary/10">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold uppercase">
                            {companion.name.substring(0, 2)}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{companion.name}</CardTitle>
                            <CardDescription>{companion.relationship}</CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteCompanion(companion.id)} className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-muted-foreground text-xs uppercase tracking-wider font-bold mb-1">Birthday</span>
                          <span className="font-medium">{companion.birthday || "Not set"}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add New Card */}
                <Card onClick={() => setIsAddingCompanion(true)} className="flex flex-col items-center justify-center border-dashed shadow-none bg-muted/30 p-8 text-center min-h-[200px] cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">Add Another Passenger</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-[250px]">
                    Save time when checking prices by storing your companions' details.
                  </p>
                  <Button variant="outline" className="gap-2 pointer-events-none">
                    <Plus className="h-4 w-4" /> Add New
                  </Button>
                </Card>
              </div>
            </TabsContent>

            {/* LOYALTY TAB */}
            <TabsContent value="loyalty" className="space-y-6 animate-in fade-in-50 duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary">Loyalty Programs</h2>
                  <p className="text-muted-foreground">Keep all your cruise line reward numbers in one place.</p>
                </div>
                <Button onClick={handleSaveLoyalty} className="bg-primary text-white hover:bg-primary/90">
                  Save Numbers
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { id: "carnival", line: "Carnival Cruise Line", program: "VIFP Club" },
                  { id: "royal", line: "Royal Caribbean", program: "Crown & Anchor Society" },
                  { id: "ncl", line: "Norwegian Cruise Line", program: "Latitudes Rewards" },
                  { id: "celebrity", line: "Celebrity Cruises", program: "Captain's Club" },
                  { id: "msc", line: "MSC Cruises", program: "MSC Voyagers Club" },
                  { id: "princess", line: "Princess Cruises", program: "Captain's Circle" },
                  { id: "holland", line: "Holland America Line", program: "Mariner Society" },
                  { id: "disney", line: "Disney Cruise Line", program: "Castaway Club" },
                  { id: "virgin", line: "Virgin Voyages", program: "Sailing Club" },
                  { id: "cunard", line: "Cunard", program: "Cunard World Club" }
                ].map(item => (
                  <Card key={item.id} className="shadow-sm border-primary/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{item.line}</CardTitle>
                      <CardDescription>{item.program}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Input
                        placeholder="Member Number"
                        value={loyaltyNumbers[item.id] || ""}
                        onChange={(e) => setLoyaltyNumbers({ ...loyaltyNumbers, [item.id]: e.target.value })}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* SAVED SHIPS TAB */}
            <TabsContent value="saved" className="space-y-6 animate-in fade-in-50 duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary">My Preferred Ships</h2>
                  <p className="text-muted-foreground">Ships you've saved to your personal library.</p>
                </div>
                <Button variant="outline" onClick={() => navigate('/ship-library')} className="gap-2">
                  <Ship className="h-4 w-4" /> Browse Library
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-border bg-white transition-all hover:shadow-md">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img src="https://vibe.filesafe.space/1778337067611735212/assets/f8cdb0a5-5c54-47ed-977b-964c55e76d84.jpg" alt="Carnival Freedom" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute right-3 top-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
                        <Heart className="h-4 w-4 fill-destructive text-destructive" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-bold text-primary">Carnival Freedom</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">4-5 night sailings from Port Canaveral. Lively, casual, family-friendly.</p>
                    <Button variant="outline" className="w-full font-bold text-primary" onClick={() => navigate('/carnival-freedom')}>
                      View Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card className="flex flex-col items-center justify-center border-dashed border-border bg-muted/30 p-6 text-center transition-all hover:bg-muted/50 min-h-[250px]">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Ship className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">Find Your Next Ship</h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-6">Browse the library and save ships that match your style.</p>
                  <Button onClick={() => navigate('/ship-library')} className="bg-secondary font-bold text-primary hover:bg-secondary/90">
                    Explore Ships
                  </Button>
                </Card>
              </div>
            </TabsContent>

            {/* ACCOUNT SETTINGS TAB */}
            <TabsContent value="account" className="space-y-6 animate-in fade-in-50 duration-500">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Account Details</CardTitle>
                  <CardDescription>Update your personal information and login details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={accountDetails.name} 
                        onChange={(e) => setAccountDetails({...accountDetails, name: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={accountDetails.email} 
                        onChange={(e) => setAccountDetails({...accountDetails, email: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        value={accountDetails.phone} 
                        onChange={(e) => setAccountDetails({...accountDetails, phone: e.target.value})} 
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 px-6 py-4">
                  <Button onClick={handleSaveAccount} className="bg-primary text-white hover:bg-primary/90">Save Changes</Button>
                </CardFooter>
              </Card>


              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary flex items-center gap-2">
                    <CreditCard className="h-5 w-5" /> Billing & Access
                  </CardTitle>
                  <CardDescription>Manage your purchases and subscription status.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-bold text-primary">The Cruise Facts™ Access</p>
                        <p className="text-sm text-muted-foreground">Active • Standard Access</p>
                      </div>
                      <Button variant="outline" onClick={() => navigate('/annual-pass')}>Upgrade to Annual</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </main>
    </div>
  );
}
