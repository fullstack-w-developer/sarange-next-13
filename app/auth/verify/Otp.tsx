"use client";
import { useState, useRef, useEffect } from "react";

interface Props {
    title?: boolean;
    className?: string;
    code: {
        field1: string;
        field2: string;
        field3: string;
        field4: string;
    };
    setCode: React.Dispatch<
        React.SetStateAction<{
            field1: string;
            field2: string;
            field3: string;
            field4: string;
        }>
    >;
}
const Otp = ({ className = "mt-10", code, setCode }: Props) => {
    const refField1 = useRef<React.Ref<any> | any>(undefined);
    const refField2 = useRef<React.Ref<any> | any>(undefined);
    const refField3 = useRef<React.Ref<any> | any>(undefined);
    const refField4 = useRef<React.Ref<any> | any>(undefined);
    const [isClear, setIsClear] = useState(false);
    const onkeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.keyCode || event.charCode;
        if (key === 8 || key === 46) {
            if (code.field2.length === 0) {
                refField1.current.focus();
                return;
            } else if (code.field3.length === 0) {
                refField2.current.focus();
                return;
            } else if (code.field4.length === 0) {
                refField3.current.focus();
                return;
            }

            setIsClear(true);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value.length === 2) return;

        if (isClear) {
            if (name === "field2" && value.length === 0) {
                refField1.current.focus();
            }
            if (name === "field3" && value.length === 0) {
                refField2.current.focus();
            }
            if (name === "field4" && value.length === 0) {
                refField3.current.focus();
            }
            setCode({
                ...code,
                [name]: value,
            });
            setIsClear(false);
            return;
        }

        if (name === "field1") {
            if (value.length === 1) {
                refField2.current.focus();
            }
        }
        if (name === "field2") {
            if (value.length === 1) {
                refField3.current.focus();
            }
        }
        if (name === "field3") {
            if (value.length === 1) {
                refField4.current.focus();
            }
        }

        setCode({
            ...code,
            [name]: value,
        });
    };
    useEffect(() => {
        refField1?.current?.focus();
    }, []);
    return (
        <div className={`w-full ${className}`}>
            <div className="flex flex-row-reverse justify-between gap-8 mt-10 container_verify ">
                <input
                    ref={refField1}
                    value={code.field1}
                    className="border w-full block ltr text-center"
                    onChange={onChange}
                    name="field1"
                    onKeyDown={onkeydown}
                />
                <input
                    ref={refField2}
                    value={code.field2}
                    className="border w-full block  ltr text-center"
                    onChange={onChange}
                    name="field2"
                    onKeyDown={onkeydown}
                />
                <input
                    ref={refField3}
                    value={code.field3}
                    className="border w-full block  ltr text-center"
                    onChange={onChange}
                    name="field3"
                    onKeyDown={onkeydown}
                />
                <input
                    ref={refField4}
                    value={code.field4}
                    className="border w-full block  ltr text-center"
                    onChange={onChange}
                    name="field4"
                    onKeyDown={onkeydown}
                />
            </div>
        </div>
    );
};

export default Otp;
