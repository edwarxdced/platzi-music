<template>
	<div class="content" v-if="track && track.album">
		<p>
			<img :src="track.album.images[0].url" alt="">
		</p>
		<p>
			<strong>{{ track.name}}</strong>
			<small>{{ track.duration_ms | ms-to-mm}}</small>
		</p>
		<p>
			<audio id="player" :src="track.preview_url" autoplay ref="audio"></audio>
			<div>
			  <button @click="handlePlay" v-show="!play" class="button is-warning">Play</button>
			  <button @click="handlePlay" v-show="play" class="button is-warning">Pause</button>
			  <button @click="handledVolume('+')" class="button is-warning" v-show="showMaxVolumen">Vol +</button>
			  <button @click="handledVolume('-')" class="button is-warning" v-show="showMinVolumen">Vol -</button>
			</div>
		</p>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			showMaxVolumen() {
				return this.volume == 1 ? false : true;
			},
			showMinVolumen() {
				return this.volume == 0.0 ? false : true;
			},
			...mapState(['track'])
		},
		data: function() {
			return {
				volume: 1,
				play: true
			}
		},
		methods: {
			handledVolume(operation) {
				if (this.volume >= 1 && operation == '+') {
					return
				} else if (this.volume == 0.0 && operation == '-') {
					return
				}

				if (operation == '+') {
					this.volume = parseFloat(this.volume) + 0.1
				} else {
					this.volume -= 0.1
				}
				this.volume = parseFloat(this.volume).toFixed(1)
				this.$refs.audio.volume = this.volume
			},
			handlePlay() {
				if (this.play) {
					this.$refs.audio.pause()
				} else {
					this.$refs.audio.play()
				}
				this.play = !this.play;
			}
		}
	}
</script>
<style scoped>
	img{
		width: 124px;
		border-radius: 50%;
	}
	audio {
	    background-color: #95B9C7;
	}
</style>