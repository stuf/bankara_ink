import * as z from 'zod';
import { workItem } from '@/schemas/work';

export type WorkItem = z.output<typeof workItem>;
