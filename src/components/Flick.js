import React from "react";
import { Route} from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
// import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
import "./Flick.css";

export const Flick = () => (
    <Route>
        <ApplicationViews />
    </Route>
);