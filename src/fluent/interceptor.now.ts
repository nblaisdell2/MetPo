import { Record } from "@servicenow/sdk/core";

/**
 * Record Type Selector (Interceptor) for the Visualization Config table.
 * When a user clicks "New" on the parent x_1295779_metpo_visualization table,
 * they are presented with a choice of which visualization type to create,
 * and are redirected to the corresponding child table form.
 */

export const vizInterceptorColumn = Record({
  $id: Now.ID["viz-interceptor-column"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Column Chart",
    description: "Vertical bar chart with categorical x-axis. Supports 3D, stacked, horizontal, and reference lines.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_column",
    order: 100,
    active: true
  }
});

export const vizInterceptorLine = Record({
  $id: Now.ID["viz-interceptor-line"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Line Chart",
    description: "Connected data points over categories or time. Supports area fill, curve types, and reference lines.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_line",
    order: 200,
    active: true
  }
});

export const vizInterceptorPie = Record({
  $id: Now.ID["viz-interceptor-pie"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Pie Chart",
    description: "Proportional slices showing part-to-whole. Supports donut mode with center label.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_pie",
    order: 300,
    active: true
  }
});

export const vizInterceptorScatter = Record({
  $id: Now.ID["viz-interceptor-scatter"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Scatter Chart",
    description: "X/Y coordinate plot for correlation analysis. Supports regression lines and zoom.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_scatter",
    order: 400,
    active: true
  }
});

export const vizInterceptorHeatmap = Record({
  $id: Now.ID["viz-interceptor-heatmap"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Heatmap",
    description: "2D grid with color-coded cells showing intensity. Configurable color scales.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_heatmap",
    order: 500,
    active: true
  }
});

export const vizInterceptorSankey = Record({
  $id: Now.ID["viz-interceptor-sankey"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Sankey Diagram",
    description: "Flow diagram showing weighted relationships between nodes.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_sankey",
    order: 600,
    active: true
  }
});

export const vizInterceptorTreemap = Record({
  $id: Now.ID["viz-interceptor-treemap"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Treemap",
    description: "Nested rectangles showing hierarchical data proportionally.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_treemap",
    order: 700,
    active: true
  }
});

export const vizInterceptorWordcloud = Record({
  $id: Now.ID["viz-interceptor-wordcloud"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Word Cloud",
    description: "Words sized by frequency/value. Configurable fonts, rotation, and spiral layout.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_wordcloud",
    order: 800,
    active: true
  }
});

export const vizInterceptorGauge = Record({
  $id: Now.ID["viz-interceptor-gauge"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Gauge",
    description: "Radial gauge showing a single value against a min/max range with configurable zones.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_gauge",
    order: 900,
    active: true
  }
});

export const vizInterceptorChoropleth = Record({
  $id: Now.ID["viz-interceptor-choropleth"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Choropleth Map",
    description: "Geographic map with regions color-coded by value. Supports zoom/pan and custom projections.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_choropleth",
    order: 1000,
    active: true
  }
});

export const vizInterceptorNetwork = Record({
  $id: Now.ID["viz-interceptor-network"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Network Graph",
    description: "Force-directed graph showing nodes and links. Supports dragging, zoom, and simulation tuning.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_network",
    order: 1100,
    active: true
  }
});

export const vizInterceptorRadar = Record({
  $id: Now.ID["viz-interceptor-radar"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Radar Chart",
    description: "Spider/polar chart for comparing multiple dimensions. Configurable levels and grid shape.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_radar",
    order: 1200,
    active: true
  }
});

export const vizInterceptorCalendar = Record({
  $id: Now.ID["viz-interceptor-calendar"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Calendar Heatmap",
    description: "Day-level heatmap in a calendar layout (like GitHub contribution graph).",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_calendar",
    order: 1300,
    active: true
  }
});

export const vizInterceptorGantt = Record({
  $id: Now.ID["viz-interceptor-gantt"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Gantt Chart",
    description: "Timeline chart for project scheduling. Supports dependencies, progress, and today marker.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_gantt",
    order: 1400,
    active: true
  }
});

export const vizInterceptorBoxplot = Record({
  $id: Now.ID["viz-interceptor-boxplot"],
  table: "sn_sow_interceptor_record_type_selector",
  data: {
    title: "Box Plot",
    description: "Statistical distribution chart showing quartiles, median, and outliers.",
    applies_to: "x_1295779_metpo_visualization",
    target_table: "x_1295779_metpo_viz_boxplot",
    order: 1500,
    active: true
  }
});
