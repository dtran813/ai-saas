"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useProModal } from "@/hooks/use-pro-modal";
import { TOOLS } from "@/utils/constant";
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = useProModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1 font-bold">
              Upgrade to All For One
              <Badge variant="gradient" className="py-1 text-sm uppercase">
                Pro
              </Badge>
            </div>
          </DialogTitle>

          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            {TOOLS.map((tool) => (
              <Card
                key={tool.label}
                className="flex items-center justify-between border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                    <tool.icon className={cn("h-6 w-6", tool.color)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <Check className="h-5 w-5 text-primary" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            size="lg"
            variant="gradient"
            className="w-full"
            onClick={onSubscribe}
            disabled={isLoading}
          >
            Upgrade <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
