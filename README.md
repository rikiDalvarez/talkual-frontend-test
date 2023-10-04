# 🚀 Talkual Frontend Test
Bienvenido a la prueba de Frontend para optar al puesto de FullStack Developer dentro de la empresa TALKUAL.
Para poder hacer esta prueba, tienes que haber resuelto la prueba de Backend ya que se usará como API. 
Este proyecto inicial está hecho con [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) y usa las siguientes librerias:
- [Nuxt Strapi](https://strapi.nuxtjs.org/setup)
- [Boostrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

Este proyecto parte de una base donde en la página principal está el inicio de sesión de usuarios con esta funcionalidad hecha.
Para poder iniciar sesión usarás las credenciales del usuario registrado en la prueba de Backend. Cuando inicies sesión te llevará
a la página `orders` donde aqui entrarás en acción.
- **identificador**: user@demo.com
- **password**: User1234

## Descripción de la prueba
La prueba consiste en desarrollar en TypeScript las siguientes features.

### Feature 1:
Mostrar un listado de los pedidos (orders) devueltos por la api, cada pedido debe mostrar 
el `sku, type, quantity, shipping_firstname` y un botón que diga `Donate`.
Este listado debe estar filtrado por el tipo de pedido, con lo cual tendrás que tener un selector con el tipo
de pedido donde se pueda filtrar por `all`, `normal` y `donation`. Por defecto el filtro será `all`.

**Propuesta de diseño del listado de pedidos:**

![orders_page.png](assets%2Forders_page.png)

**Ejemplo de uso del filtro type = all:**

```
const { data } = await find<OrderListResponse>('orders', {
  populate: ['order_items', 'order_meta'] ,
  filters: {
    type: {}
  }
});
```

**Ejemplo de uso del filtro type = normal:**

```
const { data } = await find<OrderListResponse>('orders', {
  populate: ['order_items', 'order_meta'] ,
  filters: {
    type: { $eq: 'normal' }
  }
});
```

**Ejemplo de respuesta de la api:**
```
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "status": "pending",
        "type": "normal",
        "createdAt": "2023-10-02T18:19:33.657Z",
        "updatedAt": "2023-10-02T18:19:33.657Z",
        "order_items": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "quantity": 1,
                "createdAt": "2023-10-02T18:18:56.993Z",
                "updatedAt": "2023-10-02T18:18:56.993Z",
                "sku": "IM",
                "price": 25.91
              }
            }
          ]
        },
        "order_meta": {
          "data": {
            "id": 1,
            "attributes": {
              "shipping_postcode": "28005",
              "shipping_firstname": "User 1",
              "createdAt": "2023-10-02T18:18:42.421Z",
              "updatedAt": "2023-10-02T18:18:42.421Z"
            }
          }
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```
### Feature 2:
Consiste en hacer una donación de un pedido existente.
- Cuando el usuario haga click en el botón de donar, 
se tiene que abrir una modal o una nueva página con un selector para elegir código postal `(28005, 08001, 25250)`, un campo de texto
para escribir el nombre de la persona que se le hará la donación y un botón para enviar el formulario al endpoint que usted desarrolló en la prueba de backend.

- Cuando se envíe ésta información, el boton de donar debe desaparecer del pedido y los cambios de estados se deben ver reflejados en el pedido. 

La información enviada al endpoint /api/orders/:id/donate` tiene que seguir este formato:
```
{
  "order_meta": {
    "shipping_postcode": "08004",
    "shipping_firstname": "User firstname"
  }
}
```

**Propuesta de diseño del formulario de donación:**

![donate_form.png](assets%2Fdonate_form.png)

# Cosas a valorar
- Simplicidad en el código.
- Reutilización de componentes
- Aplicación de los principios SOLID.
- Se valorará el uso de Vuex o Pinia para gestionar el estado.
- Funcionamiento de la feature.
- Añadir tests de integración o unitarios al código.
- El uso que se hace de los commits para añadir los cambios.

# Como arrancar el proyecto
Use la versión LTS 18.18.0 de Node o la versión más actual.

Instalar dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

```

## Arrancar el servidor

Arrancar el servidor de desarrollo en la url `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

# Como entregar la prueba
Para entregar la prueba, haga un fork del proyecto en su repositorio de github y desarrolle la prueba.
Tiene para ello 7 días desde que se le envía la prueba. Una vez finalizado, envie un correo con el enlace de su proyecto
en github a luis.ramirez@talkualfoods.com con el asunto `Prueba Frontend Talkual`
