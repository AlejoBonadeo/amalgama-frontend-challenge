1. Ver código en ./1-login

2. Asumo que usamos react-router-dom aunque eso depende del proyecto. No llego en el tiempo estipulado a crear el hook useAuthStore. Basicamente guarda el usuario y en caso de que exista despues los componentes PrivateRoute y PublicRoute(que deberian estar en la pagina de Routes, que tampoco llegue a hacer), redirigirán apropiadamente a donde deben dependiendo de si el usuario esta loggeado o no.
