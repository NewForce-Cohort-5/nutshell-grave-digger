import {LogOutButton} from "./auth/LogoutButton.js"
import { EventsList } from "./events/EventList.js"
import { Header } from "./hdr/header.js"
import { MessageList } from "./Messages/MessageLIst.js"
import { articleList } from "./newsArticles/ArticleList.js"

export const Nutshell = () => {
Header()
    LogOutButton()
      // Render all your UI components here
    EventsList()
    articleList()
    MessageList()
}