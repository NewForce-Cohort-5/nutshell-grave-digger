import { updateArticle, useArticle } from "./ArticleData.js";
import { articleList } from "./ArticleList.js";


export const articleEdit = (articleId) => {

   const articleArray = useArticle()
   const articleToEdit = articleArray.find(SingleEventListed => SingleEventListed.id === articleId)
   const contentTarget = document.querySelector(`#articleId--${articleId}`)

   contentTarget.innerHTML = `
   <section class="eventList-edit">
       <input class="form-control" type="textarea" id="article-title-edit" value="${articleToEdit.title}">
       <input class="form-control" type="textarea" id="article-synopsis-edit" value="${articleToEdit.synopsis}">
       <input class="form-control" type="textarea" id="article-url-edit" value="${articleToEdit.url}">
       <button id="editArticle--${articleId}">Save Editted Article</button> 
   </section>
   `
}

document.querySelector("#articles-list").addEventListener("click", (event) => {
    if(event.target.id.startsWith("editArticle")){
        const editedArticle = {
            userId: +sessionStorage.getItem("activeUser"),
            id: +event.target.id.split("--")[1], //splitting on edit save btn
            title: document.querySelector("#article-title-edit").value,
            synopsis: document.querySelector("#article-synopsis-edit").value,
            url: document.querySelector("#article-url-edit").value
        }
        console.log(editedArticle)
        updateArticle(editedArticle)
        .then(articleList)
    }
})
