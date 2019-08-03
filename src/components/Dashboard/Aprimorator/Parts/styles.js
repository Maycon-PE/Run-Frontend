import styled from 'styled-components'

// Exceção da aba engine

export const ExchangesArea = styled.div`
	width: 100%;
  background: #ff121299;
  border-radius: 10px;

  ul {
  	width: 98%;
	  margin: auto;
	  padding: 0px 20px;
	  display: flex;
	  flex-flow: row wrap;
	  justify-content: space-around;

	  li {
	  	text-align: center;
		  pointer-events: none;
		  width: 70px;
		  padding: 5px;
		  border-radius: 20px;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  justify-content: space-between;
	  }
  }

`

export const ExchangeQtd = styled.span`
	display: block;
  text-align: center;
  font-size: 25px;
  color: white;
`

export const LiData = styled.span`
	background: white;
  font-size: 13px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 70px;
`

export const LiLabel = styled.span`
	background: grey;
  font-size: 11px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 70px;
`

// Fim exceção

export const AprimoreTitle = styled.p`
	font-size: 25px;
  color: white;
  text-align: center;
  margin: 2px;
`
