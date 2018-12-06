<template>
	<div class="container has-text-centered">
		<div class="columns is-centered">
			<div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
				<div class="figure media-left" v-if="track && track.album">
					<p class="image">
						<img :src="track.album.images[0].url" alt="">
					</p>
					<p>
						<button class="button is-primaty" @click="selectTrack">
	     					<span class="icon"><i class="em em-arrow_forward"></i></span>
						</button>
					</p>
				</div>
			</div>
			<div class="column">
				<div class="panel">
					<div class="panel-heading">
						<h1 class="title">{{trackTitle}}</h1>
					</div>
					<div class="panel-block">
						<article class="media">
							<div class="media-content">
								<div class="card-content">
									<ul v-for="(value, key) in track">
										<li>
											<strong>{{key}}&nbsp;</strong>
											<span>{{value}}</span>
										</li>
									</ul>
								</div>
								<nav class="level">
									<div class="level-left ">
										<a href="" class="level"></a>
									</div>
								</nav>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import TrackMixin from '@/mixins/track'

	export default {
		mixins: [ TrackMixin ],
		computed: {
			...mapState(['track']),
			...mapGetters(['trackTitle'])
		},
		created() {
			const id = this.$route.params.id
			if (!this.track || !this.track.id || this.track.id != id) {
				this.getTrackById({ id })
					.then(() => {
						console.log('Track loaded');
					})
			}
		},
		methods: {
			...mapActions(['getTrackById'])
		}
	}
</script>
<style scoped>
	.column{
		margin: 5px;
	}
</style>