import { useState } from "react";
import ShopCard from "../components/ShopCard"
import { products } from "../constants"
import FilterComponent from "../components/FilterComponent";



const Shop = () => {
    const [filters, setFilters] = useState({
        size: '',
        color: '',
        priceRange: [0, 100],
    });

    // Filter shoes based on selected filters
    const filteredShoes = products.filter((shoe) => {
        return (
            (filters.size === '' || shoe.size === parseInt(filters.size)) &&
            (filters.color === '' || shoe.color === filters.color) &&
            shoe.price <= filters.priceRange[1]
        );
    });

    return (
        <section className='padding'>
            <div className="container flex w-full gap-10 md:flex-row flex-col">
                <div className=" md:w-2/5 w-full mt-10">
                    <FilterComponent onFilterChange={setFilters} filters={filters} />
                </div>
                <div className='mt-7 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-5 w-full'>
                    {filteredShoes.length > 0 && filteredShoes.map((product) => (
                        <ShopCard key={product.name} {...product} />
                    ))}
                    {filteredShoes.length === 0 && products.map((product) => (
                        <ShopCard key={product.name} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop