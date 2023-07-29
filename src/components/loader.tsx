import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-10 w-10 animate-spin">
        <Image fill src="/logo.png" alt="logo" />
      </div>
      <p className="text-sm text-muted-foreground">
        All For One is thinking...
      </p>
    </div>
  );
};
