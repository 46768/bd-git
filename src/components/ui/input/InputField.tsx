import { MouseEventHandler } from "react";

export default function InputField({
	onClick,

	legend,
	buttonText,
	placeholder = "placeholder",
}: Readonly<{
	onClick: MouseEventHandler<HTMLButtonElement>,

	legend: string,
	buttonText: string,
	placeholder?: string,
}>) {
	return (
		<fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4 w-xs">
			<legend className="fieldset-legend">{legend}</legend>
			<div className="join">
				<input className="input join-item" placeholder={placeholder}/>
				<button className="btn join-item" onClick={onClick}>{buttonText}</button>
			</div>
		</fieldset>
	);
}
