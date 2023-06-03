import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => { 
            console.log(data)
        };
        console.log(errors);

    return (
        <div className="w-full px-10">
            <SectionTitle
                subHeading="What's New"
                heading="Add an item"
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" 
                    {...register("name", { required: true, maxLength: 80 })}
                    className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </label>
                    <select {...register("category", { required: true })} 
                              className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Dessert</option>
                    </select>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;