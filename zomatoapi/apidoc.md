///Page1
* List of all cities
> http://localhost:2400/location

* List of all restaurant
> http://localhost:2400/restaurants

* Restaurants wrt City
> http://localhost:2400/restaurants?stateId=2
> http://localhost:2400/restaurants?mealId=5&stateId=2

* List of all MealType
> http://localhost:2400/mealType

///page 2
* Restaurants on the basis of MealType
> http://localhost:2400/restaurants?mealId=5

* Filter on the basis of meal type + cuisine Type
> http://localhost:2400/filter/3?cuisineId=1

* Filter on the basis of meal type + high cost + low cost
> http://localhost:2400/filter/1?hcost=600&lcost=300

* Sort on baise price where mealType exist
> http://localhost:2400/filter/4?sort=-1

* Pagination
> http://localhost:2400/filter/1?skip=9&limit=3

///page 3
* Details of the restaurant
> http://localhost:2400/details/12

* Menu wrt to restaurant
> http://localhost:2400/menu/7

///page4
* Place Order
* Details of Selected menu

//page 5
* View all orders / View all orders wrt to email
* Udpate order details
* Delete order