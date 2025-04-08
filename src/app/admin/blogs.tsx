"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Input } from "../_components/shadui/input";
import { Textarea } from "../_components/shadui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/shadui/card";
import { Label } from "../_components/shadui/label";
import { Button } from "../_components/shadui/button";
import { Skeleton } from "../_components/shadui/skeleton";
import { CheckCheck, Loader, Trash2 } from "lucide-react";
import { Toaster } from "../_components/shadui/sonner";
import { toast } from "sonner";
import axiosInstance from "@/utils/axiosInstance";
import PaginationControls from "../_components/pagination-control";

interface Blog {
    id: number;
    title: string;
    content: string;
    blogImage?: string;
    category?: string;
}

export default function BlogPage() {
    const [blogList, setBlogList] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState({ title: "", content: "", blogImage: "", category: "" });
    const [loadingBlogs, setLoadingBlogs] = useState(false);

    // Pagination state
    const [page, setPage] = useState(1);
    const [limit] = useState(6); // Number of blogs per page
    const [totalPages, setTotalPages] = useState(1);

    // Fetch blogs
    const fetchBlogs = useCallback(async () => {
        setLoadingBlogs(true);
        try {
            const response = await axiosInstance.get(`/blogs?page=${page}&limit=${limit}`);
            setBlogList(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoadingBlogs(false);
        }
    }, [page, limit]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    // Handle input changes
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    // Handle form submission
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axiosInstance.post("/blogs", blogFormData);
            if (page === 1) {
                fetchBlogs();
            } else {
                setPage(1); // Reset to the first page to show the newly added blog
            }
            setBlogFormData({ title: "", content: "", blogImage: "", category: "" }); // Reset form data
            toast("Blog has been added.", {
                description: new Date().toLocaleString(),
                action: {
                    label: <CheckCheck />,
                    onClick: () => toast.dismiss(),
                },
            });
        } catch (error) {
            console.error("Error adding blog:", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle blog deletion
    const handleDeleteBlog = async (id: number) => {
        try {
            await axiosInstance.delete(`/blogs/${id}`);
            const updatedBlogList = blogList.filter((blog) => blog.id !== id);

            // If the current page becomes empty, go to the previous page
            if (updatedBlogList.length === 0 && page > 1) {
                setPage((prevPage) => prevPage - 1);
            } else if (updatedBlogList.length === 0 && page === 1 && totalPages > 1) {
                fetchBlogs();
            } else {
                setBlogList(updatedBlogList);
            }

            toast("Blog has been deleted.", {
                description: new Date().toLocaleString(),
                action: {
                    label: <Trash2 />,
                    onClick: () => toast.dismiss(),
                },
            });
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    // Memoized blog list rendering
    const renderedBlogList = useMemo(() => {
        if (blogList.length === 0) {
            return <p>No blogs found.</p>;
        }

        return blogList.map((blog) => (
            <Card key={blog.id} className="relative">
                <CardHeader className="flex justify-between items-center position-relative">
                    <CardTitle>{blog.title}</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="absolute top-[-6px] right-0 hover:text-red-600 outline-none focus:outline-none"
                    >
                        <Trash2 className="w-5 h-5" />
                    </Button>
                </CardHeader>
                <CardContent className="flex flex-col align-center justify-center space-y-2">
                    <div className="text-justify cursor-pointer">
                        <p
                            className={`line-clamp-2 ${blog?.content.length > 150 ? "cursor-pointer" : ""}`}
                            onClick={(e) => {
                                const target = e.currentTarget;
                                if (target.classList.contains("line-clamp-2")) {
                                    target.classList.remove("line-clamp-2");
                                } else {
                                    target.classList.add("line-clamp-2");
                                }
                            }}
                        >
                            {blog?.content}
                        </p>
                    </div>
                    {blog.blogImage ? (
                        <img
                            src={blog.blogImage}
                            alt="Blog"
                            className="mt-2 w-full h-40 object-cover rounded-md"
                            loading="lazy" // Lazy load images
                        />
                    ) : (
                        <Skeleton className="h-[125px] w-[100%] rounded-xl" />
                    )}
                </CardContent>
            </Card>
        ));
    }, [blogList, handleDeleteBlog]);

    return (
        <div className="container mx-auto p-6">
            <Toaster />
            {loadingBlogs ? (
                <div className='flex justify-center items-center w-full h-[50vh]'>
                <Loader className="animate-spin" size={40} />
            </div>
            ) : (
                <>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Add a Blog</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" name="title" value={blogFormData.title} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="content">Content</Label>
                                    <Textarea id="content" name="content" value={blogFormData.content} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="blogImage">Image URL</Label>
                                    <Input id="blogImage" name="blogImage" value={blogFormData.blogImage} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <Label htmlFor="category">Category</Label>
                                    <Input id="category" name="category" value={blogFormData.category} onChange={handleInputChange} required />
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Adding..." : "Add Blog"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Blog List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {renderedBlogList}
                    </div>

                    {/* Pagination using ShadCN */}
                    <div className="flex justify-center mt-6">
                        <PaginationControls page={page} setPage={setPage} totalPages={totalPages} />
                    </div>
                </>
            )}
        </div>
    );
}
