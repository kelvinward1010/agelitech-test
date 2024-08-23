import { createBrowserRouter, Navigate } from "react-router-dom";
import { crudUrl, layoutUrl, signinUrl } from "./urls";
import { Layout } from "@/pages/app/Layout";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import { Home } from "@/pages/home/views/Home";
import { CRUD, SignIn } from "@/pages";

interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const user = true;
    return user ? <>{children}</> : <Navigate to={layoutUrl} replace />;
};

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <Layout>
                <ErrorBoundaryPage />
            </Layout>
        ),
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
            {
                path: signinUrl,
                element: <SignIn />,
            },
            {
                path: crudUrl,
                element: (
                    <ProtectedRoute>
                        <CRUD />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
