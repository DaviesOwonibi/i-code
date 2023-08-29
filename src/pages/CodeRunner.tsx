import { IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import "./style.css";

const CodeRunner: React.FC = () => {
	const [htmlCode, setHtmlCode] = useState("");
	const [cssCode, setCssCode] = useState("");
	const [jsCode, setJsCode] = useState("");

	useEffect(() => {
		const output = document.getElementById("output");

		const handleRun = () => {
			setTimeout(() => {
				if (output != null) {
					output.contentDocument.body.innerHTML =
						htmlCode + "<style>" + cssCode + "</style>";
					output.contentWindow.eval(jsCode);
				}
			}, 300);
		};

		handleRun();
	}, [htmlCode, cssCode, jsCode]);

	const [activeTab, setActiveTab] = useState("HTML");

	const openTab = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<IonPage>
			<div className="navbar">
				<button
					className={`${activeTab === "HTML" ? "active" : ""}`}
					onClick={() => openTab("HTML")}
				>
					HTML
				</button>
				<button
					className={`${activeTab === "CSS" ? "active" : ""}`}
					onClick={() => openTab("CSS")}
				>
					CSS
				</button>
				<button
					className={`${activeTab === "JS" ? "active" : ""}`}
					onClick={() => openTab("JS")}
				>
					JS
				</button>
			</div>
			<div className="content">
				<div
					id="HTML"
					className={`${activeTab === "HTML" ? "show" : "hide"}`}
				>
					<textarea
						value={htmlCode}
						onChange={(e) => setHtmlCode(e.target.value)}
						placeholder="HTML code"
					/>
				</div>
				<div
					id="CSS"
					className={`${activeTab === "CSS" ? "show" : "hide"}`}
				>
					<textarea
						value={cssCode}
						onChange={(e) => setCssCode(e.target.value)}
						placeholder="CSS code"
					/>
				</div>
				<div
					id="JS"
					className={`${activeTab === "JS" ? "show" : "hide"}`}
				>
					<textarea
						value={jsCode}
						onChange={(e) => setJsCode(e.target.value)}
						placeholder="JavaScript code"
					/>
				</div>

				<iframe id="output" title="Output" />
			</div>
		</IonPage>
	);
};

export default CodeRunner;
