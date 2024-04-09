// Feed.js
import React from 'react';
import './Feed.css'; // Import the CSS file for styling

function Feed() {
  return (
    <div>
      <div className="feed">
        <h1>Feed</h1>
        <div className="feed-text">
          <h2>Latest</h2>
          <span>Popular</span>
        </div>
      </div>

      <div className="main-posts">
        <div className="post-box">
          <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
            <i className="ri-heart-line"></i>
              <span>40.4k</span>
              <i className="ri-chat-3-line"></i>
              <span>80</span>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div className="post-box">
          <img src="https://media.gettyimages.com/id/896319030/photo/girl-exploring-barcelona.jpg?s=612x612&w=0&k=20&c=quXCnOO_XejCTpBCnor0C2LAxES_hL8jwn7IB5lb5B0=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>30.4k</span>
              <i className="ri-chat-3-line"></i>
              <span>60</span>
            </div>
          </div>
        </div>

        {/* Post 3 */}
        <div className="post-box">
          <img src="https://media.gettyimages.com/id/1176439818/photo/making-a-memory.jpg?s=612x612&w=0&k=20&c=QdOhqkmo-9hxfrspVSA0hDdb2W3qITaJgPKqr3J4anc=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>34.4k</span>
              <i className="ri-chat-3-line"></i>
              <span>90</span>
            </div>
          </div>
        </div>

        {/* Post 4 */}
        <div className="post-box">
          <img src="https://media.gettyimages.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>4.4k</span>
              <i className="ri-chat-3-line"></i>
              <span>9</span>
            </div>
          </div>
        </div>

        {/* Post 5 */}
        <div className="post-box">
          <img src="https://media.gettyimages.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.jpg?s=612x612&w=0&k=20&c=kbv2s1kknMzJgk8Nd-W2VNIf0AFx48YtCqygtI3Ppos=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>2.4k</span>
              <i className="ri-chat-3-line"></i>
              <span>10</span>
            </div>
          </div>
        </div>

        {/* Post 6 */}
        <div className="post-box">
          <img src="https://media.gettyimages.com/id/1321504180/photo/aerial-shot-showing-an-aircraft-shadow-flying-over-an-idyllic-beach-scene-barbados.jpg?s=612x612&w=0&k=20&c=fQjVxoO48ZS53rBGcO-FwIy7JYU5N3R3Hti3Dcje4_c=" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>1.9k</span>
              <i className="ri-chat-3-line"></i>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="post-box">
          <img src="https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>1.9k</span>
              <i className="ri-chat-3-line"></i>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="post-box">
          <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg" alt="" />
          <div className="post-info">
            <div className="post-profile">
              <div className="post-img">
                <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=" alt="" />
              </div>
              <h3>@sakshi_</h3>
            </div>
            <div className="likes">
              <i className="ri-heart-line"></i>
              <span>1.9k</span>
              <i className="ri-chat-3-line"></i>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
