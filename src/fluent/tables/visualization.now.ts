import { Table, StringColumn, IntegerColumn, BooleanColumn, ChoiceColumn } from "@servicenow/sdk/core";

/**
 * Parent Visualization Config table.
 * Holds shared display properties common to all D3 chart components.
 * Child tables extend this for viz-specific fields.
 */
export const x_1295779_metpo_visualization = Table({
  name: "x_1295779_metpo_visualization",
  label: "Visualization Config",
  display: "name",
  extensible: true,
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    // Identity
    name: StringColumn({
      label: "Name",
      mandatory: true,
      maxLength: 200
    }),
    viz_type: ChoiceColumn({
      label: "Visualization Type",
      mandatory: true,
      dropdown: "dropdown_without_none",
      default: "column_chart",
      choices: {
        column_chart: { label: "Column Chart", sequence: 0 },
        line_chart: { label: "Line Chart", sequence: 1 },
        pie_chart: { label: "Pie Chart", sequence: 2 },
        scatter_chart: { label: "Scatter Chart", sequence: 3 },
        heatmap: { label: "Heatmap", sequence: 4 },
        sankey: { label: "Sankey Diagram", sequence: 5 },
        treemap: { label: "Treemap", sequence: 6 },
        wordcloud: { label: "Word Cloud", sequence: 7 },
        gauge: { label: "Gauge", sequence: 8 },
        choropleth: { label: "Choropleth Map", sequence: 9 },
        network: { label: "Network Graph", sequence: 10 },
        radar: { label: "Radar Chart", sequence: 11 },
        calendar: { label: "Calendar Heatmap", sequence: 12 },
        gantt: { label: "Gantt Chart", sequence: 13 },
        boxplot: { label: "Box Plot", sequence: 14 }
      }
    }),

    // === Header & Border ===
    component_width: StringColumn({
      label: "Width",
      maxLength: 40,
      default: "100%"
    }),
    component_height: StringColumn({
      label: "Height",
      maxLength: 40,
      default: "400px"
    }),
    background_color: StringColumn({
      label: "Background Color",
      maxLength: 40,
      default: "transparent"
    }),
    border_color: StringColumn({
      label: "Border Color",
      maxLength: 40
    }),
    border_radius: StringColumn({
      label: "Border Radius",
      maxLength: 20,
      default: "0"
    }),
    border_width: StringColumn({
      label: "Border Width",
      maxLength: 20,
      default: "0"
    }),

    // === Animation ===
    animate: BooleanColumn({
      label: "Animate",
      default: true
    }),
    animation_duration: IntegerColumn({
      label: "Animation Duration (ms)",
      default: "800"
    }),
    animation_easing: StringColumn({
      label: "Animation Easing",
      maxLength: 40,
      default: "cubicOut"
    }),

    // === Display ===
    hover_highlight: BooleanColumn({
      label: "Hover Highlight",
      default: true
    }),
    color_scheme: StringColumn({
      label: "Color Scheme",
      maxLength: 255,
      default: "categorical"
    }),

    // === Legend ===
    legend_show: BooleanColumn({
      label: "Show Legend",
      default: true
    }),
    legend_position: StringColumn({
      label: "Legend Position",
      maxLength: 40,
      default: "bottom"
    }),
    legend_font_size: IntegerColumn({
      label: "Legend Font Size",
      default: "12"
    }),
    legend_interactive: BooleanColumn({
      label: "Legend Interactive",
      default: false
    }),

    // === Tooltip ===
    tooltip_show: BooleanColumn({
      label: "Show Tooltip",
      default: true
    }),

    // === Margins ===
    margin_top: IntegerColumn({
      label: "Margin Top",
      default: "20"
    }),
    margin_right: IntegerColumn({
      label: "Margin Right",
      default: "20"
    }),
    margin_bottom: IntegerColumn({
      label: "Margin Bottom",
      default: "40"
    }),
    margin_left: IntegerColumn({
      label: "Margin Left",
      default: "50"
    })
  }
});
