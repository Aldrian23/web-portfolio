import { FC } from 'react'
import { Routes, Route } from "react-router"

import MainLayout from "@/components/layout/MainLayout"

import About from "@/pages/About"
import Feedbacks from "@/pages/Feedbacks"
import Contact from "@/pages/Contact"
import Education from "@/pages/Education"
import Blogs from "@/pages/Blogs"
import BlogDetail from "@/pages/BlogDetail"
import Experiences from "@/pages/Experiences"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"
import Certifications from "@/pages/Certifications"

const MainRouter: FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="experiences" element={<Experiences />} />
                <Route path="feedbacks" element={<Feedbacks />} />
                <Route path="contact" element={<Contact />} />
                <Route path="certifications" element={<Certifications />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:id" element={<BlogDetail />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectDetail />} />
            </Route>
        </Routes>
    )
}

export default MainRouter