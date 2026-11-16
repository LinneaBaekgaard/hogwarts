import * as z from "zod";

const UpdateCourseDto = z.object({
    id: z.int().min(0),
    name: z.string(),
    teacher: z.string(),
    students: z.array(z.string()),
})

export default UpdateCourseDto;