import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['536c9c7e9321075051d7b1dcebba104c'],
    table: 'sys_ux_data_broker_rest',
    data: {
        api_name: 'x_1295779_metpo.Get MP Dashboard Data',
        api_url: '/api/x_1295779_metpo/metrics/dashboard/{{key}}',
        batch_exclude: 'false',
        http_method: 'GET',
        mutates_server_data: 'false',
        name: 'Get MP Dashboard Data',
        private: 'false',
        props: `[
{
  "name": "key",
  "label": "Dashboard key",
  "description": "Which dashboard to load?",
  "readOnly": false,
  "fieldType": "string",
  "mandatory": true,
  "defaultValue": "sales-overview"
}
]`,
        schema_version: '1.0.0',
    },
})
