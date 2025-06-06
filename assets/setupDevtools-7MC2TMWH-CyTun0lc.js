import { s as setupDevToolsPlugin, w as watch } from "./app-DNVdkGQA.js";
var PLUGIN_ID = "org.vuejs.vuepress";
var PLUGIN_LABEL = "VuePress";
var PLUGIN_COMPONENT_STATE_TYPE = PLUGIN_LABEL;
var INSPECTOR_ID = PLUGIN_ID;
var INSPECTOR_LABEL = PLUGIN_LABEL;
var INSPECTOR_CLIENT_DATA_ID = "client-data";
var INSPECTOR_CLIENT_DATA_LABEL = "Client Data";
var setupDevtools = (app, clientData) => {
  setupDevToolsPlugin(
    {
      // fix recursive reference
      app,
      id: PLUGIN_ID,
      label: PLUGIN_LABEL,
      packageName: "@vuepress/client",
      homepage: "https://vuepress.vuejs.org",
      logo: "https://vuepress.vuejs.org/images/hero.png",
      componentStateTypes: [PLUGIN_COMPONENT_STATE_TYPE]
    },
    (api) => {
      const clientDataEntries = Object.entries(clientData);
      const clientDataKeys = Object.keys(clientData);
      const clientDataValues = Object.values(clientData);
      api.on.inspectComponent((payload) => {
        payload.instanceData.state.push(
          ...clientDataEntries.map(([name, item]) => ({
            type: PLUGIN_COMPONENT_STATE_TYPE,
            editable: false,
            key: name,
            value: item.value
          }))
        );
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: INSPECTOR_LABEL,
        icon: "article"
      });
      api.on.getInspectorTree((payload) => {
        if (payload.inspectorId !== INSPECTOR_ID) return;
        payload.rootNodes = [
          {
            id: INSPECTOR_CLIENT_DATA_ID,
            label: INSPECTOR_CLIENT_DATA_LABEL,
            children: clientDataKeys.map((name) => ({
              id: name,
              label: name
            }))
          }
        ];
      });
      api.on.getInspectorState((payload) => {
        if (payload.inspectorId !== INSPECTOR_ID) return;
        if (payload.nodeId === INSPECTOR_CLIENT_DATA_ID) {
          payload.state = {
            [INSPECTOR_CLIENT_DATA_LABEL]: clientDataEntries.map(
              ([name, item]) => ({
                key: name,
                value: item.value
              })
            )
          };
        }
        if (clientDataKeys.includes(payload.nodeId)) {
          payload.state = {
            [INSPECTOR_CLIENT_DATA_LABEL]: [
              {
                key: payload.nodeId,
                value: clientData[payload.nodeId].value
              }
            ]
          };
        }
      });
      watch(clientDataValues, () => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
      });
    }
  );
};
export {
  setupDevtools
};
