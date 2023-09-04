# Network Requests

Using async and await, implement the necessary code to perform an HTTP POST request. To create a new post, use the following URL: [link](https://jsonplaceholder.typicode.com/posts) (Method: Post). The body of the request must contain a post object with the following information: title and Flag Completed. The post data must be transmitted following the compilation of a form.

Usando async y await, implemente el código necesario para realizar una solicitud HTTP POST. Para crear una nueva publicación, utilice la siguiente URL: [enlace](https://jsonplaceholder.typicode.com/posts) (Método: Post). El cuerpo de la solicitud debe contener un objeto de publicación con la siguiente información: título y Checkbox Completada. Los datos del puesto deben transmitirse tras la elaboración de un formulario.

  <script>
    const post = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

        if (!response.ok) {
          throw new Error(`Error al conectarse con el servidor: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

      } catch (error) {
        
      } finally {

      };
    };

    post();
  </script>


Sí, puedes realizar una solicitud HTTP POST utilizando async/await en JavaScript para enviar datos a un servidor. Aquí tienes un ejemplo de cómo podrías hacerlo utilizando la URL que proporcionaste:

```javascript
async function createNewPost() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const postData = {
    title: 'Título del post',
    completed: true // Cambia esto según tus necesidades
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error('Error al crear el post');
    }

    const newPost = await response.json();
    console.log('Nuevo post creado:', newPost);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llama a la función para crear un nuevo post
createNewPost();
```

En este código, primero definimos la URL a la que queremos enviar la solicitud POST y los datos del post que queremos crear. Luego, utilizamos `fetch` para enviar la solicitud POST con los datos en el cuerpo de la solicitud en formato JSON. Si la respuesta del servidor es exitosa, mostramos el nuevo post creado en la consola. Si hay algún error, lo manejamos y mostramos un mensaje de error en la consola.

Asegúrate de cambiar los valores de `title` y `completed` en el objeto `postData` según tus necesidades. También puedes personalizar la función según los requisitos específicos de tu aplicación.


```javascript
  // Obtén referencias a los elementos del formulario
    const form = document.getElementById('todo-form');
    const titleInput = document.getElementById('todo-title');
    const completedInput = document.getElementById('todo-completed');

    // Agregamos un evento de escucha para el envío del formulario
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario

      // Obtenemos los valores de los campos de entrada
      const title = titleInput.value;
      const completed = completedInput.checked;

      // Creamos un objeto con los datos del formulario
      const postData = {
        title: title,
        completed: completed
      };

      // Realizamos la solicitud HTTP POST utilizando fetch
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData) // Convertimos el objeto en formato JSON
        });

        // Verificamos si la solicitud fue exitosa
        if (response.ok) {
          console.log('Solicitud POST exitosa');
        } else {
          console.error('Error al realizar la solicitud POST');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
      }
    });
```

```javascript
    async function createNewPost() {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const postData = {
        title: 'Título del post',
        completed: true // Cambia esto según tus necesidades
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });

        if (!response.ok) {
          throw new Error('Error al crear el post');
        }

        const newPost = await response.json();
        console.log('Nuevo post creado:', newPost);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // Llama a la función para crear un nuevo post
    createNewPost();
```
