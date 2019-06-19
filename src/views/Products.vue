<template>
	<div class="products">
		<div class="container">
			<div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>Qui voluptate deserunt sint.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/products.svg" alt="Dashboard Image" class="img-fluid">
          </div>
        </div>
      </div>
      <hr>

      <h3>Basic CRUD in Firebase and Vue</h3>
      <div class="product-test">
        <div class="form-group">
          <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Price" v-model="product.price" class="form-control">
        </div>
        <div class="form-group">
          <button @click="saveData" class="btn btn-primary">Save Data</button>
        </div>
      </div>
		</div>
			</div>
</template>

<script>
import {fbase, fstore} from '../firebase';
export default {
	name: "Products",
	props: {
		msg: String
	},

  data(){
    return {
      product: {
      name:null,
      price:null
      }
      
    }
  },

  methods:{
    saveData(){

      fstore.collection("products").add(this.product)
      .then((docRef) => {
        console.log("Document written with Id: ", docRef.id);
        this.reset();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    },

    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  }
};
</script>
