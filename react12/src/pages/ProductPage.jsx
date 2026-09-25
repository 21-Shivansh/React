import { useContext } from "react"
import { Auth } from "../context/MyContext"
import ProductCard from "../component/ProductCard";

const ProductsPage = () => {

  const {productsData} = useContext(Auth);

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10 overflow-scroll scrollbar-none">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Product Management
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-slate-900 mt-1">
                Products
              </h1>

              <p className="text-slate-500 mt-2">
                Browse and manage all available products.
              </p>
            </div>

            {/* Product Count */}
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-3">
              <p className="text-xs text-slate-400">
                Total Products
              </p>

              <p className="text-xl font-bold text-slate-900">
                {productsData.length}
              </p>
            </div>

          </div>

        </div>


        {/* Search & Filters */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />

            {/* Category */}
            <select
              className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="all">
                All Categories
              </option>

              <option value="men's clothing">
                Men's Clothing
              </option>

              <option value="women's clothing">
                Women's Clothing
              </option>

              <option value="jewelery">
                Jewelry
              </option>

              <option value="electronics">
                Electronics
              </option>
            </select>

          </div>

        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {productsData.map((product) => <ProductCard key={product.id} product={product}/>)}

        </div>

      </div>

    </div>
  )
}

export default ProductsPage

