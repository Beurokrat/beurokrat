'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../_components/container'
import { ReactLenis } from 'lenis/dist/lenis-react'
import Clientile from '../contact/clientile'
import ContactUs from '../home/contact-cta'
import axios from 'axios'
import { Loader } from 'lucide-react'
import PaginationControls from '../_components/pagination-control'
function Work() {
    interface Project {
        id: string
        image?: string
        tag?: string
        title?: string
        description?: string
    }

    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit] = useState(4) // Number of projects per page
    const [totalPages, setTotalPages] = useState(1)

    // Fetch projects from the API
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/client/works?page=${page}&limit=${limit}`)
                setProjects(response.data.data)
                setTotalPages(response.data.totalPages)
            } catch (error) {
                console.error('Error fetching projects:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [page])

    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Container>
                <div className="mt-[150px] md:mb-[45px] flex sm:flex-col md:flex-row w-full md:justify-between md:items-end">
                    <h1 className="sm:text-[40px] md:text-[60px] ">Research Projects</h1>
                    <p className="text-[16px] md:w-[40%]">
                        Our work spans a wide range of fields, including vehicle safety, assistive technology, and health tracking
                        systems, demonstrating our commitment to improving lives through technology.
                    </p>
                </div>
                <div className="w-full md:flex mt-[60px] justify-end">
                    {loading ? (
                        <div className='flex justify-center items-center w-full h-[50vh]'>
                            <Loader className="animate-spin" size={40} />
                        </div>
                    ) : (<div className="w-fit grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            projects.map((pr) => (
                                <div
                                    key={pr.id}
                                    className="flex m-2 rounded-[20px] flex-col justify-between p-[20px] md:w-[435px] h-[auto] shadow-[0_0_25px_0] shadow-black/10"
                                >
                                    {pr?.image && (
                                        <div
                                            className={`w-full h-[260px] rounded-[14px] bg-center bg-cover bg-no-repeat shadow-[0_0_25px_0] shadow-black/5`}
                                            style={{ backgroundImage: `url(${pr.image})` }}
                                        >
                                            <div className="rounded-full bg-primary text-black text-[12px] px-2 py-1 m-2 w-fit">
                                                {pr.tag}
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-3">
                                        <h2 className="pb-[8px]">{pr?.title}</h2>
                                        <p className="pb-[8px] text-[13px]">{pr.description}</p>
                                    </div>
                                </div>
                            ))}

                    </div>)}
                </div>

                {/* Pagination */}
                {!loading && <div className="flex justify-center mt-6">
                    <PaginationControls
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages} />

                </div>}

                <Clientile />
            </Container>
            <ContactUs />
        </ReactLenis>
    )
}

export default Work
