import styled from 'styled-components'
import { rotate } from '../../../styles'

export const FastInfo = styled.div`
  color: black;
  font-weight: 900;

  display: flex;
  flex-direction: column;
`

export const Profile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    border-radius: 50%;
    padding: 1px;
    position: absolute;
    height: 100%;
    width: 100%;
    border-top: 4px dashed ${({ border }) => border};
    -webkit-animation: ${rotate} 1s linear infinite;
    -moz-animation: ${rotate} 1s linear infinite;
    -ms-animation: ${rotate} 1s linear infinite;
    -o-animation: ${rotate} 1s linear infinite;
    animation: ${rotate} 1s linear infinite;
  }
`

export const Xp = styled.span`
	position: relative;
	:after {
		content: '${({ start, end }) => Math.floor(100 - ((end - start) * 100 / (end / 2)))}%';
		position: absolute;
		text-align: center;
		font-size: 12px;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-top: 1px dashed black;
		border-bottom: 1px dashed black;
		border-radius: 10px;
		height: 11px;
		width: 100px;
		left: 20px;
		top: 4px;
	}

	:before {
		content: ''; 
		font-size: 11px;
		border-radius: 12px;
		position: absolute;
		background: green;
		height: 11px;
		width: ${({ start, end }) => Math.floor(100 - ((end - start) * 100 / (end / 2)))}px;
		left: 21.5px;
		top: 5px;	
	}
`