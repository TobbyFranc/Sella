// src/pages/ProductInfo.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data;
        if (res.ok) {
          data = await res.json();
        } else {
          res = await fetch(`https://dummyjson.com/products/${id}`);
          data = await res.json();
        }
        setProduct(data);

        // Fetch related products by category
        if (data.category) {
          const relRes = await fetch(`https://dummyjson.com/products/category/${data.category}`);
          const relData = await relRes.json();
          setRelated(relData.products.filter((p) => p.id !== data.id));
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="mt-20 text-center">Loading...</p>;

  const productImage = product.image || product.thumbnail || (product.images && product.images[0]);

  return (
    <div className="px-6 py-12 mt-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 animate-fadeIn">
        <img
          src={productImage}
          alt={product.title}
          className="w-full h-96 object-contain rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          {product.brand && <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>}
          {product.category && <p className="mb-2"><strong>Category:</strong> {product.category}</p>}
          {product.rating && (
            <p className="mb-2"><strong>Rating:</strong> {product.rating.rate || product.rating}/5</p>
          )}
          <p className="text-2xl font-semibold text-[var(--accent)] mb-6">${product.price}</p>
          <button className="px-6 py-3 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent)]/80 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Related Products</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
          >
            {related.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} onAddToCart={() => {}} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
