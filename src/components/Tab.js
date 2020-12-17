// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { useState, useEffect } from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";

import Canvas from './Canvas';
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
      <Canvas />
      <h1>Hello {userName}</h1>
    </div>
  );
}

export default Tab;
