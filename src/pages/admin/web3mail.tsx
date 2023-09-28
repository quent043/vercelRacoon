import { useWeb3Modal } from '@web3modal/react';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import Steps from '../../components/Steps';
import TalentLayerContext from '../../context/talentLayer';
import { Contact } from '@iexec/web3mail';
import useFetchMyContacts from '../../modules/Web3mail/hooks/useFetchMyContacts';
import { ContactListForm } from '../../components/Form/ContactSelectForm';
import UserNeedsMoreRights from '../../components/UserNeedsMoreRights';

function Web3mail() {
  const { user, loading } = useContext(TalentLayerContext);
  const { open: openConnectModal } = useWeb3Modal();
  // const contactList: Contact[] = useFetchMyContacts();
  const contactList: Contact[] = [
    {
      owner: 'première',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: 'Deuxième',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: 'Troisième',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: 'Quatrième',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cfkdjd9ace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cdedfcace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd45rdace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cdhu48ace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cdakcoace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cdelgpace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493czethhace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493chjrzxace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cgh478ace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35fgncaeb46b493cd6cc9ace84583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd6cc9ace84583eshg8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd6cc9ace8zercb7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd6cc9dffz4583b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd6cc9acdrgz83b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
    {
      owner: '0x3d0c6a35dcd9aeb46b493cd6cc9aceaefe43b7ae8',
      address: 'address',
      accessGrantTimestamp: '65164614646',
    },
  ];

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Steps />;
  }
  // if (!user.isAdmin) {
  //   return <UserNeedsMoreRights />;
  // }

  return (
    <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
      <div className=' -mx-6 -mt-6 '>
        <div className='flex py-2 px-6 items-center border-b w-full border-gray-700 mb-8'>
          <p className='text-2xl font-medium flex-1'>Send a Web3Mail</p>
        </div>
      </div>
      <ContactListForm contactList={contactList} />
    </div>
  );
}

export default Web3mail;
