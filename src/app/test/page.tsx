"use client";

import InputField from "@/components/ui/input/InputField";
import NavBar from "@/components/ui/nav/NavBar";
import NavLink from "@/components/ui/nav/NavLink";

export default function Test() {
	return (
		<div>
			<main>
				<div className="flex flex-col gap-4">
					<InputField
						onClick={()=>{}}
						legend="Test"
						buttonText="OK"
					/>

					<NavLink href="/test">Test</NavLink>
					<NavLink href="/test/non">Test Non</NavLink>

					<NavBar/>
				</div>
			</main>
		</div>
	);
}
