import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hocks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map(item => <tr key={item._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leanno
            </td>
            <td>Purple</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
          </tr>)
      }
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default ManageItems;