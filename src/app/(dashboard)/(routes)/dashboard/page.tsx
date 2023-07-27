import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
