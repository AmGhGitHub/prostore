import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export type Product = {
  name: string;
  slug: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  stock: number;
  images: string[];
};

import Link from "next/link";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="h-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
            className="object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm font-medium">${product.rating} stars</p>
          {product.stock > 0 ? (
            <ProductPrice price={product.price} />
          ) : (
            <p className="text-destructive">Out of Stock!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
