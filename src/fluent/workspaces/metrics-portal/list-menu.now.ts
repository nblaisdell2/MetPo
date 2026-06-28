import { UxListMenuConfig, Applicability, Role } from "@servicenow/sdk/core";

// Define roles for the workspace
const metricsViewerRole = Role({
  $id: Now.ID["metrics_portal_viewer_role"],
  name: "x_1295779_metpo.viewer",
  containsRoles: ["canvas_user"]
});

const metricsAdminRole = Role({
  $id: Now.ID["metrics_portal_admin_role"],
  name: "x_1295779_metpo.admin",
  containsRoles: ["canvas_admin"]
});

// Define applicability
const metricsApplicability = Applicability({
  $id: Now.ID["metrics_portal_applicability"],
  name: "Metrics Portal Users",
  roles: [metricsViewerRole, metricsAdminRole]
});

// List Menu Configuration
export const metricsPortalListConfig = UxListMenuConfig({
  $id: Now.ID["metrics_portal_list_config"],
  name: "Metrics Portal List Configuration",
  description: "List Menu Configuration for Metrics Portal Workspace",
  categories: [
    {
      $id: Now.ID["dashboards_category"],
      title: "Dashboards",
      order: 10,
      lists: [
        {
          $id: Now.ID["dashboards_active"],
          title: "Active Dashboards",
          order: 10,
          condition: "active=true^EQ",
          table: "x_1295779_metpo_dashboard",
          columns: "name,key,parent,nav_group,nav_order,active",
          applicabilities: [
            {
              $id: Now.ID["dashboards_active_applicability"],
              applicability: metricsApplicability
            }
          ]
        },
        {
          $id: Now.ID["dashboards_all"],
          title: "All Dashboards",
          order: 20,
          condition: "",
          table: "x_1295779_metpo_dashboard",
          columns: "name,key,description,nav_group,nav_order,icon,active",
          applicabilities: [
            {
              $id: Now.ID["dashboards_all_applicability"],
              applicability: metricsApplicability
            }
          ]
        }
      ]
    },
    {
      $id: Now.ID["sections_category"],
      title: "Sections",
      order: 15,
      lists: [
        {
          $id: Now.ID["sections_all"],
          title: "All Sections",
          order: 10,
          condition: "",
          table: "x_1295779_metpo_section",
          columns: "name,dashboard,help_text,order,active",
          applicabilities: [
            {
              $id: Now.ID["sections_all_applicability"],
              applicability: metricsApplicability
            }
          ]
        }
      ]
    },
    {
      $id: Now.ID["filters_category"],
      title: "Filters",
      order: 25,
      lists: [
        {
          $id: Now.ID["filters_all"],
          title: "All Filters",
          order: 10,
          condition: "",
          table: "x_1295779_metpo_filter",
          columns: "label,dashboard,table,field,filter_type,order,active",
          applicabilities: [
            {
              $id: Now.ID["filters_all_applicability"],
              applicability: metricsApplicability
            }
          ]
        }
      ]
    },
    {
      $id: Now.ID["metrics_category"],
      title: "Metric Definitions",
      order: 30,
      lists: [
        {
          $id: Now.ID["metrics_active"],
          title: "Active Metrics",
          order: 10,
          condition: "active=true^EQ",
          table: "x_1295779_metpo_metric",
          columns: "title,section,viz_type,source_type,width,order,active",
          applicabilities: [
            {
              $id: Now.ID["metrics_active_applicability"],
              applicability: metricsApplicability
            }
          ]
        },
        {
          $id: Now.ID["metrics_all"],
          title: "All Metrics",
          order: 20,
          condition: "",
          table: "x_1295779_metpo_metric",
          columns: "title,section,viz_type,source_type,width,order,active",
          applicabilities: [
            {
              $id: Now.ID["metrics_all_applicability"],
              applicability: metricsApplicability
            }
          ]
        }
      ]
    }
  ]
});

export { metricsViewerRole, metricsAdminRole, metricsApplicability };
