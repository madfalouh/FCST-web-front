import React, { useEffect, useRef, useState } from "react"
import "./App.css"

function Chat() {
	const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	// const socketRef = useRef()

	// useEffect(
	// 	() => {
	// 		socketRef.current = io.connect("http://localhost:3000")
	// 		socketRef.current.on("message", ({ name, message }) => {
	// 			setChat([ ...chat, { name, message } ])
	// 		})
	// 		return () => socketRef.current.disconnect()
	// 	},
	// 	[ chat ]
	// )

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		console.log({name , message})
		// socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	
	}

	const renderChat = () => {
		
		return chat.map(({ name, message }, index) => (
			
			<div key={index}>
				<h3>
					{name}: {message}
					
				</h3>
			</div>
		))
	}

	return (
		<div className="card">
			<form onSubmit={onMessageSubmit}>
				<h1>Messenger</h1>
				<div className="name-field">
					<input type="text" name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<input type="text"
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
		</div>
	)
}

export default Chat
