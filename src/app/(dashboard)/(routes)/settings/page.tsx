import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <>
      <Heading
        title="Settings"
        description="Manage your account."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />

      <div className="space-y-4 px-4 lg:px-8">
        <p className="text-sm text-muted-foreground">
          {`You are currently on ${isPro ? "Pro" : "Free"} plan.`}
        </p>
        <SubscriptionButton isPro={isPro} />
      </div>
    </>
  );
};

export default SettingsPage;
