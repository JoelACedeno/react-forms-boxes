import React, { useState } from "react";
import { v4 as uuid } from "uuid"

const NewBoxForm = ({ createBox }) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    };

    const gatherInput = (evt) => {
        evt.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        name="height"
                        type="text"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        onChange={handleChange}
                        name="width"
                        type="text"
                        value={formData.width}
                        id="width"
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input
                        onChange={handleChange}
                        name="backgroundColor"
                        type="text"
                        value={formData.backgroundColor}
                        id="backgroundColor"
                    />
                </div>
                <button id="newBoxButton">Add a new box</button>
            </form>
        </div>
    );
}

export default NewBoxForm;