//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SingleProductInfo from "../../_components/Shop/SingleProductInfo";
import SingleProductTabs from "../../_components/Shop/SingleProductTabs";
import RelatedProducts from "../../_components/Shop/RelatedProducts";
import CartSidebar from "../../_components/Shop/CartSidebar";
//Import Database
import { products } from "../data/product_data";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function SingleProduct({ params }) {
  const { id } = await params;
  const productData = products.find((product) => product.id == id);
  return (
    <>
      <PageTitle
        dataSubTitle={`Shop`}
        dataSubTitleSrc={`/shop`}
        dataTitle={`${productData.title}`}
      />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="container container__tablet-fluid">
          <div className="section-indent">
            <SingleProductInfo dataProduct={productData} />
          </div>
          <div className="section-indent-small">
            <SingleProductTabs dataProduct={productData} />
          </div>
          <div className="section-indent">
            <RelatedProducts dataAllProduct={products} dataId={productData} />
          </div>
          <CartSidebar />
        </div>
      </main>
    </>
  );
}
