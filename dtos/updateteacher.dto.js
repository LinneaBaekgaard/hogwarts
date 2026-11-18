import * as z from "zod";

const UpdateTeacherDto = z.object({
    id: z.int().min(0),
    name: z.string(),
    house_id: z.int().nullable(),
    employment_start: z.string(),
    currently_active: z.boolean(),
    deceased: z.boolean(),
})

export default UpdateTeacherDto;