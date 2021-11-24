let articleArray = []

export const useArticle = () => {
    return articleArray.slice()
}

export const getArticle = () => {
    return fetch('http://localhost:8088/articles')
        .then(unparcedData => unparcedData.json())
        .then(parcedData => {
            articleArray = parcedData
        })
}

export const saveArticle = (saveArt) => {
    return fetch('http://localhost:8088/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveArt)
    })
    .then(getArticle)
}

export const deleteArticle = (deleteArt) => {
    return fetch(`http://localhost:8088/articles/${deleteArt}`, {
    method: "DELETE"
    })
}

export const updateNote = (editArt) => {

    return fetch(`http://localhost:8088/articles/${editArt.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editArt)
    })

}