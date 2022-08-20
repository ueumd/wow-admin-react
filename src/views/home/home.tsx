import { Card } from "antd"
import { useState } from "react"

const gridStyle: any = {
	width: "25%",
	textAlign: "center"
}

const Home = () => {
	const [list, setList] = useState([])
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
