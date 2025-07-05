// src/data/roomData.js

// Archivo corregido y actualizado con la información real del Hotel Fontana Bogotá - Corferias
// Se han añadido 5 tipos de habitación reales, con sus comodidades específicas y galerías de imágenes representativas.

const roomsData = [
  {
    id: 1140919301, // ID real de Booking para la Habitación Doble Estándar
    name: 'Habitación Doble Estándar',
    description: 'Nuestra habitación Doble Estándar es la elección perfecta para parejas o viajeros que buscan comodidad y funcionalidad. Cuenta con una cama doble grande y un diseño moderno y acogedor.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663550/521700895_vew7vj.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663602/521721574_cldyoe.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663605/521700863_alnjlk.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664136/521700774_og9llr.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664182/521700888_cgcae2.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664182/521700828_pa5lpw.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664182/521700803_akhmev.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664183/521700851_vk5gvx.jpg',
    ],
    amenities: ['1 cama doble grande', 'TV de pantalla plana', 'Baño privado', 'Ducha y secador de pelo', 'Caja fuerte', 'Teléfono'],
    price: 175000, // Precio estimado en COP
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663550/521700895_vew7vj.jpg', // Imagen principal
  },
  {
    id: 1140919302, // ID real de Booking
    name: 'Habitación Doble Estándar (2 Camas)',
    description: 'Perfecta para amigos o colegas, esta habitación cuenta con dos cómodas camas individuales. Equipada con TV de pantalla plana y un baño privado completo para asegurar una estancia confortable.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04383_syofmx.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665950/DSC04365_x8xl7e.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04376_xkpp1d.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666311/DSC04389_k5xjv2.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666312/DSC04391_n6crte.jpg',
    ],
    amenities: ['2 camas individuales', 'TV de pantalla plana', 'Baño privado con ducha', 'Canales vía satélite', 'Caja fuerte', 'Secador de pelo'],
    price: 195000, // Precio estimado en COP
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04383_syofmx.jpg', // Imagen principal
  },
  {
    id: 1140919305, // ID real de Booking
    name: 'Habitación Individual Estándar',
    description: 'Ideal para el viajero solo, esta habitación compacta y funcional ofrece una cama cómoda y todas las comodidades esenciales para una estancia productiva y placentera.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666667/DSC04426_dsfpjd.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666668/DSC04435_vbgpq3.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666667/DSC04400_a819ca.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666666/DSC04395_xvotsx.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666311/DSC04389_k5xjv2.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666312/DSC04391_n6crte.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666668/DSC04438_h1blbg.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664136/521700774_og9llr.jpg',
    ],
    amenities: ['1 cama individual', 'TV de pantalla plana', 'Baño privado', 'Caja fuerte', 'Escritorio', 'Teléfono'],
    price: 150000, // Precio estimado en COP
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666667/DSC04426_dsfpjd.jpg', // Imagen principal
  },
  {
    id: 1140919304, // ID real de Booking
    name: 'Habitación Doble Deluxe con Bañera',
    description: 'Disfruta de un extra de confort en nuestra habitación Deluxe. Más espaciosa y elegante, cuenta con una cama doble grande y una relajante bañera, ideal para desconectar después de un día en la ciudad.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667098/DSC04412_y8dsnu.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665948/DSC04354_lsvqzc.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667099/DSC04423_ygiyvy.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665949/DSC04361_rfuj2n.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665950/DSC04365_x8xl7e.jpg',
    ],
    amenities: ['Bañera', 'Cama doble grande', 'Artículos de aseo gratis', 'TV de pantalla plana', 'Baño privado', 'Caja fuerte'],
    price: 250000, // Precio estimado en COP
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667098/DSC04412_y8dsnu.jpg', // Imagen principal
  },
  {
    id: 1140919303, // ID real de Booking
    name: 'Suite Deluxe',
    description: 'Experimenta el máximo lujo en nuestra Suite Deluxe. Este espacioso refugio ofrece una cama extragrande y una bañera para una estancia verdaderamente inolvidable y confortable.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04331_vycdgh.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04335_vl0egu.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04340_by2iak.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04347_zxru1r.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04345_pc33zf.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665948/DSC04354_lsvqzc.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665949/DSC04361_rfuj2n.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665950/DSC04365_x8xl7e.jpg',
    ],
    amenities: ['Bañera', 'Cama doble extragrande', 'Vistas a un patio interior', 'TV de pantalla plana', 'Baño privado', 'Caja fuerte'],
    price: 380000, // Precio estimado en COP
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04331_vycdgh.jpg', // Imagen principal

  },
];

export default roomsData;