import { Anchor, CheckCircle2, ChevronDown, Eye, Lock, MapPin, Play, Shield, Star, Zap, Loader2, ShieldCheck, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
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

  const handlePreviewClick = () => {
    if (!isFormComplete) return;
    setIsLoading(true);
    
    // Track event for retargeting
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'Ran_Matrix', {
        port,
        week,
        length,
        line,
        cabin,
        ship
      });
    }

    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1400);
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

  const seed = (port + week + length + line + cabin + ship).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const r1 = 800 + (seed % 700);
  const r2 = r1 + 150 + (seed % 200);
  const r3 = r2 + 100 + (seed % 200);
  const mostExp = r3 + 200 + (seed % 300);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* 1. Alert Bar */}
      <div className="sticky top-0 z-50 w-full bg-[#17417f] px-4 py-2 text-center text-white shadow-md">
        <p className="font-heading text-sm font-bold uppercase tracking-wider">
          ⚓ Warning: Most cruisers never see the full price picture before they book.
        </p>
      </div>

      {/* 2. Header / Nav */}
      <header className="flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
        <div className="flex items-center gap-2">
          <img src="https://vibe.filesafe.space/1775316359191552915/attachments/291a6e47-2d1f-49b6-875e-b47c4ed26777.png" alt="Dream Team Vacations" className="h-12 w-auto object-contain" />
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Questions?</p>
          <p className="font-heading text-lg font-bold text-primary md:text-xl">(352) 640-9455</p>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030244731/diEUro3r8rVRMtWYaaonyt/cruiseship1_cc784a9a.png')` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
        
        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-heading text-4xl font-black leading-snug text-white md:text-5xl lg:text-6xl">
            Before you book that cruise, check <span className="text-secondary">what most cruisers never see</span>
          </h1>
          
          <p className="mx-auto mb-6 max-w-2xl text-xl text-white/90 drop-shadow-sm md:text-2xl">
            The Cruise Intelligence Matrix™ checks pricing across booking channels and exposes the hidden gaps that can make the exact same cruise cost wildly different amounts.
          </p>
          
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/80 drop-shadow-sm">
            Here’s what most people never find out: two people can book the same ship, same deck, and same cabin category — and still pay very different prices. One person got the better deal. One person didn’t. Neither of them knew. The difference was the data.
          </p>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80 drop-shadow-sm">
            It takes about 90 seconds, and your preview is free. You’ll quickly see whether your cruise has a real pricing gap — then decide if $17 for 24-hour access is worth it.
          </p>

          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <div className="mb-4 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#f4b400]">
                Try It For Yourself — Free Preview
              </span>
            </div>
            {!showResults ? (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Select value={port} onValueChange={setPort}>
                    <SelectTrigger className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#f4b400]">
                      <SelectValue placeholder="Departure Port" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Tampa", "Port Canaveral", "Fort Lauderdale", "Miami", "Jacksonville"].map(p => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={week} onValueChange={setWeek}>
                    <SelectTrigger className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#f4b400]">
                      <SelectValue placeholder="Travel Week" />
                    </SelectTrigger>
                    <SelectContent>
                      {weeks.map(w => (
                        <SelectItem key={w} value={w}>{w}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={length} onValueChange={setLength}>
                    <SelectTrigger className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#f4b400]">
                      <SelectValue placeholder="Cruise Length" />
                    </SelectTrigger>
                    <SelectContent>
                      {["3–6 Nights", "7 Nights", "8+ Nights"].map(l => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={line} onValueChange={setLine}>
                    <SelectTrigger className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#f4b400]">
                      <SelectValue placeholder="Cruise Line" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Carnival", "Royal Caribbean", "Norwegian", "MSC", "Celebrity", "Princess", "Holland America", "Disney", "Virgin Voyages"].map(l => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={cabin} onValueChange={setCabin}>
                    <SelectTrigger className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#f4b400]">
                      <SelectValue placeholder="Cabin Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Interior", "Oceanview", "Balcony", "Suite"].map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    value={ship}
                    onChange={(e) => setShip(e.target.value)}
                    placeholder="Cruise Ship"
                    className="h-12 w-full rounded-xl border-0 bg-white px-3 text-sm font-semibold text-gray-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#f4b400]"
                  />
                </div>

                <button
                  onClick={handlePreviewClick}
                  disabled={!isFormComplete || isLoading}
                  className="mt-2 flex w-full items-center justify-center rounded-full py-4 font-black transition-all"
                  style={
                    isFormComplete
                      ? {
                          background: "linear-gradient(180deg, #ffd84d 0%, #f4b400 60%, #d9a200 100%)",
                          boxShadow: "0 5px 0 #a87a00",
                          color: "#0f2d5a"
                        }
                      : {
                          background: "rgba(255,255,255,0.3)",
                          color: "rgba(255,255,255,0.5)"
                        }
                  }
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Running the Matrix...
                    </>
                  ) : (
                    "Check My Price — Free"
                  )}
                </button>
                {!isFormComplete && (
                  <p className="mt-2 text-center text-xs text-white/50">
                    Fill in all six fields to run your free preview
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4 text-left animate-in fade-in duration-500">
                <div className="flex items-center justify-between rounded-xl bg-green-600 px-4 py-2.5">
                  <span className="text-sm font-bold text-white">
                    Cruise Facts™ Preview — {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at 7:00 AM
                  </span>
                  <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs text-white/70">
                    DEMO
                  </span>
                </div>

                <div className="mb-2 text-sm font-bold text-white">Top 3 Results:</div>

                <div className="mb-3 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center rounded-lg border-2 border-green-500 bg-green-50 p-2.5 text-center">
                    <span className="text-xs font-bold text-green-700">Result #1</span>
                    <span className="text-xl font-black text-green-700">${r1.toLocaleString()}</span>
                    <div className="mt-1 h-3 w-16 rounded bg-gray-300 blur-sm"></div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border border-blue-300 bg-blue-50 p-2.5 text-center">
                    <span className="text-xs font-bold text-blue-700">Result #2</span>
                    <span className="text-xl font-black text-blue-700">${r2.toLocaleString()}</span>
                    <div className="mt-1 h-3 w-16 rounded bg-gray-300 blur-sm"></div>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border border-amber-400 bg-amber-50 p-2.5 text-center">
                    <span className="text-xs font-bold text-amber-700">Result #3</span>
                    <span className="text-xl font-black text-amber-700">${r3.toLocaleString()}</span>
                    <div className="mt-1 h-3 w-16 rounded bg-gray-300 blur-sm"></div>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2">
                  <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-black text-white">
                    MOST EXPENSIVE
                  </span>
                  <span className="font-black text-red-700">${mostExp.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">— what some cruisers pay</span>
                </div>

                <div className="mb-3 flex items-center justify-between rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                  <span className="text-xs text-white/80">Where to book at ${r1.toLocaleString()}:</span>
                  <span className="text-xs font-bold text-white/30 blur-sm">████████</span>
                </div>

                <button 
                  onClick={() => window.location.href = 'https://sailclub.dreamteamvacations.com/order-matrix'}
                  className="flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-black text-[#0f2d5a] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(180deg, #ffd84d 0%, #f4b400 60%, #d9a200 100%)",
                    boxShadow: "0 4px 0 #a87a00"
                  }}
                >
                  👉 Unlock 24-Hour Access for $17
                </button>

                <button
                  onClick={handleReset}
                  className="mt-2 w-full cursor-pointer text-center text-xs text-white/50 underline hover:text-white/80"
                >
                  ← Try a different cruise
                </button>
              </div>
            )}
          </div>
          
          {!showResults && (
            <p className="mt-4 text-sm text-white/60 text-center">
              🔒 Free preview · No credit card required · 24-Hour Access unlocks for $17
            </p>
          )}
        </div>
      </section>

      {/* 4. Video Section */}
      <section className="bg-[#17417f] py-20" style={{ backgroundColor: '#17417f' }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-[#f4b400] text-sm uppercase tracking-widest font-bold mb-3">Featuring Atlas Adventure</p>
          <div className="relative mx-auto mb-10 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0f2d5a] shadow-lg flex items-center justify-center border border-white/10 group cursor-pointer" style={{ backgroundColor: '#0f2d5a' }}>
            <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10"></div>
            <div className="flex flex-col items-center z-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition-transform group-hover:scale-110">
                <Play className="ml-2 h-8 w-8 fill-primary" />
              </div>
              <p className="mt-4 font-heading text-lg font-bold text-white">Watch This First (3 min)</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <button onClick={() => window.location.href = 'https://sailclub.dreamteamvacations.com/order-matrix'} className="inline-flex w-full max-w-[560px] items-center justify-center rounded-full bg-gradient-to-r from-[#ffd84d] to-secondary px-8 py-5 font-heading text-xl font-bold text-primary shadow-[0_8px_20px_rgba(244,180,0,0.3)] transition-transform hover:scale-105 active:scale-95">
              👉 Yes! Get 24-Hour Access For $17
            </button>
            <p className="mt-4 text-sm text-white/60">
              Secure Checkout · Instant Delivery · Performance Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* 5. Try It Yourself Section */}
      <section id="try-it" className="bg-gray-50 py-16 border-y-4 border-[#f4b400]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block bg-[#f4b400] text-[#0f2d5a] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            SEE YOUR FREE CRUISE FACTS™ PREVIEW
          </span>
          <h2 className="mb-6 font-heading text-4xl font-bold text-[#17417f] md:text-5xl">
            See What The Cruise Intelligence Matrix™ Finds
          </h2>
          <p className="mx-auto mb-10 max-w-[600px] text-lg text-[#6b7280]">
            Enter your cruise details below and the Cruise Intelligence Matrix™ will show you a free preview of what most cruisers never see: whether your sailing has a real pricing gap. In about 90 seconds, you’ll see sample results. Full 24-hour access — run it on every cruise you're considering today — unlocks when you get The Cruise Facts™.
          </p>

          {!showResults ? (
            <div className="mx-auto max-w-[720px] rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-sm text-left">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#17417f]">Departure Port</label>
                  <Select value={port} onValueChange={setPort}>
                    <SelectTrigger className="w-full border-[#e5e7eb] focus:ring-[#17417f]">
                      <SelectValue placeholder="Select Port" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Tampa", "Port Canaveral", "Fort Lauderdale", "Miami", "Jacksonville"].map(p => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#17417f]">Travel Week</label>
                  <Select value={week} onValueChange={setWeek}>
                    <SelectTrigger className="w-full border-[#e5e7eb] focus:ring-[#17417f]">
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
                  <label className="text-sm font-bold text-[#17417f]">Cruise Length</label>
                  <Select value={length} onValueChange={setLength}>
                    <SelectTrigger className="w-full border-[#e5e7eb] focus:ring-[#17417f]">
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
                  <label className="text-sm font-bold text-[#17417f]">Cruise Line</label>
                  <Select value={line} onValueChange={setLine}>
                    <SelectTrigger className="w-full border-[#e5e7eb] focus:ring-[#17417f]">
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
                  <label className="text-sm font-bold text-[#17417f]">Cabin Type</label>
                  <Select value={cabin} onValueChange={setCabin}>
                    <SelectTrigger className="w-full border-[#e5e7eb] focus:ring-[#17417f]">
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
                  <label className="text-sm font-bold text-[#17417f]">Cruise Ship</label>
                  <Input
                    value={ship}
                    onChange={(e) => setShip(e.target.value)}
                    placeholder="Enter Ship Name"
                    className="w-full border-[#e5e7eb] focus-visible:ring-[#17417f]"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button 
                  onClick={handlePreviewClick}
                  disabled={!isFormComplete || isLoading}
                  className={`flex w-full items-center justify-center rounded-lg px-6 py-4 font-heading text-lg font-bold transition-colors ${
                    isFormComplete ? 'bg-[#f4b400] text-[#0f2d5a] hover:bg-[#f4b400]/90' : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Running the Matrix...
                    </>
                  ) : (
                    "Check My Price — Free"
                  )}
                </button>
                <p className="mt-4 text-center text-sm italic text-[#9ca3af]">
                  Fill in all six fields to see your free preview
                </p>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-[720px] overflow-hidden rounded-xl border-2 border-[#119d0d] bg-white shadow-[0_4px_20px_rgba(17,157,13,0.15)] text-left">
              {/* Header */}
              <div className="flex items-center justify-between bg-[#119d0d] px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-heading font-bold">Cruise Facts™ Preview — {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at 7:00 AM</span>
                </div>
                <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-xs font-bold text-white">DEMO RESULT</span>
              </div>
              
              {/* Body */}
              <div className="p-6">
                <p className="mb-6 text-center text-sm text-[#6b7280]">
                  {line} {ship && ship !== "Any Ship" ? `(${ship})` : ''} · {port} · {week} · {length} · {cabin}
                </p>
                
                <h3 className="mb-4 font-bold text-[#0f2d5a]">Top 3 Results:</h3>
                
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  {/* Result 1 */}
                  <div className="relative flex flex-col items-center rounded-lg border-2 border-[#119d0d] bg-[#f0fdf4] p-4 pb-8 text-center">
                    <span className="mb-1 text-sm font-bold text-[#119d0d]">Result #1</span>
                    <span className="font-heading text-3xl font-bold text-[#119d0d]">${r1.toLocaleString()}</span>
                    <span className="mb-3 text-xs text-[#119d0d]/70">per person</span>
                    <div className="h-4 w-24 rounded bg-[#119d0d]/20 blur-[2px]"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#119d0d] px-2 py-0.5 text-xs font-bold text-white">
                      LOWEST
                    </div>
                  </div>
                  
                  {/* Result 2 */}
                  <div className="flex flex-col items-center rounded-lg border border-[#bae6fd] bg-[#f0f9ff] p-4 text-center">
                    <span className="mb-1 text-sm font-bold text-[#3871c1]">Result #2</span>
                    <span className="font-heading text-3xl font-bold text-[#3871c1]">${r2.toLocaleString()}</span>
                    <span className="mb-3 text-xs text-[#3871c1]/70">per person</span>
                    <div className="h-4 w-24 rounded bg-[#3871c1]/20 blur-[2px]"></div>
                  </div>
                  
                  {/* Result 3 */}
                  <div className="flex flex-col items-center rounded-lg border border-[#f4b400] bg-[#fffbeb] p-4 text-center">
                    <span className="mb-1 text-sm font-bold text-[#92400e]">Result #3</span>
                    <span className="font-heading text-3xl font-bold text-[#f68712]">${r3.toLocaleString()}</span>
                    <span className="mb-3 text-xs text-[#f68712]/70">per person</span>
                    <div className="h-4 w-24 rounded bg-[#f68712]/20 blur-[2px]"></div>
                  </div>
                </div>
                
                {/* Most Expensive Row */}
                <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-lg border border-[#dc2626] bg-[#fef2f2] p-4 md:flex-row">
                  <span className="rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold text-white">MOST EXPENSIVE</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#dc2626]">${mostExp.toLocaleString()} pp</span>
                    <span className="text-sm text-[#6b7280]">— what some cruisers may still end up paying</span>
                  </div>
                </div>
                
                {/* Blurred Source Row */}
                <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] p-4 md:flex-row">
                  <div>
                    <p className="font-bold text-[#17417f]">Where to book at ${r1.toLocaleString()}:</p>
                    <p className="text-xs text-[#6b7280]">Source & booking instructions are revealed with 24-hour access</p>
                  </div>
                  <div className="rounded bg-gray-200 px-4 py-2 text-gray-400 blur-[4px] select-none">
                    ████████████
                  </div>
                </div>
                
                {/* CTA Block */}
                <div className="text-center">
                  <p className="mb-4 text-[#4b5563]">This is just the preview. Your 24-hour access reveals the exact booking sources and direct links so you can:</p>
                  <ul className="mb-6 flex flex-col items-center space-y-2 text-left text-[#4b5563]">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-[#119d0d]" /> Book at the best available price before it changes</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-[#119d0d]" /> Go straight to the exact booking source</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-[#119d0d]" /> Board knowing you didn’t leave money on the table</li>
                  </ul>
                  
                  <button onClick={() => window.location.href = 'https://sailclub.dreamteamvacations.com/order-matrix'} className="mb-3 flex w-full items-center justify-center rounded-lg bg-[#f4b400] py-4 font-heading text-lg font-bold text-[#0f2d5a] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    Unlock 24-Hour Access for $17
                  </button>
                  <p className="mb-6 text-xs text-[#6b7280]">24-Hour Money-Back Guarantee · No Subscription</p>
                  
                  <button onClick={handleReset} className="text-sm text-[#3871c1] underline hover:text-[#17417f]">
                    ← Try a different cruise
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Cruise Line Logos Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 text-center text-xs uppercase tracking-widest text-gray-400">
            Trusted by Cruisers on All Major Cruise Lines
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { name: "Carnival", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/a9473690-438b-4651-82a8-6e2292f1e6de.png" },
              { name: "Royal Caribbean", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/2b1cce2d-5966-4f33-a5f7-b1cbc53aca4f.png" },
              { name: "Norwegian", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/efabb718-0277-490b-807a-ad3f671c76da.png" },
              { name: "Disney", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/6f782141-3288-4211-8e65-6f24eabcd166.png" },
              { name: "Princess", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/424b2492-8cda-4ec5-8207-19a69bb2cce6.png" },
              { name: "Celebrity", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/ea6f3f18-c9c9-4262-a24a-2e9e56e082de.png" },
              { name: "Holland America", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/6f410154-40f3-4564-814f-957cbf8f6aeb.png" },
              { name: "Virgin Voyages", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/929b951a-98a6-4216-a632-960ea42a9f36.png" },
              { name: "MSC", logo: "https://vibe.filesafe.space/1775316359191552915/attachments/e8a64d08-806c-4cf3-b429-9abb6144fa67.png" }
            ].map((line) => (
              <div key={line.name} className="flex h-16 w-32 items-center justify-center rounded-lg bg-muted px-4 py-2 text-sm font-bold text-muted-foreground md:h-20 md:w-40 md:text-base">
                {line.logo ? (
                  <img src={line.logo} alt={line.name} className="h-full w-full object-contain mix-blend-multiply" />
                ) : (
                  line.name
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Myth Busters Section */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#f4b400]">
              <span>🔨</span>
              6 Cruise Pricing Myths — Busted
            </div>
            <h2 className="mb-6 font-heading text-4xl font-black text-primary md:text-5xl">
              Here's What Nobody Told You About Cruise Pricing
            </h2>
            <p className="mx-auto mb-4 max-w-3xl text-lg text-gray-700">
              If you’ve ever spent hours with 15 tabs open trying to figure out whether you’re actually getting a good cruise price — you’re not crazy. It really is that confusing.
            </p>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Most cruisers believe a few things about pricing that sound completely reasonable — but break down the second you look at real data. Here’s what’s actually going on:
            </p>
          </div>

          <div className="grid gap-8">
            {/* Myth 1 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #1</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  "Everyone pays the same price for the same cruise. A cabin is a cabin."
                </h3>
                <p className="text-lg text-muted-foreground">
                  That sounds reasonable — and honestly, it should work that way. Same ship, same deck, same cabin category... same price, right? But it doesn’t. Two people on the same sailing can end up paying hundreds apart. The price you see isn’t always the price everyone sees. It’s the price you were shown.
                </p>
              </div>
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">1</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/c3a3d07f-acc1-4142-bc6a-c81237f80696.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
            </div>

            {/* Myth 2 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">2</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/553af17a-7cc6-478f-9860-cdffc0348917.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #2</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  "If I wait, I'll get a better deal. Or if I book early, I'll get the best price."
                </h3>
                <p className="text-lg text-muted-foreground">
                  That’s the advice everyone gives — and it isn’t exactly wrong. It’s just incomplete. Cruise pricing doesn’t move in one simple pattern you can outsmart. The same cabin can come with a lower fare one day, onboard credit the next, and no meaningful offer the day after that. Same cruise. Same cabin. Different deal. There’s no calendar trick that beats having the actual data.
                </p>
              </div>
            </div>

            {/* Myth 3 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #3</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  "The price I see online is the best price available."
                </h3>
                <p className="text-lg text-muted-foreground">
                  It can feel that way — but cruise pricing is often more dynamic than most people realize. What you see online is not always the best available price. Fares, offers, and booking paths can shift based on timing, inventory, and how that sailing is being packaged. You’re not just comparing cabins. You’re trying to judge a moving target.
                </p>
              </div>
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">3</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/c3a3d07f-acc1-4142-bc6a-c81237f80696.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
            </div>

            {/* Myth 4 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">4</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/553af17a-7cc6-478f-9860-cdffc0348917.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #4</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  “I’m pretty good at finding deals online. I’ve done this before.”
                </h3>
                <p className="text-lg text-muted-foreground">
                  You probably are — and that’s exactly why this gets so frustrating. The problem isn’t your effort or your skill. The problem is that cruise pricing is fragmented, inconsistent, and harder to compare than it looks. You can do all the right searching and still miss the full picture.
                </p>
              </div>
            </div>

            {/* Myth 5 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #5</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  "My travel agent is getting me the best available rate."
                </h3>
                <p className="text-lg text-muted-foreground">
                  And they may believe that too — which is what makes this so frustrating. Here’s what most cruisers never see: not every booking path exposes the same deal. Your agent can only offer what they can access. That may be the best option they see — but not always the best option available.
                </p>
              </div>
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">5</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/c3a3d07f-acc1-4142-bc6a-c81237f80696.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
            </div>

            {/* Myth 6 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
              <div className="relative flex w-full items-end justify-center bg-[#17417f] p-6 md:w-80 md:shrink-0">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-[180px] font-black leading-none text-white/10">6</span>
                <img src="https://vibe.filesafe.space/1775316359191552915/attachments/553af17a-7cc6-478f-9860-cdffc0348917.png" className="relative z-10 h-64 w-auto object-contain" alt="Atlas Myth Busted" />
              </div>
              <div className="flex-1 p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full bg-[#17417f] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">Myth #6</span>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  "Figuring this out would take too much time and be too complicated."
                </h3>
                <p className="text-lg text-muted-foreground">
                  That would be true if you had to figure it all out manually. You’d need time, patience, and more tabs than most people want to deal with. That’s exactly why we built The Cruise Facts™ — so you don’t have to do the digging yourself. Plug in the cruise you’re looking at, and within minutes you’ll have a clear answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Mechanism Section */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="mb-4 inline-block font-heading text-sm font-bold uppercase tracking-wider text-secondary">
                The System Behind The Cruise Facts™
              </span>
              <h2 className="mb-6 font-heading text-4xl font-black md:text-5xl">
                Inside the Cruise Intelligence Matrix™
              </h2>
              <div className="space-y-6 text-lg text-white/90">
                <p>
                  We got tired of watching our community in The Villages® overpay for cabins simply because they searched at the wrong time, checked the wrong source, or trusted a price that wasn’t the full picture. So we built a better way to check.
                </p>
                <p>
                  We call it the Cruise Intelligence Matrix™. It’s an AI-powered system that cross-references 11 booking channels and compares real pricing data side by side. It helps filter out the noise, highlight meaningful pricing gaps, and show you the best available option we can find based on the cruise details you enter.
                </p>
                <p>
                  Right now, the Matrix is calibrated for Florida ports only. We started here because this is where our community sails. More ports are coming.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-sm">
              <span className="mb-6 inline-block font-heading text-sm font-bold uppercase tracking-wider text-secondary">
                Active Florida Ports
              </span>
              <ul className="space-y-4">
                {[
                  "Tampa",
                  "Port Canaveral",
                  "Fort Lauderdale",
                  "Miami",
                  "Jacksonville",
                ].map((port) => (
                  <li key={port} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 text-lg font-bold">
                      <MapPin className="h-5 w-5 text-secondary" />
                      {port}
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-success/20 px-3 py-1 text-xs font-bold text-[#4ade80]">
                      <span className="h-2 w-2 rounded-full bg-[#4ade80]"></span>
                      LIVE
                    </span>
                  </li>
                ))}
                <li className="pt-4 text-sm italic text-white/50">
                  More ports coming soon...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Authority Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block font-heading text-sm font-bold uppercase tracking-wider text-primary">
            Why Trust Us
          </span>
          <h2 className="mb-8 font-heading text-4xl font-black text-foreground md:text-5xl">
            Think of The Cruise Facts™ Like Carfax® for Cruise Pricing
          </h2>
          
          <div className="mx-auto max-w-2xl text-left text-lg text-muted-foreground space-y-6">
            <p>
              You wouldn’t buy a used car without checking the Carfax®. You shouldn’t book a $3,000 cruise without checking The Cruise Facts™ first.
            </p>
            <p>
              That’s exactly what The Cruise Facts™ is — a personal cruise pricing report built to help you check the market before you hand over your credit card.
            </p>
            <p>
              We’re Julian and Janet Parks, the team behind Dream Team Vacations, based right here in The Villages®. We’ve helped more than 4,500 Villagers cruise with confidence. We’d rather help you make a smarter booking decision today and earn your trust for years to come than rush you into the wrong cruise tomorrow.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <CheckCircle2 className="h-8 w-8 text-secondary" />
              </div>
              <p className="font-heading text-2xl font-black text-primary">4,500+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Villagers Helped</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Star className="h-8 w-8 text-secondary fill-secondary" />
              </div>
              <p className="font-heading text-2xl font-black text-primary">5★ Rated</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">By Our Community</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <p className="font-heading text-2xl font-black text-primary">Licensed</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">FL Seller of Travel · ST43972</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Product Section */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="mb-4 inline-block font-heading text-sm font-bold uppercase tracking-wider text-primary">
            What You Get
          </span>
          <h2 className="mb-6 font-heading text-4xl font-black text-foreground md:text-5xl">
            Get 24-Hour Access for Just $17
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            We packaged this intelligence into 24 hours of unlimited access to the Cruise Intelligence Matrix™ called The Cruise Facts™. You get full access to check as many sailings as you need. It checks 11 booking channels and shows you the best pricing we can find — plus the exact booking paths to act on it.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-left">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-primary">A Better Price Check</h3>
              <p className="text-muted-foreground">
                See what that cabin is being offered for across booking channels — without having to piece it together yourself.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-left">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-primary">Instant Clarity</h3>
              <p className="text-muted-foreground">
                Stop bouncing between tabs. Get a clear answer fast, and book knowing you checked before you committed.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-left">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-primary">More Booking Confidence</h3>
              <p className="text-muted-foreground">
                See whether the deal you found is actually competitive — or whether there may be a better option available.
              </p>
            </div>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-xl italic text-muted-foreground">
            That's what every Villager who gets The Cruise Facts™ gets. 24 hours. Unlimited runs. Complete picture.
          </p>

          <div className="flex flex-col items-center">
            <button onClick={() => window.location.href = 'https://sailclub.dreamteamvacations.com/order-matrix'} className="flex w-full max-w-[560px] items-center justify-center rounded-full bg-gradient-to-r from-[#ffd84d] to-secondary px-8 py-5 font-heading text-xl font-bold text-primary shadow-[0_8px_20px_rgba(244,180,0,0.3)] transition-transform hover:scale-105 active:scale-95">
              👉 Yes! Get 24-Hour Access For $17
            </button>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-muted-foreground">
              <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Secure Checkout</span>
              <span>·</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-success" /> Instant Delivery</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Performance Guarantee</span>
              <span>·</span>
              <span>💳 Stripe Encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Pricing Section */}
      <section id="order" className="bg-primary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Left Column: Details */}
            <div className="text-left text-white">
              <h2 className="mb-8 font-heading text-4xl font-black md:text-5xl">
                Get 24-Hour Access to The Cruise Facts™ for Just $17
              </h2>
              
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-heading text-3xl text-white/50 line-through">$47</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-7xl font-black text-secondary md:text-8xl">$17</span>
                  <span className="text-xl text-white/70">one-time</span>
                </div>
              </div>
              
              <p className="mb-10 text-xl text-white/80">
                One-time purchase. No subscription. No recurring charges. 24-hour access, unlimited runs.
              </p>

              <div className="mb-10 rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-wider text-secondary">
                  Why is this only $17?
                </span>
                <p className="text-white/80">
                  Because our primary business is long-term membership, not one-time passes. We keep The Cruise Facts™ low so you can see exactly what the Cruise Intelligence Matrix™ delivers before deciding whether you want anything more. No tricks. No pressure. Just the access.
                </p>
              </div>

              <p className="text-xl italic text-white/80">
                $17 for 24-hour access is a small price to pay before making a much bigger cruise decision.
              </p>
            </div>

            {/* Right Column: CTA Block */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto text-center">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
                <h3 className="mb-6 font-heading text-2xl font-black text-white">Ready to see the facts?</h3>
                <button onClick={() => window.location.href = 'https://sailclub.dreamteamvacations.com/order-matrix'} className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ffd84d] to-secondary px-8 py-6 font-heading text-xl font-bold text-primary shadow-[0_8px_20px_rgba(244,180,0,0.3)] transition-transform hover:scale-105 active:scale-95">
                  Secure Checkout — $17
                </button>
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-white/60">
                  <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> 256-bit Secure</span>
                </div>
              </div>
              <p className="mt-6 text-center text-xs italic text-white/40">
                This introductory price may not stay this low forever, but there’s no subscription and no pressure — just 24-hour access.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Testimonials Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-black text-foreground md:text-5xl">
            What Villagers Are Saying
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-muted p-8 shadow-sm">
              <div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
                </div>
                <p className="mb-8 text-lg italic text-muted-foreground">
                  "I used to spend hours on cruise websites comparing options. Now I get access that shows me the full picture. It saved me $250 per person on our last cruise — I never would have found that price on my own."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading font-bold text-secondary">BM</div>
                <span className="font-bold text-foreground">Bob M. · Village of Buttonwood</span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-muted p-8 shadow-sm">
              <div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
                </div>
                <p className="mb-8 text-lg italic text-muted-foreground">
                  "I was about to book a balcony on Royal Caribbean for $1,963. The Matrix showed it was priced $173 above what I should have been paying. I waited four days, the price dropped, and I booked the same cabin for $1,740. My $17 access saved me $223."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading font-bold text-secondary">SK</div>
                <span className="font-bold text-foreground">Susan K. · Village of Santiago</span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-muted p-8 shadow-sm">
              <div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
                </div>
                <p className="mb-8 text-lg italic text-muted-foreground">
                  "The system found a sailing through a booking channel I never would have checked on my own. It saved me $313, and after that I checked three more sailings."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading font-bold text-secondary">LM</div>
                <span className="font-bold text-foreground">Linda M. · Village of Buttonwood</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Guarantee Section */}
      <section className="bg-muted py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Shield className="mx-auto mb-6 h-20 w-20 text-secondary" />
          <h3 className="mb-6 font-heading text-3xl font-black text-primary md:text-4xl">
            Our Performance Guarantee
          </h3>
          <p className="text-xl text-muted-foreground">
            If The Cruise Facts™ doesn’t show you real pricing data for your exact cruise, we’ll refund every penny. That’s the only promise we need to make — because in more than 3 years of running Dream Team Vacations, we’ve never had a complaint.
          </p>
        </div>
      </section>

      {/* 14. FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-black text-foreground md:text-5xl">
            Quick Answers
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                Is this a subscription?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                You pay $17 once and get 24-hour access. That's it. No recurring charges, no auto-renewals, no surprises on your credit card statement. 24-hour access, one payment, complete picture.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                How quickly do I get access?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Within minutes of purchase. You'll get instant access to the Cruise Intelligence Matrix™ to check as many sailings as you need for 24 hours.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                What if I'm not happy with it?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                If The Cruise Facts™ doesn’t show you real pricing data for your exact cruise, we’ll refund every penny.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                Is my payment information secure?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Yes. All payments are processed through Stripe with 256-bit SSL encryption — the same security standard used by major banks. We never store your card information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                Can I check pricing on any cruise?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Right now, the Cruise Intelligence Matrix™ is calibrated for Florida ports — Tampa, Port Canaveral, Fort Lauderdale, Miami, and Jacksonville. We started here because this is where our community sails. More ports are coming.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-border py-2">
              <AccordionTrigger className="font-heading text-xl font-bold text-primary hover:no-underline [&[data-state=open]>svg]:text-secondary">
                Is this really AI-powered?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Yes. The Cruise Intelligence Matrix™ uses AI to cross-reference 11 booking channels and help surface meaningful pricing differences for the cruise details you enter. It's the same type of technology the cruise lines use to set prices — we just put it on your side.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 15. Footer */}
      <footer className="bg-[#0f2d5a] py-12 text-center text-white/60">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 flex justify-center">
            <img src="https://vibe.filesafe.space/1775316359191552915/attachments/291a6e47-2d1f-49b6-875e-b47c4ed26777.png" alt="Dream Team Vacations" className="h-16 w-auto object-contain brightness-0 invert opacity-60" />
          </div>
          <p className="mb-2 text-sm">
            Florida Seller of Travel Reg. No ST43972 · support@dreamteamvacations.com · (352) 640-9455
          </p>
          <p className="mb-6 text-sm">
            © 2022–26 Dream Team Vacations. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <span>·</span>
            <Link to="/refund-policy" className="hover:text-white">Refund Policy</Link>
            <span>·</span>
            <Link to="/about-us" className="hover:text-white">About Us</Link>
            <span>·</span>
            <Link to="/thank-you" className="hover:text-white">Thank You</Link>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Index;
