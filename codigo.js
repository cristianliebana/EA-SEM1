// Función para cargar datos de la API
function cargarDatosDeAPI() {
    return fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API.');
        }
        return response.json();
      });
  }
  
  // Ejemplo de uso de map, reduce y filter en los datos de la API
  async function main() {
    
      const usuarios = await cargarDatosDeAPI();
  
      // Utilizar .map para obtener la calle y el numero de apartamento de todos los usuarios
      const direccion = usuarios.map((usuario) => {
        const direccionCompleta = `${usuario.address.street} ${usuario.address.suite}`;
        console.log('La dirección completa de',usuario.username,'es', direccionCompleta);
      
        return {
          direccionCompleta: direccionCompleta
        };
      });

      // Utilizar .reduce() para encontrar el email mas largo
      const emailMasLargo = usuarios.reduce((emailMasLargo, usuario) => {
      const email = `${usuario.email}`;
  
      if (email.length > emailMasLargo.length) {
        return email;
        } else {
        return emailMasLargo;
        }
      }, "");

console.log(`El email más largo es: ${emailMasLargo}`);
  
      // Utilizar .filter para obtener todos los numeros de telefono que empiecen por 1
      const usuariosConTelefono = usuarios.filter((usuario) => usuario.phone[0]== 1);
      for (const usuario of usuariosConTelefono) {
        console.log('El numero del usuario', usuario.username ,'empieza por 1 y su numero de telefono es:', usuario.phone);
      }
    } 

  main();