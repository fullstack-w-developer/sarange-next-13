"use client";
import * as React from "react";
import TabsMui from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CreateRole from "@/components/admin/permession/CreateRole";
import RoleAssignment from "@/components/admin/permession/RoleAssignment";
import CreateAction from "@/components/admin/permession/CreaateAction";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <span className="!font-artin-bold">{children}</span>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Tabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabsMui value={value} onChange={handleChange} aria-label="basic TabsMui example">
                    <Tab label={<span className="font-artin-bold">نقش</span>} {...a11yProps(0)} />
                    <Tab label={<span className="font-artin-bold">انتصاب نقش</span>} {...a11yProps(1)} />
                    <Tab label={<span className="font-artin-bold">عملیات</span>} {...a11yProps(2)} />
                </TabsMui>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <CreateRole />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <RoleAssignment />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <CreateAction />
            </CustomTabPanel>
        </>
    );
}
