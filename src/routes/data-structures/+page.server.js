import { dataStructs } from "./data";

export function load() {
    return {
        structs: dataStructs.map((struct) => ({
            id: struct.id,
            name: struct.name,
            wiki: struct.wiki,
            description: struct.description,
            example: struct.example
        }))
    }
}