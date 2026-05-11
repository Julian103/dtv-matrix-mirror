import { useState, useEffect } from "react";
import { Loader2, ShieldCheck, Check, ExternalLink, Search, TrendingDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function MatrixCalculator() {
  const [port, setPort] = useState("");
  const [week, setWeek] = useState("");
  const [length, setLength] = useState("");
  const [line, setLine] = useState("");
  const [cabin, setCabin] = useState("");
  const [ship, setShip] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [weeks, setWeeks] = useState<string[]>([]);

  useEffect(() => {
    const w = [];
    const today = new Date();
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7 || 7));
    for (let i = 0; i < 52; i++) {
      const d = new Date(nextSunday);
      d.setDate(nextSunday.getDate() + i * 7);
      w.push(`Week of ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`);
    }
    setWeeks(w);
  }, []);

  const isFormComplete = port && week && length && line && cabin && ship;

  const handleRunMatrix = () => {
    if (!isFormComplete) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const handleReset = () => {
    setPort("");
    setWeek("");
    setLength("");
    setLine("");
    setCabin("");
    setShip("");
    setShowResults(false);
  };

  // Generate deterministic but realistic-looking prices based on inputs
  const seed = (port + week + length + line + cabin + ship).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const basePrice = 800 + (seed % 700);
  const r1 = basePrice;
  const r2 = basePrice + 120 + (seed % 100);
  const r3 = basePrice + 180 + (seed % 150);
  const averagePrice = basePrice + 250 + (seed % 200);
  const mostExp = basePrice + 400 + (seed % 300);

  // Simulated booking sources
  const sources = ["Direct with Cruise Line", "Vacations To Go", "Expedia", "Cruise Critic Partner", "Avoya Travel", "Cruises.com"];
  const bestSource = sources[seed % sources.length];
  const worstSource = sources[(seed + 3) % sources.length];

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8 font-sans">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex justify-start">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-4">
            <ShieldCheck className="h-4 w-4" />
            Premium Access Unlocked
          </div>
          <h1 className="font-heading text-3xl font-black text-foreground md:text-4xl mb-2">
            Cruise Intelligence Matrix™
          </h1>
          <p className="text-muted-foreground">
            Run unlimited full pricing reports. All sources and direct links are revealed.
          </p>
        </div>

        {!showResults ? (
          <Card className="p-6 md:p-8 shadow-lg border-border/50">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Departure Port</label>
                <Select value={port} onValueChange={setPort}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Port" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Tampa, FL", "Orlando, FL", "Fort Lauderdale, FL", "Miami, FL", "Jacksonville, FL"].map(p => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Travel Week</label>
                <Select value={week} onValueChange={setWeek}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Week" />
                  </SelectTrigger>
                  <SelectContent>
                    {weeks.map(w => (
                      <SelectItem key={w} value={w}>{w}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Cruise Length</label>
                <Select value={length} onValueChange={setLength}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Length" />
                  </SelectTrigger>
                  <SelectContent>
                    {["3–6 Nights", "7 Nights", "8+ Nights"].map(l => (
                      <SelectItem key={l} value={l}>{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Cruise Line</label>
                <Select value={line} onValueChange={setLine}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Line" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Carnival", "Royal Caribbean", "Norwegian", "MSC", "Celebrity", "Princess", "Holland America", "Disney", "Virgin Voyages"].map(l => (
                      <SelectItem key={l} value={l}>{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Cabin Type</label>
                <Select value={cabin} onValueChange={setCabin}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Cabin" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Interior", "Oceanview", "Balcony", "Suite"].map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Cruise Ship</label>
                <Input
                  value={ship}
                  onChange={(e) => setShip(e.target.value)}
                  placeholder="Enter Ship Name"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <button 
                onClick={handleRunMatrix}
                disabled={!isFormComplete || isLoading}
                className={`flex w-full items-center justify-center rounded-xl px-6 py-4 font-heading text-lg font-bold transition-all ${
                  isFormComplete 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Cross-referencing 11 booking channels...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Run Matrix Analysis
                  </>
                )}
              </button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <Card className="overflow-hidden border-2 border-success/50 shadow-lg">
              <div className="flex items-center justify-between bg-success/10 px-6 py-4 border-b border-success/20">
                <div className="flex items-center gap-2 text-success">
                  <Check className="h-5 w-5" />
                  <span className="font-heading font-bold">Analysis Complete</span>
                </div>
                <span className="text-sm font-medium text-success/80">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
              
              <div className="p-6">
                <div className="mb-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="bg-muted px-2 py-1 rounded-md">{line} {ship && ship !== "Any Ship" ? `(${ship})` : ''}</span>
                  <span className="bg-muted px-2 py-1 rounded-md">{port}</span>
                  <span className="bg-muted px-2 py-1 rounded-md">{week}</span>
                  <span className="bg-muted px-2 py-1 rounded-md">{length}</span>
                  <span className="bg-muted px-2 py-1 rounded-md">{cabin}</span>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mb-8">
                  <div className="col-span-full md:col-span-2 rounded-xl border-2 border-green-400 bg-green-50 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-success text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                      BEST PRICE FOUND
                    </div>
                    <p className="text-sm font-bold text-success mb-2">Result #1 (Top Recommendation)</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-heading text-5xl font-black text-foreground">${r1.toLocaleString()}</span>
                      <span className="text-muted-foreground">per person</span>
                    </div>
                    
                    <div className="space-y-3 border-t border-success/20 pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Booking Source</p>
                        <p className="font-bold text-foreground text-lg">{bestSource}</p>
                      </div>
                      <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-secondary text-secondary-foreground px-6 py-3 font-bold hover:bg-secondary/90 transition-colors">
                        Go To Booking Page <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 flex flex-col">
                    <div className="rounded-xl border-2 border-yellow-400 bg-card p-4 flex flex-col h-full">
                      <p className="text-xs font-bold text-secondary mb-1">Result #2</p>
                      <div className="flex items-baseline gap-1">
                        <p className="font-heading text-2xl font-bold text-foreground">${r2.toLocaleString()}</p>
                        <span className="text-xs text-muted-foreground">per person</span>
                      </div>
                      <div className="mt-auto pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground border-t border-border pt-2">Source: Expedia</p>
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-muted text-foreground px-4 py-2 text-sm font-bold hover:bg-muted/80 transition-colors">
                          Go To Booking Page <ExternalLink className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl border-2 border-gray-400 bg-card p-4 flex flex-col h-full">
                      <p className="text-xs font-bold text-muted-foreground mb-1">Result #3</p>
                      <div className="flex items-baseline gap-1">
                        <p className="font-heading text-2xl font-bold text-foreground">${r3.toLocaleString()}</p>
                        <span className="text-xs text-muted-foreground">per person</span>
                      </div>
                      <div className="mt-auto pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground border-t border-border pt-2">Source: Cruises.com</p>
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-muted text-foreground px-4 py-2 text-sm font-bold hover:bg-muted/80 transition-colors">
                          Go To Booking Page <ExternalLink className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-destructive mb-1">MOST EXPENSIVE FOUND</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-xl font-bold text-foreground">${mostExp.toLocaleString()} pp</p>
                        <span className="text-xs text-muted-foreground">via {worstSource}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Potential Overpay</p>
                      <p className="text-lg font-bold text-destructive">+${(mostExp - r1).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-success/20 bg-success/5 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-success mb-1">MARKET AVERAGE</p>
                      <p className="text-xl font-bold text-foreground">${averagePrice.toLocaleString()} pp</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Your Savings</p>
                      <p className="text-lg font-bold text-success flex items-center gap-1 justify-end">
                        <TrendingDown className="h-4 w-4" />
                        ${(averagePrice - r1).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <button 
                onClick={handleReset}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-muted transition-colors"
              >
                Run Another Analysis
              </button>
            </div>
          </div>
        )}

        {/* Ships We Are Currently Tracking Section */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
              Ships We Are Currently Tracking
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The Cruise Intelligence Matrix™ currently monitors pricing across these major cruise lines and their most popular ships.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Carnival Cruise Line",
                  ships: ["Carnival Freedom", "Carnival Mardi Gras", "Carnival Vista", "Carnival Venezia", "Carnival Miracle", "Carnival Paradise", "Carnival Conquest", "Carnival Horizon", "Carnival Magic", "Carnival Celebration", "Carnival Sunrise", "Carnival Elation"]
                },
                {
                  name: "Royal Caribbean",
                  ships: ["Utopia of the Seas", "Adventure of the Seas", "Star of the Seas", "Enchantment of the Seas", "Liberty of the Seas", "Radiance of the Seas", "Oasis of the Seas", "Icon of the Seas", "Independence of the Seas", "Explorer of the Seas", "Grandeur of the Seas", "Rhapsody of the Seas", "Wonder of the Seas", "Freedom of the Seas", "Symphony of the Seas"]
                },
                {
                  name: "Celebrity Cruises",
                  ships: ["Celebrity Apex", "Celebrity Constellation", "Celebrity Reflection", "Celebrity Summit", "Celebrity Eclipse", "Celebrity Silhouette", "Celebrity Xcel", "Celebrity Ascent", "Celebrity Beyond"]
                },
                {
                  name: "Norwegian Cruise Line",
                  ships: ["Norwegian Joy", "Norwegian Prima", "Norwegian Star", "Norwegian Getaway", "Norwegian Encore", "Norwegian Aqua", "Norwegian Dawn", "Norwegian Jewel", "Norwegian Gem"]
                },
                {
                  name: "Disney Cruise Line",
                  ships: ["Disney Wish", "Disney Fantasy", "Disney Treasure", "Disney Dream", "Disney Destiny"]
                },
                {
                  name: "MSC Cruises",
                  ships: ["MSC Grandiosa", "MSC Seashore", "MSC Seaside", "MSC World America"]
                },
                {
                  name: "Princess Cruises",
                  ships: ["Star Princess", "Majestic Princess"]
                },
                {
                  name: "Virgin Voyages",
                  ships: ["Scarlet Lady", "Resilient Lady"]
                }
              ].map((brand) => (
                <div key={brand.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
                    <span className="font-heading text-lg font-bold text-primary">{brand.name}</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">{brand.ships.length}</span>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {brand.ships.map(ship => (
                        <li key={ship} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"></div>
                          {ship}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
