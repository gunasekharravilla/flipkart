import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "guna",
      email: "guna@admin.com",
      password: bcrypt.hashSync("2311", 8),
      isAdmin: true,
    },
    {
      name: "Chandu",
      email: "rgn@gmail.com",
      password: bcrypt.hashSync("2311", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12899750/2020/11/23/8406a90d-923a-4d67-95ad-c7ae8aff12e41606111228375-Puma-Men-Sweatshirts-8101606111226506-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Men Blue Slim Fit Mid Rise Mildly Distressed Stretchab",
      category: "Shirts",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6832428/2018/8/3/8f5ee9fe-dc82-47d6-ab89-5a6a71e3f2aa1533287650327-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Mildly-Distressed-Stretchab-2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Wrogn",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Men Black Slim Fit Mid Rise Clean Look Stretchable Jeans",
      category: "Shirts",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg",
      price: 220,
      countInStock: 20,
      brand: "Highlander",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "RoadSter Slim Pant",
      category: "Pants",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8889611/2019/3/20/3eae8fb4-b7ca-4e01-80bf-d1e59ab1568d1553080254589-Roadster-Men-Black--White-Regular-Fit-Checked-Casual-Shirt-9-1.jpg",
      price: 78,
      countInStock: 15,
      brand: "Roadster",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Women Olive Green Regular Fit Solid Joggers",
      category: "Joggers",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11866174/2020/6/10/cb57fed8-bd33-4a1e-87ad-51fa348139b41591782792747-SASSAFRAS-Women-Trousers-7561591782791493-1.jpg",
      price: 650,
      countInStock: 5,
      brand: "SASSAFRAS",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Men Charcoal Grey & Black Camouflage Printed Joggers",
      category: "Joggers",
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2033152/2019/3/7/9ad72d68-8123-45ba-9961-d7535bf9ba5d1551936377682-WROGN-Men-Charcoal-Grey--Black-Camouflage-Printed-Joggers-81-2.jpg",
      price: 1399,
      countInStock: 12,
      brand: "Wrogn",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
