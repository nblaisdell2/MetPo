import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '013b54769361075051d7b1dcebba1059': {
                        table: 'sys_uib_screen_test_values'
                        id: '013b54769361075051d7b1dcebba1059'
                    }
                    '0bbc1c3a9361075051d7b1dcebba108e': {
                        table: 'sys_scope_privilege'
                        id: '0bbc1c3a9361075051d7b1dcebba108e'
                    }
                    '1057447a93adc35051d7b1dcebba1005': {
                        table: 'sys_ux_app_config'
                        id: '1057447a93adc35051d7b1dcebba1005'
                    }
                    '133f7136936d075051d7b1dcebba10e0': {
                        table: 'sys_scope_privilege'
                        id: '133f7136936d075051d7b1dcebba10e0'
                    }
                    '13bbd4be9321075051d7b1dcebba108f': {
                        table: 'sys_ux_event'
                        id: '13bbd4be9321075051d7b1dcebba108f'
                    }
                    '15ef583293a1075051d7b1dcebba101c': {
                        table: 'sys_scope_privilege'
                        id: '15ef583293a1075051d7b1dcebba101c'
                    }
                    '1821dd3093fdc39051d7b1dcebba10fe': {
                        table: 'sys_ui_related_list'
                        id: '1821dd3093fdc39051d7b1dcebba10fe'
                    }
                    '2157847a93adc35051d7b1dcebba1093': {
                        table: 'sys_ux_page_property'
                        id: '2157847a93adc35051d7b1dcebba1093'
                    }
                    '2157847a93adc35051d7b1dcebba1099': {
                        table: 'sys_ux_page_property'
                        id: '2157847a93adc35051d7b1dcebba1099'
                    }
                    '3151d57093fdc39051d7b1dcebba105a': {
                        table: 'sys_ui_related_list'
                        id: '3151d57093fdc39051d7b1dcebba105a'
                    }
                    '3277c87a93adc35051d7b1dcebba1097': {
                        table: 'sys_ux_screen'
                        id: '3277c87a93adc35051d7b1dcebba1097'
                    }
                    '3e77c87a93adc35051d7b1dcebba109d': {
                        table: 'sys_uib_screen_test_values'
                        id: '3e77c87a93adc35051d7b1dcebba109d'
                    }
                    '536c9c7e9321075051d7b1dcebba104c': {
                        table: 'sys_ux_data_broker_rest'
                        id: '536c9c7e9321075051d7b1dcebba104c'
                    }
                    '5821dd3093fdc39051d7b1dcebba10ff': {
                        table: 'sys_ui_related_list_entry'
                        id: '5821dd3093fdc39051d7b1dcebba10ff'
                    }
                    '611b18f29361075051d7b1dcebba10db': {
                        table: 'sys_scope_privilege'
                        id: '611b18f29361075051d7b1dcebba10db'
                    }
                    '711bdc369361075051d7b1dcebba109e': {
                        table: 'sys_scope_privilege'
                        id: '711bdc369361075051d7b1dcebba109e'
                    }
                    '7e77c87a93adc35051d7b1dcebba1079': {
                        table: 'sys_ux_app_route'
                        id: '7e77c87a93adc35051d7b1dcebba1079'
                    }
                    '8f7ec1ad4cbe4c57b96bdd29759dc289': {
                        table: 'par_dashboard'
                        id: '8f7ec1ad4cbe4c57b96bdd29759dc289'
                    }
                    '91efd43293a1075051d7b1dcebba10ed': {
                        table: 'sys_scope_privilege'
                        id: '91efd43293a1075051d7b1dcebba10ed'
                    }
                    '9457447a93adc35051d7b1dcebba100a': {
                        table: 'sys_ux_page_registry'
                        id: '9457447a93adc35051d7b1dcebba100a'
                    }
                    acl_dashboard_create: {
                        table: 'sys_security_acl'
                        id: '98c87a01220949bbacf26595f205fe2b'
                    }
                    acl_dashboard_delete: {
                        table: 'sys_security_acl'
                        id: '1aa6c1bd564f461a858d187da204ac8d'
                    }
                    acl_dashboard_read: {
                        table: 'sys_security_acl'
                        id: '5058f85570434c91b1790c499575921b'
                    }
                    acl_dashboard_write: {
                        table: 'sys_security_acl'
                        id: '76b44dc2bd2443979f9870f3748b9741'
                    }
                    acl_filter_create: {
                        table: 'sys_security_acl'
                        id: 'ad9dc400b72747c584607d5af05a8e2a'
                    }
                    acl_filter_delete: {
                        table: 'sys_security_acl'
                        id: '564bafed7c09419da6d4d7e714ff74a8'
                    }
                    acl_filter_read: {
                        table: 'sys_security_acl'
                        id: '039c1191e5b549998576fe256679e746'
                    }
                    acl_filter_write: {
                        table: 'sys_security_acl'
                        id: '07f4ef1c849a4dd495f48ee1d7c71280'
                    }
                    acl_metric_create: {
                        table: 'sys_security_acl'
                        id: 'e6d13d632dba4160aa279f55b92493e3'
                    }
                    acl_metric_delete: {
                        table: 'sys_security_acl'
                        id: 'dda57edb3b314576a5ac03a9468a6bff'
                    }
                    acl_metric_read: {
                        table: 'sys_security_acl'
                        id: '707be79e81814565baec9fbd82416d3a'
                    }
                    acl_metric_write: {
                        table: 'sys_security_acl'
                        id: '0bbea8395bc049a78eeb59e4a76775ec'
                    }
                    acl_rest_api_execute: {
                        table: 'sys_security_acl'
                        id: 'caa595942e3b40f7896aaa563ef5cf5a'
                    }
                    acl_section_create: {
                        table: 'sys_security_acl'
                        id: '2401367efda84c04a5a6cb6d84b4aded'
                    }
                    acl_section_delete: {
                        table: 'sys_security_acl'
                        id: 'e213196bf98a449289f0fedd866d099b'
                    }
                    acl_section_read: {
                        table: 'sys_security_acl'
                        id: 'eb3c7d7f1f2d43069495ea40ef1842a4'
                    }
                    acl_section_write: {
                        table: 'sys_security_acl'
                        id: '406f43af5d9d4278a21078cd73aa002a'
                    }
                    ae77087a93adc35051d7b1dcebba1089: {
                        table: 'sys_ux_screen_type'
                        id: 'ae77087a93adc35051d7b1dcebba1089'
                    }
                    b151d57093fdc39051d7b1dcebba105b: {
                        table: 'sys_ui_related_list_entry'
                        id: 'b151d57093fdc39051d7b1dcebba105b'
                    }
                    b677c87a93adc35051d7b1dcebba107f: {
                        table: 'sys_ux_macroponent'
                        id: 'b677c87a93adc35051d7b1dcebba107f'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '343d0675d9534c52bbcbbfaebdd33558'
                    }
                    dashboards_active: {
                        table: 'sys_ux_list'
                        id: '290c904125704348a52e84f0b948f1b0'
                    }
                    dashboards_active_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'da63a3c5eb5f4a1e9198243d4e568b47'
                    }
                    dashboards_all: {
                        table: 'sys_ux_list'
                        id: '6f65b48cfdc84b3fa1bc7fc8768e95b2'
                    }
                    dashboards_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'ad282a9771304b129867758d9ed52589'
                    }
                    dashboards_category: {
                        table: 'sys_ux_list_category'
                        id: 'f17a4d5dd56b452584e8b293de6dfd4a'
                    }
                    dc21dd3093fdc39051d7b1dcebba10ff: {
                        table: 'sys_ui_related_list_entry'
                        id: 'dc21dd3093fdc39051d7b1dcebba10ff'
                    }
                    dcda5cf29361075051d7b1dcebba1091: {
                        table: 'sys_ux_data_broker_rest'
                        id: 'dcda5cf29361075051d7b1dcebba1091'
                    }
                    ee57847a93adc35051d7b1dcebba10e2: {
                        table: 'sys_security_acl'
                        id: 'ee57847a93adc35051d7b1dcebba10e2'
                    }
                    filters_all: {
                        table: 'sys_ux_list'
                        id: '3d519e70e25c4984ba369aac96064248'
                    }
                    filters_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '90279c3cc466481c94b4aa6eec995eeb'
                    }
                    filters_category: {
                        table: 'sys_ux_list_category'
                        id: '255ea92b91624a7aafaf50850d4476e0'
                    }
                    metrics_active: {
                        table: 'sys_ux_list'
                        id: '44055fb105a748eb8a2ded6b9a6c79b1'
                    }
                    metrics_active_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '6bb837d0d1b046da81cfb171f7e9e470'
                    }
                    metrics_all: {
                        table: 'sys_ux_list'
                        id: '43256402b53841478739b2dd78bd42f0'
                    }
                    metrics_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '21932f66e84f425785cbed0d7d63c0ac'
                    }
                    metrics_by_source_type_widget: {
                        table: 'par_dashboard_widget'
                        id: '24ef01dee02142f994367b4af6e7090d'
                    }
                    metrics_by_viz_type_widget: {
                        table: 'par_dashboard_widget'
                        id: 'c2cac34df97446b0a5c593cf796b9903'
                    }
                    metrics_category: {
                        table: 'sys_ux_list_category'
                        id: 'caafc5a615734c87a1c6ad899a05dcf7'
                    }
                    metrics_dashboard_key_param: {
                        table: 'sys_ws_query_parameter'
                        id: '2cc98682be1544fc93ffdfd0fc26b6dd'
                    }
                    metrics_nav_route: {
                        table: 'sys_ws_operation'
                        id: '87f5b87561b841bcb2842e3a443a40de'
                    }
                    metrics_pa_indicator_handler_si: {
                        table: 'sys_script_include'
                        id: '5a200f17004d40d290c3b962f828e874'
                    }
                    metrics_portal_applicability: {
                        table: 'sys_ux_applicability'
                        id: '4da7ccc44a1d4bba9f42befa1dc82dd2'
                    }
                    metrics_portal_dashboard: {
                        table: 'par_dashboard'
                        id: '19f5f16dca70489c990a8b28c574d4e8'
                    }
                    metrics_portal_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: 'e916bf540fd24e3596f5bad8dc7aa326'
                    }
                    metrics_portal_overview_tab: {
                        table: 'par_dashboard_tab'
                        id: 'c6c3487295a1452eaf470601204f0821'
                    }
                    metrics_portal_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '3872623bb5424a1797f92ee54b7ccc28'
                    }
                    metrics_portal_workspace_ACL: {
                        table: 'sys_security_acl'
                        id: 'eb895fe5896b48ab80da31067cb30bda'
                    }
                    metrics_portal_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: 'de88019b8a16453597554d25c6381bd6'
                    }
                    metrics_portal_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '0f1f9b4b1550463397061e497c87be1c'
                    }
                    metrics_portal_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '86c2afdee2f74afc85bd03bf5477b7f9'
                    }
                    metrics_portal_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '1cccf23866144ccc8c7b5ee649ba5b5d'
                    }
                    'metrics_portal_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '0dbb1e60459343bfaa4ea1d200e3cff9'
                    }
                    metrics_portal_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '09986a838ec148a8b024fbe18965af42'
                    }
                    metrics_portal_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: 'ae363ae4013a4ab9a488599dd8037317'
                    }
                    metrics_portal_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: 'dba33689015146bc8ea17eb4e6f2db68'
                    }
                    metrics_portal_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '7fc28b087cf2483e84939354e867f86d'
                    }
                    metrics_portal_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '1f45357a45254603b945f7c503602c88'
                    }
                    metrics_portal_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'eeccf3a5baa3400fb3a0fcdbe052efa1'
                    }
                    metrics_portal_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '792d54aa33d2489e85893b2f15456814'
                    }
                    metrics_portal_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'e643abf747ad4fbcbea20726b610ffba'
                    }
                    metrics_portal_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'fe0e0c3147ef499992f22822bc906e3f'
                    }
                    metrics_portal_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: '62694e480244431da25b70ffd3e9581c'
                    }
                    metrics_portal_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '4363332e74c4438ca4abb27b087a8bab'
                    }
                    metrics_portal_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '1939783b13df46879b1b8a9a83f47a8e'
                    }
                    'metrics_portal_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'cf7594d8d1684eea9ab48cff7df0e776'
                    }
                    metrics_portal_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: 'db98ee8aaaff4366b1e44ff0eeb1304a'
                    }
                    metrics_portal_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '4f84fc86cd084a3ab67a670a19a565a0'
                    }
                    metrics_portal_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: 'b1fb42f5b4ff4c7a92f0abb7cf9c665d'
                    }
                    'metrics_portal_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'cdfc3f9b91c54284bb1bc1ed05a1c204'
                    }
                    metrics_resolve_dashboard_route: {
                        table: 'sys_ws_operation'
                        id: '369749e8f1734ee48d3a51eef460a0ee'
                    }
                    metrics_resolver_si: {
                        table: 'sys_script_include'
                        id: 'cdfa09ae5d9b400f99467b031e87634b'
                    }
                    metrics_rest_api: {
                        table: 'sys_ws_definition'
                        id: '2af1ec8c9dff4b048e41b1cc7584113f'
                    }
                    metrics_scripted_handler_si: {
                        table: 'sys_script_include'
                        id: '21a60f18e86841cab60e0fc46dd35b62'
                    }
                    metrics_staged_external_handler_si: {
                        table: 'sys_script_include'
                        id: '2240ab7522a945c29e5cefd8bafc089b'
                    }
                    metrics_table_aggregate_handler_si: {
                        table: 'sys_script_include'
                        id: 'b2b527dc27c94bb8ac58608efcc2bb50'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a455cddf4e594ce78dc862d5f4df5cfd'
                    }
                    sections_all: {
                        table: 'sys_ux_list'
                        id: 'e6e831da166840e6accc315cb17e853d'
                    }
                    sections_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'cffc34a7a59845b39c4de86abab19576'
                    }
                    sections_category: {
                        table: 'sys_ux_list_category'
                        id: 'edfd3214164f403488edb8719c787a5a'
                    }
                    seed_dashboard_ops: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '4f6b2d06a9814cdba8d686bb21c37305'
                    }
                    seed_dashboard_ops_incidents: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '4413ad98bece4d5eac5188feda94bd5c'
                    }
                    seed_dashboard_sales: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '97d96b44b1d94ba08d0b0e868c869211'
                    }
                    seed_dashboard_sales_regional: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '0f5ab54a2a674ce8a07a0148d60acf6c'
                    }
                    seed_filter_sales_category: {
                        table: 'x_1295779_metpo_filter'
                        id: '71597b4f2a644dbfb59bce4e5a44649f'
                    }
                    seed_filter_sales_priority: {
                        table: 'x_1295779_metpo_filter'
                        id: '05c408a537f1440f8b39aa22e15c5d34'
                    }
                    seed_metric_ops_chart: {
                        table: 'x_1295779_metpo_metric'
                        id: 'd1ba371983bb45f1a97d4554b5973683'
                    }
                    seed_metric_ops_heatmap: {
                        table: 'x_1295779_metpo_metric'
                        id: '39bd83196e0b4c71ad1f6fd97f57a123'
                    }
                    seed_metric_ops_line: {
                        table: 'x_1295779_metpo_metric'
                        id: '6de5e62d616c4f158bcadc8b4907f126'
                        deleted: true
                    }
                    seed_metric_ops_p1: {
                        table: 'x_1295779_metpo_metric'
                        id: '55891838d8994f4e9cf182f804c51983'
                        deleted: true
                    }
                    seed_metric_ops_pie: {
                        table: 'x_1295779_metpo_metric'
                        id: '30079f0db4ce4a48bca81a9eaddce371'
                    }
                    seed_metric_ops_sankey: {
                        table: 'x_1295779_metpo_metric'
                        id: '47a6363b92094765bd0ce43e7dbcb6fd'
                    }
                    seed_metric_ops_state_table: {
                        table: 'x_1295779_metpo_metric'
                        id: 'df201d04b62c4098bad0b60042a367ba'
                        deleted: true
                    }
                    seed_metric_sales_column: {
                        table: 'x_1295779_metpo_metric'
                        id: '45712ccfc8a14394924d7a8f334c8fdd'
                    }
                    seed_metric_sales_line: {
                        table: 'x_1295779_metpo_metric'
                        id: 'c015282610de440281738c645325f14c'
                    }
                    seed_metric_sales_pie: {
                        table: 'x_1295779_metpo_metric'
                        id: '515a513e6ed140d39a8724bc2aa932b2'
                    }
                    seed_metric_sales_score: {
                        table: 'x_1295779_metpo_metric'
                        id: '3d2b859b10884f2f9f586404817d9fcf'
                        deleted: true
                    }
                    seed_metric_sales_table: {
                        table: 'x_1295779_metpo_metric'
                        id: '505a973cce4242b1b3ba8a00724e5cb1'
                        deleted: true
                    }
                    seed_metric_sales_treemap: {
                        table: 'x_1295779_metpo_metric'
                        id: 'f97aa8dc60ac4791b509b82f3702cb3e'
                    }
                    seed_metric_sales_wordcloud: {
                        table: 'x_1295779_metpo_metric'
                        id: '51d2b261e98e408bb83dbc9f82ca89e4'
                    }
                    seed_nav_ops: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '40f504c773864807ba99a2403eb45a09'
                    }
                    seed_nav_sales: {
                        table: 'x_1295779_metpo_dashboard'
                        id: '8df4084f07fb453e919c7f7b551e0c47'
                    }
                    seed_section_ops_overview: {
                        table: 'x_1295779_metpo_section'
                        id: '56e2c2e67bf04b2b8aa1d2b01f33bfa0'
                    }
                    seed_section_ops_trends: {
                        table: 'x_1295779_metpo_section'
                        id: 'dc22c52a08c94801986169efebb44356'
                    }
                    seed_section_sales_detail: {
                        table: 'x_1295779_metpo_section'
                        id: 'b54e34f6f8574929985d033639d9a875'
                    }
                    seed_section_sales_kpis: {
                        table: 'x_1295779_metpo_section'
                        id: 'c8035457a3594e78a5be5543da983bea'
                    }
                    total_dashboards_widget: {
                        table: 'par_dashboard_widget'
                        id: '125456a67db5458a8bd1dd55677d3287'
                    }
                    total_metrics_widget: {
                        table: 'par_dashboard_widget'
                        id: '7f165080e3fe49399264f1dd07f570fd'
                    }
                    'viz-interceptor-boxplot': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'de82e6fd10954a6086c8f031dc2e6440'
                    }
                    'viz-interceptor-calendar': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '90a5f09bf3ac432a88068e4598829154'
                    }
                    'viz-interceptor-choropleth': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'f71d7fb96de141ffaaa8fb64afadc308'
                    }
                    'viz-interceptor-column': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '46f9f70576d04cabb498ed811eba27ec'
                    }
                    'viz-interceptor-gantt': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '49f18df2e24a43abbd278a5ae65bd7c9'
                    }
                    'viz-interceptor-gauge': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'a53a443b2aa04182b36a225be1ac7f8f'
                    }
                    'viz-interceptor-heatmap': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '4135477f58e04ab8906fa5ed4061be09'
                    }
                    'viz-interceptor-line': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '3de0c8c3cbff4df5a38eebe055872543'
                    }
                    'viz-interceptor-network': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'fb0b5a8fcbf947c7ae3c44150fe10f66'
                    }
                    'viz-interceptor-pie': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '04e44fdb63164fdcab93d1a98cae4ee1'
                    }
                    'viz-interceptor-radar': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'ae7289018ec94192a06fbaa4550e1a25'
                    }
                    'viz-interceptor-sankey': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'f2aed0d874c041f996b3112c86ae80f7'
                    }
                    'viz-interceptor-scatter': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'cd5a2e6837b84aa18efea8f1fb5276ee'
                    }
                    'viz-interceptor-treemap': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: '8deda421a8984bdca04c3d0bc2457098'
                    }
                    'viz-interceptor-wordcloud': {
                        table: 'sn_sow_interceptor_record_type_selector'
                        id: 'c5788a7b019f4e1e96bb467e32a58c63'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '01133bea1de64f179ae228054a915ccb'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01db7340c7284194aede110e2fcd0612'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01ebe5ae5660441ca4652992fa8cd104'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0279d74774bf44279ec6cfeca6d235ae'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '029254ad8db940319f7b594a29367600'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_dependencies'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '035a43e096b349f7b0271a66d372491b'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '039f5a3abbd94656997f63227ea13b2e'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_border_width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03c9600451fd474ba4b857ec08efd7cf'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'zoomable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0456dce01c4e4bc8ab05144bab208079'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '054da52d74234b4297df878e016fb44b'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'value_font_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '057dd8e86ab44b6da8c4ddd512ff551c'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'choropleth'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06455484502141759b6b7fd7d30644e1'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'y_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0648785d56114cf59e5d4fd0f46767c6'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_radius'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06b673e12b6443c390a5600b5181cdb9'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'show_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0747a2d3812a412dbe137069f578e42d'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07ce5dd3fc7e45a2a524157c5817da78'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animation_easing'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '07fc57669c774195a59d09ffa87151bf'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '080ddd7f42d44b6f84f8217180ecda0c'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'inner_radius'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0824b34c5d0b426087c5ffa9591eab2a'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08c3d4342a9246649a8b45d98ae93a0b'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animation_easing'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '097ff680ecd143bf97400eea516af73e'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a4767b391064178a384e1e645818f67'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'icon'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0aa33563ff5b40b58e0f1069f9e18706'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'radar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b0de42dfc5f4e47a291f7d97ea6253e'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'gantt'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b6a14df2ed6455e83f19974c869885a'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'radar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b70edab9e6844e9b910f0710cc88cc3'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_fill_style'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ba9e9b7d9af45e4b39f06d2e0ed6400'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0bc7807448594dba922b7d2a252b05d1'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bdd562c29504418b18af1f96731c0b8'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'nav_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d24a80a5a78494296f85dbd9f096196'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'month_gap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d6f08c3b9bb411db2fa564d10d1088f'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d89a1496c7c497096123134657bca52'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'map_projection'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d93b6f0e9a54af69d8444216129bf2d'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'show_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e00b4543e914c8a8721a8b754a3027d'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'show_day_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e4d1cbc66c542018761648fa319a729'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'color_scale_max'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f01b29bf01b48daa9be291ecd2fbe11'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_alignment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f120e5cae4c4526bb6407f364a92621'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'dashboard'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f19841f3146434a9ae23276495ce0f6'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_distance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f1b2439ccbe489ca152235f1d2a3ea3'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'y_axis_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '109c6118b670473bae4dd4e5d8bd0dad'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'arc_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '10f177756d2147f78579a78382a21eaf'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '110aa19dd6604b20aa1a8965a6f4a275'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'grid_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11492b14be0a405b9d4f70433b2a0fd3'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'table'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1351597093fdc39051d7b1dcebba103f'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1351597093fdc39051d7b1dcebba104a'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '27'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '137d08ace76b427a988c27dc0d84af32'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'show_outliers'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1381e3467b4c4637b5504e8b95b9790c'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'y_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13841f9cfc3f44dfa980ae68ae918a9f'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1439993fa6784b63acdc324efbf04289'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '145e7d199c314b8a9cee0ee0db60c9c4'
                        key: {
                            dashboard: '19f5f16dca70489c990a8b28c574d4e8'
                            experience: '3872623bb5424a1797f92ee54b7ccc28'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14fd4f54fa9743bd91fd694c32d50133'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            value: 'date_range'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16d49c9acf8a468dbe3bb809818514e6'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_opacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '171b626bc2264e78b2ce5581ca2cda2a'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'component_height'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1751597093fdc39051d7b1dcebba103c'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'data_source'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1751597093fdc39051d7b1dcebba1047'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '23'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1789ddc4bca9402ca275f7ac99070adc'
                        key: {
                            name: 'x_1295779_metpo.viewer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '188741cfdb76428a98f5292c97d124e8'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18a3d4765ede4c55a8686a12ad7d6caf'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'x_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18b6baa76137437c8d982ce523177ca8'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_border_width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '194a588dad9b4913a3e613bc9ce1916a'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '195a6e01acc74edc80291ed25ef3ba9e'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_max'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19d2fda76d164bd3b6d05521523195f4'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'line_chart'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19e87edc2f124eba83a013f95bdbfef3'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a10c11629634844b2ba71c2f735a70f'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a99f7de31594cd4ba083ea6af993bd1'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_fill'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1adcb2a07d01428db53bf5c415d04299'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'stacked'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b1c2717b72745da9482cdaa2b5c5e88'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'default_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b2c82040806422db1e435648878f5d8'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b51597093fdc39051d7b1dcebba1039'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b51597093fdc39051d7b1dcebba1044'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bc92d9fc33749a29a34f045343c06a6'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'reference_line_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1c41891d26fb475bac3a69288bbedfb8'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c95d57206bd4bbf8b7f7d96690a9abd'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tiling_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cfd9705bca649fd94c95b0f361e5474'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_progress'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d2c392e30334110b720374285117928'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'treemap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ddeccd9ffce4fba83b4899e8dff5977'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'color_scale_min'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1eebecb20ced4efbbb1b8ff312a98189'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'color_scale_min'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1f51597093fdc39051d7b1dcebba1041'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_type'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '20c1c5b785c34d15b48960c7e4ffff6a'
                        key: {
                            role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                            contains: {
                                id: '59d882747bbb4182a587f289f0d979d3'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20eaadc4cee34462b4e5ef22589ca00d'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'curve_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2136303e88754d1089be76183b4db766'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'show_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2141557093fdc39051d7b1dcebba1050'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21556896924140758161832547cc29ac'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'visualization'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21851aa19b40474b8ca19d2fcd28ecaf'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21c4a0f4d5e447359f70bc0362f1f142'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21ef48cf98634af895e5ff7c757fb496'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '221af4a53e344031932ba351fb20d3fb'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22b0a8b4131e4cd28e430551f0387c65'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'heatmap'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '236600f693adc35051d7b1dcebba10d8'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '236df653ef8c4a50b9eabdd661c55334'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'line_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23a2e0a1ec27458187513f7897375935'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'display_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23c020f92e1e41e7935e453a1987e955'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'start_angle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2510b2e1216f4ad893a70fa1a5512859'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '255ebe013a0a49ada2ad449cc59f0f82'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'x_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2565d3263d39484b9683f79058ac6bf7'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'component_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25e61ef295f644b18d1596c9e4ea951b'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'box_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25fb8b9e30d44add9e0a2f4abf7d0849'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'time_scale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26b9221303c84c75a1dfd91365be4adf'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2734dd602f6446c0a831e6351352a6d5'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'charge_strength'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2737f7185b744ba4a362c61e2a652e47'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_border_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27af0f6aac024afcaca1c9fb34a18b01'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'label_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27ffb21f0cdc4f0da4d4cb954abf519c'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'label_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '282b8e13539b49d28301d7ecbba8cc78'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'x_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2941557093fdc39051d7b1dcebba1053'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'order'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2941557093fdc39051d7b1dcebba1070'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '294b8d5dd42b4295aab204468f006607'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_pie'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29651e96530d4d36913b02009d1326d1'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29c0037bbf0544d298dec32958cfe441'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_gap'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29f61182fe8b4bc8a95f94be9008487b'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'start_angle'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2af439a8a49648caba91ae9d913460da'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'wordcloud'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2b150d5fbeff4fc2bc3ff7d3d404e30b'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            value: 'reference'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b41c97799214c5cb4e36ca81e31ac8c'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'box_fill_opacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b42270b09de4ad5b2ce886c5599bfed'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_padding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b67e0a3286f475ca8fc059abf8a5f8f'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'sort_slices'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b6960571e374ab3b2dc8de679b41187'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'curve_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c0dee6453d24c8093a4b6b3d918c96e'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'y_axis_label'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2c56412221bc42a692933192b474fd18'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d41557093fdc39051d7b1dcebba106d'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'page'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2db6640a69e5441fa39a554119ed1d88'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'zoom_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e0aeeccda294c6c9b198455a766f12d'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'value_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e1dbfa6745a44c0bee8a264ac68bf58'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'geo_json_source'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2e7bb18026de4afb88811a02031139b7'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_line'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ecb5c7a297a4f2f99fa1f5ee9362a46'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'choropleth'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2ed5ece42a084c899ba2dda38604d853'
                        key: {
                            sys_security_acl: '1aa6c1bd564f461a858d187da204ac8d'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f3efc9d94e1418e9c4acb675776673f'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'nav_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f64078285ef486cb2fef1a8a68068b2'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'label_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f6d84f91afc40dab9bbfffe8ce5f64e'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'bar_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f856e1b92604302ad4bced745b0bd88'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_min'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '2fd1a19df0b844e6bacec03349b71b97'
                        key: {
                            dashboard: '19f5f16dca70489c990a8b28c574d4e8'
                            dashboard_tab: 'c6c3487295a1452eaf470601204f0821'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2feee8355b744792a4b20555ba4bbf7e'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_top'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ff4e6f015ab446eb130bbd707ae4d31'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tiling_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3092a0e9b10f441c870ea73768a1902c'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label_color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30a2773ddbb8407fa8cc1cab89a9198b'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3130b01a36bf4a289b5e6ef0ffc5dacf'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'pie_chart'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '314c3220a4594e4db59d5602813d1a0b'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            value: 'choice'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '319e55bc857149c3aebd27b667d62418'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_progress'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3226d8ce0d3249b3963b2f1668ddff86'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '325ec1b893bdc39051d7b1dcebba101f'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'component_width'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '325ec1b893bdc39051d7b1dcebba102a'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'margin_top'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32ae8b10daf1447aab25f925664ada49'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'max_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '331463b637f045949d4e95d0dee95809'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'stacked'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '332bd87609e54a97ac2706839bac1aac'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'font_family'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33f3d1befab14dad9c5790334715cc75'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3522fde5e4044a5399c5666dbb5d3b3f'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_color'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '365ec1b893bdc39051d7b1dcebba101c'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'margin_left'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '365ec1b893bdc39051d7b1dcebba1027'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'legend_font_size'
                            position: '18'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '36896ee2303641d1903d74416b102454'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '369ffc868cb646bdb3063bbe2d77e569'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'min_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36e45da122af4aaeb46ca0e55511e82a'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'color_scale_min'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '371a36aa13be4af4951a09b202625637'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_radar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3759f8f4307b4162846381307b5ca6b7'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_border_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '376648f693adc35051d7b1dcebba1077'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37ae1390b5764020b20422893f28a572'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'show_day_labels'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '385d8af139b742cd9a63cd40cf2567f4'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38e961a73293479fbcc7ed2574942050'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3a5ec1b893bdc39051d7b1dcebba1024'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'border_color'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3a5ec1b893bdc39051d7b1dcebba102f'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '30'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b1975bf70e7453eac6c077f8a34c914'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3b91e43f339c4c83b52eb2cf2e39940d'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3badee878bb1409ca6210aecc3f00120'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3bc68f1f00b9444e8326fe2ae5453d0b'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c561fedc89949a08407880ccc3cc09f'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3c59394e0da54a0c969f8806a6ea9669'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_gauge'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c7e95b7b87f4b66bb5d34a23904f608'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cbf61bb600242e290fe737332ac72ab'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'y_axis_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d1d3542f9c04ccd9164475e97af554a'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'y_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3da13efa6f3f4fef9c84b70800cc66d2'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_position'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3db2933e0c7c4de7a0de385dfa291da7'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'time_scale'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3dcb9275e0914a08938917e25463b958'
                        key: {
                            sys_security_acl: '98c87a01220949bbacf26595f205fe2b'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e5ec1b893bdc39051d7b1dcebba1021'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'color_scheme'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e5ec1b893bdc39051d7b1dcebba102c'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'component_height'
                            position: '26'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3eb0bff280c54738b6b833a43af5a2af'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animation_duration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f4987125e794e2796572f89637f31c1'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'week_start'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40217f9900074b5b82143f82d54344e2'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'x_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4079f7b16b1843ef94d170fa7e0ddc9f'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '409145cd08e14d6a972dab3359a7fdc0'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'color_scale_max'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '40cbf2629cb048bd9f7a75d1cbe755ae'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41127be18e64494da42de240168b6399'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41d216f5486f47d4968127a2568b28e8'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'nav_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41db5b29227647e58b4ac8272c5a8ec0'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_left'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41df93d054054810aef29759ae337a5b'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'color_scale_max'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42b7b684b1e4442cb1b085fb731644ac'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'units'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42cf4325fdf14e90a76609909ba8f20b'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'zoomable'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '42dd07d6ece24b91abc267b024cc04b7'
                        key: {
                            sys_security_acl: 'eb895fe5896b48ab80da31067cb30bda'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '430c23a4bd61439e8d3ba58006190d65'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'line_chart'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '434d9d61858a4e11ae3b2a655d40228a'
                        key: {
                            name: 'x_1295779_metpo.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '436f50b21db2437da0bc3d679c1ac9ee'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'stroke_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '437e9498084a4aa5a34d8e0f11704102'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_width'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '44024257717c4f09a83eb322adbd7ed6'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4470f94b408346f09f5e57ff156b75f7'
                        key: {
                            sys_security_acl: 'dda57edb3b314576a5ac03a9468a6bff'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '448fc6747bd14433890cbaf5872f6178'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                            value: 'table_aggregate'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '449df0682d134ded8323f48336a0319a'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'pie_chart'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45331cc906a04395b5cf8928d326969d'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_gap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46ee8847388846aba282508819bea799'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'link_opacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '479e5a664fa6498785a528baa4a0dc19'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'max_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48a1cf566fa94d7a8d0ebd149b714fd4'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '48a71bdd08f64714818af75172025f26'
                        key: {
                            name: 'x_1295779_metpo_section'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49004a918be74bf99cc1e1bdd1edf1ed'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_border_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4974bfd5983d4d95ae9d94ce2d6bfaf2'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a32575dce784b498d1d759cd2340046'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'y_axis_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a38c9077a414a0fb2ae948c1134afd5'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_left'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b42ce3104ac4f63abddd7dc54f4a7d1'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'spiral'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b577ca2a8934b1f84b1bca3ad5f9eb9'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b58ec9fb2cc42eb9cb708c927e5a559'
                        deleted: true
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'dashboard'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b62adc5615144ea85ddb0e29f7a75d8'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'week_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b7481bfa61643ed894139095338a48d'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_right'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c2c760d4f6246cc89f2dde4372b1386'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c96eafea2e34a5d90d5b868fcd111b8'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_radius'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d0babff500f4791b97ef7a875e01174'
                        key: {
                            sys_security_acl: 'eb895fe5896b48ab80da31067cb30bda'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d3f8c6a39fb4da88325adcd2be99145'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4d4c97e75df34b6698999c76c8dcb99b'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e3cec94205749ef8764d5db6141f093'
                        deleted: true
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'dashboard'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e5c1a839b3e4b65a27df40a8c8942e5'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f4256e2f738473382694405b137a380'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'map_projection'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51492f3a29a04b16a193bbe6bb417f5c'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51586c0e9122425f852841f10ff6f613'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'label_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52173f3fb5fd44a5b609db2bd3c972aa'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'visualization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5246a56d6570411ea420545f4a2c2798'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'label_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5308ed342047441da2a0df496552fca6'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'show_values'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5309bedd78b44b56b6d5ef0920609fdc'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_sankey'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5314938ad61f4cdf9d850c60a3a6b821'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_top'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '534f1d8a1b96459caf0dfe43f88ea5cc'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_shape'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5351597093fdc39051d7b1dcebba1041'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_config'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53a3804dc13d49e682009284ed31b364'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'icon'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5426fa5b00494d42a2ae4521cb9fcaee'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'box_fill_opacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '543bab9a4d084f84b6e9a8a7851a29c7'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'node_color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54a336c6a0f740bfa8b44b4a16eaee6d'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'key'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54bc1b00148f454ea07a5f5485c3bc0a'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '552a20d874a1495bb3a75913545318ad'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'grid_show'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5531c3e5352e45ab80d3a3f3775f6b5e'
                        key: {
                            name: 'x_1295779_metpo_filter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55bd063caff3460497d47d41c8c3a6dd'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_radius'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55e4c7c90f484ae8867d2b217f008285'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '561ad90343244229ba0852ad5867b884'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'max_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5631be3d2f2e4fae80bb1e9232c28aab'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_3d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '563314adb23d421a9a9255d52720a958'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'font_family'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '564d69d6efa24e36987e3b24a0813756'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '567b8d71bade497ca35f7d36d774af4e'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5751597093fdc39051d7b1dcebba103e'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'visualization_type'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5751597093fdc39051d7b1dcebba1049'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'visualization'
                            position: '26'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5873b85ebf4f4f23add975ace3228933'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'stroke_width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59196001f03e45c3bd804f3aaa0228e3'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animation_duration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a1818a35b034b96a315904e85822c6f'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'color_scale_min'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5b51597093fdc39051d7b1dcebba103b'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'config'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5b51597093fdc39051d7b1dcebba1046'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'display_config'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5bc8c35747324c359fe57c6fe775c32f'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'help_text'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5bed333e7030429ba73d2048239534e0'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_interactive'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c41e139ec7a4036aee18c18d2d5dee4'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'network'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d4a6d487c974af18618907ce5396d6b'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_opacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d60637bdbd544baba04f6857d5a08eb'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'x_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d906f6fbfa349929e2606e53b11ac5e'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'row_padding'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5dff18f90bac48108bada2a754f571bf'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'node_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e23ea2cd2d24be6b4d251dfa155df0d'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'show_labels'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e3775ef885f4fd29338ba076eedaef0'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'needle_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e5b0fa1951d4ce9866d9583e4d54fc9'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e9c3102522a4943b2cf33595fee5378'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'line_width'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5eb7b39c835b4c21b891f93463fa513a'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f51597093fdc39051d7b1dcebba1038'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'aggregation'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f51597093fdc39051d7b1dcebba1043'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'viz_type'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f5c3668ad6c4e11ae83fe2a3abc9c37'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'column_chart'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ff11ff23d4e4618a58ef428c6b03531'
                        key: {
                            sys_security_acl: '564bafed7c09419da6d4d7e714ff74a8'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6042bae3b97e4201bb678fc5bb311d91'
                        key: {
                            sys_security_acl: 'eb3c7d7f1f2d43069495ea40ef1842a4'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6141557093fdc39051d7b1dcebba106d'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61b7c42b38b64aa09fe40efc2c952972'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            value: '100'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6224f8a5ef9b4f6db3d4faace4a0f35c'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_border_color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '629e51579576455e8522dc617137c46f'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'dashboard'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62e2b17c09d34a249ff6c5aff0f77baf'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'point_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6388a92e814646d89c7853a9fda0b03c'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65317f2480754a9790fc84668e75dbb4'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_padding'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '654195f893bdc39051d7b1dcebba10f7'
                        key: {
                            name: 'x_1295779_metpo_section'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '655a16cee8534aa19a093068c0e446a6'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'scatter_chart'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65628d5f2fcc4b1aa1e2835683a58bfd'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'color_scheme'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66c4bf75ca6142e3af2fbd4f883acc6c'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '672e27c6f65f4c08adb8f1de2b72e4d6'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6833e486c68a4f6aba9c3b0840a5f948'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'network'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68440f5d2c754b4c82186c148cbc9f21'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            value: '75'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68591da5a2c44f82b6b0610b581b7360'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'stroke_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '689cf3b2fdcc432faae7ae077b1dc597'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'show_values'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68b13ba1038d4b1d81dd7afe04858eb1'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_border_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68f451e699444aaeabc68cec0a03845f'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68f5417712854d3494df6e79a4a61597'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'node_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ad349a3d8fc42909ab318769918c77e'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ae4af995f5f48eca7da43b9361692f6'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'show_month_labels'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b0ee4b03ce64dd29bd2d825d41b30ae'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'value_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b9e2270b33441018dc4ab8358d52f7d'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'color_scale_max'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bbf9d7f27a243839a1583446fa908a9'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c5920f6a2c644a191efe8462dd7ac38'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c914914009349c2a2d47a3c0f1aeb24'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6caec400577f4930a261f5580ba5c671'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'padding'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cc328c2fc344f2a87c457dd3eeb6a83'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'reference_line_color'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d41557093fdc39051d7b1dcebba1052'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d41557093fdc39051d7b1dcebba106f'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d898a43acef4f5d9aa31d5a91ee7b90'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e23fd4f710d4b7cbbacb090d01862b5'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            value: '33'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e862f8f99ea4f1f91a61f465b619f8a'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f57d8aaa8084a01b6b17646944906e8'
                        key: {
                            sys_security_acl: 'caa595942e3b40f7896aaa563ef5cf5a'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fe16835c0b64b5bb71b2b91844a9ace'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7012a1f3c0d24f6ea0596f9b9851be77'
                        key: {
                            sys_security_acl: '07f4ef1c849a4dd495f48ee1d7c71280'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '70641063f86442a4bd36a28e305df973'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '711e55d8f1a24588840f7b254cdfb458'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'show_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '715b331e65da461a9978096da177b661'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_interactive'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '717bef98f9b74bcc9e0bb81a997c02ca'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'display_config'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7246c97ef8a74ec99235bc14d5f208e3'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                            value: 'staged_external'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '724770b1fa034429aea666938297293b'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'draggable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '725ec1b893bdc39051d7b1dcebba1021'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '725ec1b893bdc39051d7b1dcebba102c'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '25'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '736648f693adc35051d7b1dcebba1074'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'nav_group'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7375bfcef5234ace92c8c6afc66adba6'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'padding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '739aeb68c6224524ab6afd11d470141b'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'spiral'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73fd2fa0c4c64902b3c13b5b0fd6189d'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7440fa2297454e8983bd0c66b72978b3'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'stroke_width'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75049441dc24433181b885aad1b33dd8'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'arc_width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75c80f58ea0d4ceea41f9e9ec52d5248'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'min_bar_height'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '761c1d22d85748c38719bcd506659658'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_shape'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76403fb7c2f94d81b84e9b5b8e73352a'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            value: 'boolean'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '765ec1b893bdc39051d7b1dcebba101e'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '765ec1b893bdc39051d7b1dcebba1029'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'border_width'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '767f2f12d6e74a149d15d51aae931553'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'show_values'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '772c1943c7174774967f4476a2a636e6'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'today_line_color'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '776648f693adc35051d7b1dcebba1079'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'key'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77c86bd367224158a9e9e472e171dd13'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'horizontal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '780748dfe6da41bf8be3574a4a819bda'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'color_scale_min'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78b5dcc3d81a4b30b4494c4730b63f81'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'link_color_mode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7934c1303d104915965db5b0fcffcf3d'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'stroke_width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7941557093fdc39051d7b1dcebba1072'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '795571808da44e8c927d2ea998771a1c'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79a67206f9224c12b283acd30736a934'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'section'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79e7c4be12c1454c8bae061f87106e10'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'horizontal'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7a09c19f90454cd89c7caec2b1d004b4'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7a10b3204c054ad38d06ac5c33fd35bb'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a26e05ba59940a0a0a1efcf171af031'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'show_labels'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7a35e36f889741bca54a1b2f878fe3a7'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a5ec1b893bdc39051d7b1dcebba101b'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'animation_easing'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a5ec1b893bdc39051d7b1dcebba1026'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ad754ffde094ef6a805b99cda682412'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'outlier_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7afc13b5cf824aba90ddb3b57f52c4b5'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'label_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b093d5730b74197bd5a073ff37ae95f'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'show_mean'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b6648f693adc35051d7b1dcebba1076'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7bf61288bb2f4f12806f5da8c309737c'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cdfa399ff2748b8a92313eb3e46cab5'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_boxplot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7cea697187d2462e8a726f533b8c55fc'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'min_bar_height'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7d81ca33797e4740b1818520cdc01195'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e42491dfbc54129b36ed68f7eb0d497'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'end_angle'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e5ec1b893bdc39051d7b1dcebba100d'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e5ec1b893bdc39051d7b1dcebba1023'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'margin_bottom'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e5ec1b893bdc39051d7b1dcebba102e'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'hover_highlight'
                            position: '29'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e7ee2d9bd7740ec8b9e38153f77195b'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'regression_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e92abd66a014b3f89299ff3230d28d0'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7eba62daf8b34fe4a630cfbcf376b517'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'inner_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8117e008cd224b40a84d120dddca205f'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'x_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8124f7604e0645d7ab6f1f39a0553860'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'show_labels'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '812cacbc558d4e5aae2b531e155aaa8d'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'charge_strength'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '81385073113c416b8f01ebd8467900ad'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '816e7a5c2da543c2813ea521384c4f08'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81fb1be197af471aadfac7aefed5ce07'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'y_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82a8c0279fd64fb78d8cdb46a155fed0'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83b2e3648ecc4a74b8f0ffb20632aadb'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8415ad35490646e19c5cee619c1107e2'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84f8d4d02e8e4fbdb2b35bca07f00982'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'x_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8538db194e1f43128f3f0bf99bb9f8c6'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'draggable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85ad41c710f54a8f8408caee3ffe3d33'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'units'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85df8d8f12714b3c8201db63d3e1ef37'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'value_font_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8638c5d2466b4182b82eab1301239305'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'wordcloud'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '869ea013d73644e284ab71b5e5e9414a'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '887c22c90ddd4e6e89e115041a8be528'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'y_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '894b862e53f046d58f9f0da43b6334c4'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89705e43d7bc493dbb9aefb502f24984'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'border_radius'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '899976de00a3432dbfab8221b879252b'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89f645000c4444369df99708d2344292'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'point_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a5a017ce72d4491b72b42ba7b467706'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'gantt'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8a7d7aaa061f4809b9ab3264decc20d7'
                        key: {
                            sys_security_acl: '5058f85570434c91b1790c499575921b'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8adc9236eae34cb78483e16d548fc0b4'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'x_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b4dde3f1a084ba684a1e208bfecd7e4'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'point_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b543f79bac1487c9a3242932bcac31a'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c75d4c82964441e9cadebf51ca9735f'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8cf9a056bbea49e288c5e077a67752c3'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'column_chart'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d1a74361ae54c8d96a1362ba58b598f'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'stroke_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d24699645ba4f23b32e17e8283f94f1'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e29e5a96ed049fda262555b09a294fe'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'nav_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e62653c866b440e9edcee1d8e777e4b'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'scatter_chart'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e6da12f1daa4ed6b0c5e7a9bd15b1cf'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'zones_config'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8f254165c3d54ad187446bfde64eb59d'
                        key: {
                            sys_security_acl: 'e213196bf98a449289f0fedd866d099b'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f542b6086cc40338ab4cc6e52db1eaf'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_steps'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fb9b44b94e34478b564b32f959980df'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'font_weight'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fdbc8084ad64e61bf477b7055af2183'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_steps'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '911471f9c6834496bc3f1364dd2b5a32'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'link_color_mode'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '912b088de3eb4ba8a45b75cbcfd37951'
                        deleted: true
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91964f5d6bdf4708a16763634ce1e474'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91e4e44e0d86488aa064be84efc0ba7c'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'levels'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9351597093fdc39051d7b1dcebba1038'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'order'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9351597093fdc39051d7b1dcebba1043'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93d3e21d00a5470fbb40fc39797a6caa'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'header_height'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9406bf065307430ba621fb92734f9cad'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_3d'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '952b559fd3ac41d2a2b7990436981121'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_choropleth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '952c1283c0d746d591bd33c54f14dc72'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            value: '50'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '956d7da0664e48c892be1ec18a7667de'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'header_height'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9580601b9a8e4030afbf18181978ad3e'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_gantt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9593e8aaca3a4e509b2683731a3cfe1f'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'show_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '961f1a39a62946d09b024149011ac5ea'
                        key: {
                            sys_security_acl: '76b44dc2bd2443979f9870f3748b9741'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96a05fc115a040f7a731b7bf230d4809'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96c930008acb4e819b0bb0fa866efdce'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'dashboard'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '973e41dae34249478f41db4e80baa35d'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9751597093fdc39051d7b1dcebba1040'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'group_by'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97ccd663ba214246ae6f9d38a9973bc0'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98316bf6c16545339013c4bba40d7205'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a68f7ed7dac4340b76b7efbdf3e7673'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'gauge'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a708bb34a0e4a7c963761c394443e79'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_wordcloud'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9b2bcb2b8b0e40019eea420066ed2fc8'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b51597093fdc39051d7b1dcebba103d'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'conditions'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b51597093fdc39051d7b1dcebba1048'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '25'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b61b0547726458bb6bacbd35c4b0f29'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'show_values'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c2677503be249d081e46a63d1fac0f2'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'calendar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c98dd2871c740a7a7dc17233d899fad'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_bottom'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9cad50427a3e46968b00c819c41b5ef4'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9de1a3e1fd2646c38fb354ac8f661347'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'sankey'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9f01868f9f1f45629ee0eda8e6b83bb1'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'treemap'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f51597093fdc39051d7b1dcebba103a'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f51597093fdc39051d7b1dcebba1045'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f6ca30d4f454097a985dc3d72ec70f3'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'tooltip_show'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9fb97a8804bd4a13a1ddcfdf77b65969'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9fe43471a1b04b838c3f3d7fee7c33a5'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_distance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a06477b899b44515ae539cf7a4462bd2'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a13e1f133cf042b3aa8f890fe97ec0b7'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'horizontal'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a141557093fdc39051d7b1dcebba1052'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a141557093fdc39051d7b1dcebba106f'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'help_text'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a15c04bddd73457683f95f278eaac321'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'node_radius'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a15d6002737041faa75ba306efa1d71a'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'levels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1dacee32d4d4da5949c136ae7563ef8'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2ac45bd45304fe7a558e9fda2abcbf4'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_right'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2c2ecf69f1e4f70b9e623836fa0a263'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a312f557bf7540108eb34e1038015edf'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3922018f71d478b87ba5e112c80ec88'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5458e1803794c80a02b068db6bd2a62'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5e2eb4e1d404db2be1fdebcfeab0e37'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'pad_angle'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a657c47a93adc35051d7b1dcebba1040'
                        key: {
                            sys_security_acl: 'ee57847a93adc35051d7b1dcebba10e2'
                            sys_user_role: {
                                id: '8536f54bc713330072b211d4d8c26080'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a66ca59fa62347adabec1c3a4822e255'
                        key: {
                            sys_security_acl: '0bbea8395bc049a78eeb59e4a76775ec'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6ce9b1426b744c086a1b2e81a7b9bc5'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'label_font_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8c9161657c04750927f2b578907ab3c'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            value: 'condition'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a90d4c3955be4973b256423d8fa68b37'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'point_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a97b556daad04b16acb5efb26494f875'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_radius'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a9912be536194bbf85c6af0e9933bf8b'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'sankey'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aab2662db6da4fefb06c91a0ae3293d5'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'y_axis_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aaf12a84dd764a5ea9926df860dad7f7'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab1592e806cc44ffae89af340c7c77ef'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'grid_show'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acabad2dd06c4aaaa9a3e0037b5d1db9'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'max_font_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acf7945010004807a02abcd9c6b0ab37'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'label_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad0ef7269e2547a7a9a1de1be5c599e5'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad375c14c1ff4241bb467ebf9b97fbb8'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'sort_slices'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adadb2563b7f483db5e5c8a0153918b1'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'label_offset'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adb824dabe8440a1b800b86b7421f1ad'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aeef3b5c480c421cbb1805bb7dcdd8a7'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af9ba8520fa94082809615f81d9704a3'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_max'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'afe3c9a2303a4b7b86089cf428425b27'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'grid_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b048bf2883fa463ebf0f80b8dd348bfc'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'y_axis_format'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b08abdc8f27c471c84354e88af12389e'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_padding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b0ccf83354ea45949789ae838d81d85e'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0cf96662228461e87904200a7d81b92'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'y_axis_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b13a0f690210461ba02c48a32f26ee73'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'geo_json_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1a719503a654b7c94b9b9acbc458b5e'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'show_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1f95e8b23a34ce480734bd84c374ecb'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_gap'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b25ec1b893bdc39051d7b1dcebba1023'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'animation_duration'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b25ec1b893bdc39051d7b1dcebba102e'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '28'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2fce861821b4c79a2a5c91fc8938574'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'dashboard'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b3fb6a67ac804ce1964c6ed02ddc3d43'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b46084ae64ec4d6092bc66d85c2efee9'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'row_padding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4aa7e5cac75484d918787dbe65b5a29'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d0553991954de5bf0181cbd47dfbcc'
                        deleted: true
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'single_score'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4d8961457334d7e9dce4234bc8805cb'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4fd440eb3a64f28bdca82da380ec2c3'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'zoomable'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b549b637397140c9b9866a5db69586d7'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5bd9c269fa847ec95f5a2fe49f4d909'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'calendar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b616fbf8c5694e04b64a2b26c29f53ef'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b65ec1b893bdc39051d7b1dcebba1020'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'viz_type'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b65ec1b893bdc39051d7b1dcebba102b'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '24'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6b4f863b2cf4e1786f53adb9534e6c8'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'color_scheme'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6c08a84495d4f1b9e5cbd4cf6882b64'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_heatmap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b6eb6d4bd78946869128a02b157618ad'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'max_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b71174c931db4b69a517395c48970d48'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'zoom_enabled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b713646d0e2f4258a395fbbb71db3f65'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'whisker_style'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7322860d265438ab11e4fc489342b0f'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'month_gap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b79481ee96ed49f2943ede0382861d0c'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'background_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b892e33485e14a03b2967edaeedc4382'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9ba5c37a41348b69cb936ae857153df'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_gap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba261ea703df40b89e0be91f9cb8d4e6'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'min_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba4942b2f38f4226ba86cbad67fe41ad'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'grid_show'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ba5ec1b893bdc39051d7b1dcebba101d'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tooltip_show'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ba5ec1b893bdc39051d7b1dcebba1028'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'margin_right'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba754f98727c4a5a87120f3e7287c7bf'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_fill_style'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba8af22b8a904e45bed1ed7a53a92b74'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb6648f693adc35051d7b1dcebba1078'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'icon'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc47ed052fb240e3abcce25b96974407'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                            value: 'scripted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bcb8a5784021478d9d8bfcd02ae01afe'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'point_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bcf36a8704504f5392895ef29ad39f5b'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'show_regression'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd41557093fdc39051d7b1dcebba1071'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dashboard'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd4ed87541ae4c9fa6987de80e55631b'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'reference_line_label'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bd9014e911d440078e07c1ef21fe6599'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdeb8baa12324fdfa08c9a5b0fc53059'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'cell_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be1c0e6b92914323b29fa96f435a6190'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'pad_angle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be5ec1b893bdc39051d7b1dcebba1025'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'background_color'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be97b907a87743adbea30f8dc790e9dc'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'bar_radius'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'becfbb74ce7544769256415b57a2e086'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf6510fefd16475e99b8fa9974a9e295'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'show_mean'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf6648f693adc35051d7b1dcebba1075'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'nav_order'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0123e8aa9fc481e8a7ce8e86fc3393d'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'font_weight'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'c0192591e8e9489f9e9f323d6b0095ad'
                        key: {
                            role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                            contains: {
                                id: '964b86c1197f44379e8e2739d4a58737'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c059cb9d390448429a6bafe2a519fa13'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'source_type'
                            value: 'pa_indicator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c069eaefcc5741bdb4370ea47d997af6'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'min_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0be254463a0447193458b45ba8257aa'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c15c841365d6452898ea29e0c26d1289'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'color_scale_min'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c295f33131154f498e7e184e9058d940'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'stroke_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2eed99f3be74a79a2c8dff7b9e1d9e9'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'background_color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c31dedae41b14665952fd8e8e74d4c37'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c337b10f0ded47ca8b91472f132357a4'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c35af61335c54e028ccfc8632e0ec0bd'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'show_grid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c43a664b4f514a2aa5f7109218ec5deb'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4536a7629aa4d90bdfd35f38bac7bf8'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'help_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c5342c582455498a81cfdd6ba74f2d77'
                        key: {
                            sys_security_acl: '039c1191e5b549998576fe256679e746'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c53d135343c1401a91e98c6c8df58c55'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c67b427aa5ec4b4f9bb9096ad6082d0e'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c693d06be6bd4e49a4c6b547162dc51a'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'needle_color'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7984807bd134efbaef96f6d689e461e'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_scatter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7f300e33a3146ddaf9ade5cabf2aea8'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'animate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8249df189b04d50931bcad4a448658b'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'start_angle'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c85aee547de44908b11cb6716822b7d4'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'heatmap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c92e6f79c02c44058aa701b9ee487f25'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9d5de5d1c484c699a381208517cc5f5'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'x_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9d6d48d376c45afb56050bd9628d72d'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_show'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ca2aac8d4c354aeb8dc72be67fb87e8c'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cae8fc9aec104902b71b3c75244c7245'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cba550d39f6b4685a2bdb63bcd362964'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbad2c98b25b45cb8683da638abeedce'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'margin_bottom'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cbc66b7eb19a4ecbbf5160f4c504235f'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'boxplot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc4ac8fcbc0d4a4b95c39909405713b3'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'hover_highlight'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cc698ab20f534ea8a50b7a02fecd9ba4'
                        key: {
                            name: 'x_1295779_metpo_metric'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc6b6304f61b47d495f86d7d0ddf75f2'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'point_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cdbc9c089586445d8170b74c2368b808'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'grid_shape'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cdefcfdbe13e46f7844a69a1042eebf3'
                        key: {
                            sys_security_acl: '2401367efda84c04a5a6cb6d84b4aded'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce2108ec76334fed8420c282d50a7496'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'color_scale_max'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce29e43125b64af680cc53833cc51685'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_opacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce31c167fae748e68a0a90f709cb9dbb'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'show_grid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ceb596d9e60448549a0522065368170f'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_opacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd06a76642f3d4c1a828b630a9adb2477'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0d2455324ba4df7a431acc9efbd0884'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'section'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0d27e66c2eb4f4a8ccbb32187b50292'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0e0fecb055c41c7b5eab63744da3c19'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_calendar'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd23a68d4033f46f6bda297e2c18a3ef9'
                        key: {
                            name: 'x_1295779_metpo_metric'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2622a6177464c0587bb4b2208e797cc'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'default_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2dcaec4e961480f919a6ba5768418d6'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_alignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2fd17e547684e65993291d0616070db'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd351597093fdc39051d7b1dcebba103a'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'section'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd351597093fdc39051d7b1dcebba1045'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'width'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3cf6cff33b24f999cd412c142f9f46c'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'legend_font_size'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd46608ee4d5a4073adef9e630a36f55f'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd468e4ce89474fa8a74ad517f2d3c8de'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd48b0822daca47d2958e18aae38ba862'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd48f7f6b1cd0415ea6690ecf80598038'
                        key: {
                            sys_security_acl: 'e6d13d632dba4160aa279f55b92493e3'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4db8761df8844f8bbab155ab761be72'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'axis_font_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd59c6cdf07374129a9907cdd2ce12826'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'bar_height'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5cd869955294bc181bfafa4c2c3e959'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'outlier_radius'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5f20195de314cb187e2e6f15c5493a4'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'component_width'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd635c612b2d74b378d28b609a5782d90'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'bar_height'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6b6082bf64b49cd9c6027a5d69dfcbf'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd73851198110463f934ba79ccd692ec8'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_width'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'd751557093fdc39051d7b1dcebba10e0'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd751597093fdc39051d7b1dcebba1037'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd751597093fdc39051d7b1dcebba1042'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd87ba13377354f0e82170c7fb1d02908'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_dependencies'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8cf2319e2194692ba38fac996c24da2'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'hover_highlight'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd981d98d128f40538a1af2fa536a765e'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_width'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd99db2a68c9e4f61ae61d5b9ec125903'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'show_regression'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9be4a138169483794e8b5989c81da5a'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'tile_border_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da732c956e704b2a88d120e494e6b1b3'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'component_height'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da73d263ad664d319633c7e3d6564c89'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'fill_opacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db51597093fdc39051d7b1dcebba103f'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db6a6d247cd349adacc4d34800b64a70'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'link_opacity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbf825dee2e743529cbfac204b0c627f'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'show_outliers'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc8f3604680c4a2bb95f5769be59bc8d'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dcd63c6cee1b4ea8aab0714be604b0c3'
                        key: {
                            sys_security_acl: 'ad9dc400b72747c584607d5af05a8e2a'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd72cce4977a4b96bc96f8b59f24a52a'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'viz_type'
                            value: 'boxplot'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd7f1535da5f4ecabff6b65f27fe15a1'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'stroke_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de025958891741e9b9dac988fc7e47c8'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de121921567e4f949feb50a51b8a609d'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'tooltip_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'deaaf43e909c43bbba8d160edf65217f'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_size'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'df51597093fdc39051d7b1dcebba103c'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'df51597093fdc39051d7b1dcebba1047'
                        key: {
                            sys_ui_section: {
                                id: 'd751557093fdc39051d7b1dcebba10e0'
                                key: {
                                    name: 'x_1295779_metpo_metric'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dashboard'
                            position: '24'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0f220ad7b284630978ab2491d989c7e'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e11b96e648bf455c81708930bbde682e'
                        key: {
                            sys_security_acl: '707be79e81814565baec9fbd82416d3a'
                            sys_user_role: {
                                id: '1789ddc4bca9402ca275f7ac99070adc'
                                key: {
                                    name: 'x_1295779_metpo.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e141557093fdc39051d7b1dcebba1071'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1ba4cdf445b440191ed06242d1d0ac6'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'show_labels'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e1e7c72c723146c4991e7d07a0ae34b6'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e29c043fed1b4bc9bfb0e8d9e8d445d6'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label_font_size'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2c06d1326a84b11ab44d80e6ccbc94e'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'whisker_style'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2fc4f8221274290ac85ad83477157dd'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'point_show'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3a47ff456ed421888991b68308a84ce'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3aae592686f4052bf0bba2905fbe323'
                        key: {
                            name: 'x_1295779_metpo_filter'
                            element: 'filter_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e46c7748681748d0a79acea7cdddcd4a'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_treemap'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e541557093fdc39051d7b1dcebba1051'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'layout'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e541557093fdc39051d7b1dcebba106e'
                        key: {
                            sys_ui_section: {
                                id: '654195f893bdc39051d7b1dcebba10f7'
                                key: {
                                    name: 'x_1295779_metpo_section'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e62319bc032348e2a0e7a027ff6d11e8'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'x_axis_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e63b6222fce8419897db7905ff1d8677'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'show_labels'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7ca744096ee4cf79cd4fe1c727fd309'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                            element: 'show_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e825f9be59824815892ded003d27faae'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e84f8d3a7ca64a68af64dd15fbc81b64'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'stroke_width'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9c79a44d2694684a1f1004ed8fcb5a9'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'grid_shape'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea82d9bb9dd247ea86ce693dc458b83d'
                        key: {
                            name: 'sn_sow_interceptor_record_type_selector'
                            element: 'target_table'
                            value: 'x_1295779_metpo_viz_network'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb0d4dd37a234d958d412f992d612738'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'grid_show'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb9693b6c256475a9c607b5cc56d8908'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'end_angle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb9b8a8465f54ec396c3c96f1db84c9d'
                        key: {
                            name: 'x_1295779_metpo_section'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec8a2b2c4f7e4ef6a331c0a69cd16964'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'label_offset'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed630088599b43f899d178d0b5f23031'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'default_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee82dc746dc24ea89054769aa1848992'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'today_line_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eeb3d982c3f24b58a13709cf6ad720e3'
                        key: {
                            name: 'x_1295779_metpo_section'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef3a3dcf47e54a1a8eb2591c8b41b8f2'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'horizontal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef5d910b0e3d4e488f8c769177ef87e1'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efcd9356c793417997ca0fff9dedc68e'
                        key: {
                            name: 'x_1295779_metpo_dashboard'
                            element: 'parent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0a3efaba71f4eae8729c796327093da'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'axis_font_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0ebff74a0674704bd8c7d07fc468950'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'bar_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1f4c398028043e5848fd55e72f0c2dd'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'zoomable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f23abbd667c6471581baa1f562242a4b'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'min_font_size'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f25ec1b893bdc39051d7b1dcebba1025'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'legend_interactive'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f279525e8b2c4c148e6e0ed0770cb54b'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'start_angle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f2c22ea4b7014e7d9c99ab3da6592144'
                        key: {
                            name: 'x_1295779_metpo_filter'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f2e18bcc2a8248c8a1301037c6af335e'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f2fbf65a2d9b4fc0b0e4854244e041bd'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f405d2f8c5554140a1908376d845517f'
                        key: {
                            name: 'x_1295779_metpo_viz_pie'
                            element: 'center_label_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4519f23b07a483b8b9f88ca6396de7c'
                        key: {
                            name: 'x_1295779_metpo_viz_scatter'
                            element: 'regression_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f48a566c5a024477892a4bbb3932ada5'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'fill_opacity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4c0f5c3f9114b73a96c8fc3728e153e'
                        key: {
                            name: 'x_1295779_metpo_metric'
                            element: 'width'
                            value: '25'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4efee63b2e24909a35761cecefc040e'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                            element: 'y_axis_format'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f523f21dd7a043ae959776b5dfcfc750'
                        key: {
                            name: 'x_1295779_metpo_viz_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f53b27aa4c00435f8677964468eb41fe'
                        key: {
                            name: 'x_1295779_metpo_viz_boxplot'
                            element: 'box_width'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'f59b3493faee451a9f261db5ebe71055'
                        key: {
                            web_service_operation: '369749e8f1734ee48d3a51eef460a0ee'
                            web_service_query_parameter: '2cc98682be1544fc93ffdfd0fc26b6dd'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f65ec1b893bdc39051d7b1dcebba1022'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f65ec1b893bdc39051d7b1dcebba102d'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'legend_position'
                            position: '27'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6c8a6da822a4b8a84cd12db59d40f4f'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_today_line'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f706f073131a4a799e1f00748496ac14'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                            value: 'gauge'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7ddf1f7b83740aebbf8232264a648d4'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'show_today_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7e1d7c47300442db8f0b098b80c572b'
                        key: {
                            name: 'x_1295779_metpo_viz_heatmap'
                            element: 'y_axis_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8b1e2ee097e4c8a9c0e9172f9b8c0d5'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8feeaa66357418c9c26d0e233d971c0'
                        key: {
                            name: 'x_1295779_metpo_viz_sankey'
                            element: 'node_padding'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f95b6e2ee9d44e8c80272d74e8eaa7c0'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'stroke_color'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f9ca118cc84940f9bac5d79013a7c51d'
                        key: {
                            name: 'x_1295779_metpo_viz_treemap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa1b18dc53634bb194774325b19fa5a8'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'cell_radius'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa5ec1b893bdc39051d7b1dcebba101f'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'legend_show'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa5ec1b893bdc39051d7b1dcebba102a'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '23'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'faec2d925f7744b69538e3f80e6bebfe'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'reference_line_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faed73325f6f49398ba4c2eaed13571a'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'max_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb15bddb56354e829eed7523ade4577d'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'reference_line_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb4151be690246c786fc6b25a5b90ee8'
                        key: {
                            name: 'x_1295779_metpo_viz_radar'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fc1958ac3764455f9d15f7848679a063'
                        key: {
                            sys_security_acl: '406f43af5d9d4278a21078cd73aa002a'
                            sys_user_role: {
                                id: '434d9d61858a4e11ae3b2a655d40228a'
                                key: {
                                    name: 'x_1295779_metpo.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fc6e762041904e6eb49916253bec1737'
                        key: {
                            name: 'x_1295779_metpo_visualization'
                            element: 'viz_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc944eda6c5342faa09aaeb169a041f1'
                        key: {
                            name: 'x_1295779_metpo_viz_gauge'
                            element: 'zones_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'fd2bbabab0ae4c53889ed0afaafffc41'
                        key: {
                            dashboard: '8f7ec1ad4cbe4c57b96bdd29759dc289'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd2fbc0a924a44da832846c057d150ab'
                        key: {
                            name: 'x_1295779_metpo_viz_wordcloud'
                            element: 'rotation_min'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fdb7fe73330b46598aba3eedabcdc439'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fdf952b420684e9da1b53337ee059e80'
                        key: {
                            name: 'x_1295779_metpo_viz_gantt'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe315b63c69044c18f664276ea7e9c56'
                        key: {
                            name: 'x_1295779_metpo_viz_line'
                            element: 'area_fill'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fe5ec1b893bdc39051d7b1dcebba101c'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'border_radius'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fe5ec1b893bdc39051d7b1dcebba1027'
                        key: {
                            sys_ui_section: {
                                id: 'ba5ec1b893bdc39051d7b1dcebba1003'
                                key: {
                                    name: 'x_1295779_metpo_visualization'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'animate'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fea0ccd656d743429d4740da8235ea2b'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'color_scale_max'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fed6dfb9e2d840b69d076ec786193f13'
                        key: {
                            name: 'x_1295779_metpo_viz_choropleth'
                            element: 'default_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff496fb46a274679b0de86c37d0bd663'
                        key: {
                            name: 'x_1295779_metpo_viz_network'
                            element: 'link_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff6550dfcb3f465eb2b3575cfdfbb0b3'
                        key: {
                            name: 'x_1295779_metpo_viz_calendar'
                            element: 'show_month_labels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff6648f693adc35051d7b1dcebba1077'
                        key: {
                            sys_ui_section: {
                                id: '236600f693adc35051d7b1dcebba10d8'
                                key: {
                                    name: 'x_1295779_metpo_dashboard'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '4'
                        }
                    },
                ]
            }
        }
    }
}
