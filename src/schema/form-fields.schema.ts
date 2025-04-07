import z from "zod";

export const formFieldsShema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .number({ invalid_type_error: "This field is required" })
    .optional(),
});
