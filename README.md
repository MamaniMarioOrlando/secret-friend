# Amigo Secreto 🎁

## Descripción 📖

Este es un proyecto web interactivo que permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para seleccionar un "Amigo Secreto".

El objetivo principal del proyecto es fortalecer habilidades en **lógica de programación** y **manipulación del DOM** con JavaScript.

---

## Funcionalidades ✨

- Agregar nombres de amigos a una lista.
- Evitar la duplicación de nombres.
- Mostrar la lista de amigos ingresados.
- Realizar un sorteo aleatorio para seleccionar un "Amigo Secreto".
- Mostrar el resultado del sorteo en pantalla.

---

## Tecnologías Utilizadas 🛠️

- **HTML**: Estructura del proyecto.
- **CSS**: Estilos y diseño visual.
- **JavaScript**: Lógica y manipulación del DOM.

---

## Instalación y Uso 🚀

1. Clona este repositorio:
   ```sh
   git clone https://github.com/MamaniMarioOrlando/secret-friend.git

   ```
2. Abre el archivo `index.html` en tu navegador o utiliza un servidor local como **Live Server** en VS Code.
3. Escribe nombres en el campo de entrada y presiona "Añadir".
4. Haz clic en "Sortear amigo" para seleccionar un amigo al azar.
5. Puedes eliminar nombres de la lista si es necesario.

---

## Explicación del Código 💡

### **1⃣ Agregar nombres a la lista**

La función `addFriend()` se encarga de:

- Validar que el campo de entrada no esté vacío.
- Verificar que el nombre no esté repetido.
- Agregar el nombre a la lista `friends`.
- Actualizar la lista en el DOM.

### **2⃣ Mostrar los nombres agregados**

La función `showName()` limpia y actualiza la lista en pantalla cada vez que se agrega un nuevo amigo.

### **3⃣ Evitar nombres duplicados**

La función `isEqualName(friends, friend)` revisa si el nombre ya está en la lista antes de agregarlo.

### **4⃣ Sortear un Amigo Secreto**

La función `sortearAmigo()` selecciona un nombre aleatorio de la lista y lo muestra en pantalla.


---

## Mejoras Futuras 🚀

- Implementar la opción de reiniciar la lista completa.
- Agregar estilos más dinámicos con CSS y animaciones.
- Crear una versión con almacenamiento local para guardar los amigos ingresados.
- Desarrollar una funcionalidad para asignar amigos secretos entre los participantes.
- Integrar un botón para eliminar nombres individuales de la lista.

---

## Autor ✍️

Proyecto desarrollado por **[Mamani Mario]** como práctica de lógica de programación y manipulación del DOM en JavaScript.



