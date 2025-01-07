import { DashboardIcon } from "@radix-ui/react-icons";
import { Mail, PencilLine } from "lucide-react";
import { Icon } from "./components/icon";
import { Route } from "./lib/types";

const brandName = "Whitespace";

export const appConfig = {
  redirectSignInURL: "/dashboard",
  brandName,
  logo: (
    <div className="w-10 h-8">
      <Icon
        src={Mail}
        className="size-full"
      />
    </div>
  ),
  appName: (
    <div
      className="font-bold overflow-hidden text-ellipsis whitespace-nowrap pr-4"
      title={brandName}
    >
      {brandName}
    </div>
  ),
  routes: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Posts",
      path: "/posts",
      icon: PencilLine,
    },
  ] satisfies Route[],
};
