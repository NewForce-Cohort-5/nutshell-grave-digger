import { getArticle, useArticle } from "./ArticleData.js";
import { articleCard } from "./ArticleCard.js";
import { articleForm } from "./ArticleForm.js";

// const contentTarget = document.querySelector(".article-container")
//not working forget it!!

export const articleList = () => {
    getArticle()
        .then(() => {
            let articleArray = useArticle()
            let articleHTML = ""
    
         let userArticle = articleArray.filter(singleEvent => {
               const userId = sessionStorage.getItem('activeUser')
               console.log(userId)
               if(singleEvent.userId === +userId) {
                   return singleEvent.userId
               }
           })

           userArticle.sort((a, b) => {
            return b.time - a.time;
         })
            
        // if user is logged in
        // and this user matches user Id
        // if active user matches userId then print
        //get the username from session


        userArticle.forEach(articleObject => {
                articleHTML += articleCard(articleObject)
            })
            document.querySelector("#articles-list").innerHTML = `
                ${articleForm()}
                <h2>All of your favorite articles!</h2>
                ${articleHTML}
                `
        })

}