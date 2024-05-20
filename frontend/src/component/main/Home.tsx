import { Link } from "react-router-dom";
import Nav from "../header/Nav";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="w-full h-full">
        <div className="w-full h-3/6  bg-center bg-cover  bg-no-repeat flex justify-center items-center bg-[url('https://impeccabuild.com.au/wp-content/uploads/2020/08/Cafe-Theme-Ideas-Library-Cafe-Fitout-ImpeccaBuild-scaled.jpg')]">
          <Link to="/reservations">
            <button className="btn btn-error text-white text-xl   font-medium">
              RESERVATIONS
            </button>
          </Link>
        </div>
        {/* <div className="flex flex-col justify-center items-start p-5">
          <p className="text-2xl font-medium">Our Food</p>
          <p className="text-sm mt-3">
            Nestled in the heart of the city, The Red Café promises a dining
            experience that goes beyond the ordinary. Upon entering, the vibrant
            and cozy ambiance immediately sets the tone for an evening of
            culinary delight. The décor is a charming blend of modern chic and
            rustic comfort, creating an inviting atmosphere perfect for any
            occasion.
          </p>
          <button className="btn btn-error text-white mt-5">View Menus</button>
          <div className="flex mt-5">
            <img
              src="https://yorkshirefoodguide.co.uk/wp-content/uploads/2022/02/Graft-and-Grind-Cafe-in-Wakefield-Castleford.jpg"
              alt=""
              className="w-48 "
            />
            <div className=" ml-3">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62330a82200a5d4bcb765699/ba7c54ee-473d-44f4-a607-1bb3416288b2/cafe44_054.jpg"
                alt=""
                className="w-40 "
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWMsbYuGp7eGVDwQbXKrsxQhxO1Y8OKyC7wqoarxbkg&s"
                alt=""
                className="w-48 mt-3 "
              />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center p-5">
          <div className="w-10/12 max-w-4xl flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <p className="text-2xl font-medium">Our Food</p>
              <p className="text-sm mt-3 text-pretty">
                Nestled in the heart of the city, The Red Café promises a dining
                experience that goes beyond the ordinary. Upon entering, the
                vibrant and cozy ambiance immediately sets the tone for an
                evening of culinary delight. The décor is a charming blend of
                modern chic and rustic comfort, creating an inviting atmosphere
                perfect for any occasion.
              </p>
              <a
                href="https://i.pinimg.com/564x/00/3f/64/003f64625fd41adbf8f8742b3efe0209.jpg"
                target="_blank"
              >
                <button className="btn btn-error text-white mt-5">
                  View Menus
                </button>
              </a>
            </div>
            <div className="flex w-10/12 justify-center mt-5">
              <img
                src="https://yorkshirefoodguide.co.uk/wp-content/uploads/2022/02/Graft-and-Grind-Cafe-in-Wakefield-Castleford.jpg"
                alt=""
                className="w-10/12  max-w-sm rounded-lg"
              />
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/62330a82200a5d4bcb765699/ba7c54ee-473d-44f4-a607-1bb3416288b2/cafe44_054.jpg"
                  alt=""
                  className="w-8/12 max-w-sm rounded-lg"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWMsbYuGp7eGVDwQbXKrsxQhxO1Y8OKyC7wqoarxbkg&s"
                  alt=""
                  className="w-8/12 max-w-sm mt-3 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 bg-red-100 w-full">
          <div className="w-10/12 max-w-4xl flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <p className="text-2xl font-medium">Our Drinks</p>
              <p className="text-sm mt-3 text-pretty">
                The Red Café boasts an impressive selection of beverages, from
                specialty coffees to unique teas and craft cocktails. I tried
                the house special, the "Red Velvet Latte," a delightful blend of
                espresso, red velvet flavoring, and steamed milk, topped with a
                sprinkle of cocoa. It was both visually appealing and delicious.
              </p>

              <a
                href="https://i.pinimg.com/564x/59/f6/95/59f695029a952c355f4a4b253fd3be26.jpg"
                target="_blank"
              >
                <button className="btn btn-error text-white mt-5">
                  View Drinks
                </button>
              </a>
            </div>
            <div className="flex w-10/12 justify-center mt-5">
              <img
                src="https://thesmartlocal.kr/wp-content/uploads/2020/05/Koreaan-Home-Cafe-Drinks4.jpg"
                alt=""
                className="w-6/12  max-w-sm rounded-lg"
              />
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://athome.starbucks.com/sites/default/files/2023-08/1_CAH_Article_HeartSbxCraftedCoffee_2880x1660.jpg"
                  alt=""
                  className="w-9/12 max-w-sm rounded-lg"
                />
                <img
                  src="https://eatbook.sg/wp-content/uploads/2021/06/korean-home-cafe-drink-recipes-strawberry-cheesecake-latte.jpg"
                  alt=""
                  className="w-9/12 max-w-sm mt-3 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Home;
