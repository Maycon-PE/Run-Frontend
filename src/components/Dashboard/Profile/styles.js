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

  button { margin: 10px; width: 100%; }

  img { margin: 9px; border-radius: 10px; }
`

export const Data = styled.div`
	position: relative;
	color: white;
	width: 800px;
	max-width: 99%;
  padding: 10px;
  margin: auto;
  ${({ edit }) => {
  	if (edit) return `

  		@media (min-width: 620px) {
  			display: flex;
	  		justify-content: space-between;
	  		align-items: center;

	  		span:nth-child(1) {
	  			position: relative;
			  	width: 76%;
			  }

			  span:nth-child(2) {
			  	display: flex;
			  	flex-flow: row wrap;
			  	align-items: center;
			  	justify-content: center;
			  }
  		} 
  		@media (max-width: 620px) {
  			display: flex;
  			flex-direction: column;
	  		justify-content: space-between;
	  		align-items: center;

	  		span:nth-child(1) {
	  			position: relative;
			  	width: 100%;
			  }

			  span:nth-child(2) {
	  			position: relative;
			  	display: flex;
			  	flex-direction: column;
			  	align-items: center;
			  	justify-content: center;
			  }
  		}
  	`
  }}

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

export const InputAsSpan = styled.input`
	border: none;
	padding: 2px 10px;
	outline: none;
	pointer-events: ${({ changing }) => changing? 'painted': 'none' };
	color: white;
	font-size: 20px;
	background: transparent;
	width: 100%;
`

export const ButtonEdit = styled.button`
	border: none;
	padding: 5px 0px;
	border-radius: 7px;
	border-bottom: 3px solid black;
	border-right: 3px solid black;
	margin: 0px 3px;
	font-weight: 600;
	margin: 2px;
	width: 110px;
	height: 29px;

	:active {
		border-bottom: .5px solid black;
		border-right: .5px solid black;
		border-top: 2px solid black;
		border-left: 2px solid black;
	}
	${({ bg }) => {
		if (bg) {
		 return `background: ${bg}; 
			color: black;
			opacity: .8;

			:hover { opacity: 1; }`
		}
	}}
`

export const ComfirmPassword = styled.input`

`
