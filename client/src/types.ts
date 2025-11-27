export interface Task {
    id: number,
    name: string,
    description: string,
    status: "completed" | "in-progress" | "wont-do",
    icon: string
}

export interface Board {
    id: number,
    name: string, 
    description?: string,
    tasks: Task[]
}

