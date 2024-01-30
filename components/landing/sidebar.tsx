"use client"
import { Drawer } from "@mui/material";
import React from "react";
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: Props) => {
    return (
        <Drawer open={open} onClose={() => setOpen(false)}>
            <div className="min-w-[300px]">
                <h1> menu </h1>
            </div>
        </Drawer>
    );
};

export default Sidebar;
