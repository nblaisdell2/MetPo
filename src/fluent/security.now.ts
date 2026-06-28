import { Acl } from "@servicenow/sdk/core";
import { metricsViewerRole, metricsAdminRole } from "./workspaces/metrics-portal/list-menu.now";

// ===== Dashboard Table ACLs =====

// Dashboard: Read → viewer
Acl({
  $id: Now.ID["acl_dashboard_read"],
  type: "record",
  operation: "read",
  table: "x_1295779_metpo_dashboard",
  roles: [metricsViewerRole]
});

// Dashboard: Create → admin
Acl({
  $id: Now.ID["acl_dashboard_create"],
  type: "record",
  operation: "create",
  table: "x_1295779_metpo_dashboard",
  roles: [metricsAdminRole]
});

// Dashboard: Write → admin
Acl({
  $id: Now.ID["acl_dashboard_write"],
  type: "record",
  operation: "write",
  table: "x_1295779_metpo_dashboard",
  roles: [metricsAdminRole]
});

// Dashboard: Delete → admin
Acl({
  $id: Now.ID["acl_dashboard_delete"],
  type: "record",
  operation: "delete",
  table: "x_1295779_metpo_dashboard",
  roles: [metricsAdminRole]
});

// ===== Metric Definition Table ACLs =====

// Metric: Read → viewer
Acl({
  $id: Now.ID["acl_metric_read"],
  type: "record",
  operation: "read",
  table: "x_1295779_metpo_metric",
  roles: [metricsViewerRole]
});

// Metric: Create → admin
Acl({
  $id: Now.ID["acl_metric_create"],
  type: "record",
  operation: "create",
  table: "x_1295779_metpo_metric",
  roles: [metricsAdminRole]
});

// Metric: Write → admin
Acl({
  $id: Now.ID["acl_metric_write"],
  type: "record",
  operation: "write",
  table: "x_1295779_metpo_metric",
  roles: [metricsAdminRole]
});

// Metric: Delete → admin
Acl({
  $id: Now.ID["acl_metric_delete"],
  type: "record",
  operation: "delete",
  table: "x_1295779_metpo_metric",
  roles: [metricsAdminRole]
});

// ===== Section Table ACLs =====

Acl({
  $id: Now.ID["acl_section_read"],
  type: "record",
  operation: "read",
  table: "x_1295779_metpo_section",
  roles: [metricsViewerRole]
});

Acl({
  $id: Now.ID["acl_section_create"],
  type: "record",
  operation: "create",
  table: "x_1295779_metpo_section",
  roles: [metricsAdminRole]
});

Acl({
  $id: Now.ID["acl_section_write"],
  type: "record",
  operation: "write",
  table: "x_1295779_metpo_section",
  roles: [metricsAdminRole]
});

Acl({
  $id: Now.ID["acl_section_delete"],
  type: "record",
  operation: "delete",
  table: "x_1295779_metpo_section",
  roles: [metricsAdminRole]
});

// ===== Filter Table ACLs =====

Acl({
  $id: Now.ID["acl_filter_read"],
  type: "record",
  operation: "read",
  table: "x_1295779_metpo_filter",
  roles: [metricsViewerRole]
});

Acl({
  $id: Now.ID["acl_filter_create"],
  type: "record",
  operation: "create",
  table: "x_1295779_metpo_filter",
  roles: [metricsAdminRole]
});

Acl({
  $id: Now.ID["acl_filter_write"],
  type: "record",
  operation: "write",
  table: "x_1295779_metpo_filter",
  roles: [metricsAdminRole]
});

Acl({
  $id: Now.ID["acl_filter_delete"],
  type: "record",
  operation: "delete",
  table: "x_1295779_metpo_filter",
  roles: [metricsAdminRole]
});

// ===== REST API ACL =====
// Scripted REST API: requires viewer role
Acl({
  $id: Now.ID["acl_rest_api_execute"],
  type: "rest_endpoint",
  operation: "execute",
  name: "x_1295779_metpo.metrics",
  roles: [metricsViewerRole]
});
