'use client'
import { useState, useEffect } from 'react'
import Container from '../_components/container'
import CareerItem from '../_components/career-item'
import Image from 'next/image'
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from '../_components/shadui/pagination'
import axios from 'axios'

function CareerList() {
    interface Career {
        id: string
        title: string
        position: string
        location: string
        description: string
        link: string
    }
    
    const [careerData, setCareerData] = useState<Career[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit] = useState(5) // Number of careers per page
    const [totalPages, setTotalPages] = useState(1)

    // Fetch careers from the API
    useEffect(() => {
        const fetchCareers = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/client/careers?page=${page}&limit=${limit}`)
                setCareerData(response.data.data)
                setTotalPages(response.data.totalPages)
            } catch (error) {
                console.error('Error fetching careers:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCareers()
    }, [page])

    return (
        <section className="my-[50px]">
            <Container>
                <div className="flex md:flex-row sm:flex-col items-start bg-[#121212] rounded-[38px] py-[40px] px-[28px]">
                    <Image
                        width={286}
                        height={144}
                        className="sm:hidden md:flex"
                        alt="Beurokrat is hiring now"
                        src={'/assets/img/careers_hiring.png'}
                    />
                    <Image
                        width={319}
                        height={63}
                        className="md:hidden sm:flex"
                        alt="Beurokrat is hiring now"
                        src={'/assets/img/careers_hiring_sm.png'}
                    />
                    <div className="flex flex-col md:ml-[80px]">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            careerData.map((i) => (
                                <CareerItem
                                    key={i.id}
                                    title={i.title}
                                    position={i.position}
                                    location={i.location}
                                    desc={i.description}
                                    link={i.link}
                                />
                            ))
                        )}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                    className={`cursor-pointer ${page === 1 && 'hidden'}`}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <PaginationItem key={i} className="cursor-pointer">
                                    <PaginationLink onClick={() => setPage(i + 1)} isActive={page === i + 1}>
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                    className={`cursor-pointer ${page === totalPages && 'hidden'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </Container>
        </section>
    )
}

export default CareerList
