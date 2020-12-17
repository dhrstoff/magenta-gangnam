import React, { useState, useEffect } from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";

function Tab() {
  const [context, setContext] = useState({});

  useEffect(() => {
    microsoftTeams.getContext((context, error) => {
      setContext(context);
    });
  }, []);

  let userName = Object.keys(context).length > 0 ? context["upn"] : "";

  return (
    <div className="hello">
      <h3>Hello World!!!!</h3>
      <h1>Congratulations {userName}!!</h1>
      <h3>This is the tab you made :-)</h3>
      ;alskdjf;laksjdf
    </div>
  );
}

export default Tab;
