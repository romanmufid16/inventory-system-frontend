import LayoutDashboard from "../components/LayoutDashboard"

const CategoryPage = () => {
  return (
    <LayoutDashboard>
      <main className="mt-10 flex flex-col">
        <span className="block text-3xl font-semibold text-white mb-5">Category</span>
        <div className="w-full bg-white p-4 rounded-md shadow-md">
          <div className="flex justify-end mb-5">
            <button className="bg-default text-white px-4 py-2 rounded-md shadow-md">Create Category</button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17&quot;
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Laptop
                  </td>
                  <td className="px-6 py-4">
                    $2999
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">
                    White
                  </td>
                  <td className="px-6 py-4">
                    Laptop PC
                  </td>
                  <td className="px-6 py-4">
                    $1999
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">
                    Black
                  </td>
                  <td className="px-6 py-4">
                    Accessories
                  </td>
                  <td className="px-6 py-4">
                    $99
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">
                    Gray
                  </td>
                  <td className="px-6 py-4">
                    Phone
                  </td>
                  <td className="px-6 py-4">
                    $799
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </LayoutDashboard>
  )
}

export default CategoryPage