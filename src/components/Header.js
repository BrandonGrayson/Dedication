import React from "react";
import { list, ListItem, List, Box } from "@chakra-ui/react"

import Link from "next/link"

export default function Header() {
    return (
        <Box>
            <List>
                <ListItem>
                    <Link href='artist' >
                        <a>Artist</a>
                    </Link>
                </ListItem>
            </List>
        </Box>


    )
}