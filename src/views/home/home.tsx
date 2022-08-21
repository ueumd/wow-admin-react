import { Card } from "antd"
import { useEffect, useState } from "react"
import api from "@/api"

const gridStyle: any = {
	width: "25%",
	textAlign: "center"
}

const Home = () => {
	let [list, setList] = useState([])

	const getResource = () => {
		api.user.resource().then(res => {
			setList(res)
		})
	}

	useEffect(() => {
		getResource()
	}, [])

	const navigateTo = url => {
		window.open(url, "_blank")
	}
	return (
		<div className="blue-box">
			<Card title="React">
				{list.map((item: any, index) => {
					return (
						<Card.Grid key={index} style={gridStyle} onClick={() => navigateTo(item.url)}>
							<div>{item.title}</div>
							<div>{item.desc}</div>
						</Card.Grid>
					)
				})}
			</Card>
		</div>
	)
}

export default Home
