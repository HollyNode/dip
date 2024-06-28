import Image from "next/image";
import { useRef } from "react";

interface Iitem {
    playList: Array<{ title: string; srcMusic: string; imgSrc: string }>;
    setCurrentSong: (index: number) => void; // Define the function type for better type checking
    currentSong: number;
}

export default function ListMusic(item: Iitem) {
    return (
        <div className="mt-3 flex flex-col space-y-6 overflow-y-scroll px-12">
            {item.playList.map((ele, index) => (
                <div
                    key={index} // Add a key for items in a list
                    className="flex items-center space-x-4"
                    onClick={() => item.setCurrentSong(index)}
                >
                    <Image 
                        className="w-20 rounded-xl object-contain"
                        loading="lazy"
                        src={ele.imgSrc}
                        alt={ele.title} // It's good practice to have a meaningful alt text
                        width={80} // Define actual width
                        height={80} // Define actual height
                        sizes="100vw"
                    />
                    <div className="flex flex-col text-left dark:text-white">
                        <span className="font-bold">{ele.title}</span>
                        <span>Album</span>
                    </div>
                </div> // This was the missing closing div tag for each mapped item
            ))}
        </div>
    );
}
