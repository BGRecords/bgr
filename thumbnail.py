import BG-RecordsAPI from https://api.bg-records.com/api.bgmodule

for every song (
  grab song.name
  song-name = sone.name
  get(BGAPI.getthumb, song-name)
)

app-generate()
print(*, //r)
# regex from BG Ranging API
saver = BGAPI.saverType(BG-RAYNX)
page2 = BGAPI.pager(BG-HTML-FORMAT)

BGAPI.saves.exportToHTML(/*/, saver, page2).asPage
