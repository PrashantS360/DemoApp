import Head from 'next/head'
// import { IoIosArrowDropdown } from "react-icons/io"
import {
  useState, useEffect
} from 'react';
export default function Home() {

  let items = [
    {
      id: "1",
      category: "Laptop",
      priceRange: "2999-3999",
      variation: [
        {
          product: `Apple MacBook Pro 17"`,
          color: "Silver",
          rating: "4.5",
          price: "2999",
        },
        {
          product: `Asus Vivobook S14`,
          color: "Indie Black",
          rating: "4.3",
          price: "2499",
        },
      ]
    },
    {
      id: "2",
      category: "Laptop",
      priceRange: "2999-3999",
      variation: [
        {
          product: `Apple MacBook Pro 17"`,
          color: "Silver",
          rating: "4.5",
          price: "2999",
        },
        {
          product: `Asus Vivobook S14`,
          color: "Indie Black",
          rating: "4.3",
          price: "2499",
        },
      ]
    },
    {
      id: "3",
      category: "Laptop",
      priceRange: "2999-3999",
      variation: [
        {
          product: `Apple MacBook Pro 17"`,
          color: "Silver",
          rating: "4.5",
          price: "2999",
        },
        {
          product: `Asus Vivobook S14`,
          color: "Indie Black",
          rating: "4.3",
          price: "2499",
        },
      ]
    }
  ];

  const [state, setState] = useState(0);

  const onClick = (id) => {
    if (state != id) {
      setState(id);
    } else {
      setState(0);
    }
  }

  return (
    <div className='bg-gray-200'>
      <Head>
        <title>E-Store</title>
        <meta name="description" content="TradeGo.com - Get All About Stocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-200 py-6'>
        {/* <h4 className='text-center font-bold text-2xl'>User's Table</h4> */}


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] m-auto text-xl">
          <div className="w-full text-sm text-left text-white dark:text-gray-200">
            <div className="text-lg text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
              <div>
                <div className='text-center p-3' scope="col">
                  Our Products
                </div>
              </div>
            </div>

            {items.map((item) => {
              return <div key={item.id}>
                <div className='border-2 border-white'>
                  <div className="bg-white border-b border-[1px] border-white dark:bg-gray-800 text-lg dark:border-gray-700 cursor-pointer" onClick={() => { onClick(item.id) }}>
                    <div scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-between items-center">
                      <h3 className='text-xl'>{item.category}</h3>
                      <p className="px-6 py-4">
                        ${item.priceRange}
                      </p>
                    </div>
                  </div>

                  {state == item.id && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Order</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.variation.map((subitem) => {
                        return <tr key={subitem.product} className="bg-white border-b dark:bg-gray-800 text-lg dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {subitem.product}
                          </th>
                          <td className="px-6 py-4">
                            {subitem.color}
                          </td>
                          <td className="px-6 py-4">
                            {subitem.rating}&#9733;
                          </td>
                          <td className="px-6 py-4">
                            ${subitem.price}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline bg-white p-1 px-4 rounded-md text-base">Buy</button>
                          </td>

                        </tr>
                      })}
                    </tbody>
                  </table>}
                </div>
              </div>
            })}
          </div>
        </div>


      </main>
    </div>
  )
}
