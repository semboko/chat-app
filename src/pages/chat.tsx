import './chat.css';

import { FaMagnifyingGlass, FaRegPaperPlane } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Chat(){
    return (
        <div className="chat-element">
            <header>
                <h3>Chat Name</h3>
                <p>/main (788)</p>
            </header>
            <div className="messages-container">
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <span>User 1</span>
                        </div>
                        <div className="message-date">
                            <span>Feb 2 9:35AM</span>
                        </div>
                    </div>
                    <div className="message-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis sapiente, magni ducimus repellat esse laudantium culpa consequuntur minus accusantium.
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <span>User 1</span>
                        </div>
                        <div className="message-date">
                            <span>Feb 2 9:35AM</span>
                        </div>
                    </div>
                    <div className="message-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi accusamus enim, nam sit molestiae. Eaque nesciunt, iure nisi quam expedita laborum amet sit ullam labore temporibus quisquam, vel impedit officiis possimus quae laboriosam esse. Dicta deleniti, saepe totam est vero delectus expedita voluptate aspernatur maxime praesentium facilis beatae nulla corporis, earum, repellat similique animi eligendi. Itaque temporibus similique, sint porro illum voluptatum delectus deserunt adipisci, ea explicabo eaque repellat quaerat asperiores. Saepe molestias, accusantium architecto assumenda est illo nisi perspiciatis repellendus dolore sunt excepturi? Voluptatibus odio adipisci omnis placeat quis, iste repellendus, velit laudantium necessitatibus praesentium mollitia magnam at!
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <span>User 1</span>
                        </div>
                        <div className="message-date">
                            <span>Feb 2 9:35AM</span>
                        </div>
                    </div>
                    <div className="message-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi accusamus enim, nam sit molestiae. Eaque nesciunt, iure nisi quam expedita laborum amet sit ullam labore temporibus quisquam, vel impedit officiis possimus quae laboriosam esse. Dicta deleniti, saepe totam est vero delectus expedita voluptate aspernatur maxime praesentium facilis beatae nulla corporis, earum, repellat similique animi eligendi. Itaque temporibus similique, sint porro illum voluptatum delectus deserunt adipisci, ea explicabo eaque repellat quaerat asperiores. Saepe molestias, accusantium architecto assumenda est illo nisi perspiciatis repellendus dolore sunt excepturi? Voluptatibus odio adipisci omnis placeat quis, iste repellendus, velit laudantium necessitatibus praesentium mollitia magnam at!
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <span>User 1</span>
                        </div>
                        <div className="message-date">
                            <span>Feb 2 9:35AM</span>
                        </div>
                    </div>
                    <div className="message-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi accusamus enim, nam sit molestiae. Eaque nesciunt, iure nisi quam expedita laborum amet sit ullam labore temporibus quisquam, vel impedit officiis possimus quae laboriosam esse. Dicta deleniti, saepe totam est vero delectus expedita voluptate aspernatur maxime praesentium facilis beatae nulla corporis, earum, repellat similique animi eligendi. Itaque temporibus similique, sint porro illum voluptatum delectus deserunt adipisci, ea explicabo eaque repellat quaerat asperiores. Saepe molestias, accusantium architecto assumenda est illo nisi perspiciatis repellendus dolore sunt excepturi? Voluptatibus odio adipisci omnis placeat quis, iste repellendus, velit laudantium necessitatibus praesentium mollitia magnam at!
                    </div>
                </div>
            </div>
            <div className="message-typing-container">
                <form>
                    <textarea name="message-typing" className="message-typing-input" rows={1}></textarea>
                    <button><FaRegPaperPlane /></button>
                </form>
            </div>
        </div>
    )
}


export function ChatPage(){
    return (
        <div className="chat-page">
            <div className="groups-list-container">
                <form className="group_search" action="">
                    <label><FaMagnifyingGlass /></label>
                    <input type="text" placeholder="Search" />
                </form>

                <div className="groups-list">
                    <button className="add-group-button">+</button>
                    <h2>Public groups</h2>
                    <ul>
                        <li><Link to="/chat">/main (788)</Link></li>
                        <li><Link to="/chat">/group122 (12)</Link></li>
                    </ul>
                </div>
                <div className="groups-list">
                    <button className="add-group-button">+</button>
                    <h2>Private groups</h2>
                    <ul>
                        <li><Link to="/chat">/group12 (2)</Link></li>
                        <li><Link to="/chat">/group13 (5)</Link></li>
                    </ul>
                </div>
            </div>

            <div className="chat-container">
                <Chat />
            </div>
        </div>
    )
}