import * as z from 'zod';

export const workItem = z.object({
  src: z.string(),
  alt: z.string(),
  id: z.string(),
  posted: z.coerce.date().optional(),
  hasStory: z.boolean().optional(),
});

export const works = z.array(workItem);
