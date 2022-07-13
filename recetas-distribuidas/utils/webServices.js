const urlApi = 'https://ad-backend.herokuapp.com/';

const urlWebServices = {
  loginUser: urlApi +"api/v1/users/login",
  createAccount: urlApi +"api/v1/users/createAccount",
  requestPasswordReset: urlApi +"api/v1/users/requestPasswordReset",
  passwordReset: urlApi +"api/v1/users/passwordReset",
  addAccountDetails: urlApi +"api/v1/users/addAccountDetails",
  
  createRecipe: urlApi +"api/v1/recipes/recipe",
  searchRecipes: urlApi +"api/v1/recipes/recipes",
  newReview: urlApi +"api/v1/recipes/recipe/review/",

  getFavoriteRecipes: urlApi +"api/v1/users/favoriteRecipe/",
  addFavoriteRecipe: urlApi +"api/v1/users/favoriteRecipe",
  deleteFavoriteRecipe: urlApi +"api/v1/users/favoriteRecipe",

}

export default urlWebServices;

