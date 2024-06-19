import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest area',
};

const Page = async () => {
  const session = await auth();
  const firstName = session.user.name.split(' ')[0];
  return (
    <div data-cy='account-dashboard'>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Welcome, {firstName}
      </h2>
    </div>
  );
};

export default Page;
