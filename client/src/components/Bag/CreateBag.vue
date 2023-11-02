<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
    <form @submit.prevent="createBag" class="bag-form">
      <div class="mb-3">
        <h1 class="h3">Create Bag</h1>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <label for="brand" class="form-label">Brand:</label>
          <input type="text" id="brand" v-model="bag.brand" class="form-control">
        </div>
        <div class="col-6">
          <label for="color" class="form-label">Color:</label>
          <input type="text" id="color" v-model="bag.color" class="form-control">
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-6">
          <label for="price" class="form-label">Price:</label>
          <input type="number" id="price" v-model="bag.price" class="form-control">
        </div>
        <div class="col-6">
          <label for="type" class="form-label">Type:</label>
          <input type="text" id="type" v-model="bag.type" class="form-control">
        </div>
      </div>
      <div class="mb-5">
        <label for="image" class="form-label">Image URL:</label>
        <input type="text" id="image" v-model="bag.image" class="form-control">
      </div>
      <div class="mb-5">
        <button type="submit" class="btn btn-primary">Create Bag</button>
      </div>
    </form>
  </div>
</template>

<script>
import BagService from '@/services/BagService'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    }},
    methods: {
      async createBag() {
        try {
          await BagService.post(this.bag)
          this.$router.push({
            name: 'bags'
          })
        } catch (err) {
          console.log(err)
        }
      }
    }
}
</script>
<style scoped>
.bag-form {
  border: 2px solid #000000; /* เปลี่ยนสีกรอบเป็นสีที่คุณต้องการ */
  border-radius: 10px; /* เปลี่ยนรูปร่างขอบมนัสเป็นรูปร่างที่คุณต้องการ */
  padding: 20px; /* เปลี่ยนการเพิ่มระยะห่างด้านในขอบเป็นค่าที่คุณต้องการ */
}
</style>