import * as z from "zod";

const UpdateCourseDto = z.object({
    id: z.int().min(0),
    name: z.string(),
    teacher: z.string(),
    students: z.array(z.string()),
    type: z.string(),
    level: z.string(),
    year: z.int().min(1).max(7),
})

export default UpdateCourseDto;

// SPØRG PETER:
// kan man specificere dem yderligere, eller er det fint sådan? 