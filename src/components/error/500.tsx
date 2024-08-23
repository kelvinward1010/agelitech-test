import { homeUrl } from "@/routes/urls";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export function Error500() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(homeUrl);
    };

    return (
        <Result
            status={"500"}
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
                <Button onClick={handleGoHome} type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    );
}
