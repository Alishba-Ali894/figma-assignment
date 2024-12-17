interface ProductCardProps {
    product: Product; 
  }
  interface Product {
    name: string;
    description: string;
    image: string;
  }
 const ProductCard: React.FC<ProductCardProps>= ({ product })=> {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-fit"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
         
            
          </div>
        </div>
      </div>
    );
  }

  export default ProductCard;