import Image1 from '@/public/about-5.jpg';
import Image2 from '@/public/about-6.jpg';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center'>
      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          Welcome to MyHotel
        </h1>

        <div className='space-y-8'>
          <p>
            Where travel, joy and comfortable living blend seamlessly. In the
            heart of cosmopolis of London, this is your home away from home. But
            it&apos;s not just about the luxury rooms-studios. It&apos;s about
            the experience of traveling with family or friends and the comfort
            of having everything in your plate in a short time.
          </p>
          <p>
            Our 8 luxury studios provide a cozy base, but the real freedom and
            privacy you&apos;ll find in large studio properties without being
            packed in a common hotel space. Sightseeing, museums, parks, events,
            food and nightlife just short distance out of your door
          </p>
          <p>
            This is where memorable moments are made, by the river Thames. Visit
            St Paul&apos;s Cathedral, Tower bridge and much more places
            following our tours and brochure.
          </p>
        </div>
      </div>

      <div className='relative col-span-2 aspect-square'>
        <Image
          src={Image1}
          alt='Family sitting around a fire pit in front of cabin'
          className='object-cover'
          fill
        />
      </div>

      <div className='relative col-span-2 aspect-square'>
        <Image
          src={Image2}
          alt='Family that manages The Wild Oasis'
          className='object-cover'
          fill
        />
      </div>

      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          Managed by our family since 1962
        </h1>

        <div className='space-y-8'>
          <p>
            Since 1962, MyHotel has been a cherished family-run retreat. Started
            by our grandparents, this haven has been nurtured with love and
            care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence true hospitality,
            blending the timeless beauty of London city with the personal touch
            only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at
            MyHotel soon, where tradition meets luxury, and every visit feels
            like coming home.
          </p>

          <div>
            <a
              href='/cabins'
              className='inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
            >
              Explore our luxury studios
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
