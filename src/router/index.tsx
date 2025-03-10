
import { FC } from 'react'
import { Routes, Route } from "react-router"

import MainLayout from "@/components/layout/MainLayout"

import About from "@/pages/About"
import Feedbacks from "@/pages/Feedbacks"
import Contact from "@/pages/Contact"
import Education from "@/pages/Education"

const MainRouter: FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="feedbacks" element={<Feedbacks />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default MainRouter