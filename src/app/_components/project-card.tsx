import React from 'react'

// Define a type for the props
interface ProjectProps {
    id: string
    title: string
}

// Use the defined type for the props in the component
const ProjectItem: React.FC<ProjectProps> = ({ id, title }) => {
    return (
        <div className="flex flex-row items-start py-3 border-gray-500 border-b">
            <h2 className='pr-[20px]'>{id}</h2>
            <p className="body-small">{title}</p>
        </div>
    )
}

export default ProjectItem
