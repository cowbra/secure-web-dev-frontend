<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let label: string;
	export let value: string = '';
</script>

<label class="form-label" for={name}>{label}</label>
<input {type} {name} id={name} class="form-control form-control-lg" {value} />
