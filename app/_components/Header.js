import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

const Header = () => {
  return (
    <header className='fixed w-full border-b bg-primary-950  border-primary-900 px-8 py-5 z-50'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
