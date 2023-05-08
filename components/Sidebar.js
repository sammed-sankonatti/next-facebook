import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
// import { useSession } from "next-auth/client";
import React from "react";
import SidebarRow from "./SidebarRow";


const sidebarOptions = [
  {
    title : "Friends",
    icon : UsersIcon
  },
  {
    title : "Groups",
    icon : UserGroupIcon
  },
  {
    title : "Marketplace",
    icon : ShoppingBagIcon
  },
  {
    title : "Watch",
    icon : DesktopComputerIcon
  },
  {
    title : "Events",
    icon : CalendarIcon
  },
  {
    title : "Memories",
    icon : ClockIcon
  },
  {
    title : "See More",
    icon : ChevronDownIcon
  }
]

function Sidebar() {
  return (
    <div className="hidden lg:block p-4 mt-5 max-w-[300px] xl:min-w-[300px]" >
      {
        sidebarOptions.map((sidebaroption)=> (
          <SidebarRow title={sidebaroption.title} Icon={sidebaroption.icon} />
        ))
      }
    </div>
  )
}

export default Sidebar
