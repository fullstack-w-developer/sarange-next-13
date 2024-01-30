import { mainUrl } from "@/helper/constants/env-variables";
import { redirect } from "next/navigation";
import {NextRequest, NextResponse} from "next/server";

export async function POST (req: NextRequest){
        let params = await req.text();

        const urlParams = new URLSearchParams(params);

        //const {  OrderId, ResCode } = await req.json();

        const  OrderId = urlParams.get("OrderId");
        const ResCode =  urlParams.get("ResCode")

        let _data = await fetch(`${mainUrl}/verify`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ "OrderId": OrderId, "ResCode": ResCode  }),
        });

        console.log(OrderId , ResCode)

        let data = await  _data.json();
		return redirect(data.url)


}