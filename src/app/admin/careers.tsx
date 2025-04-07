"use client";

import { useState, useEffect } from "react";
import { Input } from "../_components/shadui/input";
import { Textarea } from "../_components/shadui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../_components/shadui/card";
import { Label } from "../_components/shadui/label";
import { Button } from "../_components/shadui/button";
import { CheckCheck, Trash2, LoaderPinwheel } from "lucide-react";
import { Toaster } from "../_components/shadui/sonner";
import { toast } from "sonner";
import { Badge } from "../_components/shadui/badge";
import axiosInstance from "@/utils/axiosInstance";
import PaginationControls from "../_components/pagination-control";

interface Career {
    id: number;
    title: string;
    position: string;
    location: string;
    description: string;
    link: string;
}

export default function CareersPage() {
    const [careerList, setCareerList] = useState<Career[]>([]);
    const [loading, setLoading] = useState(false);
    const [careerFormData, setCareerFormData] = useState({ title: "", position: "", location: "", description: "", link: "" });
    const [loadingCareers, setLoadingCareers] = useState(false);

    // Pagination state
    const [page, setPage] = useState(1);
    const [limit] = useState(6); // Number of careers per page
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchCareers();
    }, [page]); // Re-fetch when page changes

    const fetchCareers = async () => {
        setLoadingCareers(true);
        try {
            const response = await axiosInstance.get(`/careers?page=${page}&limit=${limit}`);
            setCareerList(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching careers:", error);
        } finally {
            setLoadingCareers(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCareerFormData({ ...careerFormData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.post("/careers", careerFormData);
            if (page === 1) {
                fetchCareers(); // Refresh the careers list after deleting a career
            }
            else { setPage(1) }
            setCareerFormData({ title: "", position: "", location: "", description: "", link: "" }); // Reset form data
            toast("Career opportunity added.", {
                description: new Date().toLocaleString(),
                action: {
                    label: <CheckCheck />,
                    onClick: () => toast.dismiss(), // Close the toast notification
                },
            });
        } catch (error) {
            console.log("Error adding career:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCareer = async (id: number) => {
        try {
            await axiosInstance.delete(`/careers/${id}`);
            if (page === 1) {
                fetchCareers(); // Refresh the careers list after deleting a career
            }
            else { setPage(1) }
            toast("Career opportunity deleted.", {
                description: new Date().toLocaleString(),
                action: {
                    label: <Trash2 />,
                    onClick: () => toast.dismiss(), // Close the toast notification
                },
            });
        } catch (error) {
            console.error("Error deleting career:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <Toaster />
            {loadingCareers ? (
                <div className="flex justify-center items-center h-screen">
                    <LoaderPinwheel className="animate-spin" size={80} />
                </div>
            ) : (
                <>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Add Career Opportunity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="title">Title / Position</Label>
                                    <Input id="title" name="title" value={careerFormData.title} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="position">Type</Label>
                                    <Input id="position" name="position" value={careerFormData.position} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="location">Location</Label>
                                    <Input id="location" name="location" value={careerFormData.location} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="link">Link</Label>
                                    <Input id="link" name="link" value={careerFormData.link} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" name="description" value={careerFormData.description} onChange={handleInputChange} required />
                                </div>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Adding..." : "Add Career"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Career List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {careerList?.length === 0 ? (
                            <p>No career opportunities found.</p>
                        ) : (
                            careerList?.map((career) => (
                                <Card key={career.id} className="relative">
                                    <CardHeader className="flex justify-between items-center overflow-hidden ">
                                        <CardTitle>{career.title}</CardTitle>
                                        <Badge variant="outline" className="w-[300px] flex justify-center align-center items-center">
                                            {career.position}
                                        </Badge>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDeleteCareer(career.id)}
                                            className="absolute top-[-6px] right-0 hover:text-red-600 outline-none focus:outline-none"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="flex flex-col space-y-2 min-h-40">
                                        <p>
                                            <strong>Location:</strong> {career.location}
                                        </p>
                                        <div className="text-justify cursor-pointer">
                                            <p
                                                className={`line-clamp-4 ${career?.description.length > 200 ? "cursor-pointer" : ""}`}
                                                onClick={(e) => {
                                                    const target = e.currentTarget;
                                                    if (target.classList.contains("line-clamp-4")) {
                                                        target.classList.remove("line-clamp-4");
                                                    } else {
                                                        target.classList.add("line-clamp-4");
                                                    }
                                                }}
                                            >
                                                {career?.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center">
                                        <Button onClick={() => window.open(career.link, "_blank")}>View Link</Button>
                                    </CardFooter>
                                </Card>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <PaginationControls
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages} />
                    </div>
                </>
            )}
        </div>
    );
}
