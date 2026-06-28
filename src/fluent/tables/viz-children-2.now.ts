import { Table, StringColumn, IntegerColumn, BooleanColumn } from "@servicenow/sdk/core";

// ===== Sankey =====
export const x_1295779_metpo_viz_sankey = Table({
  name: "x_1295779_metpo_viz_sankey",
  label: "Viz: Sankey Diagram",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    node_width: IntegerColumn({ label: "Node Width", default: "20" }),
    node_padding: IntegerColumn({ label: "Node Padding", default: "10" }),
    node_alignment: StringColumn({ label: "Node Alignment", maxLength: 20, default: "justify" }),
    link_opacity: StringColumn({ label: "Link Opacity", maxLength: 10, default: "0.5" }),
    link_color_mode: StringColumn({ label: "Link Color Mode", maxLength: 20, default: "source" }),
    show_labels: BooleanColumn({ label: "Show Node Labels", default: true }),
    label_font_size: IntegerColumn({ label: "Label Font Size", default: "12" })
  }
});

// ===== Treemap =====
export const x_1295779_metpo_viz_treemap = Table({
  name: "x_1295779_metpo_viz_treemap",
  label: "Viz: Treemap",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    tile_padding: IntegerColumn({ label: "Tile Padding", default: "2" }),
    tile_border_width: IntegerColumn({ label: "Tile Border Width", default: "1" }),
    tile_border_color: StringColumn({ label: "Tile Border Color", maxLength: 40, default: "#ffffff" }),
    tile_radius: IntegerColumn({ label: "Tile Corner Radius", default: "2" }),
    show_labels: BooleanColumn({ label: "Show Labels", default: true }),
    label_font_size: IntegerColumn({ label: "Label Font Size", default: "12" }),
    tiling_method: StringColumn({ label: "Tiling Method", maxLength: 20, default: "squarify" })
  }
});

// ===== Wordcloud =====
export const x_1295779_metpo_viz_wordcloud = Table({
  name: "x_1295779_metpo_viz_wordcloud",
  label: "Viz: Word Cloud",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    font_family: StringColumn({ label: "Font Family", maxLength: 100, default: "Impact" }),
    font_weight: StringColumn({ label: "Font Weight", maxLength: 20, default: "normal" }),
    min_font_size: IntegerColumn({ label: "Minimum Font Size", default: "10" }),
    max_font_size: IntegerColumn({ label: "Maximum Font Size", default: "80" }),
    rotation_min: IntegerColumn({ label: "Rotation Min (degrees)", default: "-60" }),
    rotation_max: IntegerColumn({ label: "Rotation Max (degrees)", default: "60" }),
    rotation_steps: IntegerColumn({ label: "Rotation Steps", default: "5" }),
    spiral: StringColumn({ label: "Spiral Type", maxLength: 20, default: "archimedean" }),
    padding: IntegerColumn({ label: "Word Padding", default: "2" })
  }
});

// ===== Gauge =====
export const x_1295779_metpo_viz_gauge = Table({
  name: "x_1295779_metpo_viz_gauge",
  label: "Viz: Gauge",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    min_value: IntegerColumn({ label: "Min Value", default: "0" }),
    max_value: IntegerColumn({ label: "Max Value", default: "100" }),
    start_angle: IntegerColumn({ label: "Start Angle (degrees)", default: "-135" }),
    end_angle: IntegerColumn({ label: "End Angle (degrees)", default: "135" }),
    arc_width: IntegerColumn({ label: "Arc Width", default: "20" }),
    needle_color: StringColumn({ label: "Needle Color", maxLength: 40, default: "#374151" }),
    show_value: BooleanColumn({ label: "Show Value", default: true }),
    value_font_size: IntegerColumn({ label: "Value Font Size", default: "28" }),
    zones_config: StringColumn({ label: "Zones Config (JSON)", maxLength: 4000 }),
    units: StringColumn({ label: "Units Label", maxLength: 40 })
  }
});

// ===== Choropleth =====
export const x_1295779_metpo_viz_choropleth = Table({
  name: "x_1295779_metpo_viz_choropleth",
  label: "Viz: Choropleth Map",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    map_projection: StringColumn({ label: "Map Projection", maxLength: 40, default: "mercator" }),
    default_color: StringColumn({ label: "Default Fill Color", maxLength: 40, default: "#e5e7eb" }),
    stroke_color: StringColumn({ label: "Stroke Color", maxLength: 40, default: "#9ca3af" }),
    stroke_width: StringColumn({ label: "Stroke Width", maxLength: 10, default: "0.5" }),
    color_scale_min: StringColumn({ label: "Color Scale Min", maxLength: 40, default: "#dbeafe" }),
    color_scale_max: StringColumn({ label: "Color Scale Max", maxLength: 40, default: "#1e40af" }),
    zoomable: BooleanColumn({ label: "Enable Zoom/Pan", default: true }),
    show_labels: BooleanColumn({ label: "Show Region Labels", default: false }),
    geo_json_source: StringColumn({ label: "GeoJSON Source", maxLength: 500 })
  }
});

// ===== Network =====
export const x_1295779_metpo_viz_network = Table({
  name: "x_1295779_metpo_viz_network",
  label: "Viz: Network Graph",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    node_radius: IntegerColumn({ label: "Node Radius", default: "8" }),
    node_color: StringColumn({ label: "Default Node Color", maxLength: 40, default: "#6366f1" }),
    link_distance: IntegerColumn({ label: "Link Distance", default: "100" }),
    link_color: StringColumn({ label: "Link Color", maxLength: 40, default: "#9ca3af" }),
    link_width: IntegerColumn({ label: "Link Width", default: "1" }),
    charge_strength: IntegerColumn({ label: "Charge Strength", default: "-300" }),
    show_labels: BooleanColumn({ label: "Show Node Labels", default: true }),
    label_font_size: IntegerColumn({ label: "Label Font Size", default: "10" }),
    draggable: BooleanColumn({ label: "Draggable Nodes", default: true }),
    zoomable: BooleanColumn({ label: "Enable Zoom/Pan", default: true })
  }
});

// ===== Radar =====
export const x_1295779_metpo_viz_radar = Table({
  name: "x_1295779_metpo_viz_radar",
  label: "Viz: Radar Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    levels: IntegerColumn({ label: "Number of Levels", default: "5" }),
    max_value: IntegerColumn({ label: "Max Value", default: "100" }),
    fill_opacity: StringColumn({ label: "Fill Opacity", maxLength: 10, default: "0.25" }),
    stroke_width: IntegerColumn({ label: "Stroke Width", default: "2" }),
    point_size: IntegerColumn({ label: "Point Size", default: "4" }),
    label_offset: IntegerColumn({ label: "Label Offset", default: "15" }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "11" }),
    show_grid: BooleanColumn({ label: "Show Grid", default: true }),
    grid_shape: StringColumn({ label: "Grid Shape", maxLength: 20, default: "polygon" })
  }
});

// ===== Calendar Heatmap =====
export const x_1295779_metpo_viz_calendar = Table({
  name: "x_1295779_metpo_viz_calendar",
  label: "Viz: Calendar Heatmap",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    cell_size: IntegerColumn({ label: "Cell Size (px)", default: "14" }),
    cell_radius: IntegerColumn({ label: "Cell Corner Radius", default: "2" }),
    cell_gap: IntegerColumn({ label: "Cell Gap (px)", default: "2" }),
    week_start: IntegerColumn({ label: "Week Start (0=Sun, 1=Mon)", default: "1" }),
    month_gap: IntegerColumn({ label: "Month Gap (px)", default: "4" }),
    color_scale_min: StringColumn({ label: "Color Scale Min", maxLength: 40, default: "#ebedf0" }),
    color_scale_max: StringColumn({ label: "Color Scale Max", maxLength: 40, default: "#216e39" }),
    show_month_labels: BooleanColumn({ label: "Show Month Labels", default: true }),
    show_day_labels: BooleanColumn({ label: "Show Day Labels", default: true })
  }
});

// ===== Gantt =====
export const x_1295779_metpo_viz_gantt = Table({
  name: "x_1295779_metpo_viz_gantt",
  label: "Viz: Gantt Chart",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    bar_height: IntegerColumn({ label: "Bar Height (px)", default: "24" }),
    bar_radius: IntegerColumn({ label: "Bar Corner Radius", default: "4" }),
    row_padding: IntegerColumn({ label: "Row Padding (px)", default: "6" }),
    show_dependencies: BooleanColumn({ label: "Show Dependencies", default: true }),
    show_progress: BooleanColumn({ label: "Show Progress", default: true }),
    show_today_line: BooleanColumn({ label: "Show Today Line", default: true }),
    today_line_color: StringColumn({ label: "Today Line Color", maxLength: 40, default: "#ef4444" }),
    header_height: IntegerColumn({ label: "Header Height (px)", default: "40" }),
    time_scale: StringColumn({ label: "Time Scale", maxLength: 20, default: "day" })
  }
});

// ===== Boxplot =====
export const x_1295779_metpo_viz_boxplot = Table({
  name: "x_1295779_metpo_viz_boxplot",
  label: "Viz: Box Plot",
  extends: "x_1295779_metpo_visualization",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    box_width: StringColumn({ label: "Box Width", maxLength: 20, default: "0.6" }),
    box_fill_opacity: StringColumn({ label: "Box Fill Opacity", maxLength: 10, default: "0.7" }),
    show_outliers: BooleanColumn({ label: "Show Outliers", default: true }),
    outlier_radius: IntegerColumn({ label: "Outlier Point Radius", default: "4" }),
    whisker_style: StringColumn({ label: "Whisker Style", maxLength: 20, default: "line" }),
    show_mean: BooleanColumn({ label: "Show Mean Line", default: false }),
    horizontal: BooleanColumn({ label: "Horizontal", default: false }),
    x_axis_label: StringColumn({ label: "X-Axis Label", maxLength: 100 }),
    y_axis_label: StringColumn({ label: "Y-Axis Label", maxLength: 100 }),
    axis_font_size: IntegerColumn({ label: "Axis Font Size", default: "12" })
  }
});
