

export const articleCard = (articleObject) => {
    return `
    <div id="articleId--${articleObject.id}">
    <h3>Article Title: ${articleObject.title}</h3>
    <p>Synopsis: ${articleObject.synopsis} </p>
    <p> Article address: ${articleObject.url}</p>
    <button id="editArticle--${articleObject.id}">Edit</button>
    <button id="deleteArticle--${articleObject.id}">Delete</button>
    </div>
    `
}
