var MetricsPaIndicatorHandler = Class.create();
MetricsPaIndicatorHandler.prototype = {
    initialize: function() {},

    /**
     * Executes a PA indicator query based on source_config.
     * Reads precomputed PA scores for performance.
     *
     * @param {Object} sourceConfig - Parsed source_config JSON
     * @param {string} vizType - The visualization type
     * @returns {Object} Normalized data envelope per viz_type
     */
    execute: function(sourceConfig, vizType) {
        var indicator = sourceConfig.indicator || '';
        var breakdown = sourceConfig.breakdown || '';
        var elements = parseInt(sourceConfig.elements, 10) || 10;
        var lookbackDays = parseInt(sourceConfig.lookback_days, 10) || 90;

        if (!indicator) {
            return { error: 'source_config.indicator is required for pa_indicator' };
        }

        // If single score without breakdown
        if (vizType === 'single_score' && !breakdown) {
            return this._getSingleScore(indicator);
        }

        // If breakdown specified, get breakdown elements for chart/table
        if (breakdown) {
            return this._getBreakdownData(indicator, breakdown, elements, vizType);
        }

        // Trend data (time series) for line_chart
        if (vizType === 'line_chart') {
            return this._getTrendData(indicator, lookbackDays);
        }

        // Default: single score
        return this._getSingleScore(indicator);
    },

    _getSingleScore: function(indicator) {
        var gr = new GlideRecord('pa_scores');
        gr.addQuery('indicator', indicator);
        gr.addNullQuery('breakdown');
        gr.orderByDesc('period_start');
        gr.setLimit(1);
        gr.query();

        var value = 0;
        if (gr.next()) {
            value = parseFloat(gr.getValue('value')) || 0;
        }

        return {
            value: value,
            trend: { direction: 'flat', delta: 0 }
        };
    },

    _getBreakdownData: function(indicator, breakdown, elements, vizType) {
        var gr = new GlideRecord('pa_scores');
        gr.addQuery('indicator', indicator);
        gr.addQuery('breakdown', breakdown);
        gr.addNotNullQuery('element');
        gr.orderByDesc('value');
        gr.setLimit(elements);
        gr.query();

        var categories = [];
        var values = [];
        while (gr.next()) {
            var label = gr.getDisplayValue('element') || gr.getValue('element') || '(unknown)';
            var val = parseFloat(gr.getValue('value')) || 0;
            categories.push(label);
            values.push(val);
        }

        if (vizType === 'table') {
            var columns = [
                { field: 'element', label: 'Element' },
                { field: 'value', label: 'Value' }
            ];
            var rows = [];
            for (var i = 0; i < categories.length; i++) {
                rows.push({ element: categories[i], value: values[i] });
            }
            return { columns: columns, rows: rows };
        }

        return {
            categories: categories,
            series: [{ name: 'Score', values: values }]
        };
    },

    _getTrendData: function(indicator, lookbackDays) {
        var startDate = new GlideDateTime();
        startDate.addDaysLocalTime(-lookbackDays);

        var gr = new GlideRecord('pa_scores');
        gr.addQuery('indicator', indicator);
        gr.addNullQuery('breakdown');
        gr.addQuery('period_start', '>=', startDate.getValue());
        gr.orderBy('period_start');
        gr.query();

        var categories = [];
        var values = [];
        while (gr.next()) {
            categories.push(gr.getValue('period_start').substring(0, 10));
            values.push(parseFloat(gr.getValue('value')) || 0);
        }

        return {
            categories: categories,
            series: [{ name: 'Trend', values: values }]
        };
    },

    type: 'MetricsPaIndicatorHandler'
};
