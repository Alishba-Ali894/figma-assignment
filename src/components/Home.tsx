import ProductCard from "./ProductCard";

export default function Homee()  {
    const products = [
        {
          id: 1,
          name: 'Tropical Fish',
          description: 'This is a great product.',
          price: 29.99,
          image: 'https://tse2.mm.bing.net/th?id=OIP.3-74zzk-OSXGmWIJrEef4wHaFX&pid=Api&P=0&h=220',
        },
        {
          id: 2,
          name: 'Angel Fish',
          description: 'This is another great product.',
    
          image: 'https://tse1.mm.bing.net/th?id=OIP._N8SIT9lNaOftkl77G7zgAHaE7&pid=Api&P=0&h=220',
        },
        {
          id: 3,
          name: 'Gold Fish',
          description: 'This is Australian Gold Fish.',
          price: 19.99,
          image: 'https://tse2.mm.bing.net/th?id=OIP.9xvKVhwhMPreferBuILi4gHaFT&pid=Api&P=0&h=220',
        },
      ];
    
  return (
    <div><main className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    <section className=" text-white py-20 text-center section">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4">Welcome in Nature Beauty</h2>
        <p className="text-xl mb-6">
   This is SomeThing About Nature
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200"
        >
          Get Started
        </a>
      </div>
    </section>

    {/* Featured Content Section */}
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">SEA</h3>
          <img
          src="https://tse4.mm.bing.net/th?id=OIP.R2Luvr7PEIHyxMhfn1ljrgHaEo&pid=Api&P=0&h=220"
        
          className="w-full h-48 object-fit"
        />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">SNOW</h3>
          <img
          src="https://tse2.mm.bing.net/th?id=OIP.a83I3CdaEKNfSm0eh5oyUQHaFh&pid=Api&P=0&h=220"
        
          className="w-full h-48 object-fit"
        />
          <p className="text-gray-700">
            Cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Nullam eget felis et nibh ultricies porta.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">SUN</h3>
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.xPVaZBaWMgtX-cQ8hQI2qAHaE8&pid=Api&P=0&h=220"
        
          className="w-full h-48 object-fit"
        />
          <p className="text-gray-700">
            Donec rutrum congue leo eget malesuada. Nulla quis lorem ut
            libero malesuada feugiat.
          </p>
        </div>
      </div>
    </section>
  </main>
  <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Beauty of Nature </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Alishba Ali. All rights reserved</p>
    </div>
  </footer>
</div>
  )
}
