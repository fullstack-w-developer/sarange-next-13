import { useRef } from "react";
import { useMutation } from "react-query";
import { farePayment } from "@/services/fare";
import { errorToast, successToast } from "@/helpers/utils/error";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
// @ts-ignore
import Music from "@/assets/music/notfication.mp3";
import useDriverStore from "@/stores/driver-store";
const useFarePaymentMutation = ({ url }: { url: string }) => {
    const telegramAudioRef = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(Music) : undefined);
    const router = useRouter();
    const { closeVerifyPassForPay } = useDriverStore();
    return useMutation(async (data: any) => await farePayment(data), {
        onSuccess: async function () {
            await closeVerifyPassForPay();
            await telegramAudioRef.current?.play();
            router.push(url);
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.Message);
        },
    });
};

export default useFarePaymentMutation;
