"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f5040ae6-4512-49cc-b09f-c40fb81b1610")
    }, []);

    return null;
}