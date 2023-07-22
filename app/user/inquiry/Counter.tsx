"use client";
import Button from "@/components/common/Button";
import { Driver } from "@/types/Driver";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface Props {
  formik:any,
  driver:Driver
}
const Counter = ({ driver ,formik}: Props) => {
    const increment = () => {
        if (Number(formik.values.numberOfPassenger) === 4) return;
        formik.setFieldValue("numberOfPassenger", Number(formik.values.numberOfPassenger + 1))
    };
    const decrement = () => {
        if (Number(formik.values.numberOfPassenger) === 1) return;
        formik.setFieldValue("numberOfPassenger", Number(formik.values.numberOfPassenger - 1))
    };
    return (
        <>
            <div className="mt-10">
                <div>
                    <h1 className="font-artin-black text-xl">پرداخت هزینه</h1>
                    <p className="font-artin-regular text-[#626262]">تعداد نفرات مشخص و سپس بر روی دکه پرداخت کلیک کنید</p>
                </div>
                <div className="flex items-center mt-5 h-[54px]  rounded-lg  bg-[#fdf2e3]">
                    <Button
                        icon={<AiOutlinePlus size={27} color="#bf7412" />}
                        onClick={increment}
                        className="h-full !bg-transparent  flex-1 flex justify-center items-center"
                    />

                    <p className="bg-white rounded-lg border flex justify-center items-center text-[#784a08] border-[#bf7412] flex-1 h-full font-artin-bold">
                        {formik.values.numberOfPassenger} نفر
                    </p>
                    <Button
                        icon={<AiOutlineMinus size={27} color="#bf7412" />}
                        onClick={decrement}
                        className="h-full !bg-transparent flex-1 flex justify-center items-center"
                    />
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="font-artin-bold">
                        تعداد نفر : <span className="font-artin-black text-xl text-orange_light mx-1">{formik.values.numberOfPassenger}</span>
                        نفر
                    </p>
                    <p className="font-artin-bold">
                        کرایه:{" "}
                        <span className="font-artin-black text-xl text-orange_light mx-1">{Number(formik.values.numberOfPassenger) * driver?.CarRoute.Cost!}</span>
                        تومان
                    </p>
                </div>
            </div>
        </>
    );
};

export default Counter;
