import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSearchState } from "../store/slices/searchSlice";
import { setSearchState } from "../store/slices/searchSlice";
import { useSelector } from "react-redux";

const HomePage = () => {
	const dispatch = useDispatch();
	const searchState = useSelector(selectSearchState);
	const [value, setValue] = useState(searchState);

	const onInputChange = (e) => {
		setValue(e.target.value);
		dispatch(setSearchState(e.target.value));
	};

	return (
		<section className="section">
			<h1>Next and Redux</h1>

			<div className="">
				<input
					type="text"
					className="input"
					value={value}
					onChange={onInputChange}
					placeholder="Введите что-нибудь"
				/>

				<p>searchState: {searchState}</p>
			</div>
		</section>
	);
};

export default HomePage;
