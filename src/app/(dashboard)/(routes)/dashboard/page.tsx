"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TOOLS } from "@/utils/constant";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="text-wrap-balance mb-8 space-y-4 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">
          Empower Your Imagination with AI!
        </h2>
        <p className="text-sm font-light text-muted-foreground md:text-lg">
          Unlock your creative potential and transforming imagination into
          reality with the power AI
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {TOOLS.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <p className="font-semibold">{tool.label}</p>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
