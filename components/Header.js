import Link from 'next/link';

export default function Header({ navList }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <div className="text-2xl dark:text-white text-center">
        <div className="flex gap-4">
          {navList.map((item) => {
            return (
              <Link key={item.name} href={item.link}>
                <a className="text-xl dark:text-white text-center">
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
