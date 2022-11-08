import React, { useState } from 'react'
import '../css/AddRestaurant.css'
import swal from 'sweetalert'

const AddRestaurant = () => {
    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [famous, setFamous] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !place || !famous){
            swal("please fill the form!", "all the the fields");

        }else{
            let data = {
                name,
                place,
                famous,
            };
            fetch('http://localhost:1000/restaurants', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            swal("Restaurants!", name + " successfully added", "success");
            setName('')
            setPlace('')
            setFamous('')
        }
        
    }
    const handleReset = () => {
        setName('')
        setPlace('')
        setFamous('')
    }
    return (
        <div>
            <h1 className='h1-center'>Add Restaurant</h1> <br />
            <div className='addRestaurant'>

                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <br /> Name <br /><br />
                        <input placeholder='Name' onChange={(e) => { setName(e.target.value) }} value={name} type="text" name="name" id="name" />
                    </label>
                    <br />
                    <label htmlFor="place">
                        <br />  Place  <br /><br />
                        <input placeholder='Place' onChange={(e) => { setPlace(e.target.value) }} value={place} type="text" name="place" id="place" />
                    </label> <br />
                    <label htmlFor="famous">
                        <br /> Famous <br /><br />
                        <input placeholder='Famous' onChange={(e) => { setFamous(e.target.value) }} value={famous} type="text" name="famous" id="famous" />
                    </label> <br />

                    <button className='btn-add-res' style={{ marginRight: "15px" }} >Submmit</button>
                    <button className='btn-add-res' type="reset" onClick={handleReset}>Reset</button>
                </form>

            </div>
        </div>

    )
}

export default AddRestaurant