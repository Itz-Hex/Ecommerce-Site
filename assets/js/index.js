const { createApp } = Vue

  createApp({
    data() {
      return {
        activeProduct: 0,
        products: [
            {
                id: "0",
                name: "Equation Mouse Mat",
                descriptionShort: "A mouse mat with all your favorite equations.",
                description: "Gamers, office workers and virtually everyone with a computer can find a home for their mouse with this mouse pad! The rubbery bottom provides a sturdy grip and the soft polyester fabric top ensures smooth mouse movements.",
                productDetails: {
                    waterResistance: "The products tightly woven material can resit small amounts of water.",
                    material: "100% polyester fabric top. Soft, water recitant fabric.",
                    dimensions: {
                        size: `9.7" x 7.1" (220x180mm)`,
                        height: `0.12" (3mm)`,
                        weight: "2.9 oz (79.4g)",
                        volume: "N/A",
                    },
                    extraInfo: "Natural rubber base. Rounded edges."
                },
                price: "14.99",
                image: "http://picsum.photos/400",
            },
            {
                id: "1",
                name: "Equation Mug",
                descriptionShort: "A mug with all your favorite equations.",
                description: "This sturdy mug is perfect for your morning coffee, afternoon tea, or whatever hot beverage you enjoy. Its glossy and yields vivid prints that remains to their quality when dish-washed and microwaved.",
                productDetails: {
                    waterResistance: "N/A",
                    material: "Ceramic",
                    dimensions: {
                        size: `N/A`,
                        height: `N/A`,
                        weight: "11 oz",
                        volume: "11 oz",
                    },
                    extraInfo: "Diswasher and microwave safe. Durable and heat resistant. Glossy finish that adds a light shine."
                },
                price: "17.99",
                image: "http://picsum.photos/500",
            }, 
            {
                id: "2",
                name: "Equation Laptop Sleeve",
                descriptionShort: "A laptop sleeve with all your favorite equations.",
                description: "This lightweight, form fitting laptop sleeve is a must have for any laptop owners on the go. To prevent any scratches, it contains a padded zipper binding and it’s interior is lined with faux fur. What more, it’s made from water resistant and scratch proof material, making sure that both the laptop and the sleeve design are intact from day to day.",
                productDetails: {
                    waterResistance: "The neoprene material makes the product water resistant.",
                    material: "100% neoprene water resistant fabric.",
                    dimensions: {
                        size: `13.25" x 10.25" (336x260mm)`,
                        height: `1" (25mm)`,
                        weight: "N/A",
                    },
                    extraInfo: "Lightweight and snug fit."
                },
                price: "8.99",
                image: "http://picsum.photos/600",
            }, 
        ]
      }
    },
    methods: {
        getActiveProduct() {
            let value = parseInt(window.location.href.split("#")[1]);
            this.activeProduct = value;
        }
    }
  }).mount('#app')

function productClick(e) {
    window.location.href = "./product.html#" + e.id;
}

function openOrderPage() {
    window.open("http://olliewells.co.uk/");
}
