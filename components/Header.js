import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from './HeaderIcon';

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md" >
            {/* left */}
          <div className="flex items-center">
                <Image 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                    height={50}
                    width={50}
                    layout="fixed"    
                />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
            <input
                className=" hidden  md:inline-flex ml-2 items-center bg-transparent focus:outline-none flex-shrink"
                placeholder="Search Facebook"
            />
            </div>
         </div>

        {/* center */}
         <div className="justify-center flex flex-grow" >
            <div className="hidden  md:inline-flex space-x-8 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>

         </div>

            {/* right */}

         <div className="flex items-center sm:space-x-2 justify-end">
            {/* profile image */}
            <p className=" text-sm whitespace-nowrap font-semibold pr-3">
                sammed.sankonatti
             </p>

             <ViewGridIcon className="icon" />
             <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />

         </div>
        </div>
    )
}

export default Header;
