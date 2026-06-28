import { Record } from "@servicenow/sdk/core";

/**
 * sys_choice records for the target_table field on sn_sow_interceptor_record_type_selector.
 * These register the child visualization tables as valid choices for the dropdown,
 * resolving the "blue text" / invalid value issue.
 */

export const choiceVizColumn = Record({
  $id: Now.ID["choice-target-viz-column"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_column",
    label: "Viz: Column Chart",
    language: "en",
    sequence: 100
  }
});

export const choiceVizLine = Record({
  $id: Now.ID["choice-target-viz-line"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_line",
    label: "Viz: Line Chart",
    language: "en",
    sequence: 200
  }
});

export const choiceVizPie = Record({
  $id: Now.ID["choice-target-viz-pie"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_pie",
    label: "Viz: Pie Chart",
    language: "en",
    sequence: 300
  }
});

export const choiceVizScatter = Record({
  $id: Now.ID["choice-target-viz-scatter"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_scatter",
    label: "Viz: Scatter Chart",
    language: "en",
    sequence: 400
  }
});

export const choiceVizHeatmap = Record({
  $id: Now.ID["choice-target-viz-heatmap"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_heatmap",
    label: "Viz: Heatmap",
    language: "en",
    sequence: 500
  }
});

export const choiceVizSankey = Record({
  $id: Now.ID["choice-target-viz-sankey"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_sankey",
    label: "Viz: Sankey Diagram",
    language: "en",
    sequence: 600
  }
});

export const choiceVizTreemap = Record({
  $id: Now.ID["choice-target-viz-treemap"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_treemap",
    label: "Viz: Treemap",
    language: "en",
    sequence: 700
  }
});

export const choiceVizWordcloud = Record({
  $id: Now.ID["choice-target-viz-wordcloud"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_wordcloud",
    label: "Viz: Word Cloud",
    language: "en",
    sequence: 800
  }
});

export const choiceVizGauge = Record({
  $id: Now.ID["choice-target-viz-gauge"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_gauge",
    label: "Viz: Gauge",
    language: "en",
    sequence: 900
  }
});

export const choiceVizChoropleth = Record({
  $id: Now.ID["choice-target-viz-choropleth"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_choropleth",
    label: "Viz: Choropleth Map",
    language: "en",
    sequence: 1000
  }
});

export const choiceVizNetwork = Record({
  $id: Now.ID["choice-target-viz-network"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_network",
    label: "Viz: Network Graph",
    language: "en",
    sequence: 1100
  }
});

export const choiceVizRadar = Record({
  $id: Now.ID["choice-target-viz-radar"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_radar",
    label: "Viz: Radar Chart",
    language: "en",
    sequence: 1200
  }
});

export const choiceVizCalendar = Record({
  $id: Now.ID["choice-target-viz-calendar"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_calendar",
    label: "Viz: Calendar Heatmap",
    language: "en",
    sequence: 1300
  }
});

export const choiceVizGantt = Record({
  $id: Now.ID["choice-target-viz-gantt"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_gantt",
    label: "Viz: Gantt Chart",
    language: "en",
    sequence: 1400
  }
});

export const choiceVizBoxplot = Record({
  $id: Now.ID["choice-target-viz-boxplot"],
  table: "sys_choice",
  data: {
    name: "sn_sow_interceptor_record_type_selector",
    element: "target_table",
    value: "x_1295779_metpo_viz_boxplot",
    label: "Viz: Box Plot",
    language: "en",
    sequence: 1500
  }
});
