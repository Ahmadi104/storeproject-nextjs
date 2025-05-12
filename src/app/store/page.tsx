import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductList } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";
// import { IProductItemProps,  } from "@/components/ProductItem";
interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}
async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "4";
  const title = (await searchParams).title ?? "";
  const results = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const data = (await results.json()) as IProductList;
  console.log(data);
  // const data = [
  //   {
  //     id: "1",
  //     title: "product 1",
  //     describtion: "product 1 description",
  //     price: 20,
  //     image:
  //       "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: "2",
  //     title: "product 2",
  //     describtion: "product 2 description",
  //     price: 30,
  //     image:
  //       "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
  //   },
  //   {
  //     id: "3",
  //     title: "product 3",
  //     describtion: "product 3 description",
  //     price: 40,
  //     image:
  //       "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
  //   },
  //   {
  //     id: "4",
  //     title: "product 4",
  //     describtion: "product 4 description",
  //     price: 50,
  //     image:
  //       "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  // ];
  return (
    <Container>
      {/* <h1 className="text-right py-4 text-bold">store</h1> */}
      <Search />
      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={data.pages} />
    </Container>
  );
}

export default Store;
