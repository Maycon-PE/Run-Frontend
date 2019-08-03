import styled from 'styled-components'

export const Inicio = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const BlockForm = styled.div`
	padding: 9px 0px;
	width: 100%;

	:not(:last-child) {
	  border-bottom: 1px solid #fff4;
	}

	@media (min-width: 769px) {
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  grid-template-rows: 1fr;
	  grid-template-areas: 
	    'left right';
  }

  p { color: white; }
`

export const InsideBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	grid-area: ${({ side }) => side}
`

export const FormArea = styled.div`
	border: 1px solid #999;
  width: 422px;;
  
  padding: 5px 10px;
  border-radius: 9px;
  background-color: #f5f5f599;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
	width: 90vw;
	max-width: 400px;

	button {
		width: 100%;
	}
`

export const FormHeader = styled.div`
	border-bottom: 1px solid #aaa;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`

export const FormMessage = styled.span`
	font-size: 15px;
`

export const FormHeaderLabel = styled.label`
	font-size: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AreaInput = styled.div`
	margin: 5px 0px;

  display: flex;
  flex-direction: ${({ double }) => double? 'row': 'column'};
  ${({ double }) => {
  		if (double) return 'justify-content: space-between'
  	}
  }}
`

export const Input = styled.input`
	border-radius: 5px;
  padding: 10px;
  border: 1px solid rgb(139, 153, 231);
  height: 39px;
  min-width: 191px;

  :hover {
  	box-shadow: 0px  0px 10px rgb(139, 153, 231);
  }
`

export const Select = styled.select`
	border-radius: 5px;
  padding: 10px;
  border: 1px solid rgb(139, 153, 231);
  height: 39px;
  min-width: 191px;

  :hover {
  	box-shadow: 0px  0px 10px rgb(139, 153, 231);
  }
`
