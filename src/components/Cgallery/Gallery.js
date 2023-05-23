import React from 'react';
import "./Gallery.css";

const Gallery = () => {
  return (
    <main>
      <header>
        <div className="cont1">
          <div className="profile">
            <div className="profile-image">
              <img src={require("../../Images/ChitkaraLogo.jpg")} alt="" height="120px" width="200px" />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">Chitkara Gallery</h1>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name"></span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/tasveer.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Tasveer
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 
                  </li>
                </ul>
              </div>
            </div>

           {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/custody.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Dance Workshop
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 
                  </li>
                </ul>
              </div>
            </div>

            {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/bhangra.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Punjabi culture
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>

             {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/literallys.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>literallys
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>

             {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/gidda.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> Gidda workshop
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>


            {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/event.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Baebaak bol
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>


            {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/society.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>speak fearlessly
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>


           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/custody2.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Dance auditions
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>



           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/chitkara.jpg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Drone Shots
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>


            {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/b&b.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Dhwani Event
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>



            {/* {/2nd/}  */}
           <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/ieee.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Technical Workshop
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabIndex="0">
              <img
                src={require("../../Images/iei.jpeg")}
                className="gallery-image"
                alt=""
              />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i>Award presenting
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
             Rest of the gallery items

          </div>
          <div className="loader"></div>
        </div>
      </main> 
    </main>
  );
};

export default Gallery;