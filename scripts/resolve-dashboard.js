(function(request, response) {
    var key = request.pathParams.key;

    if (!key) {
        response.setStatus(400);
        response.setBody({ error: 'Dashboard key is required' });
        return;
    }

    // Collect filter values from query parameters
    // UI sends filters as query params: ?category=network&priority=1
    var filters = {};
    var queryParams = request.queryParams;
    if (queryParams) {
        for (var param in queryParams) {
            if (queryParams.hasOwnProperty(param) && param !== 'key') {
                // queryParams values are arrays in ServiceNow REST API
                var val = queryParams[param];
                filters[param] = Array.isArray(val) ? val[0] : val;
            }
        }
    }

    var resolver = new MetricsResolver();
    var result = resolver.resolve(key, filters);

    if (!result) {
        response.setStatus(404);
        response.setBody({ error: 'Dashboard not found or inactive: ' + key });
        return;
    }

    response.setStatus(200);
    response.setBody(result);
})(request, response);
