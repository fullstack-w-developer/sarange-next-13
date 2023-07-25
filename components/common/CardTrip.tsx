import { Trip } from "@/types/Driver/ResponseUserTripQuery";
import { FaCar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Calender_icon, Location_icon } from "../icons/icons";
import { toFarsiNumber } from "@/helper/utils/toFarsiNumber";
interface Props {
    trip: Trip;
}
const CardTrip = ({ trip }: Props) => {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };

    const date = new Date(trip.CreatedAt);

    const hour = date.getHours();
    const minute = date.getMinutes();
    return (
        <div className="  bg-white shadow rounded-lg p-2">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <div className="flex items-center gap-2 text-gray-600">
                    <FaCar size={24} />
                    <p className="font-artin-bold text-lg">نوع تاکسی :</p>
                    <p className="font-artin-regular text-orange">{trip.car.Type}</p>
                </div>
                <p className="font-estedad-bold text-[12px] flex items-center gap-2 text-gray-600">
                    {/* @ts-ignore */}
                    <span className="font-estedad-bold">
                        {toFarsiNumber(`${hour + ":" + `${minute < 10 ? `0${minute}` : minute}`}`)}
                    </span>
                    {new Date(trip.CreatedAt).toLocaleDateString("fa-IR")}
                    <Calender_icon />
                </p>
            </div>

            <div className="flex items-center  justify-between py-3 border-b border-gray-200">
                <p className="flex items-center gap-2 font-artin-black text-gray-600">
                    <AiOutlineUser size={23} />
                    تعداد نفر : <span className="text-orange font-artin-regular">{trip.NumberOfPassengers}</span>
                </p>
                <p className="font-artin-black text-gray-600 flex gap-1">
                    مبلغ پرداختی :{" "}
                    <span className="text-orange font-artin-regular"> {trip.UserTransaction.Amount.toLocaleString()} </span>
                </p>
            </div>

            <p className="font-artin-black text-gray-600 border-b border-gray-200 py-2 flex gap-2">
                {" "}
                روش پرداخت : <span className="text-orange font-artin-regular">{trip.PaymentType}</span>
            </p>
            <div className="flex items-center gap-1 mt-2">
                <Location_icon />
                <p className="font-estedad-medium text-xs text-gray-600">{trip.Route.Name}</p>
            </div>
        </div>
    );
};

export default CardTrip;
