
type Props = {
    className?: string;
    onClick?: () => void;
}
export const Phone_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current stroke-current" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9375 3.75C21.9375 3.75 25.7302 4.0945 30.5549 8.92075C35.3811 13.747 35.7256 17.5381 35.7256 17.5381M23.0864 9.496C23.0864 9.496 24.6951 9.95425 27.1082 12.3674C29.5214 14.7805 29.9813 16.3892 29.9813 16.3892" stroke-width="2.4375" stroke-linecap="round" />
            <path opacity="0.5" d="M25.2785 24.139L26.1625 24.9791L25.2785 24.1406V24.139ZM30.8783 33.4128L29.9926 32.5727L30.8766 33.4128H30.8783ZM28.7235 34.5666L28.8438 35.7772L28.7235 34.5649V34.5666ZM25.4231 25.7575L26.1625 24.9774L24.3945 23.2988L23.6551 24.0805L25.4231 25.7575ZM28.5984 24.6492L31.7021 26.4383L32.9176 24.3242L29.8139 22.5367L28.5984 24.6492ZM32.3018 30.1417L29.9943 32.5711L31.7606 34.2513L34.0681 31.8219L32.3018 30.1417ZM28.6049 33.3511C26.273 33.5802 20.1874 33.3852 13.5834 26.4335L11.817 28.1104C19.0141 35.6878 25.8798 36.0713 28.8438 35.7772L28.6049 33.3511ZM13.5834 26.4335C7.28488 19.8018 6.22863 14.207 6.097 11.7532L3.66275 11.8848C3.82525 14.8911 5.09925 21.0384 11.817 28.1104L13.5834 26.4335ZM15.8194 15.6467L16.2841 15.156L14.5178 13.4773L14.0514 13.9681L15.8194 15.6467ZM16.6514 9.04595L14.6023 6.1502L12.6116 7.55745L14.6591 10.4548L16.6514 9.04758V9.04595ZM7.66513 5.52295L5.11713 8.2107L6.88513 9.88933L9.43638 7.2032L7.66838 5.52458L7.66513 5.52295ZM14.9354 14.8066C14.6429 14.5247 14.3477 14.2458 14.0498 13.9697L14.0465 13.973L14.0416 13.9778C14.0131 14.008 13.986 14.0394 13.9604 14.0721C13.8011 14.2829 13.675 14.5169 13.5866 14.766C13.4274 15.2128 13.3429 15.8043 13.4501 16.5421C13.6614 17.9916 14.612 19.9399 17.0934 22.5546L18.8614 20.8743C16.5409 18.432 15.9689 16.9288 15.8616 16.1878C15.8096 15.8303 15.8616 15.6434 15.8828 15.5833L15.8958 15.5525C15.8825 15.5739 15.8673 15.594 15.8503 15.6126C15.8407 15.6236 15.831 15.6344 15.821 15.6451C15.821 15.6451 15.8178 15.6451 14.9354 14.8066ZM17.0934 22.5546C19.5683 25.1611 21.437 26.1832 22.8621 26.4156C23.595 26.5342 24.1881 26.4383 24.6366 26.2612C24.8851 26.1636 25.1162 26.0264 25.3208 25.8549C25.3407 25.8371 25.3603 25.8186 25.3793 25.7997L25.402 25.777C25.4058 25.7737 25.4096 25.7705 25.4134 25.7672L25.4183 25.7623L25.4199 25.7591C25.4199 25.7591 25.4231 25.7575 24.5391 24.9173C23.6551 24.0788 23.6568 24.0772 23.6568 24.0756L23.66 24.0739L23.6633 24.0691C23.666 24.0664 23.6687 24.0637 23.6714 24.0609L23.6876 24.0447C23.7067 24.0263 23.7268 24.0089 23.7478 23.9927C23.764 23.983 23.7624 23.9862 23.7413 23.9943C23.7088 24.0073 23.5625 24.0593 23.2538 24.009C22.6005 23.9017 21.19 23.3265 18.8614 20.8743L17.0934 22.5546ZM14.6023 6.1502C12.9545 3.81995 9.66063 3.42508 7.66838 5.52458L9.4315 7.2032C10.2814 6.30945 11.7796 6.37933 12.6116 7.55745L14.6023 6.1502ZM6.097 11.7532C6.06125 11.1032 6.34563 10.4548 6.88513 9.88933L5.11713 8.2107C4.24613 9.1272 3.58313 10.3996 3.66275 11.8848L6.097 11.7532ZM29.9926 32.5727C29.5393 33.0504 29.0664 33.3056 28.6049 33.3511L28.8438 35.7772C30.0576 35.6586 31.0408 35.0102 31.7606 34.2513L29.9926 32.5743V32.5727ZM16.2841 15.1576C17.8571 13.5017 17.9676 10.9115 16.6514 9.04758L14.6608 10.4548C15.3465 11.425 15.2409 12.7168 14.5178 13.4773L16.2841 15.1576ZM31.7021 26.4383C33.0363 27.207 33.2979 29.0952 32.3018 30.1433L34.0681 31.8219C36.1888 29.5892 35.5713 25.8533 32.9193 24.3258L31.7021 26.4383ZM26.1625 24.9791C26.7881 24.3193 27.7648 24.1715 28.5984 24.6508L29.8139 22.5383C28.028 21.5113 25.8164 21.8071 24.3945 23.3021L26.1625 24.9791Z" />
        </svg>
    </span>
}
export const Arrow_duotone_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.204 7.45075C10.0648 7.3089 9.87493 7.22812 9.67619 7.22614C9.47745 7.22417 9.28605 7.30115 9.14403 7.4402L4.09452 12.3902C3.95267 12.5294 3.87189 12.7192 3.86991 12.918C3.86794 13.1167 3.94492 13.3081 4.08397 13.4501L9.03396 18.4997C9.10188 18.574 9.18409 18.6339 9.27568 18.6758C9.36726 18.7178 9.46635 18.7408 9.56703 18.7436C9.66771 18.7463 9.76792 18.7288 9.86168 18.692C9.95544 18.6552 10.0408 18.5999 10.1128 18.5294C10.1847 18.4589 10.2417 18.3746 10.2803 18.2816C10.319 18.1886 10.3385 18.0888 10.3377 17.9881C10.3369 17.8874 10.3159 17.7878 10.2758 17.6954C10.2357 17.603 10.1775 17.5196 10.1045 17.4503L5.67916 12.936L10.1934 8.5107C10.3353 8.37148 10.4161 8.18165 10.418 7.9829C10.42 7.78416 10.343 7.59276 10.204 7.45075Z" />
            <path opacity="0.5" d="M14.6262 12.275C15.5792 12.2845 16.9903 12.5785 18.1777 13.4514C19.4037 14.3536 20.341 15.838 20.3187 18.0819C20.3167 18.2808 20.2358 18.4708 20.0937 18.61C19.9517 18.7493 19.7602 18.8264 19.5613 18.8244C19.3624 18.8224 19.1724 18.7415 19.0331 18.5995C18.8939 18.4574 18.8168 18.2659 18.8188 18.067C18.8362 16.3111 18.1315 15.28 17.2896 14.6606C16.409 14.0128 15.3242 13.782 14.6113 13.7749L6.42167 13.6934L5.67918 12.936L6.4366 12.1935L14.6262 12.275Z" />
        </svg>
    </span>
}
export const Call_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60976 10.8938C12.934 14.2171 13.6881 10.3724 15.8047 12.4875C17.8452 14.5275 19.018 14.9362 16.4327 17.5208C16.1088 17.781 14.0513 20.912 6.82048 13.6832C-0.411252 6.4535 2.71797 4.39387 2.97829 4.07012C5.56987 1.47837 5.97153 2.65798 8.01205 4.69794C10.1286 6.81391 6.28553 7.57051 9.60976 10.8938Z" />
            </g>
        </svg>
    </span>
}
export const Message_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60976 10.8938C12.934 14.2171 13.6881 10.3724 15.8047 12.4875C17.8452 14.5275 19.018 14.9362 16.4327 17.5208C16.1088 17.781 14.0513 20.912 6.82048 13.6832C-0.411252 6.4535 2.71797 4.39387 2.97829 4.07012C5.56987 1.47837 5.97153 2.65798 8.01205 4.69794C10.1286 6.81391 6.28553 7.57051 9.60976 10.8938Z" />
            </g>
        </svg>

    </span>
}
export const User_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path d="M9.99998 13.1448C13.6155 13.1448 16.6666 13.7323 16.6666 15.999C16.6666 18.2665 13.5955 18.8332 9.99998 18.8332C6.38529 18.8332 3.33331 18.2457 3.33331 15.979C3.33331 13.7115 6.40446 13.1448 9.99998 13.1448ZM9.99998 2.1665C12.4492 2.1665 14.4116 4.12819 14.4116 6.57571C14.4116 9.02324 12.4492 10.9858 9.99998 10.9858C7.55156 10.9858 5.58833 9.02324 5.58833 6.57571C5.58833 4.12819 7.55156 2.1665 9.99998 2.1665Z" />
            </g>
        </svg>
    </span>
}
export const Chat_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path d="M10.0167 1.6665C14.75 1.6665 18.3334 5.54732 18.3334 9.98732C18.3334 15.1367 14.1334 18.3332 10 18.3332C8.63335 18.3332 7.11669 17.966 5.90002 17.2482C5.47502 16.9895 5.11669 16.7975 4.65835 16.9478L2.97502 17.4485C2.55002 17.582 2.16669 17.2482 2.29169 16.7975L2.85002 14.9281C2.94169 14.6693 2.92502 14.3939 2.79169 14.1769C2.07502 12.8583 1.66669 11.4145 1.66669 10.0124C1.66669 5.62244 5.17502 1.6665 10.0167 1.6665ZM13.825 8.95243C13.2334 8.95243 12.7584 9.42815 12.7584 10.0207C12.7584 10.6049 13.2334 11.089 13.825 11.089C14.4167 11.089 14.8917 10.6049 14.8917 10.0207C14.8917 9.42815 14.4167 8.95243 13.825 8.95243ZM9.98335 8.95243C9.40002 8.94409 8.91669 9.42814 8.91669 10.0124C8.91669 10.6049 9.39169 11.0806 9.98335 11.089C10.575 11.089 11.05 10.6049 11.05 10.0207C11.05 9.42815 10.575 8.95243 9.98335 8.95243ZM6.14169 8.95243C5.55002 8.95243 5.07502 9.42815 5.07502 10.0207C5.07502 10.6049 5.55835 11.089 6.14169 11.089C6.73335 11.0806 7.20835 10.6049 7.20835 10.0207C7.20835 9.42815 6.73335 8.95243 6.14169 8.95243Z" />
            </g>
        </svg>
    </span>
}
export const Back_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M17.1667 10.625C17.3325 10.625 17.4914 10.5592 17.6086 10.4419C17.7259 10.3247 17.7917 10.1658 17.7917 10C17.7917 9.83424 17.7259 9.67527 17.6086 9.55806C17.4914 9.44085 17.3325 9.375 17.1667 9.375V10.625ZM17.1667 9.375H3.83337V10.625H17.1667V9.375Z" />
            <path d="M8.83337 5L3.83337 10L8.83337 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </span>
}
export const Map_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg viewBox="0 0 65 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.000244141 15C-0.000244141 6.71573 6.71548 0 14.9998 0H46.6363C56.1238 0 63.2282 8.69754 61.3344 17.9941L56.4454 41.9941C55.0222 48.9808 48.8774 54 41.7473 54H14.9998C6.71549 54 -0.000244141 47.2843 -0.000244141 39V15Z" fill="#E8DCFC" />
            <path opacity="0.5" d="M36 23L36.949 23.316C37.939 23.646 38.434 23.811 38.717 24.204C39 24.597 39 25.119 39 26.162V31.829C39 33.119 39 33.765 38.66 34.18C38.545 34.32 38.405 34.44 38.247 34.53C37.782 34.797 37.145 34.69 35.872 34.479C34.616 34.269 33.988 34.165 33.365 34.217C33.1464 34.2347 32.9293 34.2672 32.715 34.314C32.105 34.448 31.53 34.735 30.381 35.31C28.881 36.06 28.131 36.435 27.333 36.55C27.093 36.585 26.85 36.602 26.607 36.602C25.8 36.6 25.012 36.337 23.435 35.812L23.051 35.684C22.061 35.354 21.566 35.189 21.283 34.796C21 34.403 21 33.88 21 32.838V27.908C21 26.249 21 25.42 21.488 24.974C21.5735 24.8957 21.6678 24.8276 21.769 24.771C22.347 24.449 23.134 24.711 24.707 25.236" stroke="#8D50EF" stroke-width="1.5" />
            <path d="M24 22.7C24 19.552 26.686 17 30 17C33.314 17 36 19.552 36 22.7C36 25.824 34.085 29.469 31.097 30.772C30.7508 30.9223 30.3774 30.9998 30 30.9998C29.6226 30.9998 29.2492 30.9223 28.903 30.772C25.915 29.47 24 25.824 24 22.7Z" stroke="#8D50EF" stroke-width="1.5" />
            <path d="M30 25C31.1046 25 32 24.1046 32 23C32 21.8954 31.1046 21 30 21C28.8954 21 28 21.8954 28 23C28 24.1046 28.8954 25 30 25Z" stroke="#8D50EF" stroke-width="1.5" />
        </svg>
    </span>
}
export const Call_bg_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg viewBox="0 0 65 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00012207 15C-0.00012207 6.71573 6.71561 0 14.9999 0H46.6364C56.1239 0 63.2283 8.69754 61.3345 17.9941L56.4456 41.9941C55.0223 48.9808 48.8776 54 41.7474 54H14.9999C6.71561 54 -0.00012207 47.2843 -0.00012207 39V15Z" fill="#E8DCFC" />
            <path d="M30.4999 17C30.4999 17 32.8339 17.212 35.8029 20.182C38.7729 23.152 38.9849 25.485 38.9849 25.485M31.2069 20.536C31.2069 20.536 32.1969 20.818 33.6819 22.303C35.1669 23.788 35.4499 24.778 35.4499 24.778" stroke="#8D50EF" stroke-width="1.5" stroke-linecap="round" />
            <path opacity="0.5" d="M32.5559 29.5468L33.0999 30.0638L32.5559 29.5478V29.5468ZM36.0019 35.2538L35.4569 34.7368L36.0009 35.2538H36.0019ZM34.6759 35.9638L34.7499 36.7088L34.6759 35.9628V35.9638ZM32.6449 30.5428L33.0999 30.0628L32.0119 29.0298L31.5569 29.5108L32.6449 30.5428ZM34.5989 29.8608L36.5089 30.9618L37.2569 29.6608L35.3469 28.5608L34.5989 29.8608ZM36.8779 33.2408L35.4579 34.7358L36.5449 35.7698L37.9649 34.2748L36.8779 33.2408ZM34.6029 35.2158C33.1679 35.3568 29.4229 35.2368 25.3589 30.9588L24.2719 31.9908C28.7009 36.6538 32.9259 36.8898 34.7499 36.7088L34.6029 35.2158ZM25.3589 30.9588C21.4829 26.8778 20.8329 23.4348 20.7519 21.9248L19.2539 22.0058C19.3539 23.8558 20.1379 27.6388 24.2719 31.9908L25.3589 30.9588ZM26.7349 24.3208L27.0209 24.0188L25.9339 22.9858L25.6469 23.2878L26.7349 24.3208ZM27.2469 20.2588L25.9859 18.4768L24.7609 19.3428L26.0209 21.1258L27.2469 20.2598V20.2588ZM21.7169 18.0908L20.1489 19.7448L21.2369 20.7778L22.8069 19.1248L21.7189 18.0918L21.7169 18.0908ZM26.1909 23.8038C26.0109 23.6303 25.8292 23.4587 25.6459 23.2888L25.6439 23.2908L25.6409 23.2938C25.6233 23.3123 25.6066 23.3317 25.5909 23.3518C25.4929 23.4815 25.4153 23.6255 25.3609 23.7788C25.2629 24.0538 25.2109 24.4178 25.2769 24.8718C25.4069 25.7638 25.9919 26.9628 27.5189 28.5718L28.6069 27.5378C27.1789 26.0348 26.8269 25.1098 26.7609 24.6538C26.7289 24.4338 26.7609 24.3188 26.7739 24.2818L26.7819 24.2628C26.7737 24.276 26.7643 24.2883 26.7539 24.2998C26.748 24.3066 26.742 24.3132 26.7359 24.3198C26.7359 24.3198 26.7339 24.3198 26.1909 23.8038ZM27.5189 28.5718C29.0419 30.1758 30.1919 30.8048 31.0689 30.9478C31.5199 31.0208 31.8849 30.9618 32.1609 30.8528C32.3138 30.7927 32.456 30.7083 32.5819 30.6028C32.5942 30.5918 32.6062 30.5804 32.6179 30.5688L32.6319 30.5548C32.6342 30.5528 32.6366 30.5508 32.6389 30.5488L32.6419 30.5458L32.6429 30.5438C32.6429 30.5438 32.6449 30.5428 32.1009 30.0258C31.5569 29.5098 31.5579 29.5088 31.5579 29.5078L31.5599 29.5068L31.5619 29.5038C31.5636 29.5021 31.5652 29.5005 31.5669 29.4988L31.5769 29.4888C31.5886 29.4774 31.601 29.4668 31.6139 29.4568C31.6239 29.4508 31.6229 29.4528 31.6099 29.4578C31.5899 29.4658 31.4999 29.4978 31.3099 29.4668C30.9079 29.4008 30.0399 29.0468 28.6069 27.5378L27.5189 28.5718ZM25.9859 18.4768C24.9719 17.0428 22.9449 16.7998 21.7189 18.0918L22.8039 19.1248C23.3269 18.5748 24.2489 18.6178 24.7609 19.3428L25.9859 18.4768ZM20.7519 21.9248C20.7299 21.5248 20.9049 21.1258 21.2369 20.7778L20.1489 19.7448C19.6129 20.3088 19.2049 21.0918 19.2539 22.0058L20.7519 21.9248ZM35.4569 34.7368C35.1779 35.0308 34.8869 35.1878 34.6029 35.2158L34.7499 36.7088C35.4969 36.6358 36.1019 36.2368 36.5449 35.7698L35.4569 34.7378V34.7368ZM27.0209 24.0198C27.9889 23.0008 28.0569 21.4068 27.2469 20.2598L26.0219 21.1258C26.4439 21.7228 26.3789 22.5178 25.9339 22.9858L27.0209 24.0198ZM36.5089 30.9618C37.3299 31.4348 37.4909 32.5968 36.8779 33.2418L37.9649 34.2748C39.2699 32.9008 38.8899 30.6018 37.2579 29.6618L36.5089 30.9618ZM33.0999 30.0638C33.4849 29.6578 34.0859 29.5668 34.5989 29.8618L35.3469 28.5618C34.2479 27.9298 32.8869 28.1118 32.0119 29.0318L33.0999 30.0638Z" fill="#8D50EF" />
        </svg>

    </span>
}
export const Email_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg viewBox="0 0 65 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00012207 15C-0.00012207 6.71573 6.71561 0 14.9999 0H50.0001C58.2843 0 65.0001 6.71573 65.0001 15V39C65.0001 47.2843 58.2843 54 50.0001 54H14.9999C6.71559 54 -0.00012207 47.2843 -0.00012207 39V15Z" fill="#E8DCFC" />
            <path opacity="0.5" d="M30.5 37V35M34.5 37V35" stroke="#8D50EF" stroke-width="1.5" stroke-linecap="round" />
            <path d="M31 35V35.75H31.75V35H31ZM34 34.25C33.8011 34.25 33.6103 34.329 33.4697 34.4697C33.329 34.6103 33.25 34.8011 33.25 35C33.25 35.1989 33.329 35.3897 33.4697 35.5303C33.6103 35.671 33.8011 35.75 34 35.75V34.25ZM37.5 20.25C37.3011 20.25 37.1103 20.329 36.9697 20.4697C36.829 20.6103 36.75 20.8011 36.75 21C36.75 21.1989 36.829 21.3897 36.9697 21.5303C37.1103 21.671 37.3011 21.75 37.5 21.75V20.25ZM27 20.25C26.8011 20.25 26.6103 20.329 26.4697 20.4697C26.329 20.6103 26.25 20.8011 26.25 21C26.25 21.1989 26.329 21.3897 26.4697 21.5303C26.6103 21.671 26.8011 21.75 27 21.75V20.25ZM29 34.25C28.8011 34.25 28.6103 34.329 28.4697 34.4697C28.329 34.6103 28.25 34.8011 28.25 35C28.25 35.1989 28.329 35.3897 28.4697 35.5303C28.6103 35.671 28.8011 35.75 29 35.75V34.25ZM35 35.75C35.1989 35.75 35.3897 35.671 35.5303 35.5303C35.671 35.3897 35.75 35.1989 35.75 35C35.75 34.8011 35.671 34.6103 35.5303 34.4697C35.3897 34.329 35.1989 34.25 35 34.25V35.75ZM30.25 26.25V35H31.75V26.25H30.25ZM31 34.25H24.233V35.75H31V34.25ZM22.75 32.395V26.25H21.25V32.395H22.75ZM24.233 34.25C23.518 34.25 22.75 33.532 22.75 32.395H21.25C21.25 34.135 22.481 35.75 24.233 35.75V34.25ZM26.5 21.75C28.467 21.75 30.25 23.652 30.25 26.25H31.75C31.75 23.049 29.504 20.25 26.5 20.25V21.75ZM26.5 20.25C23.496 20.25 21.25 23.049 21.25 26.25H22.75C22.75 23.652 24.533 21.75 26.5 21.75V20.25ZM41.25 26.25V32.425H42.75V26.25H41.25ZM39.793 34.25H34V35.75H39.793V34.25ZM41.25 32.425C41.25 33.545 40.493 34.25 39.793 34.25V35.75C41.531 35.75 42.75 34.149 42.75 32.425H41.25ZM42.75 26.25C42.75 23.049 40.504 20.25 37.5 20.25V21.75C39.467 21.75 41.25 23.652 41.25 26.25H42.75ZM27 21.75H38V20.25H27V21.75ZM29 35.75H35V34.25H29V35.75Z" fill="#8D50EF" />
            <path d="M25 31H28" stroke="#8D50EF" stroke-width="1.5" stroke-linecap="round" />
            <path opacity="0.5" d="M36 24.8842V20.4112M36 20.4112V17.6352C36 17.3992 36.168 17.1962 36.4 17.1512L36.886 17.0582C37.4741 16.945 38.0821 16.999 38.641 17.2142L38.721 17.2442C39.275 17.4582 39.881 17.4982 40.458 17.3592C40.5226 17.3436 40.5899 17.3429 40.6548 17.3571C40.7197 17.3713 40.7805 17.4 40.8327 17.4411C40.8849 17.4822 40.927 17.5347 40.956 17.5944C40.985 17.6542 41 17.7198 41 17.7862V20.0072C41.0001 20.1225 40.9613 20.2343 40.89 20.3249C40.8187 20.4154 40.719 20.4793 40.607 20.5062L40.541 20.5222C39.9097 20.6744 39.247 20.6308 38.641 20.3972C38.0821 20.182 37.4741 20.128 36.886 20.2412L36 20.4112Z" stroke="#8D50EF" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    </span>
}
export const Menu_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13693e-06 0.994999C1.18502e-06 0.444999 0.446002 -1.70946e-06 0.995002 -1.66147e-06L9.005 -9.61213e-07C9.26889 -9.38143e-07 9.52197 0.10483 9.70857 0.291429C9.89517 0.478027 10 0.73111 10 0.995C10 1.25889 9.89517 1.51197 9.70857 1.69857C9.52197 1.88517 9.26889 1.99 9.005 1.99L0.995002 1.99C0.445003 1.99 1.08885e-06 1.545 1.13693e-06 0.994999ZM6.11959e-07 7C6.60042e-07 6.45 0.446002 6.005 0.995002 6.005L19.005 6.005C19.2689 6.005 19.522 6.10983 19.7086 6.29643C19.8952 6.48303 20 6.73611 20 7C20 7.26389 19.8952 7.51697 19.7086 7.70357C19.522 7.89017 19.2689 7.995 19.005 7.995L0.995001 7.995C0.445002 7.995 5.63964e-07 7.549 6.11959e-07 7ZM0.995001 12.01C0.73111 12.01 0.478028 12.1148 0.29143 12.3014C0.104832 12.488 1.10056e-07 12.7411 8.69857e-08 13.005C6.39156e-08 13.2689 0.104832 13.522 0.29143 13.7086C0.478027 13.8952 0.73111 14 0.995001 14L13.005 14C13.1357 14 13.2651 13.9743 13.3858 13.9243C13.5065 13.8743 13.6162 13.801 13.7086 13.7086C13.801 13.6162 13.8743 13.5065 13.9243 13.3858C13.9743 13.2651 14 13.1357 14 13.005C14 12.8743 13.9743 12.7449 13.9243 12.6242C13.8743 12.5035 13.801 12.3938 13.7086 12.3014C13.6162 12.209 13.5065 12.1357 13.3858 12.0857C13.2651 12.0357 13.1357 12.01 13.005 12.01L0.995001 12.01Z" fill="#232340" />
        </svg>
    </span>
}
export const Arrow_Icon = ({ className, onClick }: Props) => {
    return <span onClick={onClick} className={`block ${className}`}>
        <svg className="fill-current"  viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53714 20.0827L0.292152 10.9458C-0.097384 10.5612 -0.097384 9.93981 0.292152 9.5542L9.53714 0.417333C10.0995 -0.139111 11.0144 -0.139111 11.5777 0.417333C12.14 0.973776 12.14 1.87687 11.5777 2.43332L3.66913 10.2505L11.5777 18.0657C12.14 18.6231 12.14 19.5262 11.5777 20.0827C11.0144 20.6391 10.0995 20.6391 9.53714 20.0827Z"  />
        </svg>
    </span>
}



