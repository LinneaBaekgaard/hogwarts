import * as z from "zod";

const UpdateExamDto = z.object({
    id: z.int().min(0),
    student_id: z.int(),
    course_id: z.int(),
    grade_id: z.int()

})

export default UpdateExamDto;