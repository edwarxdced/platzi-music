<template>
  <main>
    <section class="section">

        <PmSearch @handleSearch="search" v-show="!isLoading"></PmSearch>
        <transition-group name="move">
            <PmNotification v-show="showNotification" :key="'failSearch'">
                <p slot="body">{{$t('search-no-results')}} </p>
            </PmNotification>
            <PmLoader v-show="isLoading" :key="'isLoading'"></PmLoader>



            <div v-show="!isLoading" class="container results" :key="'results'">
                <p v-show="this.tracks.length > 0" :key="'searchMessage'">
                    <strong> {{ $t('search-results')}}:</strong> {{tracks.length}}
                </p>
                <div class="columns is-multiline is-mobile">
                    <div class="column is-one-quarter" v-for="(track, index) in tracks" :key="index">
                        <PmTrack v-blur="track.preview_url" :track="track" @select="setSelectedTrack" :class="{'is-active':track.id === selectedTrack}"></PmTrack>
                    </div>
                </div>
            </div>
        </transition-group>


    </section>
  </main>
</template>

<script>
    import trackService from '@/services/track'
    import PmSearch from '@/components/layout/Search'
    import PmTrack from '@/components/Track'
    import PmLoader from '@/components/shared/Loader'
    import PmNotification from '@/components/shared/Notification'

    export default {
        name: 'app',
        components:{
            PmSearch,
            PmTrack,
            PmLoader,
            PmNotification
        },
        data() {
            return {
                searchQuery: '',
                tracks: [],
                isLoading: false,
                selectedTrack:'',
                showNotification:false
            }
        },
        watch: {
            showNotification() {
                if (this.showNotification) {
                    setTimeout(()=>{
                      this.showNotification = false;
                    },3000)
                }
            }
        },
        methods: {
            search (searchQuery) {
                this.isLoading = true
                this.tracks = [];
                trackService.search(searchQuery).then(res => {
                    this.showNotification = res.tracks.total === 0
                    this.tracks = res.tracks.items
                    this.isLoading = false
                })
            },
            setSelectedTrack(id){
                this.selectedTrack = id;
            }
        }
}
</script>

<style lang="scss">
  .results {
    margin-top: 30px;
  }
  .is-active {
    border: 3px #00d1b2 solid;
  }
</style>
