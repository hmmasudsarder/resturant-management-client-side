import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import Footer from "../../components/SharedComponents/Footer/Footer";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const UpdateForm = () => {
    const {user} = useContext(AuthContext);
    const product = useLoaderData();
    const {_id, name, img, food_category, quantity, price, country, description, orders} = product;
    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.photo.value;
        const food_category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        // const email = form.user.value;
        const country = form.country.value;
        const description = form.description.value;
        const orders = form.orders.value;
        const newProduct = {name, img, food_category, quantity, price, country, description, orders};
        fetch(`https://restaurant-management-server-liard.vercel.app/update/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...newProduct, email: user.email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
            Swal.fire({
                title: "Your Item Update SuccessFully",
                text: "That thing is still around?",
                icon: "success"
              })
              }
            
        })
        
    }
    
    // console.log(product)
    
    return (
        <div className="">
            <Navbar/>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-6">Update a Food Item</h2>
            <form onSubmit={handleUpdateFood}>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={img} placeholder="Food Image Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={food_category} name="category" placeholder="Food Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                        <span className="label-text">Food  Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Food Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Food Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Current User</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Made By Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" defaultValue={country} placeholder="Food Made By Country" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Food Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Ordered</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="orders" defaultValue={orders} placeholder="How Many Sell Make The Food" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add New Food" className="btn btn-block" />

            </form>
        </div>
        <Footer/>
        </div>
    );
};

export default UpdateForm;