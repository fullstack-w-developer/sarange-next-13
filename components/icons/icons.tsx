interface Props {
    fill?: string;
    size?: string;
    className?: string;
}

export const Phone_icon = ({ fill = "white", size = "14" }: Props) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.75 13.2712H5.25C2.6775 13.2712 1.89583 12.4895 1.89583 9.91699V4.08366C1.89583 1.51116 2.6775 0.729492 5.25 0.729492H8.75C11.3225 0.729492 12.1042 1.51116 12.1042 4.08366V9.91699C12.1042 12.4895 11.3225 13.2712 8.75 13.2712ZM5.25 1.60449C3.16166 1.60449 2.77083 2.00116 2.77083 4.08366V9.91699C2.77083 11.9995 3.16166 12.3962 5.25 12.3962H8.75C10.8383 12.3962 11.2292 11.9995 11.2292 9.91699V4.08366C11.2292 2.00116 10.8383 1.60449 8.75 1.60449H5.25Z"
            fill={fill}
        />
        <path
            d="M8.16666 3.64551H5.83333C5.59416 3.64551 5.39583 3.44717 5.39583 3.20801C5.39583 2.96884 5.59416 2.77051 5.83333 2.77051H8.16666C8.40583 2.77051 8.60416 2.96884 8.60416 3.20801C8.60416 3.44717 8.40583 3.64551 8.16666 3.64551Z"
            fill={fill}
        />
        <path
            d="M7.00001 11.5847C6.25917 11.5847 5.65834 10.9839 5.65834 10.243C5.65834 9.5022 6.25917 8.90137 7.00001 8.90137C7.74084 8.90137 8.34167 9.5022 8.34167 10.243C8.34167 10.9839 7.74084 11.5847 7.00001 11.5847ZM7.00001 9.77053C6.74334 9.77053 6.53334 9.98053 6.53334 10.2372C6.53334 10.4939 6.74334 10.7039 7.00001 10.7039C7.25667 10.7039 7.46667 10.4939 7.46667 10.2372C7.46667 9.98053 7.25667 9.77053 7.00001 9.77053Z"
            fill={fill}
        />
    </svg>
);

export const Warr_iocn = ({ fill = "#F67D14", size = "16" }: Props) => (
    <svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_313_2673)">
            <path
                d="M9.09804 12.2022C9.09804 12.327 9.04846 12.4467 8.96021 12.535C8.87196 12.6232 8.75226 12.6728 8.62745 12.6728C8.33623 12.6728 8.05694 12.5571 7.85102 12.3512C7.6451 12.1453 7.52941 11.866 7.52941 11.5748V8.4375C7.52941 8.3959 7.51289 8.356 7.48347 8.32658C7.45405 8.29716 7.41415 8.28064 7.37255 8.28064C7.24774 8.28064 7.12805 8.23106 7.03979 8.1428C6.95154 8.05455 6.90196 7.93485 6.90196 7.81005C6.90196 7.68524 6.95154 7.56554 7.03979 7.47729C7.12805 7.38904 7.24774 7.33946 7.37255 7.33946C7.66377 7.33946 7.94306 7.45514 8.14898 7.66107C8.3549 7.86699 8.47059 8.14628 8.47059 8.4375V11.5748C8.47059 11.6164 8.48712 11.6563 8.51653 11.6857C8.54595 11.7151 8.58585 11.7316 8.62745 11.7316C8.75226 11.7316 8.87196 11.7812 8.96021 11.8694C9.04846 11.9577 9.09804 12.0774 9.09804 12.2022ZM7.68628 5.77083C7.8414 5.77083 7.99304 5.72483 8.12202 5.63865C8.251 5.55247 8.35152 5.42998 8.41089 5.28666C8.47025 5.14335 8.48578 4.98565 8.45552 4.83351C8.42526 4.68136 8.35056 4.54161 8.24087 4.43193C8.13118 4.32224 7.99143 4.24754 7.83929 4.21728C7.68715 4.18701 7.52945 4.20254 7.38613 4.26191C7.24282 4.32127 7.12032 4.4218 7.03414 4.55078C6.94796 4.67976 6.90196 4.8314 6.90196 4.98652C6.90196 5.19453 6.9846 5.39402 7.13168 5.54111C7.27877 5.6882 7.47826 5.77083 7.68628 5.77083ZM16 8.4375C16 10.0197 15.5308 11.5665 14.6518 12.8821C13.7727 14.1977 12.5233 15.223 11.0615 15.8285C9.59966 16.434 7.99113 16.5925 6.43928 16.2838C4.88743 15.9751 3.46197 15.2132 2.34315 14.0944C1.22433 12.9755 0.462403 11.5501 0.153721 9.99822C-0.15496 8.44637 0.00346614 6.83784 0.608967 5.37603C1.21447 3.91422 2.23985 2.66479 3.55544 1.78574C4.87103 0.906692 6.41775 0.4375 8 0.4375C10.121 0.439991 12.1544 1.28365 13.6541 2.7834C15.1539 4.28315 15.9975 6.31653 16 8.4375ZM15.0588 8.4375C15.0588 7.04139 14.6448 5.67664 13.8692 4.51583C13.0936 3.35501 11.9911 2.45026 10.7013 1.916C9.41146 1.38173 7.99217 1.24194 6.62289 1.51431C5.25362 1.78668 3.99585 2.45896 3.00866 3.44616C2.02147 4.43335 1.34918 5.69111 1.07681 7.06039C0.804447 8.42967 0.944235 9.84896 1.4785 11.1388C2.01277 12.4286 2.91751 13.5311 4.07833 14.3067C5.23915 15.0823 6.6039 15.4963 8 15.4963C9.87148 15.4942 11.6657 14.7499 12.989 13.4265C14.3124 12.1032 15.0567 10.309 15.0588 8.4375Z"
                fill={fill}
            />
        </g>
        <defs>
            <clipPath id="clip0_313_2673">
                <rect width="16" height="17" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const Edit_icon = ({ fill }: Props) => (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.77 10.2598C2.465 10.2598 2.18 10.1548 1.975 9.95978C1.715 9.71478 1.59 9.34478 1.635 8.94478L1.82 7.32478C1.855 7.01978 2.04 6.61478 2.255 6.39478L6.36 2.04978C7.385 0.96478 8.455 0.93478 9.54 1.95978C10.625 2.98478 10.655 4.05478 9.63 5.13978L5.525 9.48478C5.315 9.70978 4.925 9.91978 4.62 9.96978L3.01 10.2448C2.925 10.2498 2.85 10.2598 2.77 10.2598ZM7.965 1.95478C7.58 1.95478 7.245 2.19478 6.905 2.55478L2.8 6.90478C2.7 7.00978 2.585 7.25978 2.565 7.40478L2.38 9.02478C2.36 9.18978 2.4 9.32478 2.49 9.40978C2.58 9.49478 2.715 9.52478 2.88 9.49978L4.49 9.22478C4.635 9.19978 4.875 9.06978 4.975 8.96478L9.08 4.61978C9.7 3.95978 9.925 3.34978 9.02 2.49978C8.62 2.11478 8.275 1.95478 7.965 1.95478Z"
            fill={fill}
        />
        <path
            d="M8.67 5.97541C8.66 5.97541 8.645 5.97541 8.635 5.97541C7.075 5.82041 5.82 4.63541 5.58 3.08541C5.55 2.88041 5.69 2.69041 5.895 2.65541C6.1 2.62541 6.29 2.76541 6.325 2.97041C6.515 4.18041 7.495 5.11041 8.715 5.23041C8.92 5.25041 9.07 5.43541 9.05 5.64041C9.025 5.83041 8.86 5.97541 8.67 5.97541Z"
            fill={fill}
        />
        <path
            d="M10.5 11.875H1.5C1.295 11.875 1.125 11.705 1.125 11.5C1.125 11.295 1.295 11.125 1.5 11.125H10.5C10.705 11.125 10.875 11.295 10.875 11.5C10.875 11.705 10.705 11.875 10.5 11.875Z"
            fill={fill}
        />
    </svg>
);

export const Box_icon = ({ fill }: Props) => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.99997 8.8669C7.91331 8.8669 7.82664 8.8469 7.74664 8.80023L1.85997 5.39356C1.62664 5.25356 1.53997 4.9469 1.67997 4.7069C1.81997 4.4669 2.12664 4.3869 2.36664 4.5269L7.99997 7.7869L13.6 4.5469C13.84 4.4069 14.1466 4.49356 14.2866 4.7269C14.4266 4.9669 14.34 5.27356 14.1066 5.41356L8.25997 8.80023C8.17331 8.84023 8.08664 8.8669 7.99997 8.8669Z"
            fill={fill}
        />
        <path
            d="M8 14.907C7.72667 14.907 7.5 14.6804 7.5 14.407V8.36035C7.5 8.08702 7.72667 7.86035 8 7.86035C8.27333 7.86035 8.5 8.08702 8.5 8.36035V14.407C8.5 14.6804 8.27333 14.907 8 14.907Z"
            fill={fill}
        />
        <path
            d="M7.99993 15.1663C7.41326 15.1663 6.83326 15.0397 6.37326 14.7863L2.81326 12.8063C1.84659 12.273 1.09326 10.9863 1.09326 9.87967V6.11301C1.09326 5.00634 1.84659 3.72634 2.81326 3.18634L6.37326 1.21301C7.2866 0.706341 8.71326 0.706341 9.62659 1.21301L13.1866 3.19301C14.1533 3.72634 14.9066 5.01301 14.9066 6.11967V9.88634C14.9066 10.993 14.1533 12.273 13.1866 12.813L9.62659 14.7863C9.16659 15.0397 8.5866 15.1663 7.99993 15.1663ZM7.99993 1.83301C7.57993 1.83301 7.16659 1.91967 6.85993 2.08634L3.29993 4.06634C2.65993 4.41967 2.09326 5.37967 2.09326 6.11301V9.87967C2.09326 10.613 2.65993 11.573 3.29993 11.933L6.85993 13.913C7.4666 14.253 8.53326 14.253 9.13993 13.913L12.6999 11.933C13.3399 11.573 13.9066 10.6197 13.9066 9.87967V6.11301C13.9066 5.37967 13.3399 4.41967 12.6999 4.05967L9.13993 2.07967C8.83326 1.91967 8.41993 1.83301 7.99993 1.83301Z"
            fill={fill}
        />
    </svg>
);

export const Phone_check_icon = ({ fill }: Props) => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.6333 15.1663C10.8799 15.1663 10.0866 14.9863 9.26659 14.6397C8.46659 14.2997 7.65992 13.833 6.87325 13.2663C6.08659 12.693 5.33325 12.0463 4.62659 11.3463C3.91992 10.633 3.27992 9.87967 2.71325 9.10634C2.13992 8.30634 1.67992 7.51301 1.35325 6.73301C1.00659 5.91301 0.833252 5.11301 0.833252 4.35967C0.833252 3.83967 0.926585 3.34634 1.10659 2.88634C1.29992 2.40634 1.59325 1.97301 1.99992 1.59301C2.51325 1.09301 3.09992 0.833008 3.72659 0.833008C3.98659 0.833008 4.25325 0.893008 4.47992 0.999674C4.73992 1.11967 4.95992 1.29967 5.11992 1.53967L6.66659 3.71967C6.80659 3.91301 6.91325 4.09967 6.98659 4.28634C7.07325 4.48634 7.11992 4.68634 7.11992 4.87967C7.11992 5.13301 7.04659 5.37967 6.90659 5.61301C6.80659 5.79301 6.65325 5.98634 6.45992 6.17968L6.00659 6.65301C6.01325 6.67301 6.01992 6.68634 6.02659 6.69967C6.10659 6.83967 6.26659 7.07967 6.57325 7.43967C6.89325 7.81301 7.20659 8.14634 7.51325 8.46634C7.91325 8.85967 8.23325 9.15967 8.53992 9.41301C8.91992 9.73301 9.16659 9.89301 9.31325 9.96634L9.29992 9.99967L9.78659 9.51967C9.99325 9.31301 10.1933 9.15967 10.3866 9.05968C10.7533 8.83301 11.2199 8.79301 11.6866 8.98634C11.8599 9.05967 12.0466 9.15967 12.2466 9.29967L14.4599 10.873C14.6999 11.0397 14.8866 11.253 14.9933 11.5063C15.0933 11.7597 15.1399 11.993 15.1399 12.2263C15.1399 12.5463 15.0666 12.8663 14.9266 13.1663C14.7866 13.4663 14.6133 13.7263 14.3933 13.9663C14.0133 14.3863 13.5999 14.6863 13.1199 14.8797C12.6599 15.0663 12.1599 15.1663 11.6333 15.1663ZM3.72659 1.83301C3.35992 1.83301 3.01992 1.99301 2.69325 2.31301C2.39325 2.59967 2.17325 2.91301 2.03992 3.25301C1.89992 3.59967 1.83325 3.96634 1.83325 4.35967C1.83325 4.97967 1.97992 5.65301 2.27325 6.34634C2.57325 7.05301 2.99325 7.78634 3.52659 8.51967C4.05992 9.25301 4.66659 9.96634 5.33325 10.6397C5.99992 11.2997 6.71992 11.913 7.45992 12.453C8.17992 12.9797 8.91992 13.4063 9.65325 13.713C10.7933 14.1997 11.8599 14.313 12.7399 13.9463C13.0799 13.8063 13.3799 13.593 13.6533 13.2863C13.8066 13.1197 13.9266 12.9397 14.0266 12.7263C14.1066 12.5597 14.1466 12.3863 14.1466 12.213C14.1466 12.1063 14.1266 11.9997 14.0733 11.8797C14.0599 11.8463 14.0133 11.7663 13.8866 11.6797L11.6733 10.1063C11.5399 10.013 11.4199 9.94634 11.3066 9.89968C11.1333 9.83301 11.0199 9.82634 10.8733 9.91967C10.7399 9.98634 10.6199 10.0863 10.4866 10.2197L9.97992 10.7197C9.71992 10.973 9.31992 11.033 9.01325 10.9197L8.83325 10.8397C8.55992 10.693 8.23992 10.4663 7.88659 10.1663C7.55992 9.89301 7.22659 9.57967 6.79992 9.15967C6.46659 8.81967 6.14659 8.46634 5.80659 8.07967C5.49325 7.71301 5.26659 7.39967 5.12659 7.13967L5.03992 6.93967C4.99992 6.79301 4.98659 6.70634 4.98659 6.61301C4.98659 6.37301 5.07325 6.15967 5.23992 5.99301L5.73992 5.47301C5.87325 5.33967 5.97325 5.21301 6.03992 5.09967C6.09325 5.01301 6.11325 4.93967 6.11325 4.87301C6.11325 4.81967 6.09325 4.73967 6.05992 4.65967C6.01992 4.54634 5.94659 4.43301 5.85325 4.29967L4.30659 2.11301C4.23992 2.01967 4.15992 1.95301 4.05992 1.90634C3.95325 1.85967 3.83992 1.83301 3.72659 1.83301ZM9.29992 10.0063L9.19325 10.4597L9.37325 9.99301C9.34659 9.98634 9.31992 9.99301 9.29992 10.0063Z"
            fill={fill}
        />
        <path
            d="M11.3334 5.81361C11.2067 5.81361 11.08 5.76694 10.98 5.66694L9.64671 4.33361C9.45338 4.14027 9.45338 3.82027 9.64671 3.62694C9.84004 3.43361 10.16 3.43361 10.3534 3.62694L11.3334 4.60694L13.6467 2.30027C13.84 2.10694 14.16 2.10694 14.3534 2.30027C14.5467 2.49361 14.5467 2.81361 14.3534 3.00694L11.6867 5.67361C11.5867 5.76027 11.46 5.81361 11.3334 5.81361Z"
            fill={fill}
        />
    </svg>
);

export const User_icon = ({ fill, size, className }: Props) => (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.00008 8.49967C5.88675 8.49967 4.16675 6.77967 4.16675 4.66634C4.16675 2.55301 5.88675 0.833008 8.00008 0.833008C10.1134 0.833008 11.8334 2.55301 11.8334 4.66634C11.8334 6.77967 10.1134 8.49967 8.00008 8.49967ZM8.00008 1.83301C6.44008 1.83301 5.16675 3.10634 5.16675 4.66634C5.16675 6.22634 6.44008 7.49967 8.00008 7.49967C9.56008 7.49967 10.8334 6.22634 10.8334 4.66634C10.8334 3.10634 9.56008 1.83301 8.00008 1.83301Z"
            fill={fill}
        />
        <path
            d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
            fill={fill}
        />
    </svg>
);
export const Notifi_icon = ({ fill }: Props) => (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.34512 22.2443C8.99059 22.1078 12.9238 22.1078 13.5692 22.2443C14.121 22.3717 14.7177 22.6695 14.7177 23.3197C14.6857 23.9388 14.3225 24.4875 13.8208 24.836C13.1701 25.3432 12.4066 25.6644 11.6084 25.7802C11.167 25.8374 10.7332 25.8387 10.3072 25.7802C9.50774 25.6644 8.74421 25.3432 8.09488 24.8347C7.59185 24.4875 7.22869 23.9388 7.1966 23.3197C7.1966 22.6695 7.79332 22.3717 8.34512 22.2443ZM11.0334 0C13.7192 0 16.4628 1.27442 18.0926 3.38891C19.15 4.75045 19.635 6.1107 19.635 8.22519V8.77527C19.635 10.3969 20.0636 11.3527 21.0068 12.4542C21.7216 13.2656 21.95 14.3073 21.95 15.4374C21.95 16.5661 21.5792 17.6377 20.8362 18.5077C19.8635 19.5506 18.4917 20.2164 17.0916 20.3322C15.0628 20.5051 13.0327 20.6508 10.9757 20.6508C8.91732 20.6508 6.8885 20.5636 4.85967 20.3322C3.45836 20.2164 2.08657 19.5506 1.11515 18.5077C0.372143 17.6377 0 16.5661 0 15.4374C0 14.3073 0.229702 13.2656 0.94319 12.4542C1.9159 11.3527 2.31627 10.3969 2.31627 8.77527V8.22519C2.31627 6.05348 2.8578 4.63342 3.97295 3.24326C5.63091 1.2159 8.28852 0 10.9179 0H11.0334Z"
            fill="#B9B9B9"
        />
    </svg>
);
export const Menu_icon = ({ fill }: Props) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.23992 15.7146C10.8849 15.7146 12.2033 17.0457 12.2033 18.7024V22.6796C12.2033 24.3246 10.8849 25.6662 9.23992 25.6662H5.29659C3.66325 25.6662 2.33325 24.3246 2.33325 22.6796V18.7024C2.33325 17.0457 3.66325 15.7146 5.29659 15.7146H9.23992ZM22.7034 15.7146C24.3367 15.7146 25.6667 17.0457 25.6667 18.7024V22.6796C25.6667 24.3246 24.3367 25.6662 22.7034 25.6662H18.76C17.115 25.6662 15.7967 24.3246 15.7967 22.6796V18.7024C15.7967 17.0457 17.115 15.7146 18.76 15.7146H22.7034ZM9.23992 2.33325C10.8849 2.33325 12.2033 3.67492 12.2033 5.32109V9.29825C12.2033 10.9549 10.8849 12.2849 9.23992 12.2849H5.29659C3.66325 12.2849 2.33325 10.9549 2.33325 9.29825V5.32109C2.33325 3.67492 3.66325 2.33325 5.29659 2.33325H9.23992ZM22.7034 2.33325C24.3367 2.33325 25.6667 3.67492 25.6667 5.32109V9.29825C25.6667 10.9549 24.3367 12.2849 22.7034 12.2849H18.76C17.115 12.2849 15.7967 10.9549 15.7967 9.29825V5.32109C15.7967 3.67492 17.115 2.33325 18.76 2.33325H22.7034Z"
            fill={fill}
        />
    </svg>
);
export const Wallet_icon = ({ fill }: Props) => (
    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.7335 0C25.444 0 28.2243 2.71071 28.2243 7.35087H22.4453V7.39822C19.7632 7.39822 17.589 9.51809 17.589 12.1331C17.589 14.7481 19.7632 16.8679 22.4453 16.8679H28.2243V17.2941C28.2243 21.8751 25.444 24.5858 20.7335 24.5858H8.39852C3.68793 24.5858 0.907715 21.8751 0.907715 17.2941V7.29168C0.907715 2.71071 3.68793 0 8.39852 0H20.7335ZM27.2044 9.38686C27.7677 9.38686 28.2243 9.83203 28.2243 10.3812V13.8376C28.2177 14.3841 27.7649 14.8256 27.2044 14.8319H22.5546C21.1968 14.8498 20.0095 13.9434 19.7015 12.6539C19.5473 11.8535 19.7638 11.0275 20.293 10.3973C20.8222 9.7672 21.61 9.39733 22.4453 9.38686H27.2044ZM23.1009 10.9849H22.6517C22.3759 10.9817 22.1103 11.0863 21.9141 11.2754C21.718 11.4644 21.6076 11.7221 21.6076 11.991C21.6075 12.5552 22.0731 13.0144 22.6517 13.0209H23.1009C23.6775 13.0209 24.145 12.5651 24.145 12.0029C24.145 11.4406 23.6775 10.9849 23.1009 10.9849ZM15.088 5.31488H7.3787C6.80677 5.31484 6.34125 5.76344 6.3346 6.32104C6.3346 6.88521 6.8001 7.34439 7.3787 7.35087H15.088C15.6647 7.35087 16.1321 6.8951 16.1321 6.33288C16.1321 5.77065 15.6647 5.31488 15.088 5.31488Z"
            fill={fill}
        />
    </svg>
);

export const Location_icon = () => (
    <svg width="20" height="20" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 0.181885C6.20558 0.181885 8 1.98988 8 4.21243C8 6.94455 4.86982 9.63643 4 9.63643C3.13018 9.63643 0 6.94455 0 4.21243C0 1.98988 1.79442 0.181885 4 0.181885ZM4 0.909157C2.19539 0.909157 0.727273 2.39134 0.727273 4.21243C0.727273 6.52952 3.45406 8.78698 4 8.90722C4.54594 8.78649 7.27273 6.52904 7.27273 4.21243C7.27273 2.39134 5.80461 0.909157 4 0.909157ZM4.00048 2.60613C4.86933 2.60613 5.57624 3.31304 5.57624 4.18237C5.57624 5.05122 4.86933 5.75764 4.00048 5.75764C3.13164 5.75764 2.42473 5.05122 2.42473 4.18237C2.42473 3.31304 3.13164 2.60613 4.00048 2.60613ZM4.00048 3.3334C3.53261 3.3334 3.152 3.71401 3.152 4.18237C3.152 4.65025 3.53261 5.03037 4.00048 5.03037C4.46836 5.03037 4.84897 4.65025 4.84897 4.18237C4.84897 3.71401 4.46836 3.3334 4.00048 3.3334Z"
            fill="#222222"
        />
    </svg>
);

export const Check_iocn = () => (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_39_219)">
            <path
                d="M29 47.3958C16.6458 47.3958 6.60413 37.3542 6.60413 25C6.60413 12.6458 16.6458 2.60417 29 2.60417C41.3541 2.60417 51.3958 12.6458 51.3958 25C51.3958 37.3542 41.3541 47.3958 29 47.3958ZM29 5.72917C18.375 5.72917 9.72913 14.375 9.72913 25C9.72913 35.625 18.375 44.2708 29 44.2708C39.625 44.2708 48.2708 35.625 48.2708 25C48.2708 14.375 39.625 5.72917 29 5.72917Z"
                fill="white"
            />
            <path
                d="M26.0416 32.4583C25.625 32.4583 25.2291 32.2917 24.9375 32L19.0416 26.1042C18.4375 25.5 18.4375 24.5 19.0416 23.8958C19.6458 23.2917 20.6458 23.2917 21.25 23.8958L26.0416 28.6875L36.75 17.9792C37.3541 17.375 38.3541 17.375 38.9583 17.9792C39.5625 18.5833 39.5625 19.5833 38.9583 20.1875L27.1458 32C26.8541 32.2917 26.4583 32.4583 26.0416 32.4583Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_39_219"
                x="-2"
                y="-2"
                width="62"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_219" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_219" result="shape" />
            </filter>
        </defs>
    </svg>
);

export const Calender_icon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
            fill="#3B3B3B"
        />
        <path
            d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
            fill="#3B3B3B"
        />
        <path
            d="M18.2 22.15C16.02 22.15 14.25 20.38 14.25 18.2C14.25 16.02 16.02 14.25 18.2 14.25C20.38 14.25 22.15 16.02 22.15 18.2C22.15 20.38 20.38 22.15 18.2 22.15ZM18.2 15.75C16.85 15.75 15.75 16.85 15.75 18.2C15.75 19.55 16.85 20.65 18.2 20.65C19.55 20.65 20.65 19.55 20.65 18.2C20.65 16.85 19.55 15.75 18.2 15.75Z"
            fill="#3B3B3B"
        />
        <path
            d="M21.9999 22.7475C21.8099 22.7475 21.6199 22.6775 21.4699 22.5275L20.4699 21.5275C20.1799 21.2375 20.1799 20.7575 20.4699 20.4675C20.7599 20.1775 21.2399 20.1775 21.5299 20.4675L22.5299 21.4675C22.8199 21.7575 22.8199 22.2375 22.5299 22.5275C22.3799 22.6775 22.1899 22.7475 21.9999 22.7475Z"
            fill="#3B3B3B"
        />
        <path
            d="M8.5 14.4989C8.37 14.4989 8.24 14.4689 8.12 14.4189C7.99 14.3689 7.87999 14.2989 7.78999 14.2089C7.74999 14.1589 7.7 14.1089 7.67 14.0589C7.63 13.9989 7.6 13.9389 7.58 13.8789C7.55 13.8189 7.53 13.7589 7.52 13.6989C7.51 13.6289 7.5 13.5589 7.5 13.4989C7.5 13.2389 7.60999 12.9789 7.78999 12.7889C7.87999 12.6989 7.99 12.6289 8.12 12.5789C8.48 12.4189 8.93001 12.5089 9.21001 12.7889C9.39001 12.9789 9.5 13.2389 9.5 13.4989C9.5 13.5589 9.49 13.6289 9.48 13.6989C9.47 13.7589 9.45 13.8189 9.42 13.8789C9.4 13.9389 9.37 13.9989 9.33 14.0589C9.29 14.1089 9.25001 14.1589 9.21001 14.2089C9.02001 14.3889 8.76 14.4989 8.5 14.4989Z"
            fill="#3B3B3B"
        />
        <path
            d="M12 14.5031C11.74 14.5031 11.48 14.3931 11.29 14.2131C11.11 14.0231 11 13.7731 11 13.5031C11 13.3731 11.03 13.2431 11.08 13.1231C11.13 13.0031 11.2 12.8931 11.29 12.7931C11.66 12.4231 12.33 12.4231 12.71 12.7931C12.89 12.9831 13 13.2431 13 13.5031C13 13.5631 12.99 13.6331 12.98 13.7031C12.97 13.7631 12.95 13.8231 12.92 13.8831C12.9 13.9431 12.87 14.0031 12.83 14.0631C12.79 14.1131 12.75 14.1631 12.71 14.2131C12.52 14.3931 12.26 14.5031 12 14.5031Z"
            fill="#3B3B3B"
        />
        <path
            d="M8.5 18.0031C8.24 18.0031 7.97999 17.8931 7.78999 17.7131C7.60999 17.5231 7.5 17.2631 7.5 17.0031C7.5 16.8731 7.53 16.7431 7.58 16.6231C7.63 16.4931 7.69999 16.3831 7.78999 16.2931C8.15999 15.9231 8.84001 15.9231 9.21001 16.2931C9.39001 16.4831 9.5 16.7431 9.5 17.0031C9.5 17.2631 9.39001 17.5231 9.21001 17.7131C9.02001 17.8931 8.76 18.0031 8.5 18.0031Z"
            fill="#3B3B3B"
        />
        <path
            d="M20.5 9.84375H3.5C3.09 9.84375 2.75 9.50375 2.75 9.09375C2.75 8.68375 3.09 8.34375 3.5 8.34375H20.5C20.91 8.34375 21.25 8.68375 21.25 9.09375C21.25 9.50375 20.91 9.84375 20.5 9.84375Z"
            fill="#3B3B3B"
        />
        <path
            d="M13.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V13C21.75 13.41 21.41 13.75 21 13.75C20.59 13.75 20.25 13.41 20.25 13V8.5C20.25 5.64 18.86 4.25 16 4.25H8C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.37C13.78 21.25 14.12 21.59 14.12 22C14.12 22.41 13.78 22.75 13.37 22.75Z"
            fill="#3B3B3B"
        />
    </svg>
);

export const Home_icons = ({ fill = "#626262" }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.5999 22.5608H6.39985C4.57985 22.5608 2.91985 21.1608 2.61985 19.3608L1.28984 11.4008C1.07984 10.1608 1.67985 8.57084 2.66985 7.78084L9.59986 2.23079C10.9399 1.15079 13.0498 1.1608 14.3998 2.2408L21.3299 7.78084C22.3099 8.57084 22.9099 10.1608 22.7099 11.4008L21.3799 19.3608C21.0799 21.1308 19.3899 22.5608 17.5999 22.5608ZM11.9899 2.94082C11.4599 2.94082 10.9298 3.10079 10.5398 3.41079L3.60985 8.96084C3.03985 9.42084 2.64986 10.4408 2.76986 11.1608L4.09986 19.1208C4.27986 20.1708 5.32985 21.0608 6.39985 21.0608H17.5999C18.6699 21.0608 19.7198 20.1708 19.8998 19.1108L21.2298 11.1508C21.3498 10.4308 20.9499 9.40083 20.3899 8.95083L13.4599 3.41079C13.0599 3.10079 12.5299 2.94082 11.9899 2.94082Z"
            fill={fill}
        />
        <path
            d="M12 16.25C10.21 16.25 8.75 14.79 8.75 13C8.75 11.21 10.21 9.75 12 9.75C13.79 9.75 15.25 11.21 15.25 13C15.25 14.79 13.79 16.25 12 16.25ZM12 11.25C11.04 11.25 10.25 12.04 10.25 13C10.25 13.96 11.04 14.75 12 14.75C12.96 14.75 13.75 13.96 13.75 13C13.75 12.04 12.96 11.25 12 11.25Z"
            fill={fill}
        />
    </svg>
);

export const User_icons = ({ fill = "#626262" }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
            fill={fill}
        />
        <path
            d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
            fill={fill}
        />
    </svg>
);

export const Edit_iocn = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.53999 19.5196C4.92999 19.5196 4.35999 19.3096 3.94999 18.9196C3.42999 18.4296 3.17999 17.6896 3.26999 16.8896L3.63999 13.6496C3.70999 13.0396 4.07999 12.2296 4.50999 11.7896L12.72 3.09956C14.77 0.929561 16.91 0.869561 19.08 2.91956C21.25 4.96956 21.31 7.10956 19.26 9.27956L11.05 17.9696C10.63 18.4196 9.84999 18.8396 9.23999 18.9396L6.01999 19.4896C5.84999 19.4996 5.69999 19.5196 5.53999 19.5196ZM15.93 2.90956C15.16 2.90956 14.49 3.38956 13.81 4.10956L5.59999 12.8096C5.39999 13.0196 5.16999 13.5196 5.12999 13.8096L4.75999 17.0496C4.71999 17.3796 4.79999 17.6496 4.97999 17.8196C5.15999 17.9896 5.42999 18.0496 5.75999 17.9996L8.97999 17.4496C9.26999 17.3996 9.74999 17.1396 9.94999 16.9296L18.16 8.23956C19.4 6.91956 19.85 5.69956 18.04 3.99956C17.24 3.22956 16.55 2.90956 15.93 2.90956Z"
            fill="#626262"
        />
        <path
            d="M17.3404 10.9489C17.3204 10.9489 17.2904 10.9489 17.2704 10.9489C14.1504 10.6389 11.6404 8.26887 11.1604 5.16887C11.1004 4.75887 11.3804 4.37887 11.7904 4.30887C12.2004 4.24887 12.5804 4.52887 12.6504 4.93887C13.0304 7.35887 14.9904 9.21887 17.4304 9.45887C17.8404 9.49887 18.1404 9.86887 18.1004 10.2789C18.0504 10.6589 17.7204 10.9489 17.3404 10.9489Z"
            fill="#626262"
        />
        <path
            d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
            fill="#626262"
        />
    </svg>
);

export const Logout_iocn = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.4428 15.3675C17.2528 15.3675 17.0628 15.2975 16.9128 15.1475C16.6228 14.8575 16.6228 14.3775 16.9128 14.0875L18.9428 12.0575L16.9128 10.0275C16.6228 9.7375 16.6228 9.2575 16.9128 8.9675C17.2028 8.6775 17.6828 8.6775 17.9728 8.9675L20.5328 11.5275C20.8228 11.8175 20.8228 12.2975 20.5328 12.5875L17.9728 15.1475C17.8228 15.2975 17.6328 15.3675 17.4428 15.3675Z"
            fill="#DF2040"
        />
        <path
            d="M19.9278 12.8125H9.75781C9.34781 12.8125 9.00781 12.4725 9.00781 12.0625C9.00781 11.6525 9.34781 11.3125 9.75781 11.3125H19.9278C20.3378 11.3125 20.6778 11.6525 20.6778 12.0625C20.6778 12.4725 20.3378 12.8125 19.9278 12.8125Z"
            fill="#DF2040"
        />
        <path
            d="M11.7578 20.75C6.60781 20.75 3.00781 17.15 3.00781 12C3.00781 6.85 6.60781 3.25 11.7578 3.25C12.1678 3.25 12.5078 3.59 12.5078 4C12.5078 4.41 12.1678 4.75 11.7578 4.75C7.48781 4.75 4.50781 7.73 4.50781 12C4.50781 16.27 7.48781 19.25 11.7578 19.25C12.1678 19.25 12.5078 19.59 12.5078 20C12.5078 20.41 12.1678 20.75 11.7578 20.75Z"
            fill="#DF2040"
        />
    </svg>
);

export const Sidebar_icon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2987_60948)">
            <path d="M4 6H20" stroke="#3B3B3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12H20" stroke="#3B3B3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 18H20" stroke="#3B3B3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2987_60948">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const Home = ({ fill = "#626262" }: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.6018 22.5608H6.4018C4.5818 22.5608 2.9218 21.1608 2.6218 19.3608L1.2918 11.4008C1.0818 10.1608 1.6818 8.57084 2.6718 7.78084L9.60181 2.23079C10.9418 1.15079 13.0518 1.1608 14.4018 2.2408L21.3318 7.78084C22.3118 8.57084 22.9118 10.1608 22.7118 11.4008L21.3818 19.3608C21.0818 21.1308 19.3918 22.5608 17.6018 22.5608ZM11.9918 2.94082C11.4618 2.94082 10.9318 3.10079 10.5418 3.41079L3.6118 8.96084C3.0418 9.42084 2.65181 10.4408 2.77181 11.1608L4.10181 19.1208C4.28181 20.1708 5.3318 21.0608 6.4018 21.0608H17.6018C18.6718 21.0608 19.7218 20.1708 19.9018 19.1108L21.2318 11.1508C21.3518 10.4308 20.9518 9.40083 20.3918 8.95083L13.4618 3.41079C13.0618 3.10079 12.5318 2.94082 11.9918 2.94082Z"
            fill={fill}
        />
        <path
            d="M12 16.25C10.21 16.25 8.75 14.79 8.75 13C8.75 11.21 10.21 9.75 12 9.75C13.79 9.75 15.25 11.21 15.25 13C15.25 14.79 13.79 16.25 12 16.25ZM12 11.25C11.04 11.25 10.25 12.04 10.25 13C10.25 13.96 11.04 14.75 12 14.75C12.96 14.75 13.75 13.96 13.75 13C13.75 12.04 12.96 11.25 12 11.25Z"
            fill={fill}
        />
    </svg>
);

export const Dash = ({ fill = "#1F0990" }: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.8598 8.36985L13.9298 2.82985C12.8598 1.96985 11.1298 1.96985 10.0698 2.81985L3.13978 8.36985C2.35978 8.98985 1.85978 10.2998 2.02978 11.2798L3.35978 19.2398C3.59978 20.6598 4.95978 21.8098 6.39978 21.8098H17.5998C19.0298 21.8098 20.3998 20.6498 20.6398 19.2398L21.9698 11.2798C22.1298 10.2998 21.6298 8.98985 20.8598 8.36985ZM11.9998 15.4998C10.6198 15.4998 9.49978 14.3798 9.49978 12.9998C9.49978 11.6198 10.6198 10.4998 11.9998 10.4998C13.3798 10.4998 14.4998 11.6198 14.4998 12.9998C14.4998 14.3798 13.3798 15.4998 11.9998 15.4998Z"
            fill={fill}
        />
    </svg>
);



export const Delete_icon = ({ className }: Props) => {
    return <span className={className}>
        <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0036 6.72656C20.9836 6.72656 20.9536 6.72656 20.9236 6.72656C15.6336 6.19656 10.3536 5.99656 5.12358 6.52656L3.08358 6.72656C2.66358 6.76656 2.29358 6.46656 2.25358 6.04656C2.21358 5.62656 2.51358 5.26656 2.92358 5.22656L4.96358 5.02656C10.2836 4.48656 15.6736 4.69656 21.0736 5.22656C21.4836 5.26656 21.7836 5.63656 21.7436 6.04656C21.7136 6.43656 21.3836 6.72656 21.0036 6.72656Z" />
            <path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z" />
            <path d="M15.2104 22.7515H8.79039C5.30039 22.7515 5.16039 20.8215 5.05039 19.2615L4.40039 9.19154C4.37039 8.78154 4.69039 8.42154 5.10039 8.39154C5.52039 8.37154 5.87039 8.68154 5.90039 9.09154L6.55039 19.1615C6.66039 20.6815 6.70039 21.2515 8.79039 21.2515H15.2104C17.3104 21.2515 17.3504 20.6815 17.4504 19.1615L18.1004 9.09154C18.1304 8.68154 18.4904 8.37154 18.9004 8.39154C19.3104 8.42154 19.6304 8.77154 19.6004 9.19154L18.9504 19.2615C18.8404 20.8215 18.7004 22.7515 15.2104 22.7515Z" />
            <path d="M13.6581 17.25H10.3281C9.91813 17.25 9.57812 16.91 9.57812 16.5C9.57812 16.09 9.91813 15.75 10.3281 15.75H13.6581C14.0681 15.75 14.4081 16.09 14.4081 16.5C14.4081 16.91 14.0681 17.25 13.6581 17.25Z" />
            <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" />
        </svg>

    </span>
}

export const EditIcon = ({ className }: Props) => {
    return <span className={className}>
        <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.53803 19.5235C4.92803 19.5235 4.35803 19.3135 3.94803 18.9235C3.42803 18.4335 3.17803 17.6935 3.26803 16.8935L3.63803 13.6535C3.70803 13.0435 4.07803 12.2335 4.50803 11.7935L12.718 3.10347C14.768 0.933467 16.908 0.873467 19.078 2.92347C21.248 4.97347 21.308 7.11347 19.258 9.28347L11.048 17.9735C10.628 18.4235 9.84803 18.8435 9.23803 18.9435L6.01803 19.4935C5.84803 19.5035 5.69803 19.5235 5.53803 19.5235ZM15.928 2.91347C15.158 2.91347 14.488 3.39347 13.808 4.11347L5.59803 12.8135C5.39803 13.0235 5.16803 13.5235 5.12803 13.8135L4.75803 17.0535C4.71803 17.3835 4.79803 17.6535 4.97803 17.8235C5.15803 17.9935 5.42803 18.0535 5.75803 18.0035L8.97803 17.4535C9.26803 17.4035 9.74803 17.1435 9.94803 16.9335L18.158 8.24347C19.398 6.92347 19.848 5.70347 18.038 4.00347C17.238 3.23347 16.548 2.91347 15.928 2.91347Z" />
            <path d="M17.3365 10.9528C17.3165 10.9528 17.2865 10.9528 17.2665 10.9528C14.1465 10.6428 11.6365 8.27278 11.1565 5.17278C11.0965 4.76278 11.3765 4.38278 11.7865 4.31278C12.1965 4.25278 12.5765 4.53278 12.6465 4.94278C13.0265 7.36278 14.9865 9.22278 17.4265 9.46278C17.8365 9.50278 18.1365 9.87278 18.0965 10.2828C18.0465 10.6628 17.7165 10.9528 17.3365 10.9528Z" />
            <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" />
        </svg>


    </span>
}