
const edfFrontBoxStyle = {
	height: '100%',
  padding: '25px 0 5px 2px',
  borderRadius: '4px',
  boxShadow: '2px 2px 8px -3px rgba(0, 0, 0, 0.5)',
  backgroundColor: '#eef1f6',
  display: 'flex',
  flexDirection: 'column'
}

const  edfBackBoxStyle = {
	...edfFrontBoxStyle,
  padding: '0 0 5px 2px',
}

const edfImgWrapStyle = {
	flex: 1,
	paddingRop: '25px'
}

const edfFrontTitleStyle = {
	width: '100%',
	height: '40px',
	fontFamily: 'Avenir',
	fontSize: '13px',
	lineHeight: '40px',
	fontWeight: '900',
	letterSpacing: '0.12px',
	textAlign: 'center',
	color: '#706f6f'
}

const edfBackTitleStyle = edfFrontTitleStyle

const edfBackConntentStyle = {
	width: '100%',
	flex: 1,
	fontFamily: 'Avenir',
	fontSize: '13px',
	lineHeight: '40px',
	fontWeight: '900',
	letterSpacing: '0.12px',
	textAlign: 'center',
	color: '#706f6f'
}

const imgStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover'
}

export var EDFCard2 = (props) => {
	let render = (
		<div style={edfFrontBoxStyle}>
			<div style={edfImgWrapStyle}>
				<img style={imgStyle} src={props.coverImage}/>
			</div>
			<div style={edfFrontTitleStyle}>
				{props.title}
			</div>
		</div>
	)
	if (props.type === 'back') {
		render = (
			<div style={edfBackBoxStyle}>
				<div style={edfBackTitleStyle}>
					{props.title}
				</div>
				<div style={edfBackConntentStyle}>
					{props.content}
				</div>
			</div>
		)
	}
	return (render)
}
