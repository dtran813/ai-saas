import {
  Code,
  Image,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Video,
} from "lucide-react";

export const ROUTES = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: Image,
    href: "/image",
    color: "text-pink-600",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-orange-600",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "",
  },
];

export const TOOLS = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: Image,
    href: "/image",
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export const amountOptions = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];

export const testimonials = [
  {
    name: "Sarah",
    avatar: "/avatars/sarah.jpg",
    title: "Data Scientist",
    description:
      "I can't believe how powerful and user-friendly this AI web app is. It has transformed the way I approach data analysis and modeling. Highly recommended!",
  },
  {
    name: "John",
    avatar: "/avatars/john.jpg",
    title: "Marketing Manager",
    description:
      "As a marketing professional, I rely on data-driven insights for decision-making. This AI web app has been a game-changer for our marketing campaigns. It's incredibly accurate and saves us a lot of time!",
  },
  {
    name: "Emily",
    avatar: "/avatars/emily.jpg",
    title: "Student",
    description:
      "I use this AI web app for my research projects, and it has been a lifesaver. It's like having a virtual research assistant that can quickly analyze and summarize vast amounts of information. I don't know how I'd manage without it!",
  },
  {
    name: "David",
    avatar: "/avatars/david.jpg",
    title: "Entrepreneur",
    description:
      "This AI web app has significantly improved the efficiency of my business operations. It helps me automate various tasks and gain valuable insights from data, giving me a competitive edge in the market. I'm impressed!",
  },
  {
    name: "Linda",
    avatar: "/avatars/linda.jpg",
    title: "Teacher",
    description:
      "Teaching can be demanding, but this AI web app has made lesson planning and grading so much easier. It provides instant feedback and helps me create engaging educational materials. It's a must-have tool for educators!",
  },
  {
    name: "Michael",
    avatar: "/avatars/michael.jpg",
    title: "Financial Analyst",
    description:
      "I work with complex financial data daily, and this AI web app has simplified the analysis process tremendously. It's accurate and efficient, allowing me to make better investment decisions for my clients.",
  },
  {
    name: "Sophie",
    avatar: "/avatars/sophie.jpg",
    title: "Healthcare Researcher",
    description:
      "As a healthcare researcher, I depend on accurate data interpretation. This AI web app has been a game-changer in my field, enabling me to uncover valuable insights from medical records and research papers. It's a research assistant I can't live without!",
  },
  {
    name: "Alexandra",
    avatar: "/avatars/alexandra.jpg",
    title: "Content Creator",
    description:
      "Creating engaging content is vital for my online presence, and this AI web app has become my secret weapon. It helps me generate creative ideas, optimize SEO, and streamline content production. It's a must-have for any content creator looking to stand out!",
  },
];

export const MAX_FREE_COUNTS = 5;
