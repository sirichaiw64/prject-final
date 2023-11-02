<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-lg-6">
        <div class="border p-4">
          <h1 class="mb-4">Edit Bag</h1>
          <form @submit.prevent="editBag">
            <div class="mb-3">
              <label for="brand" class="form-label">Brand:</label>
              <input type="text" id="brand" v-model="bag.brand" class="form-control">
            </div>
            <div class="mb-3">
              <label for="color" class="form-label">Color:</label>
              <input type="text" id="color" v-model="bag.color" class="form-control">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price:</label>
              <input type="number" id="price" v-model="bag.price" class="form-control">
            </div>
            <div class="mb-3">
              <label for="type" class="form-label">Type:</label>
              <input type="text" id="type" v-model="bag.type" class="form-control">
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image URL:</label>
              <input type="text" id="image" v-model="bag.image" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Edit Bag</button>
          </form>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="border p-4">
          <h2 class="mb-4">Bag Details</h2>
          <div>
            <p><strong>Brand:</strong> {{ bag.brand }}</p>
            <p><strong>Color:</strong> {{ bag.color }}</p>
            <p><strong>Price:</strong> $ {{ bag.price }}</p>
            <p><strong>Type:</strong> {{ bag.type }}</p>
            <div v-if="bag.image">
              <p><strong>Image:</strong></p>
              <img :src="bag.image" alt="Bag Image" style="max-width: 200px; max-height: 200px;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BagService from '@/services/BagService'

export default {
  data() {
    return {
      bag: {
        brand: '',
        color: '',
        price: 0,
        type: '',
        image: ''
      }
    }
  },
  methods: {
    async editBag() {
      try {
        await BagService.put(this.bag)
        this.$router.push({ name: 'bags' })
      } catch (err) {
        console.log(err)
      }
    },
    async created() {
      try {
        let bagId = this.$route.params.bagId
        this.bag = (await BagService.show(bagId)).data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
