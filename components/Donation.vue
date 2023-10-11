<script>
export default {
  props: {
    visible: Boolean, 
  },
  methods: {
    closeModal() {
      this.$emit('close'); 
    },
    submitDonation() {
      this.$emit('donation-complete'); 
      this.closeModal(); 
    },
  },
};
</script>

<template>
  <div v-if="visible" class="donate-container">
    <div class="donate-form">
      <div class="header-donate">
        <h2>Donate Form</h2>
        <button @click="closeModal">x</button>
      </div>
      <form @submit="submitDonation">
				<div class="postal-code-div">
					<label for="postalCode">Postal Code:</label>
					<select v-model="postalCode">
						<option value="28005">28005</option>
						<option value="08001">08001</option>
						<option value="25250">25250</option>
					</select>
				</div>
				<div class="shipping-firstname-div"> 
					<label for="shipping_fistname">Firstname</label>
					<input type="text" id="shipping_firstname" v-model="shipping_fistname" required>
				</div>
				<button class="button-close" @click="closeModal"> close</button>
				<button class="button-donate" type="submit">save changes</button>
      </form>
    </div>
  </div>
</template>


<style scoped>

.button-close {
	color: white;
	background-color: #72798d;
	border: 1px solid #ccc;
	padding: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	
}
.button-donate {
  color: white;
  background-color: #517cff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
}

.postal-code-div {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items:flex-start;
	margin-bottom: 1rem;
	padding: 10px;
}
.shipping-firstname-div {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items:flex-start;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	padding: 10px;
}

.header-donate {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
}

.donate-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.donate-form {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	max-height: 400px;
  max-width: 50%; 
  text-align: center; 
}


</style>
