var MetricsStagedExternalHandler = Class.create();
MetricsStagedExternalHandler.prototype = {
    initialize: function() {},

    /**
     * Reads pre-staged external data (e.g. from Databricks) from a ServiceNow staging table.
     * Does NOT call external APIs live per render - reads from the staged table.
     *
     * @param {Object} sourceConfig - Parsed source_config JSON
     * @param {string} vizType - The visualization type
     * @returns {Object} Normalized data envelope per viz_type
     */
    execute: function(sourceConfig, vizType) {
        var table = sourceConfig.table || '';
        var filter = sourceConfig.filter || '';
        var labelField = sourceConfig.label_field || '';
        var valueField = sourceConfig.value_field || '';

        if (!table) {
            return { error: 'source_config.table is required for staged_external' };
        }
        if (!labelField || !valueField) {
            return { error: 'source_config.label_field and value_field are required for staged_external' };
        }

        var gr = new GlideRecord(table);
        if (filter) {
            gr.addEncodedQuery(filter);
        }
        gr.query();

        var categories = [];
        var values = [];
        var rows = [];

        while (gr.next()) {
            var label = gr.getDisplayValue(labelField) || gr.getValue(labelField) || '';
            var val = parseFloat(gr.getValue(valueField)) || 0;
            categories.push(label);
            values.push(val);
            var row = {};
            row[labelField] = label;
            row[valueField] = val;
            rows.push(row);
        }

        // Return based on viz_type
        if (vizType === 'single_score') {
            // Sum all values for a single score
            var total = 0;
            for (var i = 0; i < values.length; i++) {
                total += values[i];
            }
            return {
                value: total,
                trend: { direction: 'flat', delta: 0 }
            };
        }

        if (vizType === 'table') {
            return {
                columns: [
                    { field: labelField, label: labelField },
                    { field: valueField, label: valueField }
                ],
                rows: rows
            };
        }

        // Default: chart data (column_chart, line_chart)
        return {
            categories: categories,
            series: [{ name: valueField, values: values }]
        };
    },

    type: 'MetricsStagedExternalHandler'
};
