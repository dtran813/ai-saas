"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/utils/constant";
import Image from "next/image";

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="border-none bg-black text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-4">
                <div className="relative h-14 w-14 rounded-full">
                  <Image
                    fill
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>

              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
