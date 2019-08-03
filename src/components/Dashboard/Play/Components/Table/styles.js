import styled from 'styled-components'

export const Player = styled.div`
	margin: 10px 20px;
	width: 247px;
	height: 150px;
	pointer-events: none;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 25px 100px 20px 10px;
	grid-template-areas: 
	'nome nome'
	'velocimetro cambio'
	'distancia modelo'
	'grau grau';
`

export const Header = styled.div`
	grid-area: nome;
	position: relative;
	background: #111;
	color: white;
	text-align: center;
	padding-top: 4px;
	border-top: 1px solid red;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	span {
		position: absolute;
		right: 5px;
		padding: 2px 5px;
		font-size: 13px;
		background: #999;
		color: black;
		border-radius: 10px;
		font-weight: bolder;
	}
`

export const SpeedometerArea = styled.div`
	grid-area: velocimetro;
	position: relative;
`

export const Harnessing = styled.div`
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background: #f5f5f5;
`

export const Speedometer = styled.img`
	width: 100%;
	height: 100%; 
	position: absolute;
`

export const PointerArea = styled.div`
	position: absolute;
	top: 40%;
	left: 23%;
	width: 61px;
	transform: rotate(0deg);

	img {
		width: 100%;
		height: 100%;
	}
`

export const Speed = styled.span`
	position: absolute;
	bottom: 4px;
	left: 25%;
`

export const ExchangeArea = styled.div`
	grid-area: cambio;
	position: relative;
`

export const Brake = styled.span`
	position: absolute;
	top: 3px;
	left: 3px;
`

export const Exchange = styled.img`
	position: absolute;
	left: 26%;
	top: 10%;
`

export const TurboArea = styled.div`
	position: absolute;
	width: 15px;
	height: 100%;
	top: 0px;
	right: 0px;
	border-radius: 30px;
	overflow: hidden;
`

export const TurboColorEffect = styled.span`
	position: absolute;
	top: 0px;
	width: 15px;
	height: 100%;
	background: linear-gradient(to top, white, green, yellow, red);
	z-index: 0;
`

export const TurboBar = styled.span`
	position: absolute;
	top: 0px;
	width: 15px;
	height: 100%;
	background: #f5f5f5;
	z-index: 1;
	img {
		position: absolute; bottom: 0px; display: none;
	}
`

export const Category = styled.span`
	position: absolute;
	left: 5px;
	bottom: 5px;
	color: white;
	border-radius: 10px;
	padding: 3px;
`

export const DistanceArea = styled.div`
	grid-area: distancia;
	text-align: center;
	background: #111;
	color: white;
`

export const ModelArea = styled.div`
	grid-area: modelo;
	position: relative;
	background: #111;
	pointer-events: painted;
	color: white;
	display: flex;
	justify-content: space-between;

	> div {
		position: absolute;
		top: 32px;
		left: -5px;
		width: 130px;
		padding: 4px 1px;
		border-radius: 10px;
		background: #222;
		box-shadow: 0px 0px 10px black;
		border: 1px solid white;
		display: none;
		z-index: 5;
	}

	.modelo-olho { color: red; }

	:hover { cursor: default; }
`

export const GrauArea = styled.div`
	grid-area: grau;
	position: relative;
	background: #111;
	display: flex;
	align-items: center;
	border-bottom: 1px solid red;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

	span {
		background: green;
		border: 1px dashed black;
		width: 0%;
		height: 4px;
		border-radius: 10px;
	}
`
