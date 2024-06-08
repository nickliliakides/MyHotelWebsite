'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get('capccity') ?? 'all';

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex border border-primary-800'>
      <Button
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All rooms
      </Button>
      <Button
        filter='sm'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter='md'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter='lg'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
};

const Button = ({ filter, handleFilter, activeFilter, children }) => (
  <button
    className={`px-5 py-2 hover:bg-primary-700 ${
      filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
    }`}
    onClick={() => handleFilter(filter)}
    tw=''
  >
    {children}
  </button>
);

export default Filters;
