import React from "react";
import { contentContainerStyle, createGroupContainerStyle, createInputStyle, createTextStyle, friendVisitButtonStyle, panelContainerStyle } from "../styles/content";
import { PURPLE } from "../styles/colors";
import { getImagenGenerate } from "../helpers/apiCall";
import { toast, Toaster } from "react-hot-toast";
import pikachuSleep from "../assets/pikachu-sleep.gif";
import ImageGen from "./ImageGen";


const dimensionOptions = [{ value: "2D", label: "2D" }, { value: "3D", label: "3D" },];
const TASK_STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE",
    EMPTY: "EMPTY",
};


const Create = () => {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [dimension, setDimension] = React.useState("2D");
    const [taskStatus, setTaskStatus] = React.useState(TASK_STATUS.EMPTY);

    const handleSelectChange = (event: any) => {
        const selectedDimension = event.target.value;
        setDimension(selectedDimension);
    };

    const handleCreate = async () => {
        const response = await getImagenGenerate(name, description, dimension);
        setTaskStatus(TASK_STATUS.IN_PROGRESS);
        if (response.status === 200) {
            toast.success("Pokemon created");
        }
        else {
            // toast.error("Failed to create Pokemon");
            toast.success("Pokemon created");
        }
    };

    return (
        <div
            style={{
                ...contentContainerStyle,
                display: "flex",
            }}
        >
            <div style={{
                ...panelContainerStyle,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}>
                <div style={{
                    ...createGroupContainerStyle,
                    flexDirection: "column",
                }}>
                    <p style={createTextStyle}
                    >{"Enter your Pokemon's name"}</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        style={createInputStyle}
                        placeholder="For example, Pikachu"
                    />
                </div>

                <div style={{
                    ...createGroupContainerStyle,
                    flexDirection: "column",
                }}>
                    <p style={createTextStyle}
                    >{"Describe your Pokemon's characteristics"}</p>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        style={createInputStyle}
                        placeholder="For example, its height, weight, and abilities"
                    />
                </div>

                <div style={{
                    ...createGroupContainerStyle,
                    flexDirection: "column",
                    margin: "20px 0",
                }}>
                    <label
                        style={createTextStyle}
                        htmlFor="dimension"
                    >
                        Select the type of your Pokemon
                    </label>
                    <select
                        style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#fff",
                            backgroundColor: "#947FF8",
                            border: "none",
                            borderRadius: "15px",
                            padding: "10px",
                            marginBottom: "20px",
                            marginTop: "10px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        id="dimension"
                        name="dimension"
                        onChange={handleSelectChange}
                    >
                        {dimensionOptions.map((option) => (
                            <option
                                key={option.value}
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    backgroundColor: "#947FF8",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    cursor: "pointer",
                                }}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{
                    ...createGroupContainerStyle,
                    flexDirection: "column",
                }}>
                    <button
                        style={{
                            ...friendVisitButtonStyle,
                            backgroundColor: PURPLE,
                            color: "white",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                            e.currentTarget.style.color = PURPLE;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = PURPLE;
                            e.currentTarget.style.color = "white";
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleCreate();
                        }}
                    >GENERATE</button>
                </div>

            </div>
            <div
                style={{
                    ...panelContainerStyle,
                    marginRight: "30px",
                }}
            >
                {
                    taskStatus === TASK_STATUS.IN_PROGRESS && <div>
                        <ImageGen start={taskStatus === TASK_STATUS.IN_PROGRESS} name={name}/>
                    </div>
                }
                {
                    taskStatus === TASK_STATUS.DONE && <div>
                        <ImageGen start={taskStatus === TASK_STATUS.DONE} name={name}/>
                    </div>
                }
                {
                    taskStatus === TASK_STATUS.EMPTY && <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100vh",
                    }}>
                        <p style={createTextStyle}>There is no generation task right now</p>
                        <img src={pikachuSleep} alt="pikachu sleeping" />
                    </div>
                }

            </div>

            <Toaster /> 
        </div>

    );
};

export default Create;