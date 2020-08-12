Vue.component('product1', {
	template: `<div class="product">
				
				<div class="product-image">
					<img v-bind:src="image">
				</div>
			
				<div class="product-info">
					<h1>{{ product }}</h1>
					<p v-if="inStock">{{inventory}} in Stock</p>
					<p v-else :class="{ redZero: !inStock }">{{inventory}} in Stock</p>
					<p v-if="inStock">
          <br></p>
					<p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
					<button v-on:click="addToCart"
							:disabled="!inStock"
							:class="{ disabledButton: !inStock }"
							>Add to Cart
					</button>
					<br />
          <br>
					<button v-on:click="removeFromCart"
								:disabled="this.$parent.cart == 0"
								:class="{ disabledButton: this.$parent.cart == 0 }"
								>Remove from Cart</button>			
				</div>
			</div>`,
			data() {
					return {
						product : 'TerraNutrition T-Shirt',
						image : 't-shirt.png',
						inventory : 0						
					}
				},

	methods: {
		addToCart: function() {
			this.$emit('add-to-cart'),
			this.inventory -= 1
		},
		removeFromCart: function() {
			this.$emit('remove-from-cart'),
			this.inventory += 1
		}
	},
	computed: {
		inStock: function() {
			return this.inventory
	}
	}
})



var app = new Vue ({
	el: '#app',
	data: {
		cart : 0
	},
	methods: {
		addCart() {
			this.cart += 1
		},
		subtractCart() {
			this.cart -= 1
		}
	}
	
})
