

export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana'],
    name: 'fixed-filter',
    uiExports: {


      hacks: [
        'plugins/fixed-filter/hack'
      ],

      uiSettingDefaults: {
        'fixed-filter:enabled': {
          value: true,
          description: 'Always display the filter bar in dashboard, even after scrolling'
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
