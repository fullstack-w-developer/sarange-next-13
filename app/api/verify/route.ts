import { mainUrl } from "@/helper/constants/env-variables";
import { redirect } from "next/navigation";
import {NextRequest, NextResponse} from "next/server";

export async function POST (req: NextRequest){
	 const {  OrderId, ResCode } = await req.json();
	
	fetch(`${mainUrl}/verify`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ "OrderId": OrderId, "ResCode": ResCode  }),
        })
            .then((response) => response.json())
            .then((data) => {
                return redirect(`/payment?Amount=${data.Amount}&RetrivalRefNo=${data.RetrivalRefNo}&SystemTraceNo=${data.SystemTraceNo}&PaymentStatus=${data.PaymentStatus}`)
            })
            .catch((error) => {
                return redirect(`/payment?error=true`)
            });
    
	
    return NextResponse.json({});
}

