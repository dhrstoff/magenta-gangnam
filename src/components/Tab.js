// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { useState, useEffect } from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";

function Tab() {
  const [context, setContext] = useState({});
  const [cat, setcat] = useState();

  useEffect( () => {
    microsoftTeams.getContext((context, error) => {
      setContext(context)
    });
    async function getcat() {
      const res = await fetch('https://cat-fact.herokuapp.com/facts');
      const catData = await res.json();
      if (catData) {
        setcat(catData);
      }
    }
    getcat();
  }, []);

  let userName =
      Object.keys(context).length > 0
        ? context["upn"]
        : "";

  return (
    <div className="hello">
    <h3>Hello World!!!!</h3>
    {JSON.stringify(cat)}
    <h1>Congratulations {userName}!</h1>{" "}
    <h3>This is the tab you made :-)</h3>
  </div>
  )
}

export default Tab;
