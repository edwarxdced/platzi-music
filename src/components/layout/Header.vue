<template>
	<section class="hero is-primary">
		<div class="hero-head">
			<nav class="navbar">
		      	<div class="container">
		        	<div class="navbar-brand">
		          		<a class="navbar-item">
		            		<i class="em em-musical_note"> </i>&nbsp; Music
		          		</a>
		        	</div>
		        	<div class="navbar-end">
				      	<div class="navbar-item">
					        <div class="buttons">
								<RouterLink class="button is-primary" to="/">{{ $t('search') }}</RouterLink>
								<RouterLink  class="button is-primary" to="about" >{{ $t('about')}}</RouterLink>
					        	<a v-show="$i18n.locale != 'en'" class="nav-item" @click.prevent="selectLang('en')"> <i class="em em-flag-um"></i> </a>
					        	<a v-show="$i18n.locale != 'es'" class="nav-item" @click.prevent="selectLang('es')"> <i class="em em-flag-ea"></i> </a>
					        </div>
					    </div>
				    </div>
		      	</div>
		    </nav>
		</div>
		<div class="hero-body">
		    <div class="container has-text-centered">
		      	<h1 class="title">
		       		<i class="em em-musical_note"> </i> &nbsp;Platzi music
		      	</h1>
		      	<h2 class="subtitle">
		       		¡{{$t('subtitle')}} Vue-nisima!
		      	</h2>
		      	<PmPlayer></PmPlayer>
		    </div>
		</div>
	</section>
</template>
<script>
	import PmPlayer from '@/components/Player'
	export default {
		components: {
			PmPlayer
		},
		methods:{
			selectLang(lang) {
				this.$i18n.locale = lang;
			}
		}
	}
</script>
