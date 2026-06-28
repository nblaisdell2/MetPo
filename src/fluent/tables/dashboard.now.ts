import { Table, StringColumn, IntegerColumn, BooleanColumn, ReferenceColumn } from "@servicenow/sdk/core";

export const x_1295779_metpo_dashboard = Table({
  name: "x_1295779_metpo_dashboard",
  label: "Dashboard",
  display: "name",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    name: StringColumn({
      label: "Name",
      mandatory: true,
      maxLength: 100
    }),
    key: StringColumn({
      label: "Key",
      mandatory: true,
      maxLength: 100,
      unique: true
    }),
    description: StringColumn({
      label: "Description",
      maxLength: 4000
    }),
    parent: ReferenceColumn({
      label: "Parent",
      referenceTable: "x_1295779_metpo_dashboard"
    }),
    nav_order: IntegerColumn({
      label: "Nav Order",
      default: "0"
    }),
    nav_group: StringColumn({
      label: "Nav Group",
      maxLength: 100
    }),
    icon: StringColumn({
      label: "Icon",
      maxLength: 100
    }),
    active: BooleanColumn({
      label: "Active",
      default: true
    })
  }
});
