import React from "react";
import { Navigate } from "react-router-dom";
import LayoutAnt from "../components/ant-design/LayoutAnt";

const routes = [
    {
        path: '/ant',
        element: <LayoutAnt />,
        children: [
        //{ path: '/', element: <Navigate to="/" /> },

        { path: '*', element: <Navigate to="/404" /> }
        ]
    },
    {
        path: '/mui',
        element: <> </>,
        children: [
        { path: '*', element: <Navigate to="/404" /> }
        ]   
    },
    { path: '*', element: <Navigate to="/ant" /> }
];


export default routes ;
