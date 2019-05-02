import { faTrash, faSignOutAlt, faPenFancy, faBackspace, faCog, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faPenFancy, faBackspace, faCog, faPlusCircle);
};

export default Icons;