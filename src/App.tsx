import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import CodeRunner from "./pages/CodeRunner";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<CodeRunner />
		</IonReactRouter>
	</IonApp>
);

export default App;
