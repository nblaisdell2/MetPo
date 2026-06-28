import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3277c87a93adc35051d7b1dcebba1097'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '1057447a93adc35051d7b1dcebba1005',
        disable_auto_reflow: true,
        disable_interoperable: 'false',
        event_mappings: `[
    {
        "eventMappingId": "pACuOeehhXdDEggeehhjjZQHBxRMQGob",
        "isConfiguration": null,
        "offRowStorageId": null,
        "sourceEventApiName": "x_1295779_metpo.NAV_ITEM_SELECTED_RELAY_b677c87a93adc35051d7b1dcebba107f",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_1295779_metpo.NAV_ITEM_SELECTED_RELAY_b677c87a93adc35051d7b1dcebba107f",
            "id": null,
            "type": "UXEVENT"
        },
        "sourceEventSysId": null,
        "targets": [
            {
                "broker": null,
                "clientScript": null,
                "clientTransformScript": null,
                "clientTransformScriptUxValue": null,
                "conditional": null,
                "declarativeAction": null,
                "event": {
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED",
                    "payload": {
                        "container": {
                            "external": {
                                "binding": {
                                    "address": [
                                        "external"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "fields": {
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "multiInstField": {
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "navigationOptions": {
                                "binding": {
                                    "address": [
                                        "navigationOptions"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "params": {
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "passiveNavigation": {
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "redirect": {
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "route": {
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "targetRoute": {
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "title": {
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            }
                        },
                        "type": "MAP_CONTAINER"
                    },
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463"
                },
                "operation": null,
                "targetId": "gEIqhPeLCkxdjjlANSggKEOEXU",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: 'b677c87a93adc35051d7b1dcebba107f',
        macroponent_config: `{
    "bare": {
        "type": "JSON_LITERAL",
        "value": true
    },
    "headerLevel": {
        "type": "JSON_LITERAL",
        "value": "1"
    },
    "headingOnlyVisibleToScreenReaders": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "interceptNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "label": {
        "type": "JSON_LITERAL",
        "value": ""
    },
    "propagateNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "scrollable": {
        "type": "JSON_LITERAL",
        "value": "y"
    }
}`,
        name: 'Home default',
        order: 0,
        parent_macroponent: '9d9670b0c30320109fe6a0f89d40dd97',
        required_translations: '[ ]',
        screen_type: 'ae77087a93adc35051d7b1dcebba1089',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
