const records = {
  1234: {
    artist: "elon",
    tracks: ["vibe"],
  },
  5678: {
    artist: "kimbal",
    tracks: [],
  },
  1212: {
    artist: "x",
    // tracks: []
  },
  3333: {
    albumTitle: "tesla",
  },
  4444: {
    albumTitle: "spacex",
  },
};

function updateRecords(id, prop, value) {
  for (let i in records) {
    if (i == id) {
      if (prop == "tracks" && value != "") {
        let tracks = records[i].tracks;
        if (records[i].hasOwnProperty("tracks")) {
          tracks.push(value);
        } else {
          records[i].tracks = [value];
        }
      } else {
        delete records[i].tracks
      }

      if (prop == "artist" && value != "") {
        records[i] = { artist: value };
      } else {
        delete records[i].artist
      }

      if (prop == "albumTitle" && value != "") {
        records[i].albumTitle = value;
      }
    }
  }
  console.log(records);
}
updateRecords(1234, "tracks", "musk");
updateRecords(5678, "tracks", "starship");
updateRecords(1212, "tracks", "");
updateRecords(3333, "artist", "maye");
updateRecords(4444, "artist", "");
updateRecords(1212, "albumTitle", "starlink");
