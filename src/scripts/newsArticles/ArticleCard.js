

export const articleCard = (articleObject) => {
    return `
    <h3>Article Title: ${articleObject.title}</h3>
    <p>Synopsis: ${articleObject.synopsis} </p>
    <p> Article address: ${articleObject.url}</p>
    <button id="deleteNote--${articleObject.id}">Delete</button>
    `
}
