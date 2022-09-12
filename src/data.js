module.exports = function () {
  var data = {
    hotel_owners: [
      {
        id: 1,
        username: "PaoloOwner",
        password: "qw63heyw",
        first_name: "Paolo",
        last_name: "Pinzas",
        email: "paolo@gmail.com",
      },
      {
        id: 2,
        username: "LuisHotelero",
        password: "fj437h33",
        first_name: "Luis",
        last_name: "Diaz",
        email: "luis@gmail.com",
      },
      {
        id: 3,
        username: "Pedro123",
        password: "ndy4682hn2",
        first_name: "Pedro",
        last_name: "Coral",
        email: "pedro@gmail.com",
      },
      {
        id: 4,
        username: "FernandoADM",
        password: "3j2g3u332",
        first_name: "Fernando",
        last_name: "Flores",
        email: "fernando@gmail.com",
      },
    ],
    hotels: [
      {
        id: 1,
        hotel_owner_id: 1,
        name: "Hotel Cielo",
        number_of_stars: "2 estrellas",
        average_price: 200,
        contact_number: 987345117,
        province: "Cuzco",
        address: "Jr. Sacsayhuaman 123"
      },
      {
        id: 2,
        hotel_owner_id: 2,
        name: "Hotel Estrella Roja",
        number_of_stars: "1 estrella",
        average_price: 50,
        contact_number: 985523517,
        province: "Lima",
        address: "Jr. Naranjas 777"
      },
      {
        id: 3,
        hotel_owner_id: 3,
        name: "Gran Hotel El Paraiso",
        number_of_stars: "5 estrellas",
        average_price: 500,
        contact_number: 972666333,
        province: "Trujillo",
        address: "Calle Viru 876" 
      },
      {
        id: 4,
        hotel_owner_id: 4,
        name: "Hotel Las Brisas",
        number_of_stars: "2 estrellas",
        average_price: 250,
        contact_number: 967645617,
        province: "Cañete",
        address: "Jr. Lunahuana 543"
      },
    ],
    resources: [
      {
        id: 1,
        hotel_owner_id: 1,
        resoruce_name: "Toallas",
        resoruce_type: "Objetos de baño",
        stock: 200
      },
      {
        id: 2,
        hotel_owner_id: 1,
        resoruce_name: "Escobas",
        resoruce_type: "Limpieza",
        stock: 50
      },
      {
        id: 3,
        hotel_owner_id: 4,
        resoruce_name: "Jabon Liquido",
        resoruce_type: "Objetos de baño",
        stock: 50
      },
      {
        id: 4,
        hotel_owner_id: 3,
        resoruce_name: "Sachets de Mantequilla",
        resoruce_type: "Desayuno",
        stock: 100
      },
    ],
    employees: [
      {
        id: 1,
        hotel_owner_id: 1,
        first_name: "Juan",
        last_name: "Quispe",
        dni: 78226382,
        email: "juan@hotmail.com",
        photo: "example_url",
        job: "Conserje",
      },
      {
        id: 2,
        hotel_owner_id: 2,
        first_name: "Luis",
        last_name: "Villar",
        dni: 38220188,
        email: "luis@hotmail.com",
        photo: "example_url",
        job: "Administrador",
      },
      {
        id: 3,
        hotel_owner_id: 3,
        first_name: "Emilio",
        last_name: "Mamani",
        dni: 45224482,
        email: "emilio@hotmail.com",
        photo: "example_url",
        job: "Cocinero",
      },
      {
        id: 4,
        hotel_owner_id: 4,
        first_name: "Rocio",
        last_name: "Rivera",
        dni: 13426552,
        email: "rocio@hotmail.com",
        photo: "example_url",
        job: "Administradora",
      },
    ],
    hotel_tasks: [
      {
        id: 1,
        employer_id: 1,
        name: "Limpieza cuarto 200",
        description: "Limpiar toda la habitacion y el baño, recoger la basura y cambiar la ropa de cama",
        is_finished: false,
      },
      {
        id: 2,
        employer_id: 2,
        name: "Verificar reservas",
        description: "Verificar todas las reservas que hicieron al hotel",
        is_finished: true,
      },
      {
        id: 3,
        employer_id: 3,
        name: "Preparar desayuno",
        description: "Cocinar el desayuno de hoy: Pan con huevo revuelto y jugo de piña",
        is_finished: false,
      },
      {
        id: 4,
        employer_id: 4,
        name: "Verificar llegada de recursos",
        description: "Esperar que los repartidores lleguen con los recursos de limpieza",
        is_finished: true,
      },
    ],
  };

  return data;
};
