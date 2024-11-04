import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  genre: z.string().min(1),
  format: z.string().min(1),
  country_made: z.string().min(1),
  unf: z.coerce.number().optional(),
  price: z.coerce.number().optional(),
  synopsis: z.string().optional(),
});

export type FormFields = z.infer<typeof formSchema>;
