export default {
	name: 'renderless',
	render() {
		return this.$scopedSlots.default({})
	},
}