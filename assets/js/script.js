// creating function to call spoonacular and display results onto page

// This will call the source url where the recipe lives and display it on the page 
function recipeSource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/" + id + "/information?apiKey=d5f1707aa8a94f70a3fce40a554aebc6",
        success: function(res){
            document.getElementsById("recipeLink").innerhHTML = res.sourceUrl;
            document.getElementById("recipeLink").href=res.sourceUrl;
        }
    });
}


function generateRecipe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/search?apiKey=d5f1707aa8a94f70a3fce40a554aebc6&number=1&query="+q,
        success: function(res){
            document.getElementById("recipeCall").innerHTML = "<h3>" + res.results[0].title + "</h3><br><img src='" + res.baseUri + res.results[0].image + "'width='400' />";
            getsource(res.results[0].id)
        }
    });
}