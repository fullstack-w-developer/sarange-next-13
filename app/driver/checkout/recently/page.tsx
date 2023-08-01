import BackHeader from "@/components/common/BackHeader";
import { getHistoryCheckoutDriver } from "@/server/driver/action";
import { Checkout } from "@/types/Checkout";
import React from "react";

const Recently = async () => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    const historyCheckout: Checkout[] = await getHistoryCheckoutDriver();
    return (
        <div className="w-90">
            <BackHeader url="/driver/profile" name="تاریخچه تسویه حساب‌ها" />
            <div className="flex flex-col gap-6 mt-5">
                {historyCheckout.map((item, idx) => (
                    <div className="flex items-center justify-between font-artin-regular border-b pb-4" key={idx}>
                        <div className="space-y-5">
                            <p>
                                <span>وضعیت: </span>
                                {item.status}
                            </p>
                            <p>
                                <span>مبلغ: </span>
                                {item.Amount.toLocaleString()}
                            </p>
                        </div>
                        <div className="space-y-5">
                            <p>
                                <span>شماره شبا: </span>
                                {item.WithdrawalTo}
                            </p>
                            <p>
                                <span>تاریخ تسویه: </span>
                                
                            {/* @ts-ignore */}
                                {new Date(item.createdAt).toLocaleDateString("fa-IR", options)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recently;
