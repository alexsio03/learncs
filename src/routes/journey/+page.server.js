import { classes } from "./data";

export function load() {
    return {
        courses: classes.map((course) => ({
            id: course.id,
            year: course.year,
            name: course.className,
            description: course.classDescription,
            experience: course.experience,
            experienceDescription: course.experienceDescription,
        }))
    }
}