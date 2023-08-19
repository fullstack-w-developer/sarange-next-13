"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";







export const getTransactionsListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.transactions}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["transaction-list"],
            },
        });
        const result = await data.json();
        return result;
    }
};


export const getPermissionsTransactions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsTransactions}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};



export const getTransactionsListWithPermissions = async (q: string, skip: string) => {
    const [transactions, permisstion] = await Promise.all([getTransactionsListAdmin(q, skip), getPermissionsTransactions()]);


//     for (let i=0;i<transactions.Transactions.length;i++){

//     for (let j=0;j<permisstion.Attributes.length;j++){
//         console.log(permisstion.Transactions[i][permisstion.Attributes[j].Value], " ")
//         //console.log(Attributes[j])
//     }

//     console.log('/r/n')
// }

    const Headers = permisstion.filter((item: any) => item.Action !== "مشاهده").flatMap((item: any) => item.Attributes);

    return {
        Transactions: transactions.Transactions,
        Total: transactions.Total,
        Headers: permisstion[0].Attributes,
    };
};


