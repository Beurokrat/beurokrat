"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Input } from "../_components/shadui/input";
import { Textarea } from "../_components/shadui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../_components/shadui/card";
import { Label } from "../_components/shadui/label";
import { Button } from "../_components/shadui/button";
import { CheckCheck, Trash2, LoaderPinwheel } from "lucide-react";
import { Toaster } from "../_components/shadui/sonner";
import { toast } from "sonner";
import { Badge } from "../_components/shadui/badge";
import PaginationControls from "../_components/pagination-control";

interface Work {
    id: number;
    title: string;
    image: string;
    description: string;
    tag: string;
    link: string;
}

export default function WorksPage() {
    const [worksList, setWorksList] = useState<Work[]>([]);
    const [loading, setLoading] = useState(false);
    const [workFormData, setWorkFormData] = useState({ title: "", image: "", description: "", tag: "", link: "" });
    const [loadingWorks, setLoadingWorks] = useState(false);

    const [page, setPage] = useState(1);
    const [limit] = useState(6);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchWorks();
    }, [page]);

    const fetchWorks = async () => {
        setLoadingWorks(true);
        try {
            const response = await axiosInstance.get(`/works?page=${page}&limit=${limit}`);
            setWorksList(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching works:", error);
        } finally {
            setLoadingWorks(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setWorkFormData({ ...workFormData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.post("/works", workFormData);
            if (page !== 1) {
                setPage(1); // Reset to the first page after adding a new work
            }
            else {
                fetchWorks(); // Refresh the works list after adding a new work
            }
            setWorkFormData({ title: "", image: "", description: "", tag: "", link: "" });
            toast("Work added successfully.", { description: new Date().toLocaleString(), action: { label: <CheckCheck />, onClick: () => toast.dismiss() } });
        } catch (error) {
            console.log("Error adding work:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteWork = async (id: number) => {
        try {
            await axiosInstance.delete(`/works/${id}`);
            if (page !== 1) {
                setPage(1); // Reset to the first page after adding a new work
            }
            else {
                fetchWorks(); // Refresh the works list after adding a new work
            }
            toast("Work deleted.", { description: new Date().toLocaleString(), action: { label: <Trash2 />, onClick: () => toast.dismiss() } });
        } catch (error) {
            console.error("Error deleting work:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <Toaster />
            {loadingWorks ? (
                <div className="flex justify-center items-center h-screen">
                    <LoaderPinwheel className="animate-spin" size={80} />
                </div>
            ) : (
                <>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Add Work</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" value={workFormData.title} onChange={handleInputChange} required />
                                <Label htmlFor="image">Image URL</Label>
                                <Input id="image" name="image" value={workFormData.image} onChange={handleInputChange} required />
                                <Label htmlFor="tag">Tag</Label>
                                <Input id="tag" name="tag" value={workFormData.tag} onChange={handleInputChange} required />
                                <Label htmlFor="link">Link</Label>
                                <Input id="link" name="link" value={workFormData.link} onChange={handleInputChange} />
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" name="description" value={workFormData.description} onChange={handleInputChange} required />
                                <Button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Work"}</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {worksList?.length === 0 ? (
                            <p>No works found.</p>
                        ) : (
                            worksList?.map((work) => (
                                <Card key={work.id} className="relative">
                                    <CardHeader className="min-h-[110px]">
                                        <CardTitle>{work.title}</CardTitle>
                                        <Badge variant="outline" className="flex justify-center align-center items-center">{work.tag}</Badge>
                                        <Button variant="ghost"
                                            className="absolute top-[-6px] right-[-6px] hover:text-red-600 outline-none focus:outline-none"
                                            onClick={() => handleDeleteWork(work.id)}
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="rounded-lg overflow-hidden min-h-[240px]">
                                        <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-lg" />
                                        <div className="text-justify cursor-pointer">
                                            <p
                                                className={`line-clamp-2 ${work?.description.length > 100 ? "cursor-pointer" : ""}`}
                                                onClick={(e) => {
                                                    const target = e.currentTarget;
                                                    if (target.classList.contains("line-clamp-2")) {
                                                        target.classList.remove("line-clamp-2");
                                                    } else {
                                                        target.classList.add("line-clamp-2");
                                                    }
                                                }}
                                            >
                                                {work?.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center">
                                        <Button onClick={() => window.open(work.link, "_blank")} disabled={!work.link}>View Link</Button>
                                    </CardFooter>
                                </Card>
                            ))
                        )}
                    </div>

                    <div className="flex justify-center mt-6">
                        <PaginationControls
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
