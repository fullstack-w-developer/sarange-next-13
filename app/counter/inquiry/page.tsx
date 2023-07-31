import React from "react";
import Sharge from "./Sharge";

interface Props {
    searchParams?: { id?: string };
}
const Inquiry = async ({ searchParams }: Props) => {
    // if (!cardInfo?.CarRoute?.Name) return notFound();
    return <Sharge cardId={searchParams?.id} />;
};

export default Inquiry;
