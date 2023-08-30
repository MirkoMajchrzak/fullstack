"use client";

import MediaItem from "@/components/MediaItems";
import { Song } from "@/types";
import React from "react";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                Nix Musik da!
            </div>
        )
    }

    return ( 
        <div className="flex flex-col gap-y-2 w-full px-6">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem
                        onClick={() => {}}
                        data={song}
                        />
                    </div>
                    {/* Add Like Button Here */}
                </div>
            ))}
        </div>
     );
}
 
export default SearchContent;