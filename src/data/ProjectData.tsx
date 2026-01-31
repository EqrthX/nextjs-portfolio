import { ProjectItem } from "@/Interfaces/ProjectItem"

export const ProjectDatas: ProjectItem[] = [
    {
        id: 1,
        name: "Book University",
        link: "https://github.com/EqrthX/Book_University",
        description: "e-commerce second-hand textbook with Real-time chat",
        images: [
            "/DetectBehavior2.png",
            "/DetectBehavior1.png",
            "/DetectBehavior3.png",
        ],
        tech: ["JavaScript", "React", "Tailwindcss", "Express", "MySQL", "WebSocket"]
    },
    {
        id: 2,
        name: "Final Project WebApp Detect Behavior",
        link: "https://github.com/EqrthX/FinalProject_WebApp_Detectbehavior",
        description: "Web application detect behavior student in class room real time with Webcam",
        images: [
            "/DetectBehavior2.png",
            "/DetectBehavior1.png",
            "/DetectBehavior3.png",
        ],
        tech: ["JavaScript", "React", "Tailwindcss", "Ant-Design", "Python", "FastAPI", "Supabase", "WebSocket", "Ultralytics"]
    }
]
