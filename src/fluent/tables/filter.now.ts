import { Table, StringColumn, IntegerColumn, BooleanColumn, ReferenceColumn, ChoiceColumn } from "@servicenow/sdk/core";

export const x_1295779_metpo_filter = Table({
  name: "x_1295779_metpo_filter",
  label: "Dashboard Filter",
  display: "label",
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
  allow_web_service_access: true,
  schema: {
    dashboard: ReferenceColumn({
      label: "Dashboard",
      mandatory: true,
      referenceTable: "x_1295779_metpo_dashboard"
    }),
    label: StringColumn({
      label: "Label",
      mandatory: true,
      maxLength: 100
    }),
    table: StringColumn({
      label: "Table",
      mandatory: true,
      maxLength: 80
    }),
    field: StringColumn({
      label: "Field",
      mandatory: true,
      maxLength: 80
    }),
    filter_type: ChoiceColumn({
      label: "Filter Type",
      mandatory: true,
      default: "choice",
      dropdown: "dropdown_without_none",
      choices: {
        choice: { label: "Choice List", sequence: 0 },
        reference: { label: "Reference Picker", sequence: 1 },
        date_range: { label: "Date Range", sequence: 2 },
        condition: { label: "Condition Builder", sequence: 3 },
        boolean: { label: "Boolean Toggle", sequence: 4 }
      }
    }),
    default_value: StringColumn({
      label: "Default Value",
      maxLength: 500
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
