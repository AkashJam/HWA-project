import Vue from 'vue'

import * as VueGoogleMaps from
'~/node_modules/vue2-google-maps/src/main'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCYzwCFtkXmyprLq5BHE-FrGEmRz41B_B8'
  }
});