import { RouteObject, useRoutes } from "react-router-dom";

interface RouterProps {
    routes: RouteObject[]; 
}

const Router: React.FC<RouterProps> = ({ routes }) => {
    const routing = useRoutes(routes);
    return routing;
}

export default Router;
