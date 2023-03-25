import "./Rating.css";
export default function Rating({rating}) {
  return (
    <div className="rating-container">
      {[...Array(5)].map((star, i) => {
        return <div className={`star ${i+1<=rating?'star_active':''}`} key={i}></div>;
      })}
    </div>
  );
}
