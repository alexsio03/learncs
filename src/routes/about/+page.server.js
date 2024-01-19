import { bio, projects, coursework } from "./data";

export function load() {
	return {
		bio: bio,
		projects: projects,
		courses: coursework
	}
}
