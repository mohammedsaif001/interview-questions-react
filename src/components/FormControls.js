import React, { useState } from "react";

const dropDownData = ["India", "China", "Bang"];

function FormControls() {
    const [name, setName] = useState("");
    const [radioValue, setradioValue] = useState("Female");
    const [dropDown, setDropDown] = useState();
    const [checkBox, setcheckBox] = useState([]);
    const [fileInput, setfileInput] = useState();

    const handleNameInput = function (e) {
        setName(e.target.value);
    };
    const handleDropdownInput = function (e) {
        setDropDown(e.target.value);
    };
    const handleRadioInput = function (e) {
        setradioValue(e.target.value);
    };
    const handleCheckboxInput = function (e) {
        const { value, name, checked } = e.target
        if (checked) {
            setcheckBox(prev => [...prev, value])
        } else {
            setcheckBox(checkboxPrev => checkboxPrev.filter((check) => check !== value))
        }
    };
    const handleFileInput = function (e) {
        const file = e.target.files[0]
        setfileInput(URL.createObjectURL(file))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, radioValue, checkBox, dropDown, fileInput);
    };
    console.log(fileInput)
    return (
        <>
            <div>FormControls</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameInput}
                    />
                </div>
                <div>
                    <label htmlFor="name">Country : </label>
                    <select
                        name="dropDown"
                        value={dropDown}
                        onChange={handleDropdownInput}
                    >
                        <option value="">Select Option</option>
                        {dropDownData.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="radioBtn">Gender : </label>
                    <label>
                        <input
                            type="radio"
                            name="radioBtn"
                            value={"Male"}
                            onChange={handleRadioInput}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="radioBtn"
                            value={"Female"}
                            onChange={handleRadioInput}
                            defaultChecked
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label htmlFor="checkBox">Education</label>
                    <input type="checkbox" name="engineering"
                        onChange={handleCheckboxInput}
                        value="engg"


                    />{" "}
                    <label
                        htmlFor="engineering"

                    >
                        Engineering
                    </label>
                    <input type="checkbox" name="2puc"
                        onChange={handleCheckboxInput}
                        value="2puc"

                    />{" "}
                    <label
                        htmlFor="2puc"
                    >
                        2puc
                    </label>
                    <input type="checkbox" name="mtech"
                        onChange={handleCheckboxInput}
                        value="mtech"

                    />{" "}
                    <label
                        htmlFor="mtech"
                    >
                        mtech
                    </label>
                </div>
                <div>
                    <label htmlFor="fileInput">Insert File</label>
                    <input type="file" name="fileInput" onChange={handleFileInput} />
                    {fileInput && <img src={fileInput} alt="PNG" style={{ width: "200px", height: "200px" }} />}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default FormControls;
