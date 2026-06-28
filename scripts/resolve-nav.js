(function(request, response) {
    var resolver = new MetricsResolver();
    var navItems = resolver.getNavItems();

    response.setStatus(200);
    response.setBody(navItems);
})(request, response);
