import { Sidebar } from "flowbite-react";
import { FaPeopleRoof } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div>
      <Sidebar>
        <Sidebar.Items>
          <div className="flex">
            <h1 className="font-semibold ml-3">Options</h1>
          </div>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              as={Link}
              to="/candidates"
              icon={FaPeopleRoof}
              active={location.pathname === "/candidates"}
            >
                <div>Elections</div>
            </Sidebar.Item>
            <Sidebar.Item>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
