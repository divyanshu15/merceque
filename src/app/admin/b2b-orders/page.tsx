import prisma from "@/lib/prisma";
import { format } from "date-fns";

export const dynamic = 'force-dynamic';

export default async function AdminB2BOrdersPage() {
  const orders = await prisma.b2BOrder.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">B2B Orders Inquiry</h1>
      
      {orders.length === 0 ? (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-12 text-center text-neutral-500">
          No B2B orders received yet.
        </div>
      ) : (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-500">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Enquiry</th>
                  <th className="px-6 py-4">Organisation Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {orders.map((order: any) => (
                  <tr key={order.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{format(new Date(order.createdAt), "MMM d, yyyy")}</td>
                    <td className="px-6 py-4 font-medium">{order.name}</td>
                    <td className="px-6 py-4 text-neutral-500">
                      <a href={`mailto:${order.email}`} className="hover:underline hover:text-primary">{order.email}</a>
                    </td>
                    <td className="px-6 py-4">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
