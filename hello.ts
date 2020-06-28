import {underlineIt} from './formatter.ts'

export function HelloWorld(name: string, format: string): void {
	let text = ["Hey there", name, ", say hello to the world!"].join(" ")
	
	if(format == "underlined") {
		text = underlineIt(text)
	}
	console.log(text)
}
