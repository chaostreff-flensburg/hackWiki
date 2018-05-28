<script>
import Renderer from 'mobiledoc-vdom-renderer';

export default {
	props: {
		doc: {
			type: Object,
			required: true,
		},
	},
	render(h) {
		const render = Renderer({ createElement: h });
		return <main>{ render(this.doc) }</main>;
	},
}
</script>
