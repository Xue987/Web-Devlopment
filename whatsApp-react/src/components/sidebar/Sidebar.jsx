import "./sidebar.css";
import{ RssFeed } from "@material-ui/icons";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../data";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <RssFeed className="sidebarListIcon"/>
                <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <RssFeed className="sidebarListIcon"/>
                <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <RssFeed className="sidebarListIcon"/>
                <span className="sidebarListItemText">Feed</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriends key={u.id} user={u}/>
                )
                )}
                
            </ul>
        </div>
    </div>
  )
}

