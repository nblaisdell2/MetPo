import { Table, StringColumn, IntegerColumn, BooleanColumn, ReferenceColumn, ChoiceColumn } from "@servicenow/sdk/core";

export const x_1295779_metpo_metric = Table({
  name: "x_1295779_metpo_metric",
  label: "Metric Definition",
  display: "title",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    section: ReferenceColumn({
      label: "Section",
      mandatory: true,
      referenceTable: "x_1295779_metpo_section"
    }),
    title: StringColumn({
      label: "Title",
      mandatory: true,
      maxLength: 200
    }),
    order: IntegerColumn({
      label: "Order",
      default: "0"
    }),
    width: ChoiceColumn({
      label: "Width",
      mandatory: true,
      default: "50",
      dropdown: "dropdown_without_none",
      choices: {
        "25": { label: "25% (3 cols)", sequence: 0 },
        "33": { label: "33% (4 cols)", sequence: 1 },
        "50": { label: "50% (6 cols)", sequence: 2 },
        "75": { label: "75% (9 cols)", sequence: 3 },
        "100": { label: "100% (12 cols)", sequence: 4 }
      }
    }),
    viz_type: ChoiceColumn({
      label: "Visualization Type",
      mandatory: true,
      default: "column_chart",
      dropdown: "dropdown_without_none",
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
    source_type: ChoiceColumn({
      label: "Source Type",
      mandatory: true,
      default: "table_aggregate",
      dropdown: "dropdown_without_none",
      choices: {
        table_aggregate: { label: "Table Aggregate", sequence: 0 },
        pa_indicator: { label: "PA Indicator", sequence: 1 },
        staged_external: { label: "Staged External", sequence: 2 },
        scripted: { label: "Scripted", sequence: 3 }
      }
    }),
    source_config: StringColumn({
      label: "Source Configuration",
      maxLength: 8000
    }),
    display_config: StringColumn({
      label: "Display Configuration",
      maxLength: 8000
    }),
    visualization: ReferenceColumn({
      label: "Visualization Config",
      referenceTable: "x_1295779_metpo_visualization"
    }),
    active: BooleanColumn({
      label: "Active",
      default: true
    })
  }
});
