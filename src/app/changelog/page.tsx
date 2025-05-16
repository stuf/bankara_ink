/* tslint:disable */
'use client';

import { parse } from 'date-fns'
import * as z from 'zod';
import txt from '@/data/changelog.json'

type Message = {
  rev: number;
  author: string;
  date: Date;
}

type Asd = keyof Message;

const lookup = {
  Revision: 'rev',
  Author: 'author',
  Date: 'date',
}

type PossibleKeys = 'Revision' | 'Author' | 'Date'
type PossibleValues = 'rev' | 'author' | 'date'

// (window['fnParse' as any] as any) = parse;

export default function ChangelogPage() {
  const dateFmt = 'MMMM' // d, yyyy hh:mm:ss a'

  const parsed = txt
    .split('\n\n')
    .map(it => it.split('\n')
      .filter(x => x))
      .filter(x => x.length)

  const parsed2 = parsed.map(xs => {
    const rev: Record<string, any> = {};

    xs.forEach(x => {
      const ms = x.split(/^(\w+):\s+(.*)$/).filter(x => x)
      if (!(ms[0] && ms[1])) {
        return;
      }

      const k = ms[0] as PossibleKeys
      const v = ms[1]
      console.log({ k, v })

      if (lookup[k]) {
        rev[lookup[k]] = v;
      }

    })

    const asd = z.object({
      rev: z.coerce.number(),
      author: z.string(),
      date: z.string().transform(x => {
        try {
          const xcv = new Date()
          return parse(dateFmt, JSON.stringify(x.match(/\w+, (.*$)/)![1]), xcv)
        }
        catch (e) {

          console.error({ x, e })
        }
      })
    }).parse(rev)

    console.log(asd)
  })

    return <div>
    changelog

    <pre><code>{JSON.stringify(parsed, null, 2)}</code></pre>
  </div>
}