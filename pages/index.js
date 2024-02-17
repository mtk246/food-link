import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import EBT from "./ebt";
import FoodBank from "./food_bank";

export default function Home() {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <header>
                <section className="header-content" style={{width: '70%'}}>
                    <h1 className="header-title">Explore Your City On Any Budget</h1>
                    <p className="header-subtitle">
                        Our mission is to help low-income families find nearby food banks, EBT-friendly eateries, and affordable options for leftover food, ensuring access to essential resources and support in their communities.
                    </p>
                    <div className="d-flex justify-content-center align-items-center rounded text-center">
                        <div>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item p-4">
                                    <input className="form-check-input me-1" type="radio" name="viewType" value="foodBank" aria-label="..." onChange={handleInput} />
                                    Food Bank
                                </li>
                                <li className="list-group-item p-4">
                                    <input className="form-check-input me-1" type="radio" name="viewType" value="ebtAcceptedGrocery" aria-label="..." onChange={handleInput} />
                                    EBT Accepted Grocery
                                </li>
                                <li className="list-group-item p-4">
                                    <input className="form-check-input me-1" type="radio" name="viewType" value="packedFood" aria-label="..." onChange={handleInput} />
                                    Packed Food for EBT card users
                                </li>
                            </ul>
                        </div>
                        <div>
                            <select className="form-select p-4 ms-2">
                                <option selected>List View</option>
                                <option value="1">Map View</option>
                            </select>
                        </div>
                    </div>
                </section>
            </header>
            {
                input === 'foodBank' && <FoodBank />
            }
            {
                input === 'ebtAcceptedGrocery' && <EBT />
            }
        </>
    );
}
