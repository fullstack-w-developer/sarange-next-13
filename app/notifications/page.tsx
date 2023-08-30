import { getAllNotifications } from "@/server/common/action";
import React from "react";
import NotificationsCom from "./Notifications";

const Notifications = async () => {
    const notfication: any = await getAllNotifications();

    return <NotificationsCom notfication={notfication} />;
};

export default Notifications;
