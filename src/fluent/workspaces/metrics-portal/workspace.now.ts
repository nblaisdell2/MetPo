import { Workspace, Acl } from "@servicenow/sdk/core";
import { metricsPortalListConfig } from "./list-menu.now";

// Create the Metrics Portal Workspace
export const metricsPortalWorkspace = Workspace({
  $id: Now.ID["metrics_portal_workspace"],
  title: "Metrics Portal",
  path: "metrics-portal",
  tables: [
    "x_1295779_metpo_dashboard",
    "x_1295779_metpo_section",
    "x_1295779_metpo_metric",
    "x_1295779_metpo_filter"
  ],
  listConfig: metricsPortalListConfig
});

// ACL to secure the workspace route
Acl({
  $id: Now.ID["metrics_portal_workspace_ACL"],
  localOrExisting: "Existing",
  type: "ux_route",
  operation: "read",
  roles: ["x_1295779_metpo.viewer", "x_1295779_metpo.admin"],
  table: "now",
  field: "metrics-portal.*"
});
