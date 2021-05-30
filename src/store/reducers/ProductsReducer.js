const initState = {
  products: [
    {
      id: 1,
      name: "Object Oriented Programming in JavaScript",
      author: "Devid Lion",
      image: "https://img-b.udemycdn.com/course/240x135/1642074_7ef3.jpg?secure=LYT_Sxrc1dbonBEHbZ8_-A%3D%3D%2C1622362429",
      price: 49.99,
      discount: 2,
      discountPrice: 49.99 - (2 / 100) * 49.99,
      quantity: 1,
      ratting : [1,2,3,4],
      desc: "Learn all about OOP, understand the most confusing parts of JavaScript and prepare for technical interviews",
    },

    {
      id: 2,
      name: "The complete web development Bootcamp",
      author: "John Certer",
      image: "https://careerfoundry.com/en/blog/uploads/the-best-web-development-bootcamps.png",
      price: 94.99,
      discount: 5,
      discountPrice: 94.99 - (5 / 100) * 94.99,
      quantity: 1,
      ratting : [1,2,3,4,5],
      desc: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
    },
    {
      id: 3,
      name: "50 Days JavaScript Chellange - HTML, CSS & JavaScript",
      author: "Jhon ty",
      image: "https://res.cloudinary.com/springboard-images/image/upload/w_1080,c_limit,q_auto,f_auto,fl_lossy/wordpress/2019/08/sb-blog-java.png",
      price: 94.99,
      discount: 3,
      discountPrice: 94.99 - (3 / 100) * 94.99,
      quantity: 1,
      ratting : [1,2,3,4],
      desc: "HTML, CSS, and JavaScript. Build 10 Big and Complete Responsive Websites with HTML, CSS, and JavaScript",
    },
    {
      id: 4,
      name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      author: "Jose portilia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDdOmVD3Ktc0FKrsLPZ5i6KXjqEpp9MnOCjgAoyrHBU6bkb1OOMe2AoBrOyHNzYVvwiM&usqp=CAU",
      price: 50,
      discount: 4,
      discountPrice: 50 - (4 / 100) * 50,
      quantity: 1,
      ratting : [1,2,3,4],
      desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    },
    {
      id: 5,
      name: "React native Expo for multiplatform mobile app development",
      author: "Kim chen",
      image: "https://img-c.udemycdn.com/course/240x135/3773702_9bb2_2.jpg?Expires=1622388485&Signature=NK4MXK6ZAVx9gvD~Y593FvZyC0gaWm7F2SnOnd4fEsgbyQ9Ei677T2jjPj1DJnmvAozbzgxptR6qk4bkjuyKIY3~8njLGVrBu7OnAI-thqEtB3WzqliTItVfbBaDM9JPlQYzL~3snVQsp8EIBFDl~H8rwM~4S-oNNTZHbriRSVZoTiGajTMlhUIBPgTYLTb7FjYX1faUrQVJ3VmpK~7E2qME-tNU5WkNX6Fpw3xeswre583GJG5tlmkD3TxYdeNJbq8aYd7IgmamopyGCQVTl9Z57BPusWBcxZjnt6YgJRv9hq7loZvnMh9TP75XeMhRjTEjBOXEp9C2fpu8xWRFJA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      price: 25,
      discount: 2,
      discountPrice: 25 - (2 / 100) * 25,
      quantity: 1,
      ratting : [1,2,3],
      desc: "Create awesome mobile app in both iOS and Android platform",
    },
    {
      id: 6,
      name: "10 Mega Responsive Websites with HTML, CSS, and JavaScript",
      author: "Code and create",
      image: "https://img-c.udemycdn.com/course/240x135/3598684_c319_5.jpg?Expires=1622390271&Signature=eVJ0vovMbtij8W7F15F2LntNWDhI4SMhBtXJMjS9Lgm8doVXj0~jKicdJHoJDMTBINNBeFABb1XKXkyp~Ej~hGsXbFWJzniTC~SJRq1kxOch-DyDsZHzA3xCXzauE8mznPHwrniyrwYNdZiZIqjdr4FmdH3RVmo85Gprhty3WoQbM7mZbr-Dv5~m7IeuOsVokBxI5cgDeyaou3UQJgznOesdI-bcsuQCjeHDUxx4whuqZODnWhCttaNZV5ABIDCZxFmwxoYLFyaL2OixtiQ6RW0EafyxiRHDicg9Z5qig6LMzD~PLCMYVUf4bSVReM-cbpy8XIjyJGyPWBy649DebA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      price: 60,
      discount: 6,
      discountPrice: 60 - (6 / 100) * 60,
      quantity: 1,
      ratting : [1,2,3,4,5],
      desc: "HTML, CSS, and JavaScript. Build 10 Big and Complete Responsive Websites with HTML, CSS, and JavaScript",
    },
    {
      id: 7,
      name: "Ethereum and Solidity: The Complete Developer's Guide",
      author: "Code and create",
      image: "https://img-c.udemycdn.com/course/240x135/1466612_bead_2.jpg?Expires=1622371802&Signature=jxnLlC3DGp9deA1jd4wQe1UKuZ2OHZszAC6ngWGNo9~ob3MOvWsiKVCee5xjmSYRNFTqUdT48GXKEHLA4N9OFGDkDZvSTpyeFGHH6Q-uq41ofEpfxJldNVE~cql8tXP0-g7XZBpiV1gzIvhCl09VX-uec8~WBXuhUQ1GJzhjlV5s7QlwSWofMFUFcysPGQC3GcXno31lOUY2f9QPQnIF0RLWOnaRs8qsH7I9fIHbNwFFgU~NIxtr~96g6WW-5vKHtrdqA0cDC2Yvyi9OXBX2752IsiHohHs7ZSKkVfOq5~1GWCoZ~AFvhdYN6I0rvRCcX6qzC63NYXGlEfj19-yrzQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      price: 35,
      discount: 2,
      discountPrice: 35 - (2 / 100) * 35,
      quantity: 1,
      ratting : [1,2,3,4],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 8,
      name: "Microsoft Excel - Excel from Beginner to Advanced",
      author: "Kyle pew",
      image: "https://img-c.udemycdn.com/course/240x135/793796_0e89.jpg?Expires=1622390727&Signature=B1YphQbft49f04V35OKt-zu2zir0uZJf2azU0OP6OVrp~oj7LbGKD9wJA6h0pKesoftn7GYYCxd9vgnpMAVnXmFQwUt6GFkMTrWf3~e9j2aA1E40yY3zfVRLXY32vFcHmnnZ1ZxaCfvkAAkx-MKor-3u9iDHhEuTODO0AkX2-4DJu-2SJmNcLUPODBexTph4WJvdO5DYr58PGbSv3r4IdmbUv~CqcCRSLqRiH6ECnVy5Nj7EbDjt9BgnbKusC2V3Ol33x5iithakIZRb~TYZieLfqcYF-04C2L2xL4Q~965C-Ot5KqGkLhiQSmhLVqTvFROsxYwog~CXa4G1ky-4tQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      price: 80,
      discount: 7,
      discountPrice: 80 - (7 / 100) * 80,
      quantity: 1,
      ratting : [1,2,3,4,5],
      desc: "Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365",
    },
    {
      id: 9,
      name: "Go Java Full Stack with Spring Boot and React",
      author: "28min Club",
      image: "https://img-c.udemycdn.com/course/240x135/2271790_dbfb_5.jpg?Expires=1622385097&Signature=ZXp1ddrASSulAb7q~xcTirC4rNW07jHe~uV7VWNrDhXkhSGAo-qD3yUIBTcmmXVjE0DfNAvBR1TaiR5jd7kiewt-29X~ZhSEdTMORvR4ZWSLfCGCcn1DOtIH3YYefe-u5DgUKUSxIskPFBblUdtwj2OTYiWm0t-BeF4mrv7tKBWDnsVUQPYIyX-tF8ODndgHkTUOq4xtFSiiemVcztThSHQFafPdhqrWkXGOXXgbvRYuGenXnYLfb8CgX7QbXb2dE-8XuZWfio7qpI2QhwANCymXWyGdnJ4MZjAKt7ijSieVrFbXh7o8yUNexOyNrMTYH7FHwDKnOKIPzhrs2sBevA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      price: 95,
      discount: 4,
      discountPrice: 95 - (4 / 100) * 95,
      quantity: 1,
      ratting : [1,2,3,4,5],
      desc: "Build Your First Java Full Stack Application with React & Spring Boot. Become a Java Full Stack Java Web Developer Now!",
    },
    {
      id: 10,
      name: "Unit Testing for Typescript & NodeJs Developers with Jest",
      author: "Alex",
      image: "https://img-b.udemycdn.com/course/240x135/3564139_5c5d_6.jpg?secure=bYx0zeHxMqn_22PLk4s7bA%3D%3D%2C1622397233",
      price: 120,
      discount: 3,
      discountPrice: 120 - (3 / 100) * 120,
      quantity: 1,
      ratting : [1,2,3,4,5],
      desc: "Master unit testing with NodeJs, Typescript, Jest and React. Write top quality Typescript and NodeJs software with Jest",
    },
  ],
  product: {},
};
const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
