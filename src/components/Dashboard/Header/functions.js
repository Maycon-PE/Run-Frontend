function border(nvl) {
	if (nvl > 0 && nvl < 11) return 'green'
	if (nvl >= 11 && nvl < 21) return 'yellow'
	if (nvl >= 21 && nvl < 31) return 'blue'
	if (nvl >= 31 && nvl < 41) return 'purple'

	return 'black'
}

export { border }