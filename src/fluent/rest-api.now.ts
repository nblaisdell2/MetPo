import { RestApi } from "@servicenow/sdk/core";

RestApi({
  $id: Now.ID["metrics_rest_api"],
  name: "Metrics Portal API",
  serviceId: "metrics",
  shortDescription: "Resolver API for the Metrics Portal. Provides hydrated dashboard payloads and navigation data.",
  active: true,
  produces: "application/json",
  routes: [
    {
      $id: Now.ID["metrics_resolve_dashboard_route"],
      name: "Resolve Dashboard",
      method: "GET",
      path: "/dashboard/{key}",
      shortDescription: "Loads a dashboard by key with all active metric definitions hydrated with data from their respective source handlers.",
      script: Now.include("../../scripts/resolve-dashboard.js"),
      active: true,
      authentication: true,
      parameters: [
        {
          $id: Now.ID["metrics_dashboard_key_param"],
          name: "key",
          required: true,
          shortDescription: "The unique key of the dashboard to resolve (e.g. sales-overview)"
        }
      ]
    },
    {
      $id: Now.ID["metrics_nav_route"],
      name: "Get Navigation",
      method: "GET",
      path: "/nav",
      shortDescription: "Returns active dashboards ordered by nav_order for navigation menu rendering.",
      script: Now.include("../../scripts/resolve-nav.js"),
      active: true,
      authentication: true
    }
  ]
});
