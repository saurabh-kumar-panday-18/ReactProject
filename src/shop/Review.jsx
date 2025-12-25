import React, { useState } from "react";
import Ratting from "../components/Ratting";
const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>

      {/*  desc & review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>

                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#"> {review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/*  add reiew filed */}

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="Email"
                    name="email"
                    id="email"
                    placeholder=" Your Email Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2"> Your Rating</span>
                    <Ratting />
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    placeholder="Type Here Message"
                    rows="8"
                    id="message"
                  >
                    Type Here Message
                  </textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  description  */}

        <div className="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea iusto, repudiandae ad nostrum quaerat quam a commodi id tempora
            quas error exercitationem velit iste temporibus minus minima nihil
            recusandae? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aspernatur ea iusto, repudiandae ad nostrum quaerat quam a
            commodi id tempora quas error exercitationem velit iste temporibus
            minus minima nihil recusandae? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur ea iusto, repudiandae ad
            nostrum quaerat quam a commodi id tempora quas error exercitationem
            velit iste temporibus minus minima nihil recusandae? Lorem, ipsum
            s minima nihil recusandae?
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi
            soluta obcaecati porro illum quis molestias animi, ea illo. Et
            necessitatibus dicta perferendis dolorum nihil minima laborum.
            Laborum, vel nemo! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magnam ducimus veritatis iste, vero, vitae dolore
            eius repellat aperiam commodi consequuntur fugit ipsa qui velit fuga
            minima veniam, est architecto perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
