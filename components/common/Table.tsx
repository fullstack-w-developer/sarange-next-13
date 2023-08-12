"use client";
import { styled } from "@mui/material/styles";
import TableMui from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HiOutlinePlus } from "react-icons/hi";
import { CircularProgress } from "@mui/material";
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#e1e1e1",
        color: "#626262",
        fontFamily: "es-bold",
        whiteSpace: "nowrap",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        fontFamily: "es-regular",
        color: "#222222",
        borderColor: "transparent",
    },
}));

interface PropsTable {
    header: { Name: string }[];
    children?: React.ReactNode;
    namebtn?: string;
    onClick?: () => void;
    title?: string;
    titleFooter?: string;
    subTitleFooter?: any;
    isLoaidng?: boolean;
}

export default function Table({ header, children, namebtn, onClick, title, titleFooter, subTitleFooter, isLoaidng }: PropsTable) {
    return (
        <div className="w-full flex-1">
            {title && <p className="font-artin-black text-xl text-[#222] pb-4 pr-1">{title}</p>}
            <div className="lg:border rounded-tr-lg lg:rounded-lg overflow-hidden">
                <TableContainer sx={{ position: "relative" }} component={Paper}>
                    <TableMui>
                        <TableHead>
                            <TableRow>
                                {header.map((header: any, i) => {
                                    if (header.Name == "آیدی" || header.Name === "AuthId" || header.Name === "ماشین") return;
                                    return (
                                        <StyledTableCell key={i} align="center">
                                            <span className="font-artin-bold">{header.Name}</span>
                                        </StyledTableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        {isLoaidng && (
                            <div className="flex items-center mx-auto  justify-center min-w-full my-14 text-blue_deep">
                                <CircularProgress color="inherit" sx={{ position: "absolute", left: "50%" }} />
                            </div>
                        )}

                        <TableBody sx={{ position: "relative" }}>{children}</TableBody>
                    </TableMui>
                </TableContainer>
                {namebtn && (
                    <button
                        disabled={isLoaidng}
                        onClick={onClick}
                        className={`w-full bg-[#EBE7FD]  transition-all duration-300 py-[1.2rem] lg:py-3 gap-3 hover:bg-[#e1def1] text-blue_deep flex justify-center items-center font-artin-bold ${
                            !titleFooter && "rounded-br-lg lg:rounded-b-lg"
                        }`}
                    >
                        <HiOutlinePlus size={20} />
                        {namebtn}
                    </button>
                )}
                {titleFooter && (
                    <div className="flex justify-between py-3 rounded-br-lg lg:rounded--b-lg items-center px-5 bg-[#0b0330]">
                        <p className="text-white font-es-bold flex-1 flex justify-end">{titleFooter}</p>
                        <div className="flex-1 flex justify-end">
                            <p className="w-[130px] py-3 rounded-lg  flex justify-center items-center bg-white text-black font-artin-bold">
                                {subTitleFooter}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
