import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('bags')
  },
  show(bagId) {
    return Api().get('bag/' + bagId)
  },
  post(bag) {
    return Api().post('bag', bag)
  },
  put(bag) {
    return Api().put('bag/' + bag.id, bag)
  },
  delete(bag) {
    return Api().delete('bag/' + bag.id, bag)
  },
}
