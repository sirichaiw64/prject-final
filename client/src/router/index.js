import Vue from 'vue'
import Router from 'vue-router'
// Bags
import BagIndex from '@/components/Bag/Index'
import BagCreate from '@/components/Bag/CreateBag'
import BagEdit from '@/components/Bag/EditBag'
import BagShow from '@/components/Bag/ShowBag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bags',
      name: 'bags',
      component: BagIndex
    },
    {
      path: '/bag/create',
      name: 'bags-create',
      component: BagCreate
    },
    {
      path: '/bag/edit/:bagId',
      name: 'bag-edit',
      component: BagEdit
    },
    {
      path: '/bag/:bagId',
      name: 'bag',
      component: BagShow
    },
  ]
})
