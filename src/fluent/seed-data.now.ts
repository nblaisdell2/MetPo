import { Record } from "@servicenow/sdk/core";

// ===== Top-level Navigation Items =====

const salesNav = Record({
  $id: Now.ID["seed_nav_sales"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Sales",
    key: "sales",
    description: "Sales metrics and dashboards",
    nav_order: 10,
    nav_group: "Sales",
    icon: "chart-line",
    active: true
  }
});

const opsNav = Record({
  $id: Now.ID["seed_nav_ops"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Operations",
    key: "operations",
    description: "Operational health dashboards",
    nav_order: 20,
    nav_group: "Operations",
    icon: "activity",
    active: true
  }
});

// ===== Child Dashboards =====

const salesOverview = Record({
  $id: Now.ID["seed_dashboard_sales"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Sales Overview",
    key: "sales-overview",
    description: "Key sales metrics including policy counts and regional breakdowns.",
    parent: salesNav,
    nav_order: 10,
    nav_group: "Sales",
    icon: "chart-bar",
    active: true
  }
});

Record({
  $id: Now.ID["seed_dashboard_sales_regional"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Regional Breakdown",
    key: "sales-regional",
    description: "Sales performance by region.",
    parent: salesNav,
    nav_order: 20,
    nav_group: "Sales",
    icon: "globe",
    active: true
  }
});

const opsHealth = Record({
  $id: Now.ID["seed_dashboard_ops"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Ops Health",
    key: "ops-health",
    description: "Operational health metrics for incident management.",
    parent: opsNav,
    nav_order: 10,
    nav_group: "Operations",
    icon: "heartbeat",
    active: true
  }
});

Record({
  $id: Now.ID["seed_dashboard_ops_incidents"],
  table: "x_1295779_metpo_dashboard",
  data: {
    name: "Incident Trends",
    key: "ops-incidents",
    description: "Incident volume and trend analysis.",
    parent: opsNav,
    nav_order: 20,
    nav_group: "Operations",
    icon: "alert-triangle",
    active: true
  }
});

// ===== Filters for Sales Overview =====

Record({
  $id: Now.ID["seed_filter_sales_category"],
  table: "x_1295779_metpo_filter",
  data: {
    dashboard: salesOverview,
    label: "Category",
    table: "incident",
    field: "category",
    filter_type: "choice",
    order: 10,
    active: true
  }
});

Record({
  $id: Now.ID["seed_filter_sales_priority"],
  table: "x_1295779_metpo_filter",
  data: {
    dashboard: salesOverview,
    label: "Priority",
    table: "incident",
    field: "priority",
    filter_type: "choice",
    order: 20,
    active: true
  }
});

// ===== Sections for Sales Overview =====

const salesChartsSection = Record({
  $id: Now.ID["seed_section_sales_kpis"],
  table: "x_1295779_metpo_section",
  data: {
    dashboard: salesOverview,
    name: "Charts & Distributions",
    help_text: "Visual breakdowns of incident data across categories.",
    order: 10,
    active: true
  }
});

const salesAdvancedSection = Record({
  $id: Now.ID["seed_section_sales_detail"],
  table: "x_1295779_metpo_section",
  data: {
    dashboard: salesOverview,
    name: "Advanced Visualizations",
    help_text: "Treemaps, word clouds, and other advanced chart types.",
    order: 20,
    active: true
  }
});

// ===== Sections for Ops Health =====

const opsOverviewSection = Record({
  $id: Now.ID["seed_section_ops_overview"],
  table: "x_1295779_metpo_section",
  data: {
    dashboard: opsHealth,
    name: "Overview",
    order: 10,
    active: true
  }
});

const opsTrendsSection = Record({
  $id: Now.ID["seed_section_ops_trends"],
  table: "x_1295779_metpo_section",
  data: {
    dashboard: opsHealth,
    name: "Trends & Analysis",
    help_text: "Time-series and flow analysis for operational metrics.",
    order: 20,
    active: true
  }
});

// ===== Metrics for Sales Charts Section =====

// Column chart: Incidents by Category
Record({
  $id: Now.ID["seed_metric_sales_column"],
  table: "x_1295779_metpo_metric",
  data: {
    section: salesChartsSection,
    title: "Incidents by Category",
    order: 10,
    width: "50",
    viz_type: "column_chart",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      group_by: "category",
      order_by: "category",
      limit: 10
    }),
    display_config: JSON.stringify({ y_label: "Incidents", x_label: "Category" }),
    active: true
  }
});

// Pie chart: Incidents by Priority
Record({
  $id: Now.ID["seed_metric_sales_pie"],
  table: "x_1295779_metpo_metric",
  data: {
    section: salesChartsSection,
    title: "Incidents by Priority",
    order: 20,
    width: "50",
    viz_type: "pie_chart",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      group_by: "priority",
      limit: 5
    }),
    display_config: JSON.stringify({ show_legend: true }),
    active: true
  }
});

// Line chart: Incidents by State
Record({
  $id: Now.ID["seed_metric_sales_line"],
  table: "x_1295779_metpo_metric",
  data: {
    section: salesChartsSection,
    title: "Incidents by State",
    order: 30,
    width: "100",
    viz_type: "line_chart",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "",
      aggregate: "COUNT",
      group_by: "state",
      order_by: "state",
      limit: 10
    }),
    display_config: JSON.stringify({ y_label: "Count", x_label: "State", show_legend: true }),
    active: true
  }
});

// ===== Metrics for Sales Advanced Section =====

// Treemap: Incidents by Category > Priority (hierarchical)
Record({
  $id: Now.ID["seed_metric_sales_treemap"],
  table: "x_1295779_metpo_metric",
  data: {
    section: salesAdvancedSection,
    title: "Category / Priority Breakdown",
    order: 10,
    width: "50",
    viz_type: "treemap",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      group_by: "category",
      group_by_2: "priority",
      limit: 10
    }),
    display_config: JSON.stringify({}),
    active: true
  }
});

// Word cloud: Most common short descriptions / categories
Record({
  $id: Now.ID["seed_metric_sales_wordcloud"],
  table: "x_1295779_metpo_metric",
  data: {
    section: salesAdvancedSection,
    title: "Top Categories",
    order: 20,
    width: "50",
    viz_type: "wordcloud",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "",
      aggregate: "COUNT",
      group_by: "category",
      limit: 30
    }),
    display_config: JSON.stringify({}),
    active: true
  }
});

// ===== Metrics for Ops Overview Section =====

// Column chart: Incidents by Assignment Group
Record({
  $id: Now.ID["seed_metric_ops_chart"],
  table: "x_1295779_metpo_metric",
  data: {
    section: opsOverviewSection,
    title: "Incidents by Assignment Group",
    order: 10,
    width: "75",
    viz_type: "column_chart",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      group_by: "assignment_group",
      order_by: "assignment_group",
      limit: 8
    }),
    display_config: JSON.stringify({ y_label: "Count", x_label: "Group" }),
    active: true
  }
});

// Pie chart: P1-P4 distribution
Record({
  $id: Now.ID["seed_metric_ops_pie"],
  table: "x_1295779_metpo_metric",
  data: {
    section: opsOverviewSection,
    title: "Priority Distribution",
    order: 20,
    width: "25",
    viz_type: "pie_chart",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      group_by: "priority",
      limit: 5
    }),
    display_config: JSON.stringify({ show_legend: true }),
    active: true
  }
});

// ===== Metrics for Ops Trends Section =====

// Heatmap: Category vs State
Record({
  $id: Now.ID["seed_metric_ops_heatmap"],
  table: "x_1295779_metpo_metric",
  data: {
    section: opsTrendsSection,
    title: "Category vs State Heatmap",
    order: 10,
    width: "50",
    viz_type: "heatmap",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "",
      aggregate: "COUNT",
      group_by: "category",
      group_by_2: "state",
      limit: 10
    }),
    display_config: JSON.stringify({ x_label: "Category", y_label: "State" }),
    active: true
  }
});

// Sankey: Category → Assignment Group flow
Record({
  $id: Now.ID["seed_metric_ops_sankey"],
  table: "x_1295779_metpo_metric",
  data: {
    section: opsTrendsSection,
    title: "Category → Assignment Group Flow",
    order: 20,
    width: "50",
    viz_type: "sankey",
    source_type: "table_aggregate",
    source_config: JSON.stringify({
      table: "incident",
      filter: "active=true",
      aggregate: "COUNT",
      source_field: "category",
      target_field: "assignment_group",
      limit: 20
    }),
    display_config: JSON.stringify({}),
    active: true
  }
});
