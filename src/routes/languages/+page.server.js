import { languageData } from "./data";

export function load() {
    return {
        structs: languageData.map((struct) => ({
            id: struct.id,
            name: struct.name,
	    date: struct.date,
	    usage: struct.usage,
            description: struct.description,
        }))
    }
}
