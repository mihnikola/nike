import { useNavigate } from "react-router-dom";
import { star } from "../assets/icons";


const ShopCard = ({ imgURL, name, price, id }) => {
    const navigate = useNavigate();
    const showDataHandler = (product) => {
        navigate(`${product}`)
    }

    return (
        <div className='flex flex-2 flex-col w-full max-sm:w-full cursor-pointer' onClick={() => showDataHandler(id)}>
            <img src={imgURL[0]?.name || imgURL} alt={name} className='max-w-[412px] max-h-[350px] min-w-[150px] min-h-[150px]' />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt='rating icon' width={24} height={24} />
                <p className='font-montserrat text-sm leading-normal text-slate-gray'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>
                {name}
            </h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>
                ${price}
            </p>
        </div>
    )
}

export default ShopCard