// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * thier choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {
  render() {
    /**
     * The content url for the tab is a required value that must be set.
     * The url value is the source url for your configured tab.
     * This allows for the addition of query string parameters based on
     * the settings selected by the user.
     */
    microsoftTeams.settings.setSettings({
      contentUrl: "https://localhost:3000/tab",
      "suggestedDisplayName": "Eelco Tab"
    });

    /**
     * After verifying that the settings for your tab are correctly
     * filled in by the user you need to set the state of the dialog
     * to be valid.  This will enable the save button in the configuration
     * dialog.
     */
    microsoftTeams.settings.setValidityState(true);

    return (
      <div>
        <h1>Do iets hiero</h1>
        <div>
          Select <b>Save</b> to add our organization's important contacts to
          this workspace.
        </div>
      </div>
    );
  }
}

export default TabConfig;
