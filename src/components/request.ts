/* eslint-disable no-console */
import axios from 'axios';

export const delegateCreateService = async (
  chainId: number,
  userId: string,
  userAddress: string,
  cid: string,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/create-service', {
      chainId,
      userId,
      userAddress,
      cid,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delegateUpdateProfileData = async (
  chainId: number,
  userId: string,
  userAddress: string,
  cid: string,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/update-profile-data', {
      chainId,
      userId,
      userAddress,
      cid,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delegateCreateOrUpdateProposal = async (
  chainId: number,
  userId: string,
  userAddress: string,
  serviceId: string,
  valuesRateToken: string,
  parsedRateAmountString: string,
  cid: string,
  convertExpirationDateString: string,
  existingProposalStatus?: string,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/create-update-proposal', {
      chainId,
      userId,
      userAddress,
      serviceId,
      valuesRateToken,
      parsedRateAmountString,
      cid,
      convertExpirationDateString,
      existingProposalStatus,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delegateReleaseOrReimburse = async (
  chainId: number,
  userAddress: string,
  profileId: string,
  transactionId: number,
  amount: string,
  isBuyer: boolean,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/release-reimburse', {
      chainId,
      userAddress,
      profileId,
      transactionId,
      amount,
      isBuyer,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delegateMintReview = async (
  chainId: number,
  userId: string,
  userAddress: string,
  serviceId: string,
  uri: string,
  valuesRating: number,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/mint-review', {
      chainId,
      userId,
      userAddress,
      serviceId,
      uri,
      valuesRating,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delegateMintID = async (
  chainId: number,
  handle: string,
  handlePrice: string,
  userAddress: string,
): Promise<any> => {
  try {
    return await axios.post('/api/delegate/mint-id', {
      chainId,
      handle,
      handlePrice,
      userAddress,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const sendWeb3mail = async (
  subject: string,
  body: string,
  addresses: string[],
): Promise<any> => {
  try {
    return await axios.post('/api/web3mail/send-mail-to-addresses?key=racoonKey', {
      emailSubject: subject,
      emailContent: body,
      addresses: addresses,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const activateCron = async (): Promise<any> => {
  try {
    // return await axios.post('/api/web3mail/platform-marketing?key=racoonKey', {
    //   emailSubject: 'Coucou',
    //   emailContent: 'Ca va ?',
    // });
    return await axios.post('/api/web3mail/review?key=racoonKey');
    // return await axios.post('/api/web3mail/new-service?key=racoonKey');
    // return await axios.post('/api/web3mail/new-service?key=racoonKey&sinceTimestamp=1688189019');
    // return await axios.post('/api/web3mail/fund-release?key=racoonKey&sinceTimestamp=1');
    // return await axios.post('/api/web3mail/proposal-validated?key=racoonKey&sinceTimestamp=1');
    // return await axios.post('/api/web3mail/new-proposal?key=racoonKey');
    // return await axios.post('/api/web3mail/new-proposal?key=racoonKey&sinceTimestamp=12345454');
    // return await axios.post('/api/web3mail/review?key=racoonKey&sinceTimestamp=12345454');
  } catch (err) {
    console.error(err);
    throw err;
  }
};
