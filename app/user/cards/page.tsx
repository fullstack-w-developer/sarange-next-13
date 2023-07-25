import React from "react";
import Tabs from "./Tabs";
import { deActiveCard, getCards } from "@/server/user/actions";

const Cards = async () => {
    const cards = await getCards();
    return <Tabs deActiveCard={deActiveCard} cards={cards} />;
};

export default Cards;
