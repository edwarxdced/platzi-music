<template>
	<nav class="navbar">
        <div class="container is-flex is-horizontal-center">
            <div class="field has-addons">
                <div class="control">
				  <input class="input is-large" type="text" :placeholder="$t('search-music')"  v-model="searchQuery" @keyup.enter="handleSearch">
				</div>
                <div class="control">
                  <a href="" class="button is-info is-large" @click.prevent="handleSearch"> {{ $t('search') }}</a>
                  <a href="" class="button is-danger is-large"><i class="em em-heavy_multiplication_x"></i></a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
	export default {
		data() {
			return {
				searchQuery:''
			}
		},
		methods: {
			handleSearch() {
				if (!this.searchQuery && this.searchQuery.length < 3) { return }
				this.$emit('handleSearch', this.searchQuery)
			}
		}
	}
</script>
<style scoped>
	.is-horizontal-center {
	  justify-content: center;
	}
</style>