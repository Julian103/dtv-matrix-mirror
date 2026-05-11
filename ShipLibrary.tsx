import { useState, useMemo } from "react";
import { ArrowLeft, Ship, Info, Layout, Anchor, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { rawShips } from "@/data/rawShips";
import { mapRawShipToShip } from "@/lib/shipAdapter";
import { displayLabel, portMatchesLabel } from "@/lib/displayLabels";

const seen = new Set<string>();
const dedupedRaw = rawShips.filter(s => {
  if (seen.has(s.slug)) return false;
  seen.add(s.slug);
  return true;
});
const ships = dedupedRaw.map(mapRawShipToShip);

const FLORIDA_PORTS = ["Miami", "Port Canaveral / Orlando", "Fort Lauderdale", "Tampa", "Jacksonville"];
const ALL_LINES = Array.from(new Set(ships.map(s => s.line))).sort();
const ALL_TAGS = Array.from(new Set(ships.flatMap(s => [...(s.tags || []), ...(s.audienceTags || [])]))).sort();

const ShipLibrary = () => {
  const [selectedLines, setSelectedLines] = useState<string[]>([]);
  const [selectedPorts, setSelectedPorts] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [soloOnly, setSoloOnly] = useState(false);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const filteredShips = useMemo(() => {
    return ships.filter(ship => {
      if (selectedLines.length > 0 && !selectedLines.includes(ship.line)) return false;
      if (soloOnly && !ship.hasSoloCabins) return false;
      if (selectedPorts.length > 0) {
        const ports = ship.quickView?.homeports || [];
        if (!selectedPorts.some(p => ports.some(port => portMatchesLabel(port, p)))) return false;
      }
      if (selectedTags.length > 0) {
        const tags = [...(ship.tags || []), ...(ship.audienceTags || [])];
        if (!selectedTags.every(t => tags.includes(t))) return false;
      }
      return true;
    });
  }, [selectedLines, selectedPorts, selectedTags, soloOnly]);

  const cruiseData = useMemo(() => {
    const groups: Record<string, typeof ships> = {};
    filteredShips.forEach(ship => {
      if (!groups[ship.line]) groups[ship.line] = [];
      groups[ship.line].push(ship);
    });
    return Object.entries(groups).map(([line, lineShips]) => ({ line, ships: lineShips }));
  }, [filteredShips]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-foreground mb-4">Cruise Line</h3>
        <div className="space-y-3">
          {ALL_LINES.map(line => (
            <div key={line} className="flex items-center space-x-2">
              <Checkbox 
                id={`line-${line}`} 
                checked={selectedLines.includes(line)}
                onCheckedChange={() => toggleFilter(setSelectedLines, line)}
              />
              <Label htmlFor={`line-${line}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {line}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-foreground mb-4">Florida Homeports</h3>
        <div className="space-y-3">
          {FLORIDA_PORTS.map(port => (
            <div key={port} className="flex items-center space-x-2">
              <Checkbox 
                id={`port-${port}`} 
                checked={selectedPorts.includes(port)}
                onCheckedChange={() => toggleFilter(setSelectedPorts, port)}
              />
              <Label htmlFor={`port-${port}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {port}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-foreground mb-4">Ship Features</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch 
              id="solo-cabins" 
              checked={soloOnly}
              onCheckedChange={setSoloOnly}
            />
            <Label htmlFor="solo-cabins" className="text-sm font-medium leading-none">
              Has Solo Cabins
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-foreground mb-4">Tags & Vibe</h3>
        <div className="space-y-3">
          {ALL_TAGS.map(tag => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox 
                id={`tag-${tag}`} 
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleFilter(setSelectedTags, tag)}
              />
              <Label htmlFor={`tag-${tag}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {displayLabel(tag)}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/20 font-sans pb-20">
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-heading text-3xl font-black text-primary md:text-4xl mb-2">
                S.A.I.L. Club™ Ship Library
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Browse our complete database of {ships.length} ships. Filter by cruise line, Florida homeports, tags, and more to find your perfect match.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pb-1 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="font-bold">
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                  <SheetHeader className="mb-6">
                    <SheetTitle>Filter Ships</SheetTitle>
                  </SheetHeader>
                  <FilterContent />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-40 bg-white border border-border rounded-xl p-6 shadow-sm h-[calc(100vh-180px)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-bold text-primary">Filters</h2>
                {(selectedLines.length > 0 || selectedPorts.length > 0 || selectedTags.length > 0 || soloOnly) && (
                  <Button variant="ghost" size="sm" onClick={() => {
                    setSelectedLines([]);
                    setSelectedPorts([]);
                    setSelectedTags([]);
                    setSoloOnly(false);
                  }} className="h-8 px-2 text-xs text-muted-foreground">
                    Clear all
                  </Button>
                )}
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {filteredShips.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-border">
                <Ship className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-20" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">No ships found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                <Button variant="outline" className="mt-6" onClick={() => {
                  setSelectedLines([]);
                  setSelectedPorts([]);
                  setSelectedTags([]);
                  setSoloOnly(false);
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              cruiseData.map((cruiseLine, index) => (
                <section key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationFillMode: 'both', animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between border-b-2 border-primary/10 pb-4 mb-6">
                    <h2 className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
                      <Anchor className="h-6 w-6 text-secondary" />
                      {cruiseLine.line}
                    </h2>
                    <Badge variant="outline" className="bg-white font-bold text-muted-foreground">
                      {cruiseLine.ships.length} ships
                    </Badge>
                  </div>

                  <div className="grid gap-4">
                    {cruiseLine.ships.map((ship, shipIdx) => (
                      <Card 
                        key={shipIdx} 
                        className="overflow-hidden border-border bg-white transition-all hover:border-primary/30 hover:shadow-md"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-48 sm:h-auto sm:w-64 shrink-0 overflow-hidden bg-muted">
                            <img 
                              src={ship.image} 
                              alt={ship.name} 
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:hidden" />
                          </div>
                          
                          <div className="flex flex-1 flex-col justify-center p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="space-y-3">
                                <div>
                                  <h3 className="font-heading text-xl font-bold text-foreground">
                                    {ship.name}
                                  </h3>
                                  <p className="text-sm font-medium text-muted-foreground">
                                    {ship.quickView?.class ? `${ship.quickView.class} Class` : ''} 
                                    {ship.quickView?.enteredService ? ` • Entered Service: ${ship.quickView.enteredService}` : ''}
                                  </p>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed max-w-2xl line-clamp-2">
                                  {(ship as any).cardExcerpt || ship.description}
                                </p>
                                
                                {([...(ship.tags || []), ...(ship.audienceTags || [])]).length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {[...(ship.tags || []), ...(ship.audienceTags || [])].map(tag => (
                                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground text-[10px] font-bold tracking-wider">
                                        {displayLabel(tag)}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                              
                              <div className="shrink-0 pt-2 md:pt-0">
                                <Button 
                                  asChild
                                  className="w-full md:w-auto font-bold bg-[#17417f] hover:bg-[#0f2d5a] text-white shadow-sm transition-all"
                                >
                                  <Link to={`/ship-${ship.id}`}>
                                    View ship profile
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipLibrary;
