import Input from "@/components/common/Input";
import React from "react";

const CostTaxiInsetMoney = ({ formik }: {formik:any}) => {
    return (
        <div>
            <div className="mt-10">
                <Input
                    ltr
                    label="هزینه تاکسی"
                    placeholder="هزینه تاکسی را به تومان وارد کنید"
                    classInput=""
                    formik={formik}
                    name="amount"
                />
            </div>
        </div>
    );
};

export default CostTaxiInsetMoney;
