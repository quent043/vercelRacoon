import {
  GrantAccessParams,
  IExecDataProtector,
  getWeb3Provider as getProtectorProvider,
} from '@iexec/dataprotector';
import { Contact, IExecWeb3mail, getWeb3Provider as getMailProvider } from '@iexec/web3mail';

export default async function protectMail() {
  console.log('protectMail');
  try {
    const privateKey = process.env.NEXT_PUBLIC_WEB3MAIL_PLATFORM_PRIVATE_KEY;

    if (!privateKey) {
      throw new Error('Private key is not set');
    }
    const web3Provider = getProtectorProvider(privateKey);
    // const web3Provider = getProtectorProvider(
    //   '005fb53c6c07d413e6466a2aef4f84e0219f19695047cf226312e66f53eb22ac',
    // );
    const dataProtector = new IExecDataProtector(web3Provider);
    console.log('Protecting data...');

    const protectedData = await dataProtector.protectData({
      name: 'TalentLayer email',
      data: {
        email: 'quent043@hotmail.com',
      },
    });
    console.log('protectedData', protectedData);

    // const authorizedUser = '0x89de0dd433bd1f6a4ec5dd2593f44b9dd4fad2f0';
    const authorizedUser = '0x86a86da3e48905f0ecbf788948ada2789669ee11';
    // const authorizedUser = '0x3D0c6A35DcD9AEB46b493cd6CC9Ace84583b7aE8';
    console.log('Address:', authorizedUser);
    const authorizedApp = process.env.NEXT_PUBLIC_WEB3MAIL_APP_ADDRESS;

    if (!authorizedApp) {
      throw new Error('Authorized app is not set');
    }

    const grantAccessArgs: GrantAccessParams = {
      protectedData: protectedData.address,
      authorizedApp,
      authorizedUser,
    };

    const grantedAccess = await dataProtector.grantAccess(grantAccessArgs);
    console.log('Granted access:', grantedAccess);
  } catch (error) {
    console.log('errorDebug', error);
  }
}

export const grantAccess = async (protectedDataAddress: string) => {
  console.log('grantAccess');
  const web3Provider = getProtectorProvider(
    process.env.NEXT_PUBLIC_WEB3MAIL_PLATFORM_PRIVATE_KEY as string,
  );
  const dataProtector = new IExecDataProtector(web3Provider);
  const authorizedUser = web3Provider.address;
  const authorizedApp = process.env.NEXT_PUBLIC_WEB3MAIL_APP_ADDRESS;

  if (!authorizedApp) {
    throw new Error('Authorized app is not set');
  }

  console.log('protectedDataAddress', protectedDataAddress);
  const grantAccessArgs: GrantAccessParams = {
    protectedData: protectedDataAddress,
    authorizedApp,
    authorizedUser,
  };

  const grantedAccess = await dataProtector.grantAccess(grantAccessArgs);
  console.log('grantedAccess', grantedAccess);
};

export const printContacts = async () => {
  console.log('printContacts');
  try {
    const privateKey = process.env.NEXT_PUBLIC_WEB3MAIL_PLATFORM_PRIVATE_KEY;
    console.log('privateKey', privateKey);

    if (!privateKey) {
      throw new Error('Private key is not set');
    }
    const web3Provider = getMailProvider(privateKey);
    // const web3Provider2 = (await account.connector?.getProvider()) as providers.ExternalProvider;
    // const dataProtector = new IExecDataProtector(web3Provider);
    const web3mail = new IExecWeb3mail(web3Provider);
    const contactList: Contact[] = await web3mail.fetchMyContacts();
    console.log('contactList', contactList);
  } catch (error) {
    console.log('errorDebug', error);
  }
};

export async function showProtectedData() {
  console.log('showProtectedData');
  try {
    const privateKey = process.env.NEXT_PUBLIC_WEB3MAIL_PLATFORM_PRIVATE_KEY;
    console.log('privateKey', privateKey);

    if (!privateKey) {
      throw new Error('Private key is not set');
    }
    const web3Provider = getProtectorProvider(privateKey);
    const dataProtector = new IExecDataProtector(web3Provider);

    const protectedData = await dataProtector.fetchProtectedData({
      owner: '0x3D0c6A35DcD9AEB46b493cd6CC9Ace84583b7aE8',
    });
    console.log('protectedData: ', protectedData);
  } catch (error) {
    console.log('errorDebug', error);
  }
}

export async function fetchGrantedAccess(protectedDataAddress: string[]) {
  console.log('fetchGrantedAccess');
  try {
    const privateKey = process.env.NEXT_PUBLIC_WEB3MAIL_PLATFORM_PRIVATE_KEY;
    console.log('privateKey', privateKey);

    if (!privateKey) {
      throw new Error('Private key is not set');
    }
    const web3Provider = getProtectorProvider(privateKey);
    const dataProtector = new IExecDataProtector(web3Provider);

    for (const address of protectedDataAddress) {
      const fetchGrantedAccess = await dataProtector.fetchGrantedAccess({
        protectedData: address,
      });
      console.log('fetchGrantedAccess: ', fetchGrantedAccess);
    }
  } catch (error) {
    console.log('errorDebug', error);
  }
}
