/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
    return (
      <a 
        onClick={(e) =>
        {
          e.preventDefault();
          const target = document.getElementById('counter');
          if (target && id) {
            const offsetTop = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offsetTop;

            window.scrollTo({
              top: top,
              behavior: 'smooth',
            });
          }
        }
        }
      className={`${className ?? ''} cta-wrapper`}
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </a>
    );
  };
  
  export default Button;