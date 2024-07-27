const { app } = require('@azure/functions');

app.http('user', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (req, context) => {
        const header = req.headers.get('x-ms-client-principal');
        const encoded = Buffer.from(header, 'base64');
        const decoded = encoded.toString('ascii');

        context.res = {
          body: {
            clientPrincipal: JSON.parse(decoded),
          },
        };
    }
});
