#### This repository was created to reproduce the netlify + prisma + nextjs error:

```
{
message: "Query engine binary for current platform "rhel-openssl-1.0.x" could not be found. This probably happens, because you built Prisma Client on a different platform. (Prisma Client looked in "/var/task/netlify/functions/next_api_views/nextPage/chunks/query-engine-rhel-openssl-1.0.x") Searched Locations: /var/task/netlify/functions/.prisma/client /Users/abereghici/Development/nextjs-prisma-test/node_modules/@prisma/client /var/task/netlify/functions/next_api_views/nextPage /var/task/netlify/functions/next_api_views/nextPage/chunks /var/task/netlify/functions/next_api_views/nextPage/chunks /tmp/prisma-engines /var/task/netlify/functions/next_api_views/nextPage/chunks You already added the platforms "darwin", "rhel-openssl-1.0.x" to the "generator" block in the "schema.prisma" file as described in https://pris.ly/d/client-generator, but something went wrong. That's suboptimal. Please create an issue at https://github.com/prisma/prisma/issues/new"
}
```

#### The error can be seen here: https://next-prisma-test.netlify.app/api/views
