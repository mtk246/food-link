import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import EBT from "./ebt";
import FoodBank from "./food_bank";
import Link from "next/link";
import PackedMeals from "./packed_meal";

export default function Home() {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between w-100" style={{height: '70vh'}}>
                <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline px-5">
                    <h1 className="display-4 my-4 font-weight-bold"><span style={{ color: 'forestgreen' }}>Explore Your City On Any Budget</span></h1>
                    <p className="mt-4 text-muted">
                        Our mission is to help low-income families find nearby food banks, EBT-friendly eateries, and affordable options for leftover food, ensuring access to essential resources and support in their communities.
                    </p>
                </div>
                <div
                    className="col-md-8 h-100 clipped"
                    style={{ minHeight: '350px', backgroundImage: 'url(/assets/images/image.png)', backgroundPosition: 'left', backgroundSize: 'cover' }}
                >
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center rounded text-center my-3 p-3">
                <div>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item p-4">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input me-1" type="radio" name="viewType" value="foodBank" aria-label="..." onChange={handleInput} />
                                <div>
                                    <span className="h2 fw-bold text-success">Food Bank</span>
                                </div>
                            </div>
                        </li>
                        {/* <li className="list-group-item p-4">
                            <input className="form-check-input me-1" type="radio" name="viewType" value="ebtAcceptedGrocery" aria-label="..." onChange={handleInput} />
                            EBT Accepted Grocery
                        </li> */}
                        <li className="list-group-item p-4">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input me-1" type="radio" name="viewType" value="packedFood" aria-label="..." onChange={handleInput} />
                                <div>
                                    <span className="h2 fw-bold text-success">Packed-Meal Restaurant</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <select className="form-select p-4 ms-2">
                        <option selected>List View</option>
                        <option value="1">Map View</option>
                    </select>
                </div> */}
            </div>
            {
                input === 'foodBank' && <FoodBank />
            }
            {/* {
                input === 'ebtAcceptedGrocery' && <EBT />
            } */}
            {
                input === 'packedFood' && <PackedMeals />
            }
        </>
    );
}
