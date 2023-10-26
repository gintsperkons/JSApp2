<script>
import { songsList } from "../stores/songsList.js"
import { store } from "../stores/songsData.js"

export default {

  data() {
    return {
      songsList,
      store
    }
  },
  computed: {
    sortedByArtistSongs() {
      const res = []
      songsList.forEach(a => res.push(a))
      return res.sort(function (a, b) {
          if (a.artist < b.artist) { return -1; }
          if (a.artist > b.artist) { return 1; }
          return 0;
        })
      

    },
    sortedByNameSongs() {
      const res = []
      songsList.forEach(a => res.push(a))
      return res.sort(function (a, b) {
          if (a.song < b.song) { return -1; }
          if (a.song > b.song) { return 1; }
          return 0;
        })
      

    }
  }

}
</script>

<template>
  <div id="songListView">
    <SongFilterComponent />
    <table id="songTable">
      <tr class="songTitle">
        <th>Name</th>
        <th>Artist</th>
      </tr>
      <tr v-if="store.songListData.filterItem == 'None'" class="songItem" v-for="song in songsList">
        <td class="name">{{ song.song }}</td>
        <td class="artist">{{ song.artist }}</td>
      </tr>
      <tr v-if="store.songListData.filterItem == 'Artist'" class="songItem" v-for="song in sortedByArtistSongs">
        <td class="name">{{ song.song }}</td>
        <td class="artist">{{ song.artist }}</td>
      </tr>
      <tr v-if="store.songListData.filterItem == 'Name'" class="songItem" v-for="song in sortedByNameSongs">
        <td class="name">{{ song.song }}</td>
        <td class="artist">{{ song.artist }}</td>
      </tr>
    </table>
  </div>
</template>


<style>
.songTitle {
  height: 29.98px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  border: 1px;
  border-bottom-style: groove;
  border-bottom-color: var(--text-gray);

}

#songTable {
  border-collapse: collapse;
  margin-top: 10px;
  width: 1082px;
  height: 216px;
  top: 215px;
  left: 390px;
  border: 1px;
}

.songItem>td {

  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--text-white);
}

.songItem>.artist {

  color: var(--text-white-80);
}</style>
