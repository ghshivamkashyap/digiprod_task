import React, { useEffect, useState } from "react";

const Table = () => {
  const [filters, setFilters] = useState({
    productName: "",
    color: "",
    category: "",
    price: "",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

 
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://digiprod.onrender.com/api/gettabledata"
        );
        const data = await res.json();
        console.log("Table data is - ", data?.data);

        const filteredResult = data?.data.filter((item) => {
          return (
            item.productName
              .toLowerCase()
              .includes(filters.productName.toLowerCase()) &&
            item.color.toLowerCase().includes(filters.color.toLowerCase()) &&
            item.category
              .toLowerCase()
              .includes(filters.category.toLowerCase()) &&
            item.price.toLowerCase().includes(filters.price.toLowerCase())
          );
        });

        setFilteredData(filteredResult);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [filters]);

  filteredData.filter((item) => {
    return (
      item.productName
        .toLowerCase()
        .includes(filters.productName.toLowerCase()) &&
      item.color.toLowerCase().includes(filters.color.toLowerCase()) &&
      item.category.toLowerCase().includes(filters.category.toLowerCase()) &&
      item.price.toLowerCase().includes(filters.price.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col px-4 sm:px-10 justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Line Chart Screen
      </div>
      <div className="w-full overflow-x-auto bg-zinc-200 rounded-lg">
        {/* Filter inputs */}
        <div className="flex space-x-4 p-4">
          <input
            type="text"
            placeholder="Product Name"
            value={filters.productName}
            onChange={(e) => handleFilterChange("productName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Color"
            value={filters.color}
            onChange={(e) => handleFilterChange("color", e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="relative">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.productName}
                  </th>
                  <td className="px-6 py-4">{item.color}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
