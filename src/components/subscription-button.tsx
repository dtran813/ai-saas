"use client";

import axios from "axios";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.error("BILLING_ERROR", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "gradient"}
      onClick={onClick}
      disabled={isLoading}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  );
};
