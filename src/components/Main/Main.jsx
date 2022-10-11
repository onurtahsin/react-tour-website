import "./Main.scss";
import { data } from "../../helper/data";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Main;
