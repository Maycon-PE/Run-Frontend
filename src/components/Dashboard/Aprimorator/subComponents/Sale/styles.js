import styled from 'styled-components'

export const Title = styled.span`
	font-size: 29px;
  margin-bottom: 10px;
  color: white;
`

export const Products = styled.div`
	width: 100%;
  height: 55%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const PreviewProduct = styled.div`
	width: 89px;

  display: flex;
  justify-content: center;
  align-items: center;

  .name_selected {
  	background: #111;
	  color: #fff;
	  cursor: pointer;
  }

  .myPartEquiped {
	  color: black !important;
	  background: green !important;
	}

	.name_selectedAndEquiped {
  	background: linear-gradient(to left, #111, #111, green) !important;
  	color: white !important;
  }

`

export const ProductName = styled.span`
	 border: 1px solid white; 
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  background: #fff;

  :hover {
  	background: #111;
	  color: #fff;
	  cursor: pointer;
  }
`

export const InfoProductId = styled.div`
	z-index: 6;
  border-radius: 10px;
  display: none;
  position: absolute;
  top: -250px;
  width: 100%;
  max-width: 450px;
  left: 0px;
  box-shadow: 2px 2px 5px #fff;
  background: #222;
  text-align: center;
`

export const InfoProductGlobal = styled.div`
	color: white;
  width: 100%;
  
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`


export const InfoProductBlock = styled.div`
	background: #111;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3px;
  margin: 5px 2px;

  .block-attr {
  	background: white;
	  border-radius: 10px;
	  color: black;
	  padding: 3px;
  }

  .block-value {
  	color: green;
  	display: flex;
  }

  .block-value-update {
  	border: 1px solid #fff;
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
  }
`