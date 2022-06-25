import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { Router } from "./router";
import "./styles/global.css";

function App() {
	return (
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	);
}

export default App;
