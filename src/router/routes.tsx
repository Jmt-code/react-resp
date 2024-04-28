import React from "react";
import { Navigate } from "react-router-dom";
import LayoutAnt from "../components/ant-design/LayoutAnt";
import Layout from "../components/material-ui/Layout/Layout";

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
        element: <Layout><>hola</></Layout>,
        children: [
        { path: '*', element: <Navigate to="/404" /> }
        ]   
    },
    { path: '*', element: <Navigate to="/ant" /> }
];


export default routes ;
