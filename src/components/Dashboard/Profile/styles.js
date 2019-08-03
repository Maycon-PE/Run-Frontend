import styled from 'styled-components'

export const Fieldset = styled.div`
	position: relative;
	width: 99%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ImgProfile = styled.div`
	position: relative;
	width: 100%;
	max-width: 600px;
	display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  color: white;

  label {
  	width: 100%;
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: center;
  	border-bottom: 1px solid #f9f9f9;
  }

  button { margin: 10px; width: 200px; max-width: 30%; }

  img { margin: 9px; border-radius: 10px; }
`

export const Data = styled.div`
	position: relative;
	color: white;
	width: 600px;
	max-width: 99%;
  padding: 10px;
  margin: auto;

	:before {
		content: '';
		height: 2px;
		background: #f9f9f9;
		width: 100%;
		left: 0px;
		position: absolute;
		bottom: 0px;
		transform: scaleX(0);
		transition: transform .3s ease-in;
		transform-origin: right;
	}

	:hover:before {
		transform-origin: left;
		transform: scaleX(1);
	}
`

export const SubTitle = styled.span`
	display: block;
	width: 100%;
	text-align: center;
	padding: 5px 0px;
	font-size: 40px;
	border-bottom: 2px solid #f9f9f9;
	color: #f9f9f9;
`