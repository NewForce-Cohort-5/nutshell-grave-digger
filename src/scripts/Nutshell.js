import {LogOutButton} from "./auth/LogoutButton.js"
import { TaskForm } from "./tasks/TaskForm.js"
import { TaskList } from "./tasks/TaskList.js"
import { EventsList } from "./events/EventList.js"
import { Header } from "./hdr/header.js"
import { MessageList } from "./Messages/MessageLIst.js"
import { articleList } from "./newsArticles/ArticleList.js"

export const Nutshell = () => 
    LogOutButton()
      // Render all your UI components here
    Header()
    TaskList()
    EventsList()
    articleList()
    MessageList()
}
