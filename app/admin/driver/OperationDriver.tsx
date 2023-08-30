import { Dialog, Switch } from "@mui/material";
import React, { useState, useEffect, useTransition } from "react";
import { errorToast, successToast } from "@/helper/utils/error";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import Select from "@/components/common/Select";
import useAdminStore from "@/stores/admin-store";
import Loading from "@/components/common/Loading";
import CustomRadioButton from "@/components/common/CustomRadioButton";
import { optionYesOrNo, sexPerson } from "@/helper/utils/data";
import Plaque from "@/components/admin/Plaque";
import useGetRoutesQuery from "@/hooks/query/routes/useGetRoutesQuery";
import { addDriverByAdmin, editDriverByAdmin } from "@/server/admin/driver";
import { daynamicValidation } from "@/helper/utils/validation/admin";
import GetDriverByIdQuery from "@/hooks/query/driver/GetDriverByIdQuery";
interface Props {
    items: {
        Name: string;
        Value: string;
        type: string;
    }[];
    initialValues: any;
    validationSchema: any;
    title: string;
    craeteFun: (data: any) => void;
    editFun: (id: string, data: any) => void;
}
const OperationDriver = ({ items, initialValues, title }: Props) => {
    const [page, setPage] = useState(0);
    const { data, isLoading, isSuccess } = useGetRoutesQuery(page);
    const [routes, setRoutes] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();
    const { modal, setModal } = useAdminStore();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: daynamicValidation(initialValues),
        onSubmit: async (values) => {
            startTransition((async () => {
                const data = {
                    Phone: values.Phone,
                    Password: values.Password,
                    FirstName: values.FirstName,
                    LastName: values.LastName,
                    FatherName: values.FatherName,
                    CityNumber: values.CityNumber,
                    AccountNumber: values.AccountNumber,
                    Shaba: values.Shaba,
                    Sex: values.Sex,
                    Car: {
                        Plaque: {
                            part1: values.part1,
                            part2: values.part2,
                            part3: values.part3,
                            part4: values.part4,
                        },
                        Route: values.Route._id,
                        Type: values.Type,
                        IsRotatory: values.IsRotatory,
                        HasHelperDriver: values.HasHelperDriver,
                    },
                };
                if (modal.name === "ویرایش") {
                    editDriverByAdmin(modal.info.AuthId, data)
                } else {
                    addDriverByAdmin(data)

                }

            }));
        },
    });


    useEffect(() => {
        if (isSuccess) {  
            formik.setValues({
                ...modal.info,
            });
        }
    }, [isSuccess]);
    const handleMenuScrollToBottom = () => {
        if (routes.length === data?.Total) return;
        if (isLoading) return;
        const nextPage = page + 1;
        setPage(nextPage);
    };

    useEffect(() => {
        if (isSuccess) {
            setRoutes([...routes, ...data.Routes]);
        }
    }, [isSuccess]);
    return (
        <Dialog maxWidth="sm" fullWidth open={modal.open === "ویرایش" || modal.open === "ایجاد"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl  text-[#222] border-[#e1e1e1] border-b py-3">
                    {` ${modal.name === "ایجاد" ? title : ""} ${modal.name === "ویرایش" ? "ویرایش" : "جدید"} ${modal.name === "ویرایش" ? title : ""
                        }`}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-y-2 gap-x-10 container_create_taxi">
                        {items?.map((item, idx) => {
                            if (item.Value === "part2" || item.Value === "part3" || item.Value === "part4") return;
                            if (item.Value === "Route") {
                                return (
                                    <Select
                                        key={idx}
                                        onMenuScrollToBottom={handleMenuScrollToBottom}
                                        formik={formik}
                                        name={item.Value}
                                        label={item.Name}
                                        getOptionLabel={(option: any) => option.Name}
                                        getOptionValue={(option) => option._id}
                                        options={routes}
                                        isLoading={isLoading}
                                    />
                                );
                            }
                            if (item.Value === "Status") {
                                return (
                                    <div key={idx} className="flex items-center gap-7">
                                        <p className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">
                                            وضعیت :
                                        </p>
                                        <Switch
                                            checked={formik.values[item.Value]}
                                            onChange={formik.handleChange}
                                            name={item.Value}
                                            color="warning"
                                        />
                                    </div>
                                );
                            }

                            if (item.Value === "Sex" || item.Value === "IsRotatory" || item.Value === "HasHelperDriver") {
                                return (
                                    <CustomRadioButton
                                        label={item.Name}
                                        key={idx}
                                        list={item.Value === "Sex" ? sexPerson : optionYesOrNo}
                                        formik={formik}
                                        name={item.Value}
                                    />
                                );
                            }

                            if (item.Value === "part1") {
                                return <Plaque key={idx} formik={formik} />;
                            }

                            return (
                                <Input
                                    key={idx}
                                    type={item.Value === "Password" ? "Password" : "text"}
                                    formik={formik}
                                    label={item.Name}
                                    name={item.Value}
                                />
                            );
                        })}
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => setModal({ open: undefined })}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {isPending ? <Loading /> : modal.name === "ویرایش" ? "ویرایش" : "ایجاد"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default OperationDriver;
