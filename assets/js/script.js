// creating function to call spoonacular and display results onto page

function recipeSource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/" + id + "/information?apiKey=d5f1707aa8a94f70a3fce40a554aebc6",
        success: function(res){
            document.getElementsById("recipeLink").innerhHTML = res.sourceUrl;
            document.getElementById("recipeLink").href=res.sourceUrl;
        }
    });
}
