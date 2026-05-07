// src/data/roomData.js

const roomsData = [
  {
    id: 1140919301, // ID para Habitación Estándar (Unificada)
    name: 'Habitación Estándar',
    description: 'Nuestra habitación Estándar es la elección perfecta para viajeros que buscan comodidad y funcionalidad. Ofrece un diseño moderno y acogedor con todas las facilidades necesarias para una excelente estancia.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663550/521700895_vew7vj.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663602/521721574_cldyoe.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663605/521700863_alnjlk.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751664136/521700774_og9llr.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666667/DSC04426_dsfpjd.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666668/DSC04435_vbgpq3.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666667/DSC04400_a819ca.jpg',
    ],
    amenities: ['Cama cómoda', 'TV de pantalla plana', 'Baño privado', 'Ducha y secador de pelo', 'Caja fuerte', 'Teléfono'],
    price: 175000, 
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751663550/521700895_vew7vj.jpg',
  },
  {
    id: 1140919302, 
    name: 'Habitación Estándar (2 Camas)',
    description: 'Perfecta para amigos o colegas, esta habitación cuenta con dos cómodas camas individuales. Equipada con TV de pantalla plana y un baño privado completo para asegurar una estancia confortable.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04383_syofmx.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665950/DSC04365_x8xl7e.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04376_xkpp1d.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666311/DSC04389_k5xjv2.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666312/DSC04391_n6crte.jpg',
    ],
    amenities: ['2 camas individuales', 'TV de pantalla plana', 'Baño privado con ducha', 'Canales vía satélite', 'Caja fuerte', 'Secador de pelo'],
    price: 195000, 
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751666310/DSC04383_syofmx.jpg',
  },
  {
    id: 1140919304, 
    name: 'Habitación Deluxe con Bañera',
    description: 'Disfruta de un extra de confort en nuestra habitación Deluxe. Más espaciosa y elegante, cuenta con una cama doble grande y una relajante bañera, ideal para desconectar después de un día en la ciudad.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667098/DSC04412_y8dsnu.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665948/DSC04354_lsvqzc.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667099/DSC04423_ygiyvy.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665949/DSC04361_rfuj2n.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665950/DSC04365_x8xl7e.jpg',
    ],
    amenities: ['Bañera', 'Cama doble grande', 'Artículos de aseo gratis', 'TV de pantalla plana', 'Baño privado', 'Caja fuerte'],
    price: 250000, 
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751667098/DSC04412_y8dsnu.jpg',
  },
  {
    id: 1140919303, 
    name: 'Suite Deluxe con Bañera',
    description: 'Experimenta el máximo lujo en nuestra Suite Deluxe con Bañera. Este refugio es un poco más grande que nuestras habitaciones estándar, ofreciendo un ambiente espacioso y elegante. Cuenta con un sofacama adicional para mayor versatilidad y confort, además de una hermosa vista a la calle.',
    imageUrls: [
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04331_vycdgh.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04335_vl0egu.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04340_by2iak.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04347_zxru1r.jpg',
      'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665947/DSC04345_pc33zf.jpg',
    ],
    amenities: [
      'Bañera', 
      'Vista a la calle', 
      'Sofacama', 
      'Closet', 
      'Escritorio', 
      'Poltrona', 
      'Soporte para equipaje', 
      'Minibar', 
      'Amenities', 
      'Toallas', 
      'Secador de cabello', 
      'Agua caliente', 
      'Parqueadero bajo disponibilidad', 
      'Llave digital', 
      'Acceso a zona de cardio', 
      'Desayuno', 
      'Señal DirecTv',
      'TV de pantalla plana', 
      'Baño privado', 
      'Caja fuerte'
    ],
    price: 380000, 
    imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751665946/DSC04331_vycdgh.jpg',
  },
];

export default roomsData;