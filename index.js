

export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana'],
    name: 'kibana-fixed-filter',
    uiExports: {

      hacks: [
        'plugins/kibana-fixed-filter/hack'
      ],

      uiSettingDefaults: {
        'fixed-filter:enabled': {
          value: true,
          description: 'Always display the filter bar in top-fixed position, in all dashboards, even after scrolling'
        }
      }

    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    }



  });
};
