import SectionTitle from "../../../components/SectionTitle";
import feturedImg from "../../../assets/home//featured.jpg"
import './Fetured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-20 pb-20 pt-12 px-36">
            <div>
                <img src={feturedImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p className="mb-5">Aug 20, 2029</p>
                <p className="uppercase mb-5">Where can i get some?</p>
                <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, reprehenderit. Deleniti aspernatur cupiditate animi reiciendis vero minus iusto delectus nobis quod ipsam. Sint nobis a quae architecto esse. Sint eveniet consectetur aut illo totam molestiae non vero culpa in est architecto magni aperiam itaque asperiores dolor recusandae similique soluta maiores quia eligendi, rerum ex debitis incidunt mollitia. Facilis deleniti delectus blanditiis molestiae molestias dolorem assumenda repudiandae voluptatibus sint doloribus eveniet in quos, animi itaque quas necessitatibus unde maxime dicta provident debitis fugiat? Sapiente deleniti error delectus ea inventore nostrum officia. Natus cumque iure sequi eveniet laudantium provident magnam corrupti veritatis.</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;