import Vue from 'vue'
import Child from './Child.vue'
import ContentPanelTopGrid from './ContentPanelTopGrid.vue'
import ContentPanelBottomGrid from './ContentPanelBottomGrid.vue'
// import { HasError, AlertError, AlertSuccess } from 'vform/components/bootstrap5'

// Components that are registered globaly.
[
  Child,
  ContentPanelTopGrid,
  ContentPanelBottomGrid,
  // HasError,
  // AlertError,
  // AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
