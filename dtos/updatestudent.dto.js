import * as z from "zod";

const UpdateStudentDto = z.object({
    id: z.int().min(0),
    name: z.string(),
    house: z.string(),
    year: z.int().min(1).max(7),
    birthday: z.string()
})

export default UpdateStudentDto;