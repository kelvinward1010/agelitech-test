import { Outlet } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <>
            <Outlet />
            {children}
        </>
    );
}
