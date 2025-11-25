import { Client, Account, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('69083ef600310b5e420c');

export const account = new Account(client);
export { ID };

export async function getCurrentUser() {
    try {
        return await account.get();
    } catch (err) {
        return null;
    }
}
