<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
	filterValue: String,
});
const emit = defineEmits();

const updateFilter = (value) => {
	console.log(value)
	emit('update:filterValue', value);
};
</script>

<template>
	<section>
		<div class="filter">
			<select :value="filterValue" @change="updateFilter($event.target.value)">
				<option value="all">all</option>
				<option value="normal">normal</option>
				<option value="donation">donation</option>
			</select>
		</div>
	</section>
</template>

