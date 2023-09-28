import { Route, Routes } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import Message from "../Message/Message"
import About from "../About/About"

function HomeMainRoute(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    )
}
export default HomeMainRoute