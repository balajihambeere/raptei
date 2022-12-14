import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/rapteidb");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const ProductModel = mongoose.model("Products", productSchema);

const products = [
    {
        name: "Enzo 2 Refresh Running Shoes",
        size: 6,
        model: "",
        price: 3019,
        slug: "enzo-2-refresh-running-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376687/04/sv01/fnd/IND/fmt/png/Enzo-2-Refresh--Running-Shoes",
        description: "Discover the Enzo dynasty with the all new Enzo 2, our latest addition to this legacy. This iconic shoe is updated with a TPU jewel piece in at the heel for stand-out branding and a high-performance rubber outsole for superior traction. The Enzo 2 Refresh Running Shoes is made for the athlete who wants to catch all the right attention"
    },
    {

        name: "Liberate Nitro Men's Running Shoes",
        size: 6,
        model: "",
        price: 9999,
        slug: "liberate-nitro-mens-running-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194917/02/sv01/fnd/IND/fmt/png/Liberate-Nitro-Men's-Running-Shoes",
        description: "Free your stride with the featherlight Liberate Nitro Running Shoes, our airiest running shoe yet. With a moisture-draining mono-mesh upper, ultra-cushioning NITRO FOAM midsole and high-traction PUMAGRIP outsole, these shoes are made for swift, agile movement on short-distance runs."
    },
    {
        name: "Twitch Runner Unisex Running Shoes",
        size: 6,
        model: "",
        price: 4799,
        slug: "twitch-runner-unisex-running-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376289/01/sv01/fnd/IND/fmt/png/Twitch-Runner-Unisex-Running-Shoes",
        description: "Go hard or go home in the power performance Twitch Runner. Modelled after PUMA???s celebrated Velocity Nitro, the Twitch Runner boasts clean lines and slick design detail. A bold paint line highlights the cushioned tooling while the mono mesh upper material is breathable and comfortable during both speed and endurance runs. A zoned rubber outsole creates durability and traction clout when you need it, and the midfoot is locked down with internal structural support, which, when combined with the plush SOFTFOAM +, offers a high-comfort ride."
    },
    {
        name: "Night Runner Running Shoes",
        size: 6,
        model: "",
        price: 4799,
        slug: "night-runner-running-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376670/03/sv01/fnd/IND/fmt/png/Night-Runner--Running-Shoes",
        description: "Hit the city in comfort with the Night Runner. It's lightweight, breathable, and perfect for long days spent on your feet."
    },
    {
        name: "Deviate Nitro Winterized Men's Running Shoes",
        size: 6,
        model: "",
        price: 15999,
        slug: "deviate-nitro-winterized-mens-running-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195572/01/sv01/fnd/IND/fmt/png/Deviate-Nitro-Winterized-Men's-Running-Shoes",
        description: "The PUMA Deviate NITRO Running Shoes just got winterized. This high-performance running shoe is packed with technology for fast runs - no matter the forecast. Deviate features two layers of our lightweight NITRO combined with the carbon composite INNOPLATE. This innovative plate acts as a lever for maximum energy transfer at toe-off.  Together, the foam and plate offer max cushioning with improved efficiency. For long runs that outlast the daylight, the Deviate NITRO WTR delivers high visibility with a reflective aurora print, with a breathable, water-resistant shoe for an effortless run."
    },
    {
        name: "one8 Virat Kohli Softride Premier Men's Walking Shoes",
        size: 6,
        model: "",
        price: 5599,
        slug: "one8-virat-hohli-softride-premier-mens-walking-shoes",
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377180/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Softride-Premier-Men's-Walking-Shoes",
        description: "Introducing the lightweight and tech inspired shoes from the latest one8 collection. The one8 Virat Kohli Softride Premier walkingshoe is crafted to offer smooth sprints. The SOFTRIDE midsole offers plush comfort. The mesh upper and chunky outsole completed with the TPU clip sculptures the silhouette of the shoe."
    }
];

const addDummyData = async () => {
    products.forEach(async item => {
        let product = new ProductModel(item);
        const result = await product.save();
        console.log(result);
    });
};

addDummyData();

const cleanUp = (eventType) => {
    mongoose.connection.close(() => {
        console.info('closed', eventType);
    });
};

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
    process.on(eventType, cleanUp.bind(null, eventType));
})
