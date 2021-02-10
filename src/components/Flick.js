import React from "react";
import { Route, Redirect} from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { GenreProvider } from "./filter/FilterProvider"
import { Nav } from "./nav/Nav"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Flick.css";

export const Flick = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("flicks_user")) {
            return (
              <>
                <GenreProvider>
                  <Nav />
                </GenreProvider>
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );