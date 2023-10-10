"use server";
import { cookies } from "next/headers";
import { mainUrl } from "@/helper/constants/env-variables";
import { redirect, notFound } from 'next/navigation'

interface TypeFetch {
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    endpoint: string;
    body?: any;
    tag?: string;
    headers?: object | any;
}
export async function sendRequest({ method, endpoint, body, tag, headers }: TypeFetch) {
    const baseUrl = mainUrl; // Replace with your base URL
    const url = `${baseUrl}${endpoint}`;
    const cookieStore = cookies(); // Make sure to define or import the cookies function
    const token = cookieStore.get("token")?.value;
    const requestOptions: any = {
        method: method,
        headers: headers ? headers : { "Content-Type": "application/json" },
    };
    if (body) {
        requestOptions.body = JSON.stringify(body);
    }

    if (token) {
        requestOptions.headers["x-access-token"] = token;
    }

    if (tag) {
        requestOptions.next = {
            tags: [tag],
        };
    }
    const response = await fetch(url, requestOptions);
    const data:any = await response.json()

    if(response.status === 500) return redirect("/500")
    if(response.status === 404) return notFound()
    return {message:data.Message,status:response.ok,data}
}
