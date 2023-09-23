import Link from 'next/link';
import Heading from '@/components/Heading';

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews</p>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img src="/images/hollow-knight.jpg" alt="" width="320" height="180" className="rounded-t"></img>
            <h2 className="font-semibold font-orbitron py-1 text-center">Hollow-Knight</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img src="/images/stardew-valley.jpg" alt="" width="320" height="180" className="rounded-t"></img>
            <h2 className="font-semibold font-orbitron py-1 text-center">Stardew Valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}