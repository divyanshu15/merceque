import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-20 bg-neutral-50 dark:bg-neutral-900 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 p-6 flex flex-col">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Merceque Admin
          </Link>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          <Link 
            href="/admin/products" 
            className="px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 font-medium text-neutral-900 dark:text-neutral-100"
          >
            Products
          </Link>
          {/* Add more admin links here in the future */}
        </nav>
        <div className="mt-auto">
          <Link 
            href="/" 
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            &larr; Back to Main Site
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        {children}
      </main>
    </div>
  );
}
