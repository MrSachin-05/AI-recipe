import PricingSection from "@/components/PricingSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, HOW_IT_WORKS_STEPS, SITE_STATS } from "@/lib/data";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Clock, Flame, Star, Stars, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { has } = await auth();
  return (
    <div className="bg-[#09090b] min-h-screen text-white">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 text-center md:text-left">
                <Badge
                  variant="outline"
                  className="border-2 border-purple-500/40 text-purple-300 bg-purple-950/40 text-sm font-bold mb-6 uppercase tracking-wide shadow-sm shadow-purple-500/20"
                >
                  <Flame className="mr-1 text-pink-500" />
                  #1 AI Cooking Assistant
                </Badge>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] text-white">
                  Turn your{" "}
                  <span className="italic underline decoration-4 decoration-pink-500 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    leftovers
                  </span>{" "}
                  into <br />
                  masterpices
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-lg mx-auto md:mx-0 font-light">
                  Snap a photo of your fridge. We&apos;ll tell you what to cook.
                  Save money, reduce waste, and eat better tonight.
                </p>
                <Link href={"/dashboard"}>
                  <Button
                    variant="primary"
                    size="xl"
                    className="px-8 py-6 text-lg"
                  >
                    Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="mt-6 text-sm text-zinc-400">
                  <span className="font-bold text-white">10k+ cooks</span>{" "}
                  joined last month
                </p>
              </div>
              <Card
                className={`relative aspect-square md:aspect-4/5 border-2 border-zinc-800 bg-zinc-900 overflow-hidden py-0 shadow-[0_0_35px_rgba(168,85,247,0.2)] hover:border-purple-500/60 hover:shadow-[0_0_45px_rgba(168,85,247,0.35)] transition-all duration-500`}
              >
                <Image
                  src="/pasta-dish.png"
                  alt="Delicious pasta dish"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                <Card className="absolute bottom-8 left-8 right-8 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-2xl py-0">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-bold text-md text-white">
                          Rustic Tomato Basil Pasta
                        </h3>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-2 border-purple-500/80 bg-purple-950/80 text-purple-300 font-bold mb-4 shadow-sm shadow-purple-500/30"
                      >
                        98% MATCH
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1 text-blue-400">
                        <Clock className="w-3 h-3" /> 25 mins
                      </span>
                      <span className="flex items-center gap-1 text-purple-400">
                        <User className="w-3 h-3" /> 2 serving
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 border-y border-zinc-800 bg-black">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
            {SITE_STATS.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-1 text-white">
                  {stat.val}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-transparent text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-sm uppercase tracking-wider font-medium border-none"
                >
                  {stat.label}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4 bg-[#09090b]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Your Smart kitchen
              </h2>
              <p className="text-zinc-400 text-xl font-light">
                Everything you need to master your meal prep.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {FEATURES.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={i}
                    className="border border-zinc-800 bg-zinc-900/80 hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-1.5 transition-all duration-300 group py-0"
                  >
                    <CardContent className={"p-6"}>
                      <div className="flex justify-between items-start mb-6">
                        <div className="border border-purple-500/30 bg-purple-950/50 text-purple-300 group-hover:border-purple-400 group-hover:bg-purple-900/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all rounded-lg p-3">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs font-mono bg-zinc-800 text-zinc-300 uppercase tracking-wide border border-zinc-700"
                        >
                          {feature.limit}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-400 text-lg font-light">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 border-y border-zinc-800 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">
              Cook in 3 Steps
            </h2>

            <div className="space-y-12">
              {HOW_IT_WORKS_STEPS.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex gap-6 items-start">
                      <Badge
                        variant="outline"
                        className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent border-none p-0 h-auto"
                      >
                        {item.step}
                      </Badge>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {item.title}
                        </h3>
                        <p className="text-lg text-zinc-400 font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {i < HOW_IT_WORKS_STEPS.length - 1 && (
                      <hr className="my-8 border-zinc-800" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#09090b]">
          <div className="max-w-5xl mx-auto">
            <PricingSection />
          </div>
        </section>
      </div>
  );
}
