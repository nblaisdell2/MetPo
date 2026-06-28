import { ScriptInclude } from "@servicenow/sdk/core";

ScriptInclude({
  $id: Now.ID["metrics_resolver_si"],
  name: "MetricsResolver",
  description: "Orchestrates metric resolution for the Metrics Portal. Loads a dashboard by key, iterates its active metric definitions, dispatches each to the appropriate source handler, and returns a hydrated payload.",
  script: Now.include("../../scripts/MetricsResolver.js"),
  accessibleFrom: "public",
  clientCallable: false,
  active: true
});

ScriptInclude({
  $id: Now.ID["metrics_table_aggregate_handler_si"],
  name: "MetricsTableAggregateHandler",
  description: "Handles table_aggregate source type for metrics. Uses GlideAggregate to execute aggregate queries and returns normalized data envelopes suitable for column_chart, line_chart, single_score, and table visualizations.",
  script: Now.include("../../scripts/MetricsTableAggregateHandler.js"),
  accessibleFrom: "public",
  clientCallable: false,
  active: true
});

ScriptInclude({
  $id: Now.ID["metrics_pa_indicator_handler_si"],
  name: "MetricsPaIndicatorHandler",
  description: "Handles pa_indicator source type for metrics. Reads precomputed PA scores for the specified indicator, optionally with breakdown and time-series lookback.",
  script: Now.include("../../scripts/MetricsPaIndicatorHandler.js"),
  accessibleFrom: "public",
  clientCallable: false,
  active: true
});

ScriptInclude({
  $id: Now.ID["metrics_staged_external_handler_si"],
  name: "MetricsStagedExternalHandler",
  description: "Handles staged_external source type for metrics. Reads pre-imported external data (e.g. Databricks) from a ServiceNow staging table. Does NOT call external APIs live.",
  script: Now.include("../../scripts/MetricsStagedExternalHandler.js"),
  accessibleFrom: "public",
  clientCallable: false,
  active: true
});

ScriptInclude({
  $id: Now.ID["metrics_scripted_handler_si"],
  name: "MetricsScriptedHandler",
  description: "Escape hatch handler for metrics. Calls a named Script Include method that returns a ready-made data envelope for metrics that do not fit the other handlers.",
  script: Now.include("../../scripts/MetricsScriptedHandler.js"),
  accessibleFrom: "public",
  clientCallable: false,
  active: true
});
