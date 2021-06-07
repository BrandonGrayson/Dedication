import React from "react";
import { list, ListItem } from "@chakra-ui/react"

import Link from "next/link"

export default function Header() {
    return (
        <ListItem>
            <Link href='Artist' >
                <a>Artist</a>
            </Link>
        </ListItem>

    )
}