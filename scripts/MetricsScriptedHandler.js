var MetricsScriptedHandler = Class.create();
MetricsScriptedHandler.prototype = {
    initialize: function() {},

    /**
     * Escape hatch handler: calls a named Script Include method
     * that returns a ready-made data envelope.
     *
     * @param {Object} sourceConfig - Parsed source_config JSON
     * @param {string} vizType - The visualization type
     * @returns {Object} Data envelope returned by the custom script include
     */
    execute: function(sourceConfig, vizType) {
        var scriptIncludeName = sourceConfig.script_include || '';
        var method = sourceConfig.method || 'execute';
        var params = sourceConfig.params || {};

        if (!scriptIncludeName) {
            return { error: 'source_config.script_include is required for scripted source_type' };
        }

        try {
            // Dynamically instantiate the script include
            var handler = new global[scriptIncludeName]();
            if (typeof handler[method] !== 'function') {
                return { error: 'Method "' + method + '" not found on Script Include "' + scriptIncludeName + '"' };
            }

            // Call the method with params and vizType
            var result = handler[method](params, vizType);
            return result || { error: 'No data returned from ' + scriptIncludeName + '.' + method };
        } catch (e) {
            return { error: 'Error executing scripted handler: ' + e.message };
        }
    },

    type: 'MetricsScriptedHandler'
};
