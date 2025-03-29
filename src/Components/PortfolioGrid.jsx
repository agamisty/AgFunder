import woman from "./../images/woman.png"
import woman2 from "./../images/woman2.png"
import man from "./../images/man.png"
import friends from "./../images/friends.png"
import couple from "./../images/couple.png"
import "./../Styles/PortfolioGridStyles.css"




const PortfolioGrid = () => {
    return (
      <div className="portfolio-container">
        <div className="portfolio-item text">
          <h2>OUR PORTFOLIO</h2>
        </div>
        <div className="portfolio-item">
          <img src={woman} alt="Pointing woman" />
        </div>
        <div className="portfolio-item">
          <img src={couple} alt="Smiling couple" />
        </div>
        <div className="portfolio-item">
          <img src={friends} alt="Group of friends" />
        </div>
        <div className="portfolio-item">
          <img src={man} alt="Man in yellow jacket" />
        </div>
        <div className="portfolio-item">
          <img src={woman2} alt="Woman in navy blue" />
        </div>
      </div>
    );
  };
  
  export default PortfolioGrid;
  