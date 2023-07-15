import "../../assets/scss/partials/_forum.scss";

function Forum() {
  return (
    <>
      <br />
      <br />
      {/* Response section */}
      <div className="forum-container">
        <div className="left-sidebar col-2">
          <ul className="left-sidebar-nav-links">
            <li className="left-sidebar-nav-links-listitem">Home</li>
            <li className="left-sidebar-nav-links-listitem">Categories</li>
            <li className="left-sidebar-nav-links-listitem">Livechat</li>
          </ul>
        </div>

        <div className="mainbar col-6">
          <div className="question-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="filters">sortby : newest</div>
          <div className="answer-content">
            <div className="answer-response row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="response-icons">
                <div className="like-dislike">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-hand-thumbs-down"></i>
                </div>
                <div className="ratings">
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                </div>
                <i className="bi bi-share"></i>
              </div>
            </div>
            <div className="answer-response row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="response-icons">
                <div className="like-dislike">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-hand-thumbs-down"></i>
                </div>
                <div className="ratings">
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                </div>
                <i className="bi bi-share"></i>
              </div>
            </div>
            <div className="answer-response row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="response-icons">
                <div className="like-dislike">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-hand-thumbs-down"></i>
                </div>
                <div className="ratings">
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                </div>
                <i className="bi bi-share"></i>
              </div>
            </div>
            <div className="answer-response row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="response-icons">
                <div className="like-dislike">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-hand-thumbs-down"></i>
                </div>
                <div className="ratings">
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                  <i className="bi bi-star rating-color"></i>
                </div>
                <i className="bi bi-share"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar col-3">
          <div className="right-sidebar-list row">
            <div className="right-sidebar-listitem">
              <h4>Similar topics</h4>
              <div className="row">
                <p>Q1.....</p>
              </div>
              <div className="row">
                <p>Q1.....</p>
              </div>
              <div className="row">
                <p>Q1.....</p>
              </div>
            </div>
            <div className="adrow right-sidebar-listitem">
              <p>Ad</p>
            </div>
            <div className="row right-sidebar-listitem button question-button">
              <button
                className="btn btn-primary forum-question-button "
                type="submit"
              >
                Ask a question
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
export default Forum;
