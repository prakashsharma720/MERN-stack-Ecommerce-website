import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import { MdExpandMore,
        MdPostAdd,
        MdOutlineAdd,
        MdImportExport,
        MdListAlt,
        MdDashboard,
        MdPeopleAlt,
        MdRateReview} from "react-icons/md";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashbord">
        <p>
          <MdDashboard /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<MdExpandMore />}
          defaultExpandIcon={<MdImportExport />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<MdPostAdd />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<MdOutlineAdd />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <MdListAlt />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <MdPeopleAlt /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <MdRateReview />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
