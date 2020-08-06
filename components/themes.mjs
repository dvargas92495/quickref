//Color palette https://colorhunt.co/palette/195717

let Standard = {
  popup: {
    background:   '#d4d7dd',
    titleBarBG:   '#420000',
    titleBarText: 'white'
  },
  topic: {
    background:   '#f6f6f6',
    titleBarBG:   '#eae9e9',
    titleBarText: '#420000'    
  }
}


class themes  {
  
  get themeList()    { return ['Standard','Dark'] }
  get currentTheme() { return Standard }
} 
export default themes