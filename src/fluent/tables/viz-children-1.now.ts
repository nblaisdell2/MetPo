import { Table, StringColumn, IntegerColumn, BooleanColumn } from "@servicenow/sdk/core";

// ===== Column Chart =====
export const x_1295779_metpo_viz_column = Table({
  name: "x_1295779_metpo_viz_column",
  label: "Viz: Column Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    bar_3d: BooleanColumn({ label: "3D Columns", default: true }),
    bar_radius: IntegerColumn({ label: "Bar Corner Radius", default: "0" }),
    bar_gap: StringColumn({ label: "Bar Gap", maxLength: 20, default: "0.2" }),
    min_bar_height: IntegerColumn({ label: "Minimum Bar Height (px)", default: "0" }),
    show_values: BooleanColumn({ label: "Show Values on Bars", default: false }),
    horizontal: BooleanColumn({ label: "Horizontal Bars", default: false }),
    stacked: BooleanColumn({ label: "Stacked", default: false }),
    grid_show: BooleanColumn({ label: "Show Grid Lines", default: true }),
    x_axis_label: StringColumn({ label: "X-Axis Label", maxLength: 100 }),
    y_axis_label: StringColumn({ label: "Y-Axis Label", maxLength: 100 }),
    y_axis_format: StringColumn({ label: "Y-Axis Format", maxLength: 40 }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "12" }),
    reference_line_value: StringColumn({ label: "Reference Line Value", maxLength: 40 }),
    reference_line_color: StringColumn({ label: "Reference Line Color", maxLength: 40, default: "#ef4444" }),
    reference_line_label: StringColumn({ label: "Reference Line Label", maxLength: 100 })
  }
});

// ===== Line Chart =====
export const x_1295779_metpo_viz_line = Table({
  name: "x_1295779_metpo_viz_line",
  label: "Viz: Line Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    line_width: IntegerColumn({ label: "Line Width (px)", default: "2" }),
    curve_type: StringColumn({ label: "Curve Type", maxLength: 40, default: "linear" }),
    point_show: BooleanColumn({ label: "Show Points", default: true }),
    point_size: IntegerColumn({ label: "Point Size", default: "4" }),
    area_fill: BooleanColumn({ label: "Area Fill", default: false }),
    area_opacity: StringColumn({ label: "Area Opacity", maxLength: 10, default: "0.25" }),
    area_fill_style: StringColumn({ label: "Area Fill Style", maxLength: 20, default: "gradient" }),
    grid_show: BooleanColumn({ label: "Show Grid Lines", default: true }),
    x_axis_label: StringColumn({ label: "X-Axis Label", maxLength: 100 }),
    y_axis_label: StringColumn({ label: "Y-Axis Label", maxLength: 100 }),
    y_axis_format: StringColumn({ label: "Y-Axis Format", maxLength: 40 }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "12" }),
    reference_line_value: StringColumn({ label: "Reference Line Value", maxLength: 40 }),
    reference_line_color: StringColumn({ label: "Reference Line Color", maxLength: 40, default: "#ef4444" })
  }
});

// ===== Pie Chart =====
export const x_1295779_metpo_viz_pie = Table({
  name: "x_1295779_metpo_viz_pie",
  label: "Viz: Pie Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    inner_radius: StringColumn({ label: "Inner Radius (donut)", maxLength: 20, default: "0" }),
    pad_angle: StringColumn({ label: "Pad Angle", maxLength: 10, default: "0.02" }),
    start_angle: IntegerColumn({ label: "Start Angle (degrees)", default: "0" }),
    sort_slices: BooleanColumn({ label: "Sort Slices by Value", default: true }),
    show_labels: BooleanColumn({ label: "Show Slice Labels", default: true }),
    label_format: StringColumn({ label: "Label Format", maxLength: 40, default: "percent" }),
    center_label: StringColumn({ label: "Center Label (donut)", maxLength: 100 }),
    center_label_font_size: IntegerColumn({ label: "Center Label Font Size", default: "22" }),
    center_label_color: StringColumn({ label: "Center Label Color", maxLength: 40, default: "#374151" }),
    stroke_width: IntegerColumn({ label: "Slice Stroke Width", default: "1" }),
    stroke_color: StringColumn({ label: "Slice Stroke Color", maxLength: 40, default: "#ffffff" })
  }
});

// ===== Scatter Chart =====
export const x_1295779_metpo_viz_scatter = Table({
  name: "x_1295779_metpo_viz_scatter",
  label: "Viz: Scatter Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    point_size: IntegerColumn({ label: "Point Size", default: "5" }),
    point_opacity: StringColumn({ label: "Point Opacity", maxLength: 10, default: "0.7" }),
    point_shape: StringColumn({ label: "Point Shape", maxLength: 20, default: "circle" }),
    show_regression: BooleanColumn({ label: "Show Regression Line", default: false }),
    regression_type: StringColumn({ label: "Regression Type", maxLength: 20, default: "linear" }),
    x_axis_label: StringColumn({ label: "X-Axis Label", maxLength: 100 }),
    y_axis_label: StringColumn({ label: "Y-Axis Label", maxLength: 100 }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "12" }),
    grid_show: BooleanColumn({ label: "Show Grid", default: true }),
    zoom_enabled: BooleanColumn({ label: "Enable Zoom", default: false })
  }
});

// ===== Heatmap =====
export const x_1295779_metpo_viz_heatmap = Table({
  name: "x_1295779_metpo_viz_heatmap",
  label: "Viz: Heatmap",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    cell_border_color: StringColumn({ label: "Cell Border Color", maxLength: 40, default: "#ffffff" }),
    cell_border_width: IntegerColumn({ label: "Cell Border Width", default: "1" }),
    cell_radius: IntegerColumn({ label: "Cell Corner Radius", default: "2" }),
    show_values: BooleanColumn({ label: "Show Values in Cells", default: true }),
    value_font_size: IntegerColumn({ label: "Value Font Size", default: "11" }),
    color_scale_min: StringColumn({ label: "Color Scale Min", maxLength: 40, default: "#f0fdf4" }),
    color_scale_max: StringColumn({ label: "Color Scale Max", maxLength: 40, default: "#166534" }),
    x_axis_label: StringColumn({ label: "X-Axis Label", maxLength: 100 }),
    y_axis_label: StringColumn({ label: "Y-Axis Label", maxLength: 100 }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "12" })
  }
});
