import { CircularProgress } from "@mui/material";
interface Props {
    className?: string;
    size?: number;
}
const Loading = ({ className, size = 24 }: Props) => {
    return (
        <div className={`flex justify-center !text-blue_deep items-center ${className}`}>
            <CircularProgress size={size} color="inherit" />
        </div>
    );
};

export default Loading;
