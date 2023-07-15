import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import "../styles/_global.scss";

const MyApp = ({ categories, Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default MyApp;
