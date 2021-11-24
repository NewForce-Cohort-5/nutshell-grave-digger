import { updateNote, useArticle } from "./ArticleData.js";
import { articleList } from "./ArticleList.js";


export const articleEdit = (articleId) => {

   const articleArray = useArticle()
   const articleToEdit = articleArray.find(SingleEventListed => SingleEventListed.id === articleId)
   const contentTarget = document.querySelector(`#articleId--${articleId}`)

   contentTarget.innerHTML = `
   <section class="eventList-edit">
       <input class="form-control" type="textarea" id="article-title" value="${articleToEdit.title}">
       <input class="form-control" type="textarea" id="article-synopsis" value="${articleToEdit.synopsis}">
       <input class="form-control" type="textarea" id="article-url" value="${articleToEdit.url}">
       <button id="saveArticle--${articleId}">Save New Article</button> 
   </section>
   `
}

document.querySelector("#events-list").addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveArticle")){

        const editedArticle = {
            // userId: +sessionStorage.getItem("activeUser"),
            time: timeStamp,
            title: document.querySelector("#article-title").value,
            synopsis: document.querySelector("#article-synopsis").value,
            url: document.querySelector("#article-url").value
        }
        updateNote(editedArticle)
        .then(articleList)
    }
})
