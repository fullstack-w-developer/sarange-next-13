"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Delete_icon, EditIcon, Edit_icon } from "../icons/icons";
import useAdminStore from "@/stores/admin-store";
import { usePathname, useRouter } from "next/navigation";
import { getObjectValue } from "@/helper/utils/generateObjectInitalValue";
import ChangeStatusWithdraw from "@/components/admin/ChangeStatusWithdraw";
import { useState } from "react";
import DropdownWithdraw from "@/components/admin/DropdownWithdraw";

function generateRandom() {
    let length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

interface Props {
    columns: GridColDef[] | any;
    rows: any[];
    operation?: any;
    onDelete?: () => void;
    isWithdraw?: boolean;
}

export default function DataGridTable({ columns, rows, operation, isWithdraw }: Props) {
    const [modalChangeStatus, setModalChangeStatus] = useState({
        open: false,
        info: {},
        name: "",
    });
    let options = { year: "numeric", month: "long", day: "numeric" };

    const { modal, setModal } = useAdminStore();
    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            <DataGrid
                className="!min-h-[200px] !h-fit !shadow-none  overflow-hidden"
                rows={rows.map((item) => {
                    return { ...item, operation };
                })}
                columns={[
                    ...columns,
                    operation.Total !== 0
                        ? {
                              headerName: "عملیات",
                              field: "operation",
                              flex: 1,
                              align: "center",
                              headerClassName: "font-artin-bold",
                              width: 130,
                              renderCell: (params: any) => {
                                  if (isWithdraw) {
                                      return <DropdownWithdraw params={params.row} setModalChangeStatus={setModalChangeStatus} />;
                                  } else {
                                      return (
                                          <div className="flex gap-4">
                                              {operation.names.map((name: any, idx: number) => {
                                                  if (name === "ویرایش") {
                                                      return (
                                                          <button
                                                              key={idx}
                                                              onClick={() =>
                                                                  setModal({
                                                                      info: params.row,
                                                                      name,
                                                                      open: "ویرایش",
                                                                      values: params.row.operation.edit,
                                                                  })
                                                              }
                                                          >
                                                              <EditIcon className="text-[#9e9e9e]" />
                                                          </button>
                                                      );
                                                  }
                                                  if (name === "حذف") {
                                                      return (
                                                          <button
                                                              key={idx}
                                                              onClick={() => setModal({ info: params.row, name, open: "حذف" })}
                                                              className="text-red-500"
                                                          >
                                                              <Delete_icon />
                                                          </button>
                                                      );
                                                  }
                                              })}
                                          </div>
                                      );
                                  }
                              },
                          }
                        : {},
                ].map((item: any) => {
                    if (item?.field?.includes(".")) {
                        return { ...item, valueGetter: (params: any) => getObjectValue(params.row, item?.field) };
                    } else if (item.field === "Status") {
                        return {
                            ...item,
                            renderCell: (params: any) => (
                                <p className="font-artin-regular">{params.row?.Status ? "فعال" : "غیر غعال"}</p>
                            ),
                        };
                    } else if (item.field === "createdAt") {
                        // @ts-ignore
                        return {
                            ...item,
                            renderCell: (params: any) => (
                                <p className="font-artin-regular">
                                    {/* @ts-ignore */}
                                    {new Date(params.row?.createdAt).toLocaleDateString("fa-IR", options)}
                                </p>
                            ),
                        };
                    } else if (item.field === "Balance") {
                        return {
                            ...item,
                            renderCell: (params: any) => (
                                <p className="font-artin-regular">{params.row?.Balance?.toLocaleString()} تومان</p>
                            ),
                        };
                    } else if (item.field === "Amount") {
                        return {
                            ...item,
                            renderCell: (params: any) => (
                                <p className="font-artin-regular">{params.row?.Amount?.toLocaleString()} تومان</p>
                            ),
                        };
                    } else if (item.field === "Cost") {
                        return {
                            ...item,
                            renderCell: (params: any) => (
                                <p className="font-artin-regular">{params.row?.Cost?.toLocaleString()} تومان</p>
                            ),
                        };
                    } else {
                        return { ...item };
                    }
                })}
                disableColumnSelector
                disableRowSelectionOnClick
                hideFooter
                getRowId={() => generateRandom()}
                slots={{
                    noRowsOverlay: () => (
                        <div className="flex flex-col h-full justify-between py-5 items-center gap-3">
                            <p className="text-center text-xl text-[#626262] font-artin-bold ">دیتایی وجود ندارد</p>
                            <button
                                onClick={() => router.replace(pathname)}
                                className="font-artin-regular bg-[#e1e1e1] border px-3 py-2 rounded-lg w-fit"
                            >
                                دیدن همه اطلاعات
                            </button>
                        </div>
                    ),
                }}
            />
            {modalChangeStatus.open && <ChangeStatusWithdraw modal={modalChangeStatus} setModal={setModalChangeStatus} />}
        </>
    );
}
