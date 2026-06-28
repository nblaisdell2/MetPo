import { Dashboard } from "@servicenow/sdk/core";
import { metricsPortalWorkspace } from "./workspace.now";

Dashboard({
  $id: Now.ID["metrics_portal_dashboard"],
  name: "Metrics Portal Dashboard",
  tabs: [
    {
      $id: Now.ID["metrics_portal_overview_tab"],
      name: "Overview",
      widgets: [
        {
          $id: Now.ID["total_dashboards_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Dashboards",
                sourceType: "table",
                tableOrViewName: "x_1295779_metpo_dashboard",
                filterQuery: "active=true",
                id: "data_source_dashboards"
              }
            ],
            headerTitle: "Active Dashboards",
            metrics: [
              {
                dataSource: "data_source_dashboards",
                id: "metric_dashboards_count",
                aggregateFunction: "COUNT",
                axisId: "primary"
              }
            ],
            sortBy: "value"
          },
          height: 14,
          width: 24,
          position: { x: 0, y: 0 }
        },
        {
          $id: Now.ID["total_metrics_widget"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Metrics",
                sourceType: "table",
                tableOrViewName: "x_1295779_metpo_metric",
                filterQuery: "active=true",
                id: "data_source_metrics"
              }
            ],
            headerTitle: "Active Metric Definitions",
            metrics: [
              {
                dataSource: "data_source_metrics",
                id: "metric_metrics_count",
                aggregateFunction: "COUNT",
                axisId: "primary"
              }
            ],
            sortBy: "value"
          },
          height: 14,
          width: 24,
          position: { x: 24, y: 0 }
        },
        {
          $id: Now.ID["metrics_by_viz_type_widget"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Metrics",
                sourceType: "table",
                tableOrViewName: "x_1295779_metpo_metric",
                filterQuery: "",
                id: "data_source_metrics_viz"
              }
            ],
            headerTitle: "Metrics by Visualization Type",
            metrics: [
              {
                dataSource: "data_source_metrics_viz",
                id: "metric_viz_count",
                aggregateFunction: "COUNT",
                axisId: "primary"
              }
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "data_source_metrics_viz",
                    groupByField: "viz_type"
                  }
                ],
                maxNumberOfGroups: 10,
                showOthers: false
              }
            ],
            sortBy: "value"
          },
          height: 14,
          width: 24,
          position: { x: 0, y: 14 }
        },
        {
          $id: Now.ID["metrics_by_source_type_widget"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Metrics",
                sourceType: "table",
                tableOrViewName: "x_1295779_metpo_metric",
                filterQuery: "",
                id: "data_source_metrics_source"
              }
            ],
            headerTitle: "Metrics by Source Type",
            metrics: [
              {
                dataSource: "data_source_metrics_source",
                id: "metric_source_count",
                aggregateFunction: "COUNT",
                axisId: "primary"
              }
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "data_source_metrics_source",
                    groupByField: "source_type"
                  }
                ],
                maxNumberOfGroups: 10,
                showOthers: false
              }
            ],
            sortBy: "value"
          },
          height: 14,
          width: 24,
          position: { x: 24, y: 14 }
        }
      ]
    }
  ],
  visibilities: [
    {
      $id: Now.ID["metrics_portal_dashboard_visibility"],
      experience: metricsPortalWorkspace
    }
  ],
  permissions: []
});
