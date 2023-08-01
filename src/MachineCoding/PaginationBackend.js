import { useState } from "react";
import "./Pagination.css"
import { useEffect } from "react";

const PaginationBackend = () => {
    const [products, setProducts] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`).then(
                (res) => res.json()
            );
            console.log(data);
            setProducts(data?.products);
            setTotalPages(data?.total / 10);
        };
        fetchData();
    }, [page]);

    const handlePage = (pageClicked) => {
        if (pageClicked >= 1 && pageClicked <= totalPages && page != pageClicked) {
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
                    {products?.map((product) => (
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

                {[...Array(totalPages)].map((_, i) => {
                    return <span key={i} onClick={() => handlePage(i + 1)} className={page === i + 1 ? "pagination__selected" : ""}>{i + 1}</span>
                })}
                <span onClick={() => handlePage(page + 1)} className={page < totalPages ? "" : "pagination__disable"}>▶️</span>
            </div>}

        </div>
    );

}
export default PaginationBackend