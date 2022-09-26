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
    reservations: [
      {
        id: 1,
        room: {
          id: 3,
        },
        check_in: "17/09/2022 - 11:00 hrs",
        check_out: "19/09/2022 - 12:00 hrs",
        room_price: "S./ 150",
        status: "Completed",
      },
      {
        id: 2,
        room: {
          id: 1,
        },
        check_in: "20/09/2022 - 12:00 hrs",
        check_out: "24/09/2022 - 13:00 hrs",
        room_price: "S./ 350",
        status: "In Progress",
      },
      {
        id: 3,
        room: {
          id: 2,
        },
        check_in: "25/09/2022 - 10:00 hrs",
        check_out: "26/09/2022 - 12:00 hrs",
        room_price: "S./ 550",
        status: "Completed",
      },
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
    rooms: [
      {
        id: 1,
        number: 101,
        is_available: true,
        hotel: {
          id: 1,
        },
      },
      {
        id: 2,
        number: 102,
        is_available: true,
        hotel: {
          id: 1,
        },
      },
      {
        id: 3,
        number: 103,
        is_available: false,
        hotel: {
          id: 1,
        },
      },
      {
        id: 4,
        number: 104,
        is_available: true,
        hotel: {
          id: 1,
        },
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
    roles: [
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
        email: "juan@hotmail.com",
        role: "Administrador",
        first_name: "Juan",
        last_name: "Quispe",
        phone_number: 926225391,
        dni: 78226382,
        photo: "example_url",
      },
      {
        id: 2,
        email: "maria@hotmail.com",
        role: "Cocinero",
        first_name: "Maria",
        last_name: "De la Cruz",
        phone_number: 926225151,
        dni: 18224582,
        photo: "example_url",
      },
      {
        id: 3,
        email: "samuel@hotmail.com",
        role: "Conserje",
        first_name: "Samuel",
        last_name: "De Luque",
        phone_number: 966240611,
        dni: 74125302,
        photo: "example_url",
      },
      {
        id: 4,
        email: "ruben@hotmail.com",
        role: "Conserje",
        first_name: "Ruben",
        last_name: "Doblas",
        phone_number: 926225777,
        dni: 78120334,
        photo: "example_url",
      },
      {
        id: 5,
        email: "daarick@hotmail.com",
        role: "Cocinero",
        first_name: "Daarick",
        last_name: "Lujan",
        phone_number: 916555292,
        dni: 78256933,
        photo: "example_url",
      },
      {
        id: 6,
        email: "jessica@hotmail.com",
        role: "Cocinero",
        first_name: "Jessica",
        last_name: "Angeles",
        phone_number: 926621391,
        dni: 8422193422,
        photo: "example_url",
      },
    ],
    hotel_tasks: [
      {
        id: 1,
        employer: {
          id: 1,
        },
        name: "Limpieza cuarto 200",
        description:
          "Limpiar toda la habitacion y el baño, recoger la basura y cambiar la ropa de cama",
          status: "En proceso"
      },
      {
        id: 2,
        employer: {
          id: 2,
        },
        name: "Verificar reservas",
        description: "Verificar todas las reservas que hicieron al hotel",
        status: "En proceso"
      },
      {
        id: 3,
        employer: {
          id: 3,
        },
        name: "Preparar desayuno",
        description:
          "Cocinar el desayuno de hoy: Pan con huevo revuelto y jugo de piña",
          status: "En proceso"
      },
      {
        id: 4,
        employer: {
          id: 4,
        },
        name: "Verificar llegada de recursos",
        description:
          "Esperar que los repartidores lleguen con los recursos de limpieza",
          status: "En proceso"
      },
    ],
  };

  return data;
};
