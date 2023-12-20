"use client";

import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <p className="text-sm font-light text-zinc-400 md:text-xl">
        Create content{" "}
        <span className="font-bold text-zinc-300">10x faster</span> using AI.
      </p>

      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="gradient"
            className="rounded-full p-4 md:p-6 md:text-lg"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>

      <p className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required.
      </p>
    </div>
  );
};
