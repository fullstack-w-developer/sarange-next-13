import { Dialog, Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import { successToast } from "@/helper/utils/error";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import Select from "@/components/common/Select";
import useAdminStore from "@/stores/admin-store";
import { convertObjectEnglishNumber, convertObjectToCamelCase } from "@/helper/utils/converObject";
interface Props {
  items: {
    name: string;
    title: string;
    type: string;
  }[]
  initialValues: any;
  validationSchema: any,
  title: string;
  craeteFun: (data: any) => void;
  editFun: (id: string, data: any) => void;
}
const OperationModal = ({ items, initialValues, title, validationSchema, craeteFun, editFun }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const { modal, setModal } = useAdminStore()
  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      if(values?._id){
        delete values?._id
      }
      const result = convertObjectEnglishNumber(values)
      if (modal.name === "ویرایش") {
        // @ts-ignore
        await editFun(modal.info._id, result).finally(() => {
          setModal({})
          setIsLoading(false)
          successToast("با موفقیت ویرایش شد")
          formik.resetForm()
        })
      } else {
        // @ts-ignore
        await craeteFun(result).finally(() => {
          setModal({})
          console.log(result)
          setIsLoading(false)
          successToast("با موفقیت ایجاد شد")
          formik.resetForm()
        })
      }
    }
  })


  useEffect(() => {
    if (modal.info) {
      formik.setValues({
        ...modal.info
      })
    }

  }, [modal.info])
  return (
    <Dialog maxWidth="xs" fullWidth open={modal.open === "ویرایش" || modal.open === "ایجاد"}>
      <div className="h-fit  !flex !flex-col !justify-between">
        <h1 className="text-center font-artin-black text-xl  text-[#222] border-[#e1e1e1] border-b py-3">
          {` ${modal.name === "ایجاد" ? title : ""} ${modal.name === "ویرایش" ? "ویرایش" : "جدید"} ${modal.name === "ویرایش" ? title : ""}`}
        </h1>
        <div className="p-2 px-4 pt-4">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
            {
              items.map((item, idx) => {
                if (item.type === "text") {
                  return <Input key={idx} formik={formik} label={item.title} name={item.name} />
                }
                if (item.type === "select") {
                  return <Select formik={formik} name={item.name} label={item.title} options={[]} />
                }
                if (item.type === "radio") {
                  return <div className="flex items-center gap-7">
                    <p className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">{item.title}:</p>
                    <Switch name={item.name} color="warning" />
                  </div>

                }
              })
            }
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
                {modal.name === "ویرایش" ? `${isLoading ? "در حال ویرایش" : "ویرایش"}` : `${isLoading ? "در حال ایجاد" : "ایجاد"}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default OperationModal;
