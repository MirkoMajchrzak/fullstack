"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
        //Addd authentification before Push
        router.push(href);
    }
    return ( 
        <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">

        </button>
     );
}
 
export default ListItem;