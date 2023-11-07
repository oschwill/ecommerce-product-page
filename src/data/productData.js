import productImageOneThumb from '../assets/images/image-product-1-thumbnail.jpg';

export const data = [
  {
    id: 1,
    company: 'SNEAKER COMPANY',
    productName: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    thumbnail: productImageOneThumb,
    fullPrice: 250.0,
    discount: 50,
    endPrice: function () {
      return this.fullPrice * (this.discount / 100);
    },
  },
];
