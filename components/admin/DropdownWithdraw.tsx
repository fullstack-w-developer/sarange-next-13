import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineMore } from "react-icons/ai";

export default function DropdownWithdraw({ setModalChangeStatus, params }: { setModalChangeStatus:any,params:any }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const WithdrawalRequestStatusEnum = {
        WAITING: "درحال انتظار",
        SUCCESS: "تسویه شده",
        REJECTED: "رد شده",
        FAILED: "ناموفق",
    };
    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    onClick={() => setModalChangeStatus({ open: true, info: params, name: WithdrawalRequestStatusEnum.REJECTED })}
                >
                    <span className="font-artin-regular">رد کردن</span>
                </MenuItem>{" "}
                <MenuItem
                    onClick={() => setModalChangeStatus({ open: true, info: params, name: WithdrawalRequestStatusEnum.SUCCESS })}
                >
                    <span className="font-artin-regular">تسویه شده</span>
                </MenuItem>{" "}
                <MenuItem
                    onClick={() => setModalChangeStatus({ open: true, info: params, name: WithdrawalRequestStatusEnum.FAILED })}
                >
                    <span className="font-artin-regular">ناموفق</span>
                </MenuItem>
            </Menu>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <div className="flex items-center gap-1">
                    <span className="font-artin-regular text-indigo-900">عملیات</span>
                    <AiOutlineMore className="text-indigo-900" />
                </div>
            </Button>
        </div>
    );
}
