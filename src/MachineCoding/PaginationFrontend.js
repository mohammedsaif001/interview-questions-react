import { useEffect, useState } from "react";
import "./Pagination.css";

const PaginationFrontend = () => {
    const [products, setProducts] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://dummyjson.com/products?limit=100`).then(
                (res) => res.json()
            );
            console.log(data);
            setProducts(data?.products);
        };
        fetchData();
    }, []);

    const handlePage = (pageClicked) => {
        if (pageClicked >= 1 && pageClicked <= products.length / 10 && page != pageClicked) {
            setPage(pageClicked)
        }
    }

    // Pagination
    // From 10 to 20 ; 20 to 30 like that so
    // page * 10 - 10, page*10
    // 1*10-10 = 0, 1*10
    // 2*10-10, 2*18

    return (
        <div>
            {products?.length > 0 && (
                <div className="products">
                    {products?.slice(page * 10 - 10, page * 10).map((product) => (
                        <span key={product.id} className="product">
                            <img src={product?.thumbnail} alt={product.title} />
                            <span>{product.title}</span>
                        </span>
                    ))}
                </div>
            )}

            {/* Next and Forward Button */}

            {products?.length > 0 && <div className="pagination">
                <span onClick={() => handlePage(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀️</span>

                {[...Array(products.length / 10)].map((_, i) => {
                    return <span key={i} onClick={() => handlePage(i + 1)} className={page === i + 1 ? "pagination__selected" : ""}>{i + 1}</span>
                })}
                <span onClick={() => handlePage(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶️</span>
            </div>}

        </div>
    );
};
export default PaginationFrontend;
