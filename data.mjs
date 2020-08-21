const data = [
  {
      "type": "keyboard",
        "id": 1000,
     "topic": "Working with lists",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Search bar",                   "c2": "Ctrl–U",        "c3": "⌘–U Text" },
                { "c1": "Navigate up/down in search bar",   "c2": "Ctrl–J / Ctrl–K", "c3": "Ctrl–J / Ctrl–K" },
                { "c1": "Search page",                  "c2": "Ctrl–F",        "c3": "⌘–F" },
                { "c1": "Return to page",               "c2": "Ctrl–Enter",    "c3": "⌘–Enter" },
                { "c1": "Edit 1st node in page <br>(when nothing selected)", "c2": "Ctrl–Enter",    "c3": "⌘–Enter" },
                { "c1": "Daily Notes page",             "c2": "Alt–D",         "c3": "Ctrl–Shift–D" },
                { "c1": "Follow link under cursor",     "c2": "Ctrl–O",        "c3": "Ctrl–O" },
                { "c1": "Move to start of block",       "c2": "Ctrl–Home",     "c3": "Ctrl–A" },
                { "c1": "Move to end of block",         "c2": "Ctrl–End",      "c3": "Ctrl–E" }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1001,
     "topic": "Search",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Search all pages",                    "c2": "Ctrl–U",          "c3": "⌘–U" },
                { "c1": "Navigate up/down in search dropdown", "c2": "Ctrl–J / Ctrl–K", "c3": "Ctrl–J / Ctrl–K" },
                { "c1": "Page/Block search <br>(must be editing a block)", "c2": "Ctrl–Shift–9", "c3": "Ctrl–Shift–9" },
                { "c1": "Search in current page",              "c2": "Ctrl–F",          "c3": "⌘–F" }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1002,
     "topic": "Blocks",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "New block",                          "c2": "Enter",          "c3": "Enter"          },
                { "c1": "Indent block",                       "c2": "Tab",            "c3": "Tab"      },
                { "c1": "Un-indent block",                     "c2": "Shift–Tab",      "c3": "Shift–Tab"  },
                { "c1": "Move block up",                      "c2": "Alt–Shift–Up Arrow",  "c3": "⌘–Shift–Up Arrow"  },
                { "c1": "Move block down",                    "c2": "Alt–Shift–Down Arrow", "c3": "⌘–Shift–Down Arrow"  },
                { "c1": "New line within block",               "c2": "Shift–Enter",    "c3": "Shift–Enter"  },
                { "c1": "Zoom-in to block",                   "c2": "Alt–Right Arrow",      "c3": "⌘–Period (.) <br>⌘–Shift–Period (.) <br><small><i>(Firefox/Safari)"  },
                { "c1": "Zoom-out of block",                  "c2": "Alt–Left Arrow",       "c3": "⌘–Comma (,) <br>⌘–Shift–Comma (,) <br><small><i>(Firefox/Safari)"  },
                { "c1": "Expand block",                       "c2": "Ctrl–Down Arrow",      "c3": "⌘–Down Arrow"  },
                { "c1": "Collapse block",                           "c2": "Ctrl–Up Arrow",        "c3": "⌘–Up Arrow"  },
                { "c1": "Select text in current block",       "c2": "Ctrl–A",         "c3": "⌘–A"  },
                { "c1": "Select current block",               "c2": "Shift–Up–Up <i>or</i> Shift–Down–Down",      "c3": "Shift–Up–Up <i>or</i> Shift–Down–Down"  },
                { "c1": "Select current block & block above", "c2": "Shift–Up–Up–Up", "c3": "Shift–Up–Up–Up"  },
                { "c1": "Select current block & block below", "c2": "Shift–Down–Down–Down", "c3": "Shift–Down–Down–Down"  },
                { "c1": "Select all blocks on page",          "c2": "Ctrl–Shift–A",   "c3": "⌘–Shift–A"  },
                { "c1": "Jump to start of block",           "c2": "Ctrl–Home", "c3": "Ctrl–A"  },
                { "c1": "Jump to end of block",             "c2": "Ctrl–End", "c3": "Ctrl–E"  },
                { "c1": "Delete to end of block",             "c2": "Ctrl–K",         "c3": "Ctrl–K"  },
                { "c1": "Paste the text deleted using Ctrl–K", "c2": "Ctrl–Y",   "c3": "Ctrl–Y"  }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1003,
     "topic": "Sidebar",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Open/create page in right Sidebar (from search)", "c2": "Shift–Enter",  "c3": "Shift–Enter" },
                { "c1": "Open Daily Notes in right Sidebar (from left Sidebar)",       "c2": "Shift–Click",  "c3": "Shift–Click" },
                { "c1": "Open link in right Sidebar",                          "c2": "Shift–Click",  "c3": "Shift–Click" },
                { "c1": "Open link in right Sidebar (when editing)",           "c2": "Ctrl–Shift–O", "c3": "Ctrl–Shift–O" },
                { "c1": "Open mentions in right Sidebar",                     "c2": "WinKey–Shift–click", "c3": "⌘–Shift–Click" }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1004,
     "topic": "Visuals",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Toggle [[brackets]]",           "c2": "Ctrl–C <small>⇒</small> Ctrl–B",  "c3": "Ctrl–C <small>⇒</small> Ctrl–B" },
                { "c1": "Toggle your icon",          "c2": "Ctrl–C <small>⇒</small> Ctrl–S",  "c3": "Ctrl–C <small>⇒</small> Ctrl–S" },
               { "c1": "Toggle edit icon",          "c2": "Ctrl–C <small>⇒</small> Ctrl–C <small>⇒</small> Ctrl–S",  "c3": "Ctrl–C <small>⇒</small> Ctrl–C <small>⇒</small> Ctrl–S" },
                { "c1": "Toggle block preview",  "c2": "Ctrl–C <small>⇒</small> Ctrl–P",  "c3": "Ctrl–C <small>⇒</small> Ctrl–P" },
                { "c1": "Cycle [[name/spaces]]",       "c2": "Ctrl–C <small>⇒</small> Ctrl–L",  "c3": "Ctrl–C <small>⇒</small> Ctrl–L" }
              ]
  },
  {
      "type": "keyboard",  
         "id": 1005,
    "topic": "Formatting",
   "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Heading 0",                 "c2": "Ctrl–Alt–0", "c3": "⌘–Alt–0" },
                { "c1": "Heading 1",                 "c2": "Ctrl–Alt–1", "c3": "⌘–Alt–1" },
                { "c1": "Heading 2",                 "c2": "Ctrl–Alt–2", "c3": "⌘–Alt–2" },
                { "c1": "Heading 3",                 "c2": "Ctrl–Alt–3", "c3": "⌘–Alt–3" },
                { "c1": "Bold ",                     "c2": "Ctrl–B",     "c3": "⌘–B" },
                { "c1": "Italics ",                  "c2": "Ctrl–I",     "c3": "⌘–I" },
                { "c1": "Strikethrough",             "c2": "<small><i>(none)</i></small>",     "c3": "⌘–Y" },
                { "c1": "Highlight ",                "c2": "Ctrl–H",     "c3": "⌘–H <br>⌘–Shift–H <br><small><i>(Firefox/Safari)" },
                { "c1": "Toggle TODO/DONE",         "c2": "Ctrl–Enter", "c3": "⌘–Enter" },
                { "c1": "Create web link",                  "c2": "Ctrl–K",     "c3": "⌘–K" }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1006,
     "topic": "Version control",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Add a version of the block",               "c2": "Ctrl–Comma (,)",       "c3": "Ctrl–Comma (,)" },
                { "c1": "Cycle versions to the right",               "c2": "Ctrl–Shift–Period (.)", "c3": "Ctrl–Shift–Period (.)" },
                { "c1": "Cycle versions to the left",                "c2": "Ctrl–Shift–Comma (,)", "c3": "Ctrl–Shift–Comma (,)" },
                { "c1": "Expand all versions into their own blocks", "c2": "Ctrl–Period (.)",       "c3": "Ctrl–Period (.)" }
              ]
  },
  {
      "type": "keyboard",  
        "id": 1007,
     "topic": "Other shortcuts",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
                { "c1": "Slash autocomplete",            "c2": "/",      "c3": "/" },
                { "c1": "Undo",                      "c2": "Ctrl–Z", "c3": "⌘–Z" },
                { "c1": "Redo",                      "c2": "Ctrl–Y", "c3": "⌘–Shift–Z" },
                { "c1": "Move cursor forwards", "c2": "<small><i>(none)</i></small>",       "c3": "Ctrl–F" },
                { "c1": "Move cursor backwards", "c2": "<small><i>(none)</i></small>",       "c3": "Ctrl–B" },
                { "c1": "Swap characters between cursor",           "c2": "<small><i>(none)</i></small>",      "c3": "Ctrl–T" }
              ]
  },
  {
      "type": "feature",  
        "id": 1008,
     "topic": "Markdown",
     "items": [
                { "c1": "Bold",                           "c2": "**Bold**" },
                { "c1": "Italics",                        "c2": "__Italics__" },
                { "c1": "Strikethrough",                  "c2": "~~Strikethrough~~" },
                { "c1": "Highlight",                      "c2": "^^Highlight^^" },
                { "c1": "LaTeX",                         "c2": "$$E = mc^2$$" },
                { "c1": "Inline code",                             "c2": "`Inline code`" },
                { "c1": "Code block",                       "c2": "```Code block```" },
                { "c1": "Link",    "c2": "[Link](https://www.example.com)" },
                { "c1": "Image", "c2": "![Image](www.fillmurray.com/50/50)" }
              ]
    },
    {
      "type": "feature",  
        "id": 1009,
     "topic": "Functions",
     "items": [
                { "c1": "{{alias: }}", "c2": "{{alias: ((Block)) Text}}" },
                { "c1": "{{attr-table: }}", "c2": "{{attr-table: [[Page]]" },
                { "c1": "{{calc: }}", "c2": "{{calc: 4+5 }} <i>or</i> {{calc: ((Block)) + ((Block))}}" },
                { "c1": "{{character-count}}", "c2": "" },
                { "c1": "{{word-count}}", "c2": "" },
                { "c1": "{{chart: }}", "c2": "" },
                { "c1": "{{date}}", "c2": "Creates a date-picker" },
                { "c1": "{{diagram}}", "c2": "Nest underneath to add blocks<br>Alt–Drag between two blocks to create a connecting line <br>Atl–Drag a box to create a group <br>Click–Hold–Delete to delete a group" },
                { "c1": "{{TODO}}", "c2": "{{TODO}} <i>or</i> {{DONE}}" },
                { "c1": "{{encrypt}}", "c2": "Encrypts a block of text with a passphrase" },
                { "c1": "{{iframe: }}", "c2": "Embed a website into your Roam page" },
                { "c1": "{{kanban}}", "c2": "Add columns and cards by nesting bullets below <br>First level nested bullets are columns <br>Second level nested bullets are cards <br>Moving cards will move the blocks below" },
                { "c1": "{{mentions: }}", "c2": "Pulls in “Linked References” and “Unlinked References” sections from a Page" },
                { "c1": "{{or: }}", "c2": "Creates a simple dropdown list <br>{{or: Apples | Carrots | Bananas}}" },
                { "c1": "{{orphans}}", "c2": "Provide a list of “orphaned” blocks that can’t be found on any page, because their parent block was deleted" },
                { "c1": "{{pdf: }}", "c2": "Upload a pdf with /Upload Image or File <br>{{pdf: https://sitepath/file.pdf}} " },
                { "c1": "{{POMO}}", "c2": "Creates a Pomodoro timer with a 25 min timer <br><small><i>There is no alert once it finishes" },
                { "c1": "{{slider}}", "c2": "Creates a slider from 0 to 10 <br>For pages with multiple authors, you can see thier icon underneath their rating" },
                { "c1": "{{table}}", "c2": "Creates a table <br>Add column headings and rows using nested bullets below" },
                { "c1": "{{TaoOfRoam}}", "c2": "Shows a spinning astrolabe, a favourite icon of Roam Research" },
                { "c1": "{{youtube: }}", "c2": "{{youtube: https://youtu.be/ojwIIzRC8oU}}" }
              ]
    },
    {
      "type": "feature",  
        "id": 1010,
     "topic": "Embeds",
     "items": [
                { "c1": "{{embed: ((Block))}}", "c2": "Embeds a Block from elsewhere, including all of its children<br> <small><i>Changes made to the Block will be reflected at the source" },
                { "c1": "{{embed: [[Page]]}}",  "c2": "Embeds a Page from elsewhere, without Linked and Unlinked References <br><small><i>Changes made to the Page will be reflected at the source" }
              ]
    },
  {
      "type": "feature",  
        "id": 1011,
     "topic": "Queries",
     "items": [
                { "c1": "{{query:}}",  "c2": "Queries are a way to ask questions and filter the answers of your Roam database <br><small><i>Pages and hashtags are interchangeable"  },
                { "c1": "{and:",        "c2": "{{query: {and: [[tagA]] [[tagB]]} }} <br><small><i>Shows all results with tagA and tagB" },
                { "c1": "{or:",         "c2": "{{query: {or: [[tagA]] [[tagB]]} }} <br><small><i>Shows all results with tagA or tagB" },
                { "c1": "{not:",        "c2": "{{query: {not: [[tagA]] [[tagB]]} }} <br><small><i>Omits all results with tagA and tagB" },
                { "c1": "{between:",    "c2": "{{query: {between: [[January 1st, 2020]] [[today]]} }} <br><small><i>Shows all results between dates" },
                { "c1": "Date operators",      "c2": "today, tomorrow, yesterday, last week, next week, last month, next month"},
                { "c1": "{and: {not:",    "c2": "{{query: {and: [[tagA]] {not:[[tagB]]} } }} <br><small><i>Shows all results with tagA but not tagB" },
                { "c1": "{and: {between:","c2": "{{query: {and: [[tagA]] {between: [[January 1st, 2020]] [[Today]]} } }} <br><small><i>Shows all results with tagA between dates" },
                { "c1": "Self-reference",   "c2": "{{[[query]]: {and:[[tagA]] [[tagB]] {not:[[query]]} } }} <br><small><i>Shows all results with tagA and tagB but not query" },
              ]
  },
  {
      "type": "example",  
        "id": 1012,
     "topic": "Queries examples",
     "items": [
                { "c1": "{{query: {and: [[Investing]] {or: [[Articles]] [[People]]}}}} <br><small><i>Shows all results with Investing and Articles or Investing and People" },
                { "c1": "{{query: {and: [[Investing]] {or: [[Articles]] [[People]]} {not: [[Startups]]} }}} <br><small><i>Shows all results with Investing and Articles omitting Startups or Investing and People omitting Startups" },
                { "c1": "{{query: {and: [[TODO]] {between: [[April 8th, 2020]] [[March 7th, 2020]]}}}} <br><small><i>Shows all TODO between April 8th, 2020 and March 7th, 2020" },
                { "c1": "{{query: {and: [[TODO]] {between: [[today]] [[last week]]}}}} <br><small><i>Shows all TODO between today and last week" },
                { "c1": "{{query: {and: [[TODO]] {not: [[Overdue]]}{between: [[today]] [[today]]}}}} <br><small><i>Shows all TODO not tagged Overdue today " },
                { "c1": ""}
              ]
  },
  {
      "type": "feature",  
        "id": 1013,
     "topic": "Slash commands",
     "items": [
                { "c1": "/TODO",          "c2": "Creates a check box, when clicked becomes {{DONE}}" },
                { "c1": "/Current Time",  "c2": "Creates a time-stamp of the current time in 24h format" },
                { "c1": "/POMO",          "c2": "Creates a 25 min Pomodoro timer <br><small><i>There is no alert once it finishes" },
                { "c1": "/Date Picker",   "c2": "Allows you to choose a date from a calendar" },
                { "c1": "/Today",         "c2": "Today's date" },
                { "c1": "/Tomorrow",      "c2": "Tomorrow's date" },
                { "c1": "/Yesterday",     "c2": "Yesterday's date" },
                { "c1": "/Bold",          "c2": "" },
                { "c1": "/Italics",       "c2": "" },
                { "c1": "/Highlight",     "c2": "" },
                { "c1": "/Strikethrough", "c2": "" },
                { "c1": "/Code Inline",   "c2": "Creates a monospaced code inline of the block" },
                { "c1": "/Code Block",    "c2": "Creates a code block allowing snippets of code <br><small><i>Clojure, css, html, and javascript" },
                { "c1": "/Latex",         "c2": "Allows LaTeX stylized text inline of the block" },
                { "c1": "/Calc",          "c2": "Inline calculator" },
                { "c1": "/Upload",        "c2": "Upload an image or file" },
                { "c1": "/Slider",        "c2": "Creates a slider from 0 to 10 " },
                { "c1": "/Encrypt",       "c2": "Encrypts a block of text with a passphrase" },
                { "c1": "/Diagaram",      "c2": "Insert a diagram" },
                { "c1": "/Table",         "c2": "Insert a table" },
                { "c1": "/Kanban",        "c2": "Insert a kanban board" },
                { "c1": "/YouTube",       "c2": "Embed a YouTube video" },
                { "c1": "/Mentions",      "c2": "Insert mentions of a Block or Page" },
                { "c1": "/Word Count",    "c2": "Insert word count for page" },
                { "c1": "/Query",         "c2": "Insert a query <br><small><i>See Queries section above" }
              ]
  },
    {
      "type": "feature",  
        "id": 1014,
     "topic": "#RoamCult",
     "items": [
                { "c1": "<a href='https://forum.roamresearch.com/' target='_blank'>Roam Support Forums</a>",  
                  "c2": "The official support forum for discussing Roam" },
                { "c1": "<a href='https://twitter.com/search?q=%23roamcult' target='_blank'>Twitter</a>", 
                  "c2": "Follow <a href='https://twitter.com/RoamResearch' target='_blank'>@RoamResearch</a> and the founder Conor White-Sullivan’s account <a href='https://twitter.com/conaw' target='_blank'>@Conaw</a><br><small><i>Search for the <a href='https://twitter.com/search?q=%23roamcult' target='_blank'>#roamcult</a> hashtag" },
                { "c1": "<a href='https://roamhacks.com' target='_blank'>RoamHacks.com</a>", 
                  "c2": "Great summary of Roam's features and also a major source of help for this Quick Reference" },
                { "c1": "<a href='https://www.roamstack.com/' target='_blank'>RoamStack.com</a>",  
                  "c2": "Tools, techniques, and workflows to get the most out of Roam Research" },
                { "c1": "<a href='https://www.roambrain.com/' target='_blank'>RoamBrain.com</a>",  
                  "c2": "An information hub for Roam Research" },
                { "c1": "<a href='https://www.roamtips.com/' target='_blank'>RoamTips.com</a>",  
                  "c2": "Useful tips to help you master Roam" },
                { "c1": "<a href='https://twitter.com/RoamFm' target='_blank'>RoamFM Podcast</a>",  
                  "c2": "Conversations with #roamcult"}
                // { "c1": "<a href='' target='_blank'></a>",  "c2": ""},
              ]
  },
  {
      "type": "example",  
        "id": 1015,
     "topic": "About",
     "items": [
                { "c1": "This tool is designed to be a Quick Reference to all the features of Roam Research via keyboard, functions and formatting.<br/><br/>" },
                { "c1": "Follow me on Twitter at <a href='https://twitter.com/roamhacker' target='_blank'>@RoamHacker</a><br/>DM me with bugs, suggestions and whatever<br/><br/>" },
                { "c1": "<b>Credits to:</b><br/> <a href='https://www.roamhacks.com/' target='_blank'>👏🏼 RoamHacks.com</a> for their tips <br/><a href='https://twitter.com/beauhaan' target='_blank'>👏🏼 Beau Haan</a> for the creative input, follow him on Twitter <br/><a href='https://twitter.com/billpetro' target='_blank'>👏🏼 Bill Petro</a> for experience and calmness.  " },
              ]
  }

 


  // ,
  // {
  //     "type": "keyboard",  
  //    "topic": "",
  //   "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
  //    "items": [
  //               { "c1": "", "c2": "", "c3": ""},
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" },
  //               { "c1": "", "c2": "", "c3": "" }
  //            ]
  // }

  // ,
  // {
  //     "type": "feature",  
  //    "topic": "",
  //    "items": [
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""},
  //               { "c1": "", "c2": ""}
  //             ]
  // }

  // ,
  // {
  //     "type": "example",  
  //    "topic": "",
  //    "items": [
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""},
  //               { "c1": ""}
  //             ]
  // }

]

export default data
