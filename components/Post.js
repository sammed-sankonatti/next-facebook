import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";


function Post({ name, message, email, postImage, image, timestamp }) {
    console.log(name);
    return (
        <div className="flex flex-col last:pb-24">
           <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
               <div className="flex items-center space-x-2 ">
                   <img className="rounded-full" src={image} alt="postimage" width={40} height={40} />
                   <div>
                       <p className="font-medium"> {name} </p>
                       { timestamp ? (
                           <p className="text-xs text-gray-500 "> 5.30 </p>
                       ) : (
                           <p className="text-xs text-gray-500 "> Loading . . . </p>
                       ) }
                   </div>
               </div>
               <p className="pt-4">{message}</p>
           </div>
           {postImage && (
                <div className="relative h-[430px]  bg-white">
                <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}

            {/* Footer sec of posts */}

                 <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                    <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                    </div>

                    <div className="inputIcon p-3 rounded-none">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                    </div>

                    <div className="inputIcon p-3 rounded-none rounded-br-2xl">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Share</p>
                    </div>
                </div>


        </div>
    )
}

export default Post;
