<template>
  <div class="d-flex justify-content-center">
    <div>
      <h4 class="display-5 text-center">All Bags</h4>
      <h4 class="mb-4 text-center">Total Bags: {{ bags.length }}</h4>
      <div class="text-center">
        <button @click="navigateTo('/bag/create')" class="btn btn-primary">Create Bag</button><br><br>
      </div>
      <div class="d-flex flex-wrap">
        <div v-for="bag in bags" :key="bag.id" class="card mb-4" style="width: 18rem; margin-right: 18px;">
          <img v-if="bag.image" :src="bag.image" alt="Bag Image" class="card-img-top" style="max-height: 500px;">
          <div class="card-body">
            <h5 class="card-title">ID: {{ bag.id }}</h5>
            <p class="card-text">Brand: {{ bag.brand }}</p>
            <p class="card-text">Color: {{ bag.color }}</p>
            <p class="card-text">Price: $ {{ bag.price }}</p>
            <p class="card-text">Type: {{ bag.type }}</p>
            <div class="mt-3">
              <button @click="navigateTo('/bag/' + bag.id)" class="btn btn-info mr-2">View Bag</button>
              <button @click="navigateTo('/bag/edit/' + bag.id)" class="btn btn-warning mr-2">Edit Bag</button>
              <button @click="deleteBag(bag)" class="btn btn-danger">Delete Bag</button>
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
      bags: []
    }
  },
  async created() {
    this.refreshData()
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteBag(bag) {
      try {
        await BagService.delete(bag)
        this.refreshData()
      } catch (err) {
        console.log(err)
      }
    },
    async refreshData() {
      this.bags = (await BagService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
