module.exports = function () {
  var data = {
    users: [
      {
        id: 1,
        email: "paolo@gmail.com",
        password: "qw63heyw",
        first_name: "Paolo",
        last_name: "Pinzas",
        user_type: "Turista",
        phone_number: "936442816",
      },
      {
        id: 2,
        email: "luis@gmail.com",
        password: "8rj389rh",
        first_name: "Luis",
        last_name: "Villar",
        user_type: "Dueño de Hotel",
        phone_number: "935342813",
      },
    ],
    reservations:[
      {
        id:1,
        user:{
          id: 1
        },
        hotel: {
          id: 1
        },
        room: {
          id: 3
        },
        reservation_date: "17/09/2022",
        room_price: 150,
        status: "Completed"
      }
    ],
    hotels: [
      {
        id: 1,
        name: "Hotel Cielo",
        number_of_stars: "2 estrellas",
        average_price: 200,
        contact_number: 987345117,
        province: "Cuzco",
        address: "Jr. Sacsayhuaman 123",
        user: {
          id: 2,
        },
      },
    ],
    rooms:[
      {
        id: 1,
        number: 101,
        is_available: true,
        hotel: {
          id: 1
        }
      },
      {
        id: 2,
        number: 102,
        is_available: true,
        hotel: {
          id: 1
        }
      },
      {
        id: 3,
        number: 103,
        is_available: false,
        hotel: {
          id: 1
        }
      },
      {
        id: 4,
        number: 104,
        is_available: true,
        hotel: {
          id: 1
        }
      },
    ],
    resources: [
      {
        id: 1,
        hotel: {
          id: 1,
        },
        resoruce_name: "Toallas",
        resoruce_type: "Objetos de baño",
        stock: 200,
      },
      {
        id: 2,
        hotel: {
          id: 1,
        },
        resoruce_name: "Escobas",
        resoruce_type: "Limpieza",
        stock: 50,
      },
      {
        id: 3,
        hotel: {
          id: 1,
        },
        resoruce_name: "Jabon Liquido",
        resoruce_type: "Objetos de baño",
        stock: 50,
      },
      {
        id: 4,
        hotel: {
          id: 1,
        },
        resoruce_name: "Sachets de Mantequilla",
        resoruce_type: "Desayuno",
        stock: 100,
      },
    ],
    roles:[
      {
        id: 1,
        name_role: "Administrador",
      },
      {
        id: 2,
        name_role: "Conserje",
      },
      {
        id: 3,
        name_role: "Concinero",
      },
    ],
    employees: [
      {
        id: 1,
        hotel:{
          id: 1
        },
        first_name: "Juan",
        last_name: "Quispe",
        dni: 78226382,
        email: "juan@hotmail.com",
        photo: "example_url",
        role:{
          id: 2
        }
      },
      {
        id: 2,
        hotel:{
          id: 1
        },
        first_name: "Luis",
        last_name: "Villar",
        dni: 38220188,
        email: "luis@hotmail.com",
        photo: "example_url",
        role:{
          id: 1
        }
      },
      {
        id: 3,
        hotel:{
          id: 1
        },
        first_name: "Emilio",
        last_name: "Mamani",
        dni: 45224482,
        email: "emilio@hotmail.com",
        photo: "example_url",
        role:{
          id: 3
        }
      },
      {
        id: 4,
        hotel:{
          id: 1
        },
        first_name: "Rocio",
        last_name: "Rivera",
        dni: 13426552,
        email: "rocio@hotmail.com",
        photo: "example_url",
        role:{
          id: 1
        }
      },
    ],
    hotel_tasks: [
      {
        id: 1,
        employer:{
          id: 1
        },
        name: "Limpieza cuarto 200",
        description:
          "Limpiar toda la habitacion y el baño, recoger la basura y cambiar la ropa de cama",
        is_finished: false,
      },
      {
        id: 2,
        employer:{
          id: 2
        },
        name: "Verificar reservas",
        description: "Verificar todas las reservas que hicieron al hotel",
        is_finished: true,
      },
      {
        id: 3,
        employer:{
          id: 3
        },
        name: "Preparar desayuno",
        description:
          "Cocinar el desayuno de hoy: Pan con huevo revuelto y jugo de piña",
        is_finished: false,
      },
      {
        id: 4,
        employer:{
          id: 4
        },
        name: "Verificar llegada de recursos",
        description:
          "Esperar que los repartidores lleguen con los recursos de limpieza",
        is_finished: true,
      },
    ],
  };

  return data;
};
