import { Issuer, Client } from 'openid-client';

let client: Client | null = null;

export async function initializeOIDC(): Promise<Client> {
  try {
    const issuer = await Issuer.discover(process.env.OIDC_ISSUER as string);
    client = new issuer.Client({
      client_id: process.env.OIDC_CLIENT_ID as string,
      client_secret: process.env.OIDC_CLIENT_SECRET as string,
      redirect_uris: [process.env.OIDC_REDIRECT_URI as string],
      response_types: ['code'],
    });
    console.log('OIDC client initialized');
    return client;
  } catch (error) {
    console.error('Error initializing OIDC client:', error);
    throw error;
  }
}

export function getAuthorizationUrl() {
  if (!client) {
    throw new Error('OIDC client not initialized');
  }
  return client.authorizationUrl({
    scope: 'openid profile email',
  });
}

export async function handleCallback(code: string) {
  if (!client) {
    throw new Error('OIDC client not initialized');
  }
  const tokenSet = await client.callback(
    process.env.OIDC_REDIRECT_URI as string,
    { code }
  );
  const userInfo = await client.userinfo(tokenSet.access_token as string);
  return { tokenSet, userInfo };
}