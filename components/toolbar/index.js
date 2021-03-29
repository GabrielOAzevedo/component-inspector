export default function Toolbar(props) {
    return (
        <nav className="w-full bg-gray-700 h-14 flex justify-between items-center px-4">
            <h1 className="text-white text-xl md:text-2xl">React Component Inspector</h1>
            <img onClick={props.helpFunction} className="cursor-pointer" src="help-24px.svg"/>
        </nav>
    )
}