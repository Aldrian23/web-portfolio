
import { FC } from 'react'
import { Routes, Route } from "react-router"

import MainLayout from "@/components/layout/MainLayout"

import About from "@/pages/About"
import Feedbacks from "@/pages/Feedbacks"
import Contact from "@/pages/Contact"
import Projects from "@/pages/Projects"

const MainRouter: FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="feedbacks" element={<Feedbacks />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default MainRouter