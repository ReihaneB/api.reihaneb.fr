export default ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10, // Default is 5
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
          secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
        },
        region: env('SCALEWAY_REGION'), // e.g "fr-par"
        endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "https://s3.fr-par.scw.cloud"
        params: {
          Bucket: env('SCALEWAY_BUCKET'),
        },
      },
    },
  },
});
