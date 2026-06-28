import { Table, StringColumn, IntegerColumn, BooleanColumn, ReferenceColumn } from "@servicenow/sdk/core";

export const x_1295779_metpo_section = Table({
  name: "x_1295779_metpo_section",
  label: "Dashboard Section",
  display: "name",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    dashboard: ReferenceColumn({
      label: "Dashboard",
      mandatory: true,
      referenceTable: "x_1295779_metpo_dashboard"
    }),
    name: StringColumn({
      label: "Name",
      mandatory: true,
      maxLength: 200
    }),
    help_text: StringColumn({
      label: "Help Text",
      maxLength: 4000
    }),
    order: IntegerColumn({
      label: "Order",
      default: "0"
    }),
    active: BooleanColumn({
      label: "Active",
      default: true
    })
  }
});
