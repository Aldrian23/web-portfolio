import { FC } from 'react'
import { Routes, Route } from "react-router"

import MainLayout from "@/components/layout/MainLayout"

import About from "@/pages/About"
import Feedbacks from "@/pages/Feedbacks"
import Contact from "@/pages/Contact"
import Education from "@/pages/Education"
import Blogs from "@/pages/Blogs"
import BlogDetail from "@/pages/BlogDetail"

const MainRouter: FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="feedbacks" element={<Feedbacks />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:id" element={<BlogDetail />} />
            </Route>
        </Routes>
    )
}

export default MainRouter