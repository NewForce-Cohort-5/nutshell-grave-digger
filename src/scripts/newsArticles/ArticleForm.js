import { articleList } from "./ArticleList.js";
import { saveArticle, deleteArticle } from "./ArticleData.js";
// import { articleCard } from "./ArticleCard.js";


export const articleForm = () => {
    return `
    <section id="article-input-and-save">

    <input class="form-control" type="textarea" id="article-title" placeholder="Enter the article title">
    <input class="form-control" type="textarea" id="article-synopsis" placeholder="Enter the article synopsis">
    <input class="form-control" type="textarea" id="article-url" placeholder="Enter the article URL address">
    <button id="saveArticle">Save Article</button>
    
    </section>
    `
}

const contentTarget = document.querySelector("#articles-list")

contentTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveArticle") {

        const timeStamp = Math.floor(Date.now() / 1000)


        const newArticle = {
            userId: +sessionStorage.getItem("activeUser"), //get the userId from session
            time: timeStamp,
            title: document.querySelector("#article-title").value,
            synopsis: document.querySelector("#article-synopsis").value,
            url: document.querySelector("#article-url").value
        }
        console.log(newArticle)

        // document.querySelector("#article-title").value = ""
        // document.querySelector("#article-synopsis").value = ""
        // document.querySelector("#article-url").value = ""

        saveArticle(newArticle)
        .then(articleList)
    }
})


const contentTargetDelete = document.querySelector(".dashboard")

contentTargetDelete.addEventListener("click", (deleteEvent) => {
    if(deleteEvent.target.id.startsWith("deleteNote")) {
        const idToDelete = deleteEvent.target.id.split("--")[1]
        console.log(idToDelete)

        deleteArticle(idToDelete)
        .then(articleList)
    }
})

   