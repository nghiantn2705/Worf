// import { GetProduct } from '@/app/api/products/route';

import { Products } from '@/service/products';

export default async function Home() {
  const products = await Products();
  return (
    <main className="flex flex-col">
      {products.map((items: any) => {
        return <span key={items.id}>{items.title}</span>;
      })}
    </main>
  );
}
