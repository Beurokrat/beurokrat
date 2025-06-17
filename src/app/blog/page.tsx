'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../_components/container'
import { ReactLenis } from 'lenis/dist/lenis-react'
import Clientile from '../contact/clientile'
import ContactUs from '../home/contact-cta'
import axios from 'axios'
import { Loader, Verified } from 'lucide-react'
import PaginationControls from '../_components/pagination-control'

function BlogList() {
    interface BlogPost {
        id: string
        blogImage?: string
        category?: string
        title?: string
        excerpt?: string
    }

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit] = useState(6) // Number of blog posts per page
    const [totalPages, setTotalPages] = useState(1)

    const slugify = (text?: string) =>
        text ? text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphen
            .replace(/(^-|-$)+/g, '')     // remove leading/trailing hyphens
            : ''
    // Fetch blog posts from the API
    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/client/blogs?page=${page}&limit=${limit}`)
                console.log(response.data.data);

                setBlogPosts(response.data.data)
                setTotalPages(response.data.totalPages)
            } catch (error) {
                console.error('Error fetching blog posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogPosts()
    }, [page])

    return (
        <ReactLenis root options={{ lerp: 0.05 }}>
            <Container>

                <div className="mt-[150px] md:mb-[45px] ">
                    <h1 className="text-3xl font-bold text-gray-800">Blogs</h1>
                    <p className="text-gray-600 mt-2">Explore our latest articles and updates</p>
                </div>
                <div className="w-full md:flex mt-[60px] ">

                    {loading ? (
                        <div className='flex justify-center items-center w-full h-[50vh]'>
                            <Loader className="animate-spin" size={40} />
                        </div>
                    ) : (
                        <div className="w-fit grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex m-2 rounded-[20px] flex-col justify-between p-[20px] md:w-[380px] h-[auto] shadow-[0_0_25px_0] shadow-black/10"
                                >
                                    {post.blogImage
                                        && (
                                            <div
                                                className={`w-full h-[260px] rounded-[14px] bg-center bg-cover bg-no-repeat`}
                                                style={{
                                                    backgroundImage: `url(${post.blogImage
                                                        })`
                                                }}
                                            >
                                                <div className="flex rounded-full bg-primary text-black text-[12px] px-2 py-1 m-2 w-fit justify-between items-center">
                                                    <Verified size={15} /><div className='pl-2'>{post.category}</div>
                                                </div>
                                            </div>
                                        )}

                                    <div className="pt-3">
                                        <h2 className="pb-[8px]">{post?.title}</h2>
                                        <p className="pb-[8px] text-[13px]">{post.excerpt}</p>
                                    </div>
                                    <div className='flex justify-end items-right'>
                                        <a href={`/blog/${post.id}-${slugify(post?.title)}`}>
                                            <div className="pt-3 flex justify-end w-full cursor-pointer group">
                                                <div className=' group-hover:bg-blue-200 relative w-[150px] flex items-center justify-end rounded-full'>
                                                    <Image
                                                        height={60}
                                                        width={60}
                                                        alt="arrow"
                                                        src="/assets/img/icons/work_arrow.png"
                                                        className="transform transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-2 -rotate-90"
                                                    />
                                                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-black-100 text-sm">
                                                        Read More...
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {!loading && <div className="flex justify-center my-6">
                    <PaginationControls
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages} />
                </div>}

                {/* <Clientile /> */}
            </Container>
            <ContactUs />
        </ReactLenis>
    )
}

export default BlogList
