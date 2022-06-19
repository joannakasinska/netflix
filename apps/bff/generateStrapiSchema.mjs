import { generate } from '@graphql-codegen/cli';
import { config } from 'dotenv';

config({ path: '.env.local' });

await generate(
    {
        schema: `http://localhost:1337/graphql`,
        generates: {
            [process.cwd() + '/generated/strapiSchema.d.ts']: {
                plugins: ['typescript']
            }
        }
    },
    true
);
