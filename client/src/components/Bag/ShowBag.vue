<template>
  <div>
    <h1 class="text-center">Show Bag</h1>
    <div class="bag-container">
      <div class="bag-info">
        <p class="id">ID: {{ bag.id }}</p>
        <p class="brand">Brand: {{ bag.brand }}</p>
        <p class="color">Color: {{ bag.color }}</p>
        <p class="price">Price: $ {{ bag.price }}</p>
        <p class="type">Type: {{ bag.type }}</p>
      </div>
      <div class="bag-image-container">
        <img :src="bag.image" alt="Bag Image" class="bag-image">
      </div>
    </div>
  </div>
</template>

<script>
import BagService from '@/services/BagService'

export default {
  data() {
    return {
      bag: {}
    }
  },
  async created() {
    let bagId = this.$route.params.bagId
    this.bag = (await BagService.show(bagId)).data
  }
}
</script>

<style scoped>
.bag-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.bag-info {
  text-align: left;
  font-size: 1.2rem;
  margin-right: 20px;
}

.bag-info p {
  margin-bottom: 10px;
}

.bag-image-container {
  text-align: center;
}

.bag-image {
  max-width:50%;
  display: block;
  margin: 0 auto;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px;
}
</style>
