import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="">
      <Link
        className=""
        href="/"
      >
        <div className="">
        </div>
      </Link>
      <div className="">
        <NavLinks />
        <div className=""></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="">
            <PowerIcon className="" />
            <div className="">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
