<template>
	<div class="card" v-if="track && track.album">
	  <div class="card-image">
	    <figure class="image is-1by1" style="border:1px solid #d5d5d5;">
	      <img :src="track.album.images[0].url" alt="Placeholder image">
	    </figure>
	  </div>
	  <div class="card-content">
	    <div class="media">
	      <div class="media-left">
	        <figure class="image is-48x48">
	          <img :src="track.album.images[1].url" alt="Placeholder image">
	        </figure>
	      </div>
	      <div class="media-content">
	        <p class="title is-6"><strong>{{track.name}}</strong></p>
	        <p class="subtitle is-6">{{track.artists[0].name}}</p>
	      </div>
	    </div>
	    <div class="content">
	     	<small>{{track.duration_ms | ms-to-mm }}</small>
	     	<nav class="level">
	     		<div class="level-left">
	     			<button  class="level-item button is-primary" @click.prevent="selectTrack">
	     				<span class="icon"><i class="em em-arrow_forward"></i></span>
	     			</button>
	     			<button  class="level-item button is-primary" @click.prevent="goToTrack(track.id)">
	     				<span class="icon"><i class="em em-minidisc"></i></span>
	     			</button>
	     		</div>
	     	</nav>
	    </div>
	  </div>
	</div>
</template>
<script>
	import TrackMixin from '@/mixins/track'
	export default {
		mixins:[ TrackMixin ],
		props: {
			track: { type: Object, required: true }
		},
		methods: {
			goToTrack (id) {
				if (!this.track.preview_url) {return}
				this.$router.push({name:'track',params:{id}})
			}
		}
	}
</script>